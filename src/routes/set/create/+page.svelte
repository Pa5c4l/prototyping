<script>
  let name = "";
  let clubsRaw = "";

  async function submit() {
    const response = await fetch('/set/create', {
      method: 'POST',
      body: JSON.stringify({ name, clubs: clubsRaw.split(',').map(c => c.trim()) }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      location.href = '/';
    }
  }
</script>

<h1>Neues Golf-Set erstellen</h1>

<label>Set-Name: <input bind:value={name} /></label>
<br />
<label>Schläger (kommagetrennt): <input bind:value={clubsRaw} /></label>
<br />
<button on:click={submit}>Speichern</button>
<a href="/">Abbrechen</a>