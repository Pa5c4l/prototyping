<script>
  export let data;
  let name = data.set.name;
  let clubs = data.set.clubs.join(', ');

  async function submit() {
    const response = await fetch(`/set/${data.set._id}/edit`, {
      method: 'POST',
      body: JSON.stringify({
        _id: data.set._id,
        name,
        clubs: clubs.split(',').map(c => c.trim())
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      location.href = `/set/${data.set._id}`;
    }
  }
</script>

<h1>Set bearbeiten</h1>

<label>Name: <input bind:value={name} /></label>
<br />
<label>Schläger (kommagetrennt): <input bind:value={clubs} /></label>
<br />
<button on:click={submit}>Aktualisieren</button>
<a href={`/set/${data.set._id}`}>Abbrechen</a>