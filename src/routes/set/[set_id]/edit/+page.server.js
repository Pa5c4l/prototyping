import db from '$lib/db';
import { redirect } from '@sveltejs/kit';

export async function load({ params }) {
  const set = await db.getSet(params.set_id);
  return { set };
}

export async function POST({ request }) {
  const form = await request.json();
  const updatedSet = {
    _id: form._id,
    name: form.name,
    clubs: form.clubs.slice(0, 14)
  };
  await db.updateSet(updatedSet);
  throw redirect(303, `/set/${form._id}`);
}