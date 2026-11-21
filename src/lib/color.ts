// Returns a darker variant of `hex` that reaches at least `ratio`:1 contrast
// against `bg` (default white), so brand colors can be used for text (WCAG AA).
const lum = (hex: string) => {
  const n = parseInt(hex.replace("#", ""), 16);
  const ch = [(n >> 16) & 255, (n >> 8) & 255, n & 255].map((v) => {
    const c = v / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * ch[0] + 0.7152 * ch[1] + 0.0722 * ch[2];
};

const contrast = (a: string, b: string) => {
  const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p);
  return (x + 0.05) / (y + 0.05);
};

export function readableOn(hex: string, bg = "#FFFFFF", ratio = 4.5): string {
  const n = parseInt(hex.replace("#", ""), 16);
  let [r, g, b] = [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  let out = hex;
  for (let i = 0; i < 40 && contrast(out, bg) < ratio; i++) {
    [r, g, b] = [r, g, b].map((v) => Math.round(v * 0.92));
    out = "#" + [r, g, b].map((v) => v.toString(16).padStart(2, "0")).join("");
  }
  return out;
}
