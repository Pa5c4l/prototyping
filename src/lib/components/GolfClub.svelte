<script>
  let { club } = $props();
</script>

<a href={`/set/${club._id}`} class="text-decoration-none text-reset">
  <div class="club-card">
      <div>
          <img class="img-fluid" src={club.image} alt=""/>
      </div>
      <div class="details">
          <div class="set-name">
              {club.name}
          </div>
      </div>
      <div>
        Type: {club.type};
      </div> 
      <div>
        Manufacturer: {club.manufacturer}
      </div>
  </div>
</a>

<style>
  .club-card {
    border: 1px solid #ddd;
    height: 100%;
    background-color: rgb(246, 250, 250);
    color: rgb(0, 0, 0);
  }
  .details {
    padding: 0.5rem;
  }
  .set-name {
    font-weight: bold;
  }
</style>