<script>
  import "./styles.css";
  let { children } = $props();
</script>

<nav
  class="navbar navbar-expand-lg bg-success"
  data-bs-theme="dark"
>
  <div class="container-fluid">
    <a class="navbar-brand" href="/">ProGolf Otelfingen</a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/set"
            >Sets</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/club"
            >Clubs</a
          >
        </li>
      </ul>
    </div>
  </div>
</nav>

<div class="container mt-3">
  {@render children()}
</div>
