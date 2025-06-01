import db from '$lib/db';
import { redirect } from '@sveltejs/kit';
import { ObjectId } from 'mongodb';

export async function load({ params }) {
  const set = await db.getSetWithClubIds(params.set_id);
  const clubs = await db.getClubs();
  return { set, clubs };
}

export const actions = { 
  default: async ({ request }) => {
    const data = await request.formData();
    const _id = data.get('_id');
    const name = data.get('name');
    const notes = data.get('notes');
    const selectedClubs = data.getAll('clubs'); // alle ausgewählten Checkbox-Werte

    await db.updateSet({
      _id,
      name,
      notes,
      clubs: selectedClubs.map(id => new ObjectId(id))
    });

    throw redirect(303, `/set/${_id}`);
  }
};