import { NextResponse } from "next/server"

export async function GET() {
  const robots = `User-agent: *
Allow: /

# Allow all crawling
Sitemap: https://superbearadv.com/sitemap.xml

# Host
Host: https://superbearadv.com`

  return new NextResponse(robots, {
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  })
}
