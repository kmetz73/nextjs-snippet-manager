import { db } from '@/app/lib/db';
import { Language, Snippet, Technology } from '@prisma/client';
import { z } from 'zod';

// update zod schema for updating snippet
const updateSnippetSchema = z
  .object({
    title: z.string().optional(),
    content: z.string().optional(),
    language: z.nativeEnum(Language).optional(),
    technology: z.nativeEnum(Technology).optional(),
  })
  .refine((data) => Object.keys(data).length > 0);

//update snippet data
export async function updateSnippet(
  id: number,
  body: Partial<Omit<Snippet, 'id'>>
) {
  try {
    updateSnippetSchema.parse(body);
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

// zod schema for deleting snippet
const deleteSnippetSchema = z.number();

//delete snippet by id
export async function deleteSnippet(id: number) {
  try {
    deleteSnippetSchema.parse(id);
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
