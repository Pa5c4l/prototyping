<script>
    let { data } = $props();
  </script>
  
  <h1>Club bearbeiten</h1>
  
  <form method="POST" action="?/update">
    <input type="hidden" name="id" value={data.club._id} />
  
  
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
  
    <button type="submit" class="btn btn-primary">Save changes</button>
    <a href={`/clubs/${data.club._id}`} class="btn btn-outline-secondary ms-2">Cancel</a>
  </form>

