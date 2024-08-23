import { db } from '@/app/lib/db';
// simple way to  fetch data from Data Base
export default async function MainPage(p: {}) {
  const snippets = await db.snippet.findMany();
  return <div className="text-white">{JSON.stringify(snippets)}</div>;
}
