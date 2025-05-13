import db from '$lib/db';
import { redirect } from '@sveltejs/kit';

export async function load({ params }) {
  return {
    set: await db.getSet(params.set_id),
  };
}

export const actions = {
  delete: async ({ request }) => {
    const data = await request.formData();

    await db.deleteSet(data.get("id"));
    redirect(303, "/set");
  },
};