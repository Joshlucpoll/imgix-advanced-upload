<main class="flex flex-col justify-center items-center">
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
      id="api-input"
      class="p-2 px-4 text-center bg-[#1D1A2488] rounded-md w-full outline outline-slate-400"
      type="password"
      placeholder="API Key"
    />
    <button
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
      <svg
        fill="#fffB"
        height="24px"
        width="24px"
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 488.85 488.85"
        xml:space="preserve"
      >
        <g>
          <path
            d="M244.425,98.725c-93.4,0-178.1,51.1-240.6,134.1c-5.1,6.8-5.1,16.3,0,23.1c62.5,83.1,147.2,134.2,240.6,134.2
       s178.1-51.1,240.6-134.1c5.1-6.8,5.1-16.3,0-23.1C422.525,149.825,337.825,98.725,244.425,98.725z M251.125,347.025
       c-62,3.9-113.2-47.2-109.3-109.3c3.2-51.2,44.7-92.7,95.9-95.9c62-3.9,113.2,47.2,109.3,109.3
       C343.725,302.225,302.225,343.725,251.125,347.025z M248.025,299.625c-33.4,2.1-61-25.4-58.8-58.8c1.7-27.6,24.1-49.9,51.7-51.7
       c33.4-2.1,61,25.4,58.8,58.8C297.925,275.625,275.525,297.925,248.025,299.625z"
          />
        </g>
      </svg>
    </button>
  </div>

  <!-- <div class="my-12 w-full flex flex-row gap-8 items-center justify-center">
    <h2>Source</h2>
    <select
      class="p-2 px-4 text-center bg-[#1D1A24] rounded-md w-60 outline outline-[#803527]"
      disabled
    >
      <option value="" disabled selected>enter API key</option>
    </select>
  </div> -->

  <button
    class="mt-24 py-3 px-8 bg-white text-black font-bold rounded-md shadow-[0_0_50px_-7px_rgba(255,255,255,1)] hover:shadow-[0_0_100px_-2px_rgba(255,255,255,1)] hover:scale-105 transition-all"
    type="button">Select Images</button
  >
</main>
