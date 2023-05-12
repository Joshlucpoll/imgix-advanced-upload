<script lang="ts">
  import "../app.css";
  export const prerender = true;
</script>

<div class="min-h-screen flex flex-col justify-between">
  <nav class="py-8 flex flex-row justify-end items-center">
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

  <footer class="pb-8 flex flex-row justify-end items-center self-end">
    <small class="opacity-60"
      >icons by <a class="underline" href="https://icons8.com">Icons8</a> • made
      by
      <a class="underline" href="https://joshlucpoll.dev">Joshlucpoll</a></small
    >
  </footer>
</div>

<svg
  class="fixed top-0 left-0 w-full -z-10"
  viewBox="0 0 1442 1442"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <g clip-path="url(#clip0_1_2)" filter="url(#filter0_f_1_2)">
    <rect
      width="1042"
      height="1042"
      transform="translate(200 200)"
      fill="black"
    />
    <path
      d="M1139 676.5C1139 756.402 1118.23 834.93 1078.74 904.365C1039.24 973.8 982.381 1031.75 913.741 1072.53C845.1 1113.3 767.042 1135.49 687.239 1136.93C607.436 1138.36 528.635 1118.98 458.579 1080.69L679 676.5H1139Z"
      fill="#E74A4A"
      fill-opacity="0.7"
    />
    <path
      d="M1103.9 352.64C1006.44 297.747 894.375 274.394 783.105 285.792C671.835 297.189 566.829 342.777 482.525 416.286C398.22 489.796 338.759 587.617 312.317 696.299C285.875 804.981 293.751 919.185 334.862 1023.21L838.26 824.26L1103.9 352.64Z"
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
        transform="translate(200 200)"
      />
    </clipPath>
  </defs>
</svg>
