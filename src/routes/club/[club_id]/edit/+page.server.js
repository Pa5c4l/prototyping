import db from '$lib/db.js';
import { redirect } from '@sveltejs/kit';
import { ObjectId } from 'mongodb';

export async function load({ params }) {
  return {
    club: await db.getClub(params.club_id)
  };
}

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();

    const club = {
      _id: data.get('_id'),                
      name: data.get('name'),
      type: data.get('type'),
      manufacturer: data.get('manufacturer'),
      loft: data.get('loft'),
      description: data.get('description')
    };

    const id = club._id;

    await db.updateClub(club);

    throw redirect(303, `/club/${id}`);
  }
}