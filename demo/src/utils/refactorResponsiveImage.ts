export function convertEmailTemplate(html: string): string {
  // Extract the doctype if it exists
  const doctypeMatch = html.match(/<!DOCTYPE[^>]*>/i);
  const doctype = doctypeMatch ? doctypeMatch[0] : '';

  // Parse the HTML string into a DOM object
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');

  // Get all elements with class hide_on_mobile
  const hideOnMobileElements = doc.querySelectorAll('.hide_on_mobile');

  hideOnMobileElements.forEach(hideOnMobile => {
    // Find the corresponding show_on_mobile element
    const nextSibling = hideOnMobile.parentElement?.nextElementSibling;
    if (nextSibling && nextSibling.querySelector('.show_on_mobile')) {
      const showOnMobile = nextSibling.querySelector('.show_on_mobile');

      // Remove the show_on_mobile element
      showOnMobile?.parentElement?.remove();

      // Remove hide_on_mobile and show_on_mobile classes from td elements
      hideOnMobile.classList.remove('hide_on_mobile');
      nextSibling.classList.remove('show_on_mobile');

      // Get the desktop image
      const desktopImg = hideOnMobile.querySelector('img');
      const mobileImg = showOnMobile?.querySelector('img');

      if (desktopImg && mobileImg) {
        // Clone the original mobile image to preserve all attributes
        const clonedMobileImg = mobileImg.cloneNode(true) as HTMLImageElement;

        // Add classes directly to images
        desktopImg.classList.add('hide_on_mobile');
        clonedMobileImg.classList.add('show_on_mobile');

        // Replace 'display: block' with 'display: none' in style attribute
        const currentStyle = clonedMobileImg.getAttribute('style');
        if (currentStyle) {
          const updatedStyle = currentStyle.replace("block", 'none');
          clonedMobileImg.setAttribute('style', updatedStyle);
        }

        // Append the new <img> element with conditional comments
        desktopImg.insertAdjacentHTML('afterend', `<!--[if !mso]><!-->\n${clonedMobileImg.outerHTML}\n<!--<![endif]-->`);
      }
    }
  });

  // Serialize the modified DOM back into a string
  const modifiedHtml = doc.documentElement.outerHTML;
  return doctype + '\n' + modifiedHtml;
}
