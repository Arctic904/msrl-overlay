<script>
    import ModBtn from "./mod-buttons.svelte"
    export let txtList;
    export let funcList;
</script>
<main>
    <div style="display: flex">
        <ModBtn btnTxt={txtList[0]} clickHandler={funcList[0]}/>
        <ModBtn btnTxt={txtList[1]} clickHandler={funcList[1]}/>
    </div>
</main>