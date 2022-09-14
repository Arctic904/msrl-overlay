<script>
    import {createPanelConnection} from "../scripts/socket";
    import {updateScreen} from "../scripts/socket";
    import * as reset from "../scripts/reset-funcs"
    import {onMount} from "svelte";
    import DblBtn from "./buttons/dblBtn.svelte";
    import DoubleInput from "./inputs/h-dbli.svelte";
    import WinCtr from "./inputs/win-ctr.svelte"
    import Colors from "./inputs/colors.svelte"
    import Logos from "./inputs/logos.svelte"

    onMount(() => {
        createPanelConnection();
        document.getElementById("series-length").setAttribute("list", "series-lengths")
    });
</script>

<main>
  <div class="wrapper">
      <DblBtn
              txtList={["UPDATE<br/>OVERLAY", "RESET<br/>WINS"]}
              funcList={[updateScreen, reset.resetWins]}
      />
        <div class="tabs">
          <div class="tab">
            <input type="radio" name="css-tabs" id="tab-1" checked class="tab-switch">
            <label for="tab-1" class="tab-label">Game Information</label>
            <div class="tab-content">
                <DoubleInput
                        title="game / series info"
                        liid={['series-length', 'topbox']}
                        ltxt={["Choose a Series Length", "Text Above Scoreboard"]}
                />
                <datalist id="series-lengths">
                    <option value="1">Best of 1</option>
                    <option value="3">Best of 3</option>
                    <option value="5">Best of 5</option>
                    <option value="7">Best of 7</option>
                </datalist>
            </div>
          </div>
          <div class="tab">
            <input type="radio" name="css-tabs" id="tab-2" class="tab-switch">
            <label for="tab-2" class="tab-label">Team Information</label>
            <div class="tab-content">
                <DoubleInput
                        title="Team Names"
                        liid={['blue-name', 'orng-name']}
                        ltxt={['Input Blue Name Here', 'Input Orange Name Here']}
                        lclr={["lightskyblue", "orange"]}
                />
                <br>
                <WinCtr/>
            </div>
          </div>
        </div>
      </div>
</main>

<style>
* {
  box-sizing: border-box;
}
body {
  font-family: "Open Sans";
  background: #2c3e50;
  color: #333;
  line-height: 1.618em;
}
.wrapper {
  max-width: 50rem;
  width: 100%;
  margin: 0 auto;
}
.tabs {
  position: relative;
  margin: 3rem 0;
  background: #1abc9c;
  height: 14.75rem;
}
.tabs::before,
.tabs::after {
  content: "";
  display: table;
}
.tabs::after {
  clear: both;
}
.tab {
  float: left;
}
.tab-switch {
  display: none;
}
.tab-label {
  position: relative;
  display: block;
  line-height: 2.75em;
  height: 3em;
  padding: 0 1.618em;
  background: #1abc9c;
  border-right: 0.125rem solid #16a085;
  color: #333;
  cursor: pointer;
  top: 0;
  transition: all 0.25s;
}
.tab-label:hover {
  top: -0.25rem;
  transition: top 0.25s;
}
.tab-content {
  height: auto;
  position: absolute;
  z-index: 1;
  top: 2.75em;
  left: 0;
  padding: 1.618rem;
  background: #333;
  color: #2c3e50;
  opacity: 0;
  transition: all 0.35s;
}
.tab-switch:checked + .tab-label {
  background: #fff;
  color: #2c3e50;
  border-bottom: 0;
  border-right: 0.125rem solid #fff;
  transition: all 0.35s;
  z-index: 1;
  top: -0.0625rem;
}
.tab-switch:checked + label + .tab-content {
  z-index: 2;
  opacity: 1;
  transition: all 0.35s;
}

</style>
