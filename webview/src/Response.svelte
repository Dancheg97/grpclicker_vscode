<script>
  export let respName = "";
  export let response = "";
  $: innerHeight = 0;
  $: height = innerHeight - 170;
</script>

<svelte:window bind:innerHeight />

<div>
  <center>
    <p1>Response - {respName}</p1>
  </center>

  <textarea
    name=""
    id=""
    cols="30"
    rows="10"
    style="--height: {height}px"
    readonly>{response}</textarea
  >
</div>

<style>
  center {
    padding-bottom: 10px;
  }
  div {
    padding-top: 2%;
    padding-left: 3%;
    padding-right: 7%;
  }
  textarea {
    resize: none;
    height: var(--height);
    padding: 1.5px;
  }
</style>
