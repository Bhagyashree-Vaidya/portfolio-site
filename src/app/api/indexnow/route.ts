import { ALL_POSTS, postPath, todayPT } from "@/content/blog";
import { SITE_URL } from "@/lib/site";

// Daily Vercel Cron (see vercel.json): tells IndexNow (Bing, Yandex, Seznam,
// Naver and others) about blog posts that went live today, plus the blog index.
const KEY = "70b55f26818351badf4e3779be1a63bf";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  // Vercel sends "Authorization: Bearer <CRON_SECRET>" when CRON_SECRET is set.
  const secret = process.env.CRON_SECRET;
  if (secret && req.headers.get("authorization") !== `Bearer ${secret}`) {
    return new Response("Unauthorized", { status: 401 });
  }
  const today = todayPT();
  const fresh = ALL_POSTS.filter((p) => p.date === today).map((p) => `${SITE_URL}${postPath(p)}`);
  if (!fresh.length) return Response.json({ today, submitted: 0 });

  const urlList = [...fresh, `${SITE_URL}/blog`];
  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: new URL(SITE_URL).host, key: KEY, keyLocation: `${SITE_URL}/${KEY}.txt`, urlList }),
  });
  return Response.json({ today, submitted: urlList.length, status: res.status });
}
