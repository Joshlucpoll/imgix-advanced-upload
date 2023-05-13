<script lang="ts">
  export let onclick = () => undefined;
</script>

<button
  type="button"
  on:click={onclick}
  class="py-3 px-8 bg-white text-black font-bold rounded-md shadow-[0_0_50px_-7px_rgba(255,255,255,1)] hover:shadow-[0_0_100px_-2px_rgba(255,255,255,1)] hover:scale-105 transition-all"
  ><slot /></button
>
