import { readAllSnippet } from '@/app/api/snippet/Service';

// simple way to  fetch data from Data Base
export default async function MainPage(p: {}) {
  const snippets = await readAllSnippet();
  return <div className="text-white">{JSON.stringify(snippets)}</div>;
}
