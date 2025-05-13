import db from '$lib/db';

export async function load() {
  return {
     sets: await db.getSets()
  };
}