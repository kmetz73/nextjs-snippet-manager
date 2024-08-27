import { SnippetCard } from '@/app/components/SnippetCard/SnippetCard';
import { SnippetSearch } from '@/app/components/SnippetSearch/SnippetsSearch';

// simple way to  fetch data from Data Base
export default function MainPage(p: {}) {
  // const snippets = await readAllSnippet();
  return (
    <div className="">
      <SnippetSearch placeholder={`Search your  snippets`} />
      <SnippetCard
        snippet={{
          content: 'blbla',
          id: 1,
          language: 'python',
          technology: 'python',
          title: 'Some title',
          userId: '231231',
        }}
      />
    </div>
  );
}
