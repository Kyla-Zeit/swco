// lib/withBase.ts
export function withBase(href: string) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  // ensure we have one leading slash on the path
  const path = href.startsWith("/") ? href : `/${href}`;
  return `${base}${path}`;
}
