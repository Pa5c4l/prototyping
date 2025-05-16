import db from "$lib/db.js";
import { redirect } from '@sveltejs/kit';

export const actions = {
  create: async ({ request }) => {
    const data = await request.formData();
    let club = {
      _id: data.get('id'),                
      name: data.get('name'),
      type: data.get('type'),
      manufacturer: data.get('manufacturer'),
      loft: data.get('loft'),
      description: data.get('description')
    };
    await db.createClub(club);
    return { success: true };
  },
};