import { SnippetSearch } from '@/app/components/SnippetSearch/SnippetsSearch';

export default function TechnologyPage(p: {}) {
  return (
    <div>
      <SnippetSearch
        placeholder={`Search your ${p.params.technology} snippets`}
      />
    </div>
  );
}
