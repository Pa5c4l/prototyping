import db from '$lib/db.js';
import { redirect } from '@sveltejs/kit';

export async function load({ params }) {
  return {
    club: await db.getClub(params.club_id)
  };
}

export const actions = {
  update: async ({ request }) => {
    const data = await request.formData();

    const club = {
      _id: data.get('id'),                
      name: data.get('name'),
      type: data.get('type'),
      manufacturer: data.get('manufacturer'),
      loft: data.get('loft'),
      description: data.get('description')
    };

    await db.updateClub(club);

    throw redirect(303, `/club/${club._id}`);
  }
}