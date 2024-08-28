'use client';

import { Snippet } from '@prisma/client';
import { SearchBar } from '../SearchBar/SearchBar';
import { SnippetList } from '../SnippetList/SnippetList';

export function SnippetSearch(p: { placeholder: string; snippets: Snippet[] }) {
  return (
    <div>
      <SearchBar placeholder={p.placeholder} onChange={(t) => console.log(t)} />
      {/* A list of snippets that we can filter */}
      <SnippetList snippets={p.snippets} />
    </div>
  );
}
