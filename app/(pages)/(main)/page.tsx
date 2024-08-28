import { readAllSnippet } from '@/app/api/snippet/Service';
import { SnippetSearch } from '@/app/components/SnippetSearch/SnippetsSearch';

// simple way to  fetch data from Data Base
export default async function MainPage(p: {}) {
  const { data: snippets } = await readAllSnippet();
  return (
    <SnippetSearch snippets={snippets} placeholder={`Search your  snippets`} />
  );
}
