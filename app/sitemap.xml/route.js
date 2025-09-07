export function GET() {
  const base = "https://marie-care.vercel.app";
  const paths = ["", "/services", "/care-plans", "/about", "/contact"];
  const urls = paths
    .map((p) => `<url><loc>${base}${p}</loc><changefreq>weekly</changefreq></url>`)
    .join("");

  const xml =
    `<?xml version="1.0" encoding="UTF-8"?>` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">` +
    urls +
    `</urlset>`;

  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
}
