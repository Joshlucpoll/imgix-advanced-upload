<script>
  import Button from "../components/button.svelte";
  import { apiKey } from "../lib/stores";
</script>

<main class="flex flex-col justify-center items-center mt-auto">
  <h1 class="text-center font-bold text-4xl pb-2">
    Welcome to <span>imgix</span> Advanced Upload
  </h1>
  <p class="text-center opacity-60 max-w-xl">
    This tool allows for more complex image uploads by automatically
    transferring existing <a href="https://en.wikipedia.org/wiki/Exif">Exif</a> image
    metadata to imgix custom fields
  </p>

  <div class="mt-24 w-full max-w-xl flex flex-row items-center gap-8">
    <input
      bind:value={$apiKey}
      id="api-input"
      class="p-2 px-4 text-center bg-[#1D1A2488] rounded-md w-full outline outline-slate-400"
      type="password"
      placeholder="API Key"
    />
    <!-- <button
      type="button"
      on:click={() => {
        var x = document.getElementById("api-input");
        if (x.type === "password") {
          x.type = "text";
        } else {
          x.type = "password";
        }
      }}
    >
      <p class="italic text-slate-400">show/hide</p>
    </button> -->
  </div>
  <button class="opacity-60 underline mt-2" type="button"
    ><small>help</small></button
  >

  <a href="/images" class="mt-24">
    <Button>Get Started</Button>
  </a>
</main>
