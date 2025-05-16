<script>
  let { form } = $props();
</script>

<a href="/club">Back</a>
<h1>Add a Club</h1>
<form method="POST" action="?/create">
  <div class="mb-3">
    <label for="" class="form-label">Name</label>
    <input class="form-control" type="text" name="name" value={data.club.name} required />
  </div>
  <div class="mb-3">
    <label for="" class="form-label">Type</label>
    <input class="form-control" type="text" name="type" value={data.club.type} required />
  </div>
  <div class="mb-3">
    <label for="" class="form-label">Manufacturer</label>
    <input class="form-control" type="text" name="manufacturer" value={data.club.manufacturer} required />
  </div>
  <div class="mb-3">
    <label for="" class="form-label">Loft</label>
    <input class="form-control" type="text" name="loft" value={data.club.loft} required />
  </div>
  <div class="mb-3">
    <label for="" class="form-label">Description</label>
    <input class="form-control" type="text" name="description" value={data.club.description} required />
  </div>
  <button type="submit" class="btn btn-primary">Add Club</button>
</form>

{#if form?.success}
  <p>Club created</p>
{/if}