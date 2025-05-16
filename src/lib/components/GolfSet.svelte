<script>
  let { set } = $props();
</script>

<a href={`/set/${set._id}`} class="text-decoration-none text-reset">
  <div class="set-card">
      <div>
          <img class="img-fluid" src={set.image} alt=""/>
      </div>
      <div class="details">
          <div class="set-name">
              {set.name}
          </div>
      </div>
      <div>
          Beschreibung: {set.notes}
      </div>
  </div>
</a>

<style>
  .set-card {
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