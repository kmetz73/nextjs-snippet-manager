import { db } from '@/app/lib/db';
import { Snippet } from '@prisma/client';

//update snippet data
export async function updateSnippet(
  id: number,
  body: Partial<Omit<Snippet, 'id'>>
) {
  try {
    return await db.snippet.update({ data: body, where: { id } });
  } catch (err) {
    return {
      error: true,
      status: 500,
      message:
        'Something went wrong while updating  the snippet :' +
        (err as Error).message,
    };
  }
}

//delete snippet by id
export async function deleteSnippet(id: number) {
  try {
    return await db.snippet.delete({ where: { id } });
  } catch (err) {
    return {
      error: true,
      status: 500,
      message:
        'Something went wrong while deleting  the snippet :' +
        (err as Error).message,
    };
  }
}
