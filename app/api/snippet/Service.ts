import { db } from '@/app/lib/db';
import { Language, Snippet, Technology } from '@prisma/client';
import { z } from 'zod';

// zod schema  for filtering posts/snippet

const readAllSnippetSchema = z.object({
  title: z.string().optional(),
  content: z.string().optional(),
  language: z.nativeEnum(Language).optional(),
  technology: z.nativeEnum(Technology).optional(),
});

// to  Get All posts/snippet
export async function readAllSnippet(filters: Partial<Snippet>) {
  try {
    readAllSnippetSchema.parse(filters);
    return await db.snippet.findMany({
      where: {
        ...filters,
      },
    });
  } catch (err) {
    return {
      error: true,
      status: 500,
      message:
        'Something went wrong fetching the snippets' + (err as Error).message,
    };
  }
}

// zod schema for creating a new post/snippet
const createSnippetSchema = z.object({
  title: z.string(),
  content: z.string(),
  language: z.nativeEnum(Language),
  technology: z.nativeEnum(Technology),
});

// Create a new post/snippet
export async function createSnippet(body: Omit<Snippet, 'id'>) {
  try {
    createSnippetSchema.parse(body);
    return await db.snippet.create({ data: body });
  } catch (err) {
    return {
      error: true,
      status: 500,
      message:
        'Something went wrong while creating the snippet :' +
        (err as Error).message,
    };
  }
}
