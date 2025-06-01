<script>
  export let data;
  let { set, clubs } = data;
  import GolfClub from '$lib/components/GolfClub.svelte';
</script>

<!-- Überschrift -->
<div class="mb-4">
  <h1 class="h3 mb-1">Set bearbeiten</h1>
  <p class="text-muted">Ändere den Namen und die Schlägerauswahl.</p>
</div>

<form method="POST">
  <input type="hidden" name="_id" value={set._id} />

  <!-- Name des Sets -->
  <div class="mb-4">
    <label for="name" class="form-label">Name des Sets</label>
    <input
      id="name"
      name="name"
      class="form-control"
      value={set.name}
      required
    />
  </div>

  <div class="mb-4">
    <label for="notes" class="form-label">Notizen</label>
    <textarea
      id="notes"
      name="notes"
      class="form-control"
      rows="3"
    >{set.notes}</textarea>
  </div>

  <!-- Clubs als visuelle Checkbox-Karten -->
  <fieldset class="mb-4">
    <legend class="form-label">Clubs im Set</legend>
    <div class="row">
      {#each clubs as club}
        <div class="col-sm-6 col-md-4 col-lg-3 mb-3">
          <div class="position-relative border rounded p-2">
            <!-- Checkbox oben links -->
            <input
              type="checkbox"
              class="form-check-input position-absolute"
              style="top: 10px; left: 10px; z-index: 2;"
              name="clubs"
              value={club._id}
              checked={set.clubs.includes(club._id)}
              id={`club-${club._id}`}
            />
            <label for={`club-${club._id}`} class="d-block">
              <GolfClub {club} link={false} />
            </label>
          </div>
        </div>
      {/each}
    </div>
  </fieldset>

  <!-- Aktionen -->
  <div class="d-flex gap-2">
    <button type="submit" class="btn btn-primary">Änderungen speichern</button>
    <a href={`/set/${set._id}`} class="btn btn-outline-secondary">Abbrechen</a>
  </div>
</form>