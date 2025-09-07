export function GET() {
  return new Response(
    `User-agent: *\nAllow: /\nSitemap: https://marie-care.vercel.app/sitemap.xml\n`,
    { headers: { "Content-Type": "text/plain" } }
  );
}
