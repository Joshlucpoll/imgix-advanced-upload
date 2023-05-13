<script lang="ts">
  import "../app.css";
  import { apiKey } from "../lib/stores";
  import { SvelteToast } from "@zerodevx/svelte-toast";

  // prevent reload if API key has been entered
  function beforeUnload(event) {
    if ($apiKey) {
      event.preventDefault();
      event.returnValue = "";
      return "";
    }
  }
</script>

<svelte:window on:beforeunload={beforeUnload} />

<div class="min-h-screen flex flex-col justify-start">
  <nav class="py-8 flex flex-row justify-between items-center">
    <a href="/" class="font-bold">imgixAU</a>
    <a href="https://github.com/joshlucpoll/imgix-advanced-upload">
      <svg
        class="opacity-80"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="40"
        height="40"
        viewBox="0 0 30 30"
        fill="white"
      >
        <path
          d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"
        />
      </svg>
    </a>
  </nav>
  <slot />

  <footer class="pb-8 flex flex-row justify-end items-center mt-auto">
    <small class="opacity-60"
      >icons by <a class="underline" href="https://icons8.com">Icons8</a> • made
      by
      <a class="underline" href="https://joshlucpoll.dev">Joshlucpoll</a></small
    >
  </footer>
</div>

<svg
  class="fixed top-0 left-1/2 -translate-x-1/2 h-screen -z-10 mx-auto"
  viewBox="0 0 1254 1196"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <g clip-path="url(#clip0_1_2)" filter="url(#filter0_f_1_2)">
    <path
      d="M1054 535.5C1054 615.402 1033.23 693.93 993.738 763.365C954.243 832.8 897.381 890.752 828.741 931.527C760.1 972.302 682.042 994.495 602.239 995.926C522.436 997.357 443.635 977.977 373.579 939.689L594 535.5H1054Z"
      fill="#E74A4A"
      fill-opacity="0.7"
    />
    <path
      d="M1007.9 270.64C910.443 215.747 798.375 192.394 687.105 203.792C575.835 215.189 470.829 260.777 386.525 334.286C302.22 407.796 242.759 505.617 216.317 614.299C189.875 722.981 197.751 837.185 238.862 941.208L742.26 742.26L1007.9 270.64Z"
      fill="#3634C5"
      fill-opacity="0.7"
    />
  </g>
  <defs>
    <filter
      id="filter0_f_1_2"
      x="0"
      y="0"
      width="1442"
      height="1442"
      filterUnits="userSpaceOnUse"
      color-interpolation-filters="sRGB"
    >
      <feFlood flood-opacity="0" result="BackgroundImageFix" />
      <feBlend
        mode="normal"
        in="SourceGraphic"
        in2="BackgroundImageFix"
        result="shape"
      />
      <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_1_2" />
      <feTurbulence
        result="NOISE"
        type="fractalNoise"
        baseFrequency="0.1"
        numOctaves="6"
        stitchTiles="stitch"
      />
      <feDisplacementMap
        in="effect1_foregroundBlur_1_2"
        in2="NOISE"
        scale="20"
        xChannelSelector="R"
        yChannelSelector="R"
      />
    </filter>
    <clipPath id="clip0_1_2">
      <rect
        width="1042"
        height="1042"
        fill="white"
        transform="translate(115 59)"
      />
    </clipPath>
  </defs>
</svg>

<SvelteToast />
