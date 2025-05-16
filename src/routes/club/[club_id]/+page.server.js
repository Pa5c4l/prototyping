import db from '$lib/db';
import { redirect } from '@sveltejs/kit';

export async function load({ params }) {
  return {
    club: await db.getClub(params.club_id),
  };
}

export const actions = {
  delete: async ({ request }) => {
    const data = await request.formData();

    await db.deleteclub(data.get("id"));
    redirect(303, "/club");
  },
};