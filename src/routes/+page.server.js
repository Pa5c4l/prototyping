import db from '$lib/db';

export async function load() {
  const sets = await db.getSets();
  return { sets };
}