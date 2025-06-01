<script>
  let { form } = $props();
</script>

<!-- Zurück-Link -->
<div class="mb-3">
  <a href="/club" class="btn btn-outline-secondary">&larr; Zurück zur Übersicht</a>
</div>

<!-- Überschrift -->
<h1 class="h3 mb-4">Neuen Golf-Club hinzufügen</h1>

<form method="POST" action="?/create">
  <div class="mb-3">
    <label for="name" class="form-label">Name</label>
    <input id="name" class="form-control" type="text" name="name" required />
  </div>

  <div class="mb-3">
    <label for="type" class="form-label">Typ</label>
    <select id="type" class="form-select" name="type" required>
      <option value="">Bitte wählen</option>
      <option value="Driver">Driver</option>
      <option value="Iron">Iron</option>
      <option value="Putter">Putter</option>
    </select>
  </div>

  <div class="mb-3">
    <label for="manufacturer" class="form-label">Hersteller</label>
    <input id="manufacturer" class="form-control" type="text" name="manufacturer" required />
  </div>

  <div class="mb-3">
    <label for="loft" class="form-label">Loft</label>
    <input id="loft" class="form-control" type="text" name="loft" required />
  </div>

  <div class="mb-4">
    <label for="description" class="form-label">Beschreibung</label>
    <textarea id="description" class="form-control" name="description" rows="3" required></textarea>
  </div>

  <div class="d-flex gap-2">
    <button type="submit" class="btn btn-primary">Club erstellen</button>
    <a href="/club" class="btn btn-outline-secondary">Abbrechen</a>
  </div>
</form>