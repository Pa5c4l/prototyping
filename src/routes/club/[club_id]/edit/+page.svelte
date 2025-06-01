<script>
  let { data } = $props();
  let club = data.club;
</script>

<!-- Überschrift -->
<div class="mb-4">
  <h1 class="h3">Golf-Club bearbeiten</h1>
  <p class="text-muted mb-0">Ändere die Informationen und speichere das Clubprofil.</p>
</div>

<!-- Formular -->
<form class="form-block" method="POST" action="?/update">
  <input type="hidden" name="id" value={club._id} />

  <div class="mb-3">
    <label for="name" class="form-label">Name</label>
    <input id="name" class="form-control" type="text" name="name" value={club.name} required />
  </div>

  <div class="mb-3">
    <label for="type" class="form-label">Typ</label>
    <select id="type" class="form-select" name="type" required>
      <option value="">Bitte wählen</option>
      <option value="Driver" selected={club.type === 'Driver'}>Driver</option>
      <option value="Iron" selected={club.type === 'Iron'}>Iron</option>
      <option value="Putter" selected={club.type === 'Putter'}>Putter</option>
    </select>
  </div>

  <div class="mb-3">
    <label for="manufacturer" class="form-label">Hersteller</label>
    <input id="manufacturer" class="form-control" type="text" name="manufacturer" value={club.manufacturer} required />
  </div>

  <div class="mb-3">
    <label for="loft" class="form-label">Loft</label>
    <input id="loft" class="form-control" type="text" name="loft" value={club.loft} required />
  </div>

  <div class="mb-4">
    <label for="description" class="form-label">Beschreibung</label>
    <textarea id="description" class="form-control" name="description" rows="3" required>{club.description}</textarea>
  </div>

  <!-- Aktionen -->
  <div class="d-flex gap-2">
    <button type="submit" class="btn btn-primary">Änderungen speichern</button>
    <a href={`/club/${club._id}`} class="btn btn-outline-secondary">Abbrechen</a>
  </div>
</form>