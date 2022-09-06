<script>
    import * as colorfunc from "../../scripts/color-fucns"
</script>

<main>
    <div style="color: lightskyblue; font-family: integral-reg; font-size: 24px">TEAM COLORS</div>
    <div class="color-selctors" style="display: flex">
        <div>
            <label for="blue-color" style="color: lightskyblue">Left / Blue Primary</label>
            <input type="text" id="blue-color" name="blue-color" style="width: 140px" value="#52acfe"
                   on:keyup={() => colorfunc.bluecolor()}/>
            <input type="color" id="blue-color-picker" name="blue-color-picker" value="#52acfe"
                   on:change={() => colorfunc.bluecolortobox()}>
        </div>
        <br>
        <div style="padding-left: 20px">
            <label for="orng-color-2" style="color: orange">Right / Orange Primary</label>
            <input type="text" id="orng-color-2" name="orng-color-2" style="width: 140px" value="#ee8723"
                   on:keyup={() => colorfunc.orangecolor2()}/>
            <input type="color" id="orng-color-picker-2" name="orng-color-picker-2" value="#ee8723"
                   on:change={() => colorfunc.orangecolortobox2()}>
        </div>
    </div>
    <br>
    <div class="color-selectors" style="display: flex">
        <div>
            <label for="blue-color-2" style="color: lightskyblue">Left / Blue Secondary</label>
            <input type="text" id="blue-color-2" name="blue-color-2" style="width: 140px" value="#000000"
                   on:keyup={() => colorfunc.bluecolor2()}/>
            <input type="color" id="blue-color-picker-2" name="blue-color-picker-2" value="#000000"
                   on:change={() => colorfunc.bluecolortobox2()}>
        </div>
        <div style="padding-left: 20px">
            <label for="orng-color" style="color: orange">Right / Orange Secondary</label>
            <input type="text" id="orng-color" name="orng-color" style="width: 140px" value="#000000"
                   on:keyup={() => colorfunc.orangecolor()}/>
            <input type="color" id="orng-color-picker" name="orng-color-picker" value="#000000"
                   on:change={() => colorfunc.orangecolortobox()}>
        </div>
    </div>
    <br>
    <div class="text-color-selectors" style="display: flex">
        <div>
            <label for="blue-text-color" style="color: lightskyblue">Left / Blue Text Color</label>
            <input type="text" id="blue-text-color" name="blue-text-color" style="width: 140px" value="#ffffff"
                   on:keyup={() => colorfunc.bluetextcolor()}/>
            <input type="color" id="blue-text-color-picker" name="blue-text-color-picker" value="#ffffff"
                   on:change={() => colorfunc.bluetextcolortobox()}>
        </div>
        <div style="padding-left: 20px">
            <label for="orng-text-color" style="color: orange">Right / Orange Text Color</label>
            <input type="text" id="orng-text-color" name="orng-text-color" style="width: 140px" value="#ffffff"
                   on:keyup={() => colorfunc.orangetextcolor()}/>
            <input type="color" id="orng-text-color-picker" name="orng-text-color-picker" value="#ffffff"
                   on:change={() => colorfunc.orangetextcolortobox()}>
        </div>
    </div>
</main>

<style>
</style>