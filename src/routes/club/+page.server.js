import db from '$lib/db';

export async function load() {
  const clubs = await db.getClubs();

  // Add Club Typ to check for
  const types = [...new Set(clubs.map(club => club.type).filter(Boolean))];

  return { clubs, types };
}