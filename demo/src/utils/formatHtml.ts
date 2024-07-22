import beautify from 'js-beautify';

export function formatHtml(htmlContent: string): string {
  return beautify.html(htmlContent, {
    indent_size: 2,
    end_with_newline: true,
    preserve_newlines: true,
    indent_inner_html: true,
    wrap_line_length: 120,
    unformatted: [],
    content_unformatted: [],
  });
}