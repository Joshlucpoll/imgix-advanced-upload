<script lang="ts">
  import getExifData from "../lib/exifData";
  import { images } from "../lib/stores";
  import Button from "../components/button.svelte";
  import { toast } from "@zerodevx/svelte-toast";

  export let currentImage: number | null;
  export let changeCurrentImage: Function;

  let fileInput: HTMLInputElement;
  let imageElements: HTMLButtonElement[] = [];
  let loadingImages = false;

  $: if (currentImage != null) {
    imageElements[currentImage].focus();
  }

  async function handleInputChange() {
    loadingImages = true;
    let imageFiles = [];

    const files = fileInput.files;
    if (!files) return;

    for (let i = 0; i < files.length; i++) {
      // check if existing image already exists
      if (!$images.some((el) => el.name === files[i].name))
        imageFiles.push(files[i]);
      else {
        toast.push(`${files[i].name} already added`);
      }
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

            const img = new Image();
            img.src = res;

            img.onload = () => {
              const canvas = document.createElement("canvas");
              const MAX_DIMENSION = 700;
              let width = img.width;
              let height = img.height;

              if (width > height) {
                if (width > MAX_DIMENSION) {
                  height *= MAX_DIMENSION / width;
                  width = MAX_DIMENSION;
                }
              } else {
                if (height > MAX_DIMENSION) {
                  width *= MAX_DIMENSION / height;
                  height = MAX_DIMENSION;
                }
              }

              canvas.width = width;
              canvas.height = height;

              const ctx = canvas.getContext("2d");
              ctx?.drawImage(img, 0, 0, width, height);

              const thumbnail = canvas.toDataURL("image/jpeg", 0.5);
              images.update((imgs) => [
                ...imgs,
                {
                  src: file,
                  thumbnail,
                  name: file.name,
                  exif: exifData,
                },
              ]);
              resolve();
            };
          }
        };
        reader.readAsDataURL(file);
      });

      promises.push(promise);
    });

    return Promise.all(promises).then(() => callback());
  }
</script>

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
      on:focus={changeCurrentImage(i)}
      bind:this={imageElements[i]}
    >
      <img
        src={image.thumbnail}
        alt="input"
        class={`object-cover w-full h-full transition-opacity ${
          currentImage == i ? "opacity-100" : "opacity-50"
        }`}
        width="1"
        height="auto"
      />
      <h2
        class="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 font-thin pointer-events-none"
      >
        {image.name}
      </h2>
    </button>
  {/each}
</div>

<div
  class={`fixed top-0 left-0 w-full h-screen bg-black opacity-80 ${
    loadingImages ? "" : "hidden"
  }`}
/>

<div
  class={$images.length == 0
    ? "fixed top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2"
    : "fixed bottom-16 left-1/4 -translate-x-[40%]"}
>
  <Button>
    {#if loadingImages}
      <img
        class="inline-block h-5 mb-[0.2rem] -ml-2 pr-1"
        src="/images/loading.gif"
        alt="Loading"
      />
    {:else}
      <svg
        class="inline-block h-5 mb-[0.2rem] -ml-2 pr-1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 30 30"
      >
        <path
          d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M21,16h-5v5 c0,0.553-0.448,1-1,1s-1-0.447-1-1v-5H9c-0.552,0-1-0.447-1-1s0.448-1,1-1h5V9c0-0.553,0.448-1,1-1s1,0.447,1,1v5h5 c0.552,0,1,0.447,1,1S21.552,16,21,16z"
        />
      </svg>
    {/if}
    <label class="cursor-pointer inline-block" for="fileInput">
      {loadingImages
        ? "One sec, loading images"
        : $images.length == 0
        ? "Select images"
        : "Add more images"}
      <input
        class="hidden"
        bind:this={fileInput}
        type="file"
        accept=".jpeg,.jpg,.tiff"
        id="fileInput"
        multiple
        on:change={handleInputChange}
      />
    </label>
  </Button>
</div>
