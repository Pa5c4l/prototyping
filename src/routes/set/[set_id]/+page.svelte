<script>
  export let data;
  let set = data.set;
  import GolfClub from '$lib/components/GolfClub.svelte';
</script>

<!-- Zurück-Link -->
<div class="mb-3">
  <a href="/set" class="btn btn-outline-secondary">&larr; Zurück zur Übersicht</a>
</div>

<!-- Set-Header mit Bild & Aktionen -->
<div class="row align-items-start mb-4">
  <!-- Bild -->
  <div class="col-md-4">
    <img src={set.image} alt="Set Bild" class="img-fluid rounded shadow-sm" />
  </div>

  <!-- Set-Infos -->
  <div class="col-md-8">
    <div class="d-flex justify-content-between align-items-start">
      <div>
        <h1 class="mb-3">{set.name}</h1>
        {#if set.notes}
          <p class="text-muted">Beschreibung: {set.notes}</p>
        {/if}
      </div>

      <!-- Aktionen -->
      <div class="d-flex flex-column align-items-end gap-2">
        <a href={`/set/${set._id}/edit`} class="btn btn-outline-primary">Set bearbeiten</a>
        <form method="POST" action="?/delete">
          <input type="hidden" name="id" value={set._id} />
          <button type="submit" class="btn btn-outline-danger">Set löschen</button>
        </form>
      </div>
    </div>
  </div>
</div>

<!-- Schlägerübersicht -->
<h2 class="mb-3">Schläger im Set</h2>
<div class="row">
  {#each set.clubs as club}
    <div class="col-sm-6 col-md-4 col-lg-3 mb-3">
      <GolfClub {club} />
    </div>
  {/each}
</div>