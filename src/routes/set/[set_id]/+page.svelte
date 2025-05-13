<script>
  export let data;
  let set = data.set;
</script>

<a href="/set">Back</a>
<p></p>

<h1>{set.name}</h1>
<div class="row mt-3">
  <div class="col-3">
    <img class="img-fluid" src={set.image} alt=""/>
  </div>

  <div>
    <p>Beschreibung: {set.notes}</p>
  </div>
  
  <h2>Schläger:</h2>
  <ul>
    {#each set.clubs as club}
      <li>{club}</li>
    {/each}
  </ul>

  <form method="POST" action="?/delete" class="mt-3">
    <input type="hidden" name="id" value={data.set._id} />
    <button type="submit" class="btn btn-danger">Delete Set</button>
  </form>

  <a href={`/set/${data.set._id}/edit`} class="btn btn-secondary me-2 mt-3">Edit Set</a>

</div>