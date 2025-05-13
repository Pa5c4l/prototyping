import db from '$lib/db';
import { redirect } from '@sveltejs/kit';

export async function POST({ request }) {
  const form = await request.json();
  const set = {
    name: form.name,
    clubs: form.clubs.slice(0, 14)
  };
  await db.createSet(set);
  throw redirect(303, '/');
}