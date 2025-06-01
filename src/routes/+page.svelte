<script>
  import { onMount } from 'svelte';
  import { fetchWeather } from '$lib/api/weather.js';

  let weather = null;
  let error = null;

  onMount(async () => {
    try {
      weather = await fetchWeather();
    } catch (e) {
      error = e.message;
    }
  });
</script>

<!-- Titel und Intro -->
<h1 class="mb-1">Welcome to Otelfingens Pro Golf Shop</h1>
<p class="text-muted mb-4">Browse our collection and build your own golf bag</p>


<!-- Wetteranzeige -->
{#if error}
  <div class="alert alert-danger">Weather error: {error}</div>
{:else if weather}
  <div class="alert alert-info d-flex align-items-center gap-3 mb-4">
    <img src={"https:" + weather.icon} alt="Wetter" />
    <span>
      Aktuelles Wetter in Otelfingen: <strong>{weather.temp}°C, Wind {weather.wind} Km/H</strong>
    </span>
  </div>
{:else}
  <p class="text-muted">Lade Wetterdaten…</p>
{/if}

<!-- Video -->
<main>
  <video autoplay muted loop playsinline style="width: 100%; height: auto;">
    <source src="/videos/intro.mp4" type="video/mp4" />
  </video>
</main>