import beautify from 'js-beautify';

export function formatHtml(htmlContent: string): string {
  const formattedHtml = beautify.html(htmlContent, {
    indent_size: 2,
    end_with_newline: true,
    preserve_newlines: true,
    indent_inner_html: true,
    wrap_line_length: 0,
    unformatted: [],
    content_unformatted: [],
  });

  return formattedHtml
    .split('\n')
    .filter(line => line.trim() !== '')
    .join('\n');
}
