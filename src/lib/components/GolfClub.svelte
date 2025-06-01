<script>
  export let club;
  export let link = true; // standardmäßig verlinkt
</script>

{#if link}
  <a href={`/club/${club._id}`} class="text-decoration-none text-reset">
    <div class="club-card">
      <img src={club.image} alt={club.name} class="img-fluid" />
      <div class="details">
        <div class="club-name">{club.name}</div>
        <div class="text-muted">Typ: {club.type}</div>
        <div class="text-muted">Hersteller: {club.manufacturer}</div>
      </div>
    </div>
  </a>
{:else}
  <div class="club-card">
    <img src={club.image} alt={club.name} class="img-fluid" />
    <div class="details">
      <div class="club-name">{club.name}</div>
      <div class="text-muted">Typ: {club.type}</div>
      <div class="text-muted">Hersteller: {club.manufacturer}</div>
    </div>
  </div>
{/if}