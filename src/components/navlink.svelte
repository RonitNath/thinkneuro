<script>
    export let to;
    export let name;
    import { link } from "svelte-spa-router";

</script>

<button>

    <a href="{to}" use:link class="navlink">{name}</a>
</button>