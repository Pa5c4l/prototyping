import db from "$lib/db.js";
import { redirect } from '@sveltejs/kit';

export const actions = {
  create: async ({ request }) => {
    const data = await request.formData();

    const club = {
      name: data.get('name'),
      type: data.get('type'),
      manufacturer: data.get('manufacturer'),
      loft: data.get('loft'),
      description: data.get('description')
    };

    const result = await db.createClub(club);

    // Nur wenn Club erfolgreich erstellt wurde:
    if (result) {
      throw redirect(303, '/club');
    }

    // Falls Fehler: bleibe auf Seite
    return { success: false };
  }
};