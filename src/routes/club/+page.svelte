<script>
  import GolfClub from '$lib/components/GolfClub.svelte';

  export let data;
  let clubs = data.clubs;
  let types = data.types;
  let selectedType = '';

  $: filteredClubs = selectedType
    ? clubs.filter(club => club.type === selectedType)
    : clubs;
</script>

<!-- Seite Kopf -->
<div class="mb-4">
  <div>
    <h1 class="h3 mb-1">Golf-Clubs</h1>
    <p class="text-muted">Durchsuche alle verfügbaren Schläger</p>
  </div>
  <a href="/club/create" class="btn btn-primary">+ Club hinzufügen</a>
</div>

<!-- Filterbereich -->
<div class="row mb-4 align-items-end">
  <div class="col-md-6">
    <label for="type-filter" class="form-label">Filtern nach Typ:</label>
    <select id="type-filter" class="form-select" bind:value={selectedType}>
      <option value="">Alle Typen</option>
      {#each types as type}
        <option value={type}>{type}</option>
      {/each}
    </select>
  </div>
</div>

<!-- Ergebnisbereich -->
{#if filteredClubs.length === 0}
  <div class="alert alert-warning" role="alert">
    Keine Clubs gefunden.
  </div>
{:else}
  <div class="row club-grid">
    {#each filteredClubs as club}
      <div class="col-sm-6 col-md-4 col-lg-3 mb-4">
        <GolfClub {club} />
      </div>
    {/each}
  </div>
{/if}