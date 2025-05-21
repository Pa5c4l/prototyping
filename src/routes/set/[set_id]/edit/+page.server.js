import db from '$lib/db';
import { redirect } from '@sveltejs/kit';
import { actions } from '../+page.server.js';

export async function load({ params }) {
  const set = await db.getSet(params.set_id);
  return { set };
}

export const actions = { //unfishined 
  changeclubs: async ({request}) => {
    console.log()
    let data = await request.formData()
    let id = data.get("clubId")

    let club = {
      _id: id,
      //new stuff update/change remove club somehow
    }

    await db.updateSet(club)
  
  }
  
}