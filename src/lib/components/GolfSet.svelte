<script>
  let { set } = $props();
</script>

<a href={`/set/${set._id}`} class="text-decoration-none">
  <div class="card h-100 shadow-sm hover-shadow">
    <!-- Bild -->
    <img src={set.image} alt="Set Bild" class="card-img-top" />

    <!-- Inhalt -->
    <div class="card-body">
      <h5 class="card-title">{set.name}</h5>
      {#if set.notes}
        <p class="card-text text-muted">{set.notes}</p>
      {/if}
    </div>
  </div>
</a>