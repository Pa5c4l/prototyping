<script>
  export let data;
  const set = data.set;
</script>

<h1>{set.name}</h1>
<p>Anzahl Schläger: {set.clubs?.length || 0}</p>

<h2>Schläger:</h2>
<ul>
  {#each set.clubs as club, i}
    <li>{i + 1}. {club}</li>
  {/each}
</ul>

<a href={`/set/${set._id}/edit`}>Bearbeiten</a>
<a href="/">Zurück zur Übersicht</a>