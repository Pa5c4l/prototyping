<script>
  export let data;
  let name = '';
  let notes = '';
  let selectedClubs = new Set();

  function toggleClub(id) {
    if (selectedClubs.has(id)) {
      selectedClubs.delete(id);
    } else {
      selectedClubs.add(id);
    }
  }
</script>

<h1>Neues Golf-Set erstellen</h1>

<form method="POST">
  <p>Name des Sets: </p>
  <input name="name" bind:value={name} required />
  <br /><br />

  <label for="set-notes">Beschreibung:</label><br />
  <textarea id="set-notes" name="notes" bind:value={notes} rows="4" cols="40" ></textarea>
  <br /><br />

  <fieldset>
    <legend>Clubs auswählen:</legend>
    {#each data.clubs as club}
      <label>
        <input
          type="checkbox"
          name="clubs"
          value={club._id}
          on:change={() => toggleClub(club._id)}
        />
        {club.name}
      </label><br />
    {/each}
  </fieldset>

  <br />

  <div class="d-flex gap-2 mt-3">
    <button type="submit" class="btn btn-primary">Set erstellen</button>
    <a href="/set" class="btn btn-secondary">Abbrechen</a>
  </div>
</form>