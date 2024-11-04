export function convertDataAttributesToMjHtmlAttributes(mjml: string): string {
  let cssClassCounter = 0; // Compteur pour générer des classes uniques
  let mjHtmlAttributesSections = ''; // Contient les nouveaux groupes <mj-html-attributes>

  // Transformer chaque balise MJML contenant des data-attributes
  const updatedMjmlBody = mjml.replace(/<([^>\s]+)([^>]*)>/g, (match, tag, attributes) => {
    const dataAttributes: Record<string, string> = {};

    // Extraire et retirer les data-attributes
    const cleanedAttributes = attributes.replace(/(data-[^=]+)="([^"]*)"/g, (attrMatch, key, value) => {
      dataAttributes[key] = value;
      return ''; // Supprime le data-attribute du MJML
    });

    // Si des data-attributes ont été trouvés, ajouter une classe unique pour le ciblage
    if (Object.keys(dataAttributes).length > 0) {
      const uniqueClass = `custom-class-${cssClassCounter++}`;

      // Ajouter la classe CSS au MJML pour correspondance
      const finalAttributes = `${cleanedAttributes} css-class="${uniqueClass}"`;

      // Créer un nouveau groupe <mj-html-attributes> pour chaque occurrence
      let mjHtmlAttributesSection = `<mj-html-attributes>\n  <mj-selector path=".${uniqueClass}">\n`;
      Object.entries(dataAttributes).forEach(([key, value]) => {
        mjHtmlAttributesSection += `    <mj-html-attribute name="${key}">${value}</mj-html-attribute>\n`;
      });
      mjHtmlAttributesSection += `  </mj-selector>\n</mj-html-attributes>\n`;

      // Ajouter cette section au groupe global
      mjHtmlAttributesSections += mjHtmlAttributesSection;

      // Retourne la balise MJML mise à jour avec la classe CSS et sans les data-attributes
      return `<${tag} ${finalAttributes}>`;
    }

    // Si aucun data-attribute, retourner la balise telle quelle
    return match;
  });

  // Insérer les nouveaux groupes <mj-html-attributes> avant la fermeture de <mj-head>
  return updatedMjmlBody.replace(
    /<\/mj-head>/,
    `${mjHtmlAttributesSections}</mj-head>`
  );
}
