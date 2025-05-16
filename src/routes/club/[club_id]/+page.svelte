<script>
  export let data;
  let club = data.club;
</script>

<a href="/club">Back</a>
<p></p>

<h1>{club.name}</h1>
<div class="row mt-3">
  <div class="col-3">
    <img class="img-fluid" src={club.image} alt=""/>
  </div>

  <div class="mb-3">
    <p>Name: {data.club.name}</p>
    <p>Type: {data.club.type}</p>
    <p>Manufacturer: {data.club.manufacturer}</p>
    <p>Loft: {data.club.loft}</p>
    <p>Description: {data.club.description}</p>
  </div>


  <form method="POST" action="?/delete" class="mt-3">
    <input type="hidden" name="id" value={data.club._id} />
    <button type="submit" class="btn btn-danger">Delete club</button>
  </form>

  <a href={`/club/${data.club._id}/edit`} class="btn btn-secondary me-2 mt-3">Edit club</a>

</div>