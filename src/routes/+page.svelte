<script>
  import { onMount } from 'svelte';
  let sets = [];

  onMount(async () => {
    const res = await fetch('/set');
    sets = await res.json();
  });
</script>

<h1>Golf-Sets Übersicht</h1>
<a href="/set/create">Neues Set erstellen</a>

<ul>
  {#each sets as set}
    <li>
      <strong>{set.name}</strong> – {set.clubs?.length || 0} Schläger
      <a href={`/set/${set._id}`}>Anzeigen</a>
      <a href={`/set/${set._id}/edit`}>Bearbeiten</a>
      <form method="post" action={`/set/${set._id}?/delete`}>
        <button type="submit">Löschen</button>
      </form>
    </li>
  {/each}
</ul>