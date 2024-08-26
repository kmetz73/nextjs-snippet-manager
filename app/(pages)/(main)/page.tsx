import { SnippetSearch } from '@/app/components/SnippetSearch/SnippetsSearch';

// simple way to  fetch data from Data Base
export default function MainPage(props) {
  // const snippets = await readAllSnippet();
  return (
    <div className="">
      <SnippetSearch placeholder={`Search your  snippets`} />
    </div>
  );
}
