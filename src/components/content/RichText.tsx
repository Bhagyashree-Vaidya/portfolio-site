import Link from "next/link";
import type { ReactNode } from "react";

// Renders **bold** and [text](url). Internal links ("/...") use next/link.
export default function RichText({ text }: { text: string }) {
  const out: ReactNode[] = [];
  const re = /\*\*(.+?)\*\*|\[(.+?)\]\((.+?)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let k = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    if (m[1]) {
      out.push(<strong key={k++} className="font-semibold text-text-primary">{m[1]}</strong>);
    } else {
      const href = m[3];
      const cls = "text-[#9C2F55] underline underline-offset-2 hover:text-[#7a2443]";
      out.push(
        href.startsWith("/") || href.startsWith("#") ? (
          <Link key={k++} href={href} className={cls}>{m[2]}</Link>
        ) : (
          <a key={k++} href={href} className={cls} target="_blank" rel="noopener noreferrer">{m[2]}</a>
        ),
      );
    }
    last = re.lastIndex;
  }
  if (last < text.length) out.push(text.slice(last));
  return <>{out}</>;
}
