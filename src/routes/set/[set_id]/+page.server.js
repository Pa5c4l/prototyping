import db from '$lib/db';

export async function load({ params }) {
  const set = await db.getSet(params.set_id);
  return { set };
}