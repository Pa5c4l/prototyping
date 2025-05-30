<script>
  export let data;
  let { set, clubs } = data;
</script>

<h1>Set bearbeiten</h1>

<form method="POST">
  <input type="hidden" name="_id" value={set._id} />

  <p>Name: </p>
  <input name="name" value={set.name} />
  <br />

  <fieldset>
    <legend>Clubs im Set:</legend>
    {#each clubs as club}
      <label>
        <input
          type="checkbox"
          name="clubs"
          value={club._id}
          checked={set.clubs.includes(club._id)}
        />
        {club.name}
      </label><br />
    {/each}
  </fieldset>

  <button type="submit">Speichern</button>
  <a href={`/set/${set._id}`}>Abbrechen</a>
</form>