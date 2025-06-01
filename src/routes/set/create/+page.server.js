import db from '$lib/db';
import { redirect } from '@sveltejs/kit';

export async function load() {
  const clubs = await db.getClubs();
  return { clubs };
}

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const name = data.get('name');
    const notes = data.get('notes');
    const clubs = data.getAll('clubs');

    const newSet = {
      name,
      notes,
      clubs: clubs.map(id => id.toString()),
      createdAt: new Date()
    };

    const newId = await db.createSet(newSet);

    if (newId) {
      throw redirect(303, `/set/${newId}`);
    }

    return { error: 'Erstellen fehlgeschlagen' };
  }
};