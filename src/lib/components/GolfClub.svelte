<script>
  export let club;
</script>

<a href={`/club/${club._id}`} class="text-decoration-none text-reset">
  <div class="club-card">
      <div>
          <img class="img-fluid" src={club.image} alt=""/>
      </div>
      <div class="details">
          <div class="club-name">
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
  border-radius: 8px;
  height: 100%;
  max-width: 250px;
  max-height: 350px;
  overflow: hidden;
  background-color: rgb(246, 250, 250);
  color: rgb(0, 0, 0);
  display: flex;
  flex-direction: column;
}

.club-card img {
  height: 140px;
  object-fit: cover;
  width: 100%;
}

.details {
  padding: 0.5rem;
  flex-grow: 1;
  overflow: hidden;
  text-overflow: ellipsis;
}

.club-name {
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>