import { db } from '@/app/lib/db';
import { Snippet } from '@prisma/client';

// to  Get All posts/snippet
export async function readAllSnippet() {
  return await db.snippet.findMany();
}

// Create a new post/snippet
export async function createSnippet(body: Omit<Snippet, 'id'>) {
  try {
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
