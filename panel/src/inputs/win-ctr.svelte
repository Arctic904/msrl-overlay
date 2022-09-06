<!--suppress ALL -->
<script>
    function blueUp() {
        if (document.getElementById("blueWins").value !== 4) {
            document.getElementById("blueWins").value =
                parseInt(document.getElementById("blueWins").value) + 1;
        }
    }
    function orngUp() {
        if (document.getElementById("orngWins").value !== 4) {
            document.getElementById("orngWins").value =
                parseInt(document.getElementById("orngWins").value) + 1;
        }
    }
</script>

<main>
    <div style="color: lightskyblue; font-family: integral-reg; font-size: 24px">WIN COUNTERS</div>
    <div style="display: flex">
        <div>
            <label for="blueWins" style="color: lightskyblue">Set wins for Blue (left)</label>

            <input
                    type="number"
                    id="blueWins"
                    name="blueWins"
                    min="0"
                    max="4"
                    value="0"
                    style="width: 90px"
            />
            <button class="bluebtn"	style="width: 100px" on:click={() => blueUp()}>Blue Win</button>
        </div>

        <div style="padding-left: 20px">
            <label for="orngWins" style="color: orange">Set wins for Orange (right)</label>

            <input
                    type="number"
                    id="orngWins"
                    name="orngWins"
                    min="0"
                    max="4"
                    value="0"
                    style="width: 93px"
            />
            <button class="orngbtn" style="width: 100px" on:click={() => orngUp()}>Orange Win</button>
        </div>
    </div>
</main>

<style>
</style>