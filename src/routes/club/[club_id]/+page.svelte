<script>
  export let data;
  let club = data.club;
</script>

<!-- Zurück-Link -->
<div class="mb-3">
  <a href="/club" class="btn btn-outline-secondary">&larr; Zurück zur Übersicht</a>
</div>

<!-- Titel -->
<h1 class="h3 mb-4">{club.name}</h1>

<!-- Club-Details -->
<div class="row align-items-start mb-4">
  <!-- Bild -->
  <div class="col-md-4 mb-3">
    <img src={club.image} alt={club.name} class="img-fluid rounded shadow-sm" />
  </div>

  <!-- Details -->
  <div class="col-md-8">
    <ul class="list-group club-details-list mb-3">
      <li class="list-group-item"><strong>Name:</strong> {club.name}</li>
      <li class="list-group-item"><strong>Typ:</strong> {club.type}</li>
      <li class="list-group-item"><strong>Hersteller:</strong> {club.manufacturer}</li>
      <li class="list-group-item"><strong>Loft:</strong> {club.loft}</li>
      <li class="list-group-item"><strong>Beschreibung:</strong><br />{club.description}</li>
    </ul>

    <!-- Aktionen -->
    <div class="d-flex gap-2">
      <a href={`/club/${club._id}/edit`} class="btn btn-outline-primary">Club bearbeiten</a>

      <form method="POST" action="?/delete">
        <input type="hidden" name="id" value={club._id} />
        <button type="submit" class="btn btn-outline-danger">Club löschen</button>
      </form>
    </div>
  </div>
</div>