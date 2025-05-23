<script>
  import GolfClub from '$lib/components/GolfClub.svelte';
  let { data } = $props();
  let clubs = data.clubs;
</script>

<p><i>Standard Golf Clubs</i></p>
<div>
  <a href="/club/create" class="btn btn-primary">Neuen Club erstellen</a>
</div>

<p></p>

<div class="row mt-3">
  {#each clubs as club}
    <div class="col-sm-6 col-md-4 col-lg-3 mb-2 gx-2">
      <GolfClub {club}></GolfClub>
    </div>
  {/each}

</div>