<script>
  import GolfSet from '$lib/components/GolfSet.svelte';
  let { data } = $props();

  /*checkbox Übung:
  let movies = $derived.by{} => {
    console.log(funciton von checkbox)  

    if (function watchlist ===true) {
      return data.movies.filter( movie => movie.watchlist ===true);
    }
  return data.movies;
  }
  */

</script>

<p><i>Standard Golfsets</i></p>
<div>
  <a href="/set/create" class="btn btn-primary">Neues Set erstellen</a>
</div>

<p></p>

<div class="row mt-3">
  {#each data.sets as set} // sets as set, remove data.- if possible
    <div class="col-sm-6 col-md-4 col-lg-3 mb-2 gx-2">
      <GolfSet {set}></GolfSet>
    </div>
  {/each}

</div>

  