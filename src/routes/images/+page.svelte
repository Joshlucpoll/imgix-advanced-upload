<script lang="ts">
  import ImageGrid from "../../components/imageGrid.svelte";
  import { images } from "../../lib/stores";

  let currentImage: number | null = null;

  function onKeyDown(event) {
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
  <h1 class="font-bold text-4xl mb-8">Add Images</h1>
  <p>{currentImage}</p>
  <ImageGrid {currentImage} changeCurrentImage={(i) => (currentImage = i)} />
</div>
