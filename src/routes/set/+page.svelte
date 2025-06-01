<script>
  import GolfSet from '$lib/components/GolfSet.svelte';
  let { data } = $props();
  let sets = data.sets;
</script>

<!-- Seitenkopf -->
<div class="d-flex justify-content-between align-items-center mb-4">
  <div>
    <h1 class="h3 mb-1">Meine Golfsets</h1>
  </div>
  <a href="/set/create" class="btn btn-primary">+ Neues Set erstellen</a>
</div>

<!-- Grid der Sets -->
{#if sets.length === 0}
  <p class="text-muted">Noch keine Sets vorhanden.</p>
{:else}
  <div class="row">
    {#each sets as set}
      <div class="col-sm-6 col-md-4 col-lg-3 mb-4">
        <GolfSet {set} />
      </div>
    {/each}
  </div>
{/if}

  