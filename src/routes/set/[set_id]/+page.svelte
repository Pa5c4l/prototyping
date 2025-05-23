<script>
  export let data;
  let set = data.set;
  import GolfClub from '$lib/components/GolfClub.svelte';
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
  <div class="row justify-content-center">
    {#each set.clubs as club}
      <div class="col-sm-6 col-md-4 col-lg-3 mb-2 gx-2">
        <GolfClub {club} />
      </div>
    {/each}
  </div>

  <form method="POST" action="?/delete" class="mt-3">
    <input type="hidden" name="id" value={data.set._id} />
    <button type="submit" class="btn btn-danger">Delete Set</button>
  </form>

  <a href={`/set/${data.set._id}/edit`} class="btn btn-secondary me-2 mt-3">Edit Set</a>

</div>