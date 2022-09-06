<script>
    export let iid;
    export let itxt;
    export let iclr;
</script>

<main class={$$props.class}>
    <label for="{iid}" style="color: {iclr}">{itxt}</label>
    <input type="text" id="{iid}">
</main>

<style>
</style>