// utils/extractHeadings.js
export function extractHeadings(blocks) {
  return blocks
    // Filter for specific heading levels
    .filter((block) => /^h[234]/.test(block.style))
    .map((block) => {
      const text = block.children.map((child) => child.text).join('');
      const slug = text
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, '');
        
      return {
        text,
        slug,
        level: block.style, // e.g., 'h2'
      };
    });
}