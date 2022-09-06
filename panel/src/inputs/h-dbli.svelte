<script>
    import SglInput from "./SglInput.svelte";
    export let liid;
    export let ltxt;
    export let lclr = ["white", "white"];
    export let title;
</script>

<main>
    <div style="color: lightskyblue; font-family: integral-reg; font-size: 24px">{title}</div>
    <br>
    <div style="display: flex" class="dbl-input">
        <SglInput iid={liid[0]} itxt={ltxt[0]} iclr={lclr[0]} />
        <SglInput iid={liid[1]} itxt={ltxt[1]} iclr={lclr[1]} class="inp-2"/>
    </div>
</main>

<style>
    .dbl-input :global(.inp-2) {
        padding-left: 49px;
    }
</style>