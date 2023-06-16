<script>
    export let name;
    export let desc;
    export let img_src;
</script>


<div style="display: flex;">
  <div style="flex-basis: 33%; display: flex; align-items: center;">
    <img src="{img_src}" alt="Picture of {name}" style="max-width: 100%; height: 20vh; margin: auto ">
  </div>
  <div style="flex-basis: 66%;">
    <h2>{name}</h2>
    <p>{desc}</p>
  </div>
</div>

<style>
    p {
        text-align: left;
    }
</style>