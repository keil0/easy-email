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

export function moveDataAttributesFromDivToTable(html: string): string {
  return html.replace(/<div([^>]*class="[^"]*custom-class-\d+[^"]*"[^>]*)>([\s\S]*?)<\/div>/gi, (match, divAttributes, innerContent) => {
    // Extraire les data-attributes de la div
    const dataAttributes = (divAttributes.match(/data-[^=]+="[^"]*"/g) || []).join(' ');

    // Supprimer les classes custom-class-* et les data-attributes de la div
    const cleanedDivAttributes = divAttributes
      .replace(/class="[^"]*custom-class-\d+[^"]*"/, '') // Supprime la classe
      .replace(/data-[^=]+="[^"]*"/g, '') // Supprime les data-attributes
      .trim(); // Nettoie les espaces superflus

    // Trouver la première table dans le contenu interne
    const tableMatch = innerContent.match(/<table[^>]*>/i);

    if (tableMatch) {
      // Ajouter les data-attributes à la table
      const updatedTable = tableMatch[0].replace(/<table/, `<table ${dataAttributes}`);

      // Remplacer l'ancienne table par la version mise à jour
      const updatedContent = innerContent.replace(tableMatch[0], updatedTable);

      // Reconstruire la div sans la classe et avec les nouvelles modifications
      return `<div ${cleanedDivAttributes}>${updatedContent}</div>`;
    }

    // Si aucune table n'est trouvée, retourner la div sans modification
    return match;
  });
}


