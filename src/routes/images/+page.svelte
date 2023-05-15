<script lang="ts">
  import ImageGrid from "../../components/imageGrid.svelte";
  import { JsonView } from "@zerodevx/svelte-json-view";
  import { images } from "../../lib/stores";

  let currentImage: number | null = null;

  function onKeyDown(event: any) {
    switch (event.key) {
      case "ArrowLeft":
        if (currentImage == null) currentImage = $images.length - 1;
        else currentImage = currentImage == 0 ? 0 : currentImage - 1;

        event.preventDefault();
        break;

      case "ArrowRight":
        if (currentImage == null) currentImage = 0;
        else
          currentImage =
            currentImage == $images.length - 1
              ? $images.length - 1
              : currentImage + 1;

        event.preventDefault();
        break;
    }
  }
</script>

<svelte:window on:keydown={onKeyDown} />

<div class="flex flex-col items-center">
  <h1 class="font-bold text-4xl mb-20">Add Images</h1>
  <section class="relative grid grid-cols-2">
    <ImageGrid {currentImage} changeCurrentImage={(i) => (currentImage = i)} />
    {#if $images.length !== 0}
      <div
        class="sticky -z-1 top-40 self-start bg-stone-900 overflow-y-auto h-[calc(100vh-20rem)] p-8 ml-10 rounded-md opacity-60 shadow-inner"
      >
        {#if currentImage !== null}
          <h2 class="font-medium text-2xl mb-1">Exif Data</h2>
          <hr class="border-dotted mb-4" />
          <JsonView json={$images[currentImage].exif} depth={0} />
        {:else}
          <h2 class="font-medium text-2xl opacity-60">
            Select Image to View Exif Data
          </h2>
        {/if}
      </div>
    {/if}
  </section>
</div>
