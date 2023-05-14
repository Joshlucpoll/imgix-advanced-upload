<script lang="ts">
  import getExifData from "../lib/exifData";
  import { images } from "../lib/stores";
  import Button from "../components/button.svelte";

  export let currentImage: number | null;
  export let changeCurrentImage: Function;

  let fileInput: HTMLInputElement;
  let imageElements: HTMLImageElement[] = [];
  let loadingImages = false;

  async function handleInputChange() {
    let loadingImages = true;
    let imageFiles = [];

    const files = fileInput.files;
    if (!files) return;

    for (let i = 0; i < files.length; i++) {
      // check if existing image already exists
      if (!$images.some((el) => el.name === files[i].name))
        imageFiles.push(files[i]);
    }
    fileInput.value = "";

    await loadImages(imageFiles);
    loadingImages = false;
    console.log($images);
  }

  async function loadImages(
    imageFiles: File[],
    callback: () => void = () => null
  ): Promise<void> {
    const promises: Promise<void>[] = [];

    imageFiles.forEach((file) => {
      const promise = new Promise<void>((resolve) => {
        const reader = new FileReader();

        reader.onload = async (e) => {
          const res = e.target?.result;

          if (typeof res === "string") {
            const exifData = await getExifData(file);
            images.update((imgs) => [
              ...imgs,
              { src: res, name: file.name, exif: exifData },
            ]);
          }
          resolve();
        };
        reader.readAsDataURL(file);
      });

      promises.push(promise);
    });

    return Promise.all(promises).then(() => callback());
  }
</script>

<div class="mb-16">
  <Button>
    <label class="cursor-pointer" for="fileInput">
      {loadingImages
        ? "Loading images, this is gonna take a sec"
        : $images.length == 0
        ? "Select images"
        : "Add more images"}
      <input
        class="hidden"
        bind:this={fileInput}
        type="file"
        id="fileInput"
        multiple
        on:change={handleInputChange}
      />
    </label>
  </Button>
</div>

<div
  class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 cursor-pointer"
>
  {#each $images as image, i}
    <button
      class={`relative w-full aspect-square rounded-md overflow-clip hover:scale-105 transition-transform ${
        currentImage == i ? "scale-105" : ""
      }`}
      type="button"
      on:click={changeCurrentImage(i)}
    >
      <img
        bind:this={imageElements[i]}
        src={image.src}
        alt="input"
        class={`object-cover w-full h-full opacity-50 transition-opacity ${
          currentImage == i ? "opacity-100" : ""
        }`}
      />
      <h2
        class="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 font-thin pointer-events-none"
      >
        {image.name}
      </h2>
    </button>
  {/each}
</div>
