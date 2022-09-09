<script>
  import { data, panelData } from "../scripts/socket.js"
  import { resizeToFit } from "../scripts/resizetofit"
  let time;
  $: {
    if($data){
      document.getElementById("blue-name").style.fontSize = "35px"
      resizeToFit(document.getElementById("blue-name"), 260)
      document.getElementById("orng-name").style.fontSize = "35px"
      resizeToFit(document.getElementById("orng-name"), 260)
    }

    console.log($data)

    time = $data?.game.time_seconds || ""

    time = `${$data?.game.isOT ? "+":""}${Math.floor(time/60)}:${time%60 < 10 ? "0" + time%60 : time%60}`

    const filler = (team, num) => {
      for(let i = 1; i<=4; i++){
        document.getElementById(`${team}-tick-${i}`).style.fill = null
      }
      for(let i = 1; i<=num; i++){
        document.getElementById(`${team}-tick-${i}`).style.fill = team == "orng" ? "#7D44ED" : "#4CDBB2"
      }
    }
    const blocker = (team, num) => {
      for(let i = 1; i<=4; i++){
        document.getElementById(`${team}-tick-${i}`).style.display = "block"
      }
      for(let i = num; i<=4; i++){
        document.getElementById(`${team}-tick-${i}`).style.display = "none"
      }
    }
    if(document.getElementById("blue-ticks")){
      filler("blue", $panelData.blueScore)
      filler("orng", $panelData.orngScore)
      blocker("blue", $panelData.seriesLength)
      blocker("orng", $panelData.seriesLength)
    }
  }
</script>

<main>
  <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" width="929.22" height="114.11" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 929.22 114.11" style="position: absolute; top:0px; left: 500px">
    <defs>
      <linearGradient id="linear-gradient" x1="363.38" y1="16.55" x2="565.81" y2="16.55" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#1a1a1a"/>
        <stop offset=".51" stop-color="#333"/>
        <stop offset="1" stop-color="#1a1a1a"/>
      </linearGradient>
      <linearGradient id="linear-gradient-2" y1="59.89" y2="59.89" xlink:href="#linear-gradient"/>
      <linearGradient id="linear-gradient-3" x1="378.38" y1="99.63" x2="550.81" y2="99.63" xlink:href="#linear-gradient"/>
      <linearGradient id="linear-gradient-4" x1="11.14" y1="59.89" x2="368.37" y2="59.89" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#4CDBB2"/>
        <stop offset="1" stop-color="#1a1a1a"/>
      </linearGradient>
      <linearGradient id="linear-gradient-5" x1="11.49" x2="368.76" xlink:href="#linear-gradient-4"/>
      <linearGradient id="linear-gradient-6" x1="10.59" y1="99.63" x2="366.05" y2="99.63" xlink:href="#linear-gradient-4"/>
      <linearGradient id="linear-gradient-7" x1="135.68" y1="59.89" x2="492.91" y2="59.89" gradientTransform="translate(1053.75) rotate(-180) scale(1 -1)" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#7D44ED"/>
        <stop offset="1" stop-color="#1a1a1a"/>
      </linearGradient>
      <linearGradient id="linear-gradient-8" x1="136.03" x2="493.29" xlink:href="#linear-gradient-7"/>
      <linearGradient id="linear-gradient-9" x1="135.13" y1="99.63" x2="490.58" y2="99.63" xlink:href="#linear-gradient-7"/>
    </defs>
    <g id="Layer_2-2" data-name="Layer 2">
      <g id="Scoreboard">
        <g id="Backgrounds">
          <g>
            <polygon points="565.81 32.6 363.38 32.6 388.42 .5 540.83 .5 565.81 32.6" style="fill: url(#linear-gradient); stroke: #000; stroke-miterlimit: 10;"/>
            <polygon points="550.81 87.18 378.38 87.18 363.38 32.6 565.81 32.6 550.81 87.18" style="fill: url(#linear-gradient-2); stroke: #000; stroke-miterlimit: 10;"/>
            <polygon points="543.31 112.08 385.88 112.08 378.38 87.18 550.81 87.18 543.31 112.08" style="fill: url(#linear-gradient-3); stroke: #000; stroke-miterlimit: 10;"/>
          </g>
          <polygon points="74.92 87.18 378.38 87.18 363.38 32.6 59.92 32.6 74.92 87.18" style="fill: url(#linear-gradient-4); stroke: #000; stroke-miterlimit: 10;"/>
          <polygon points="15.66 87.18 74.92 87.18 59.92 32.6 .66 32.6 15.66 87.18" style="fill: url(#linear-gradient-5); stroke: #000; stroke-miterlimit: 10;"/>
          <polygon points="233.56 87.18 241.06 112.08 385.96 112.08 378.46 87.18 233.56 87.18" style="fill: url(#linear-gradient-6); stroke: #000; stroke-miterlimit: 10;"/>
          <polygon points="854.3 87.18 550.84 87.18 565.84 32.6 869.3 32.6 854.3 87.18" style="fill: url(#linear-gradient-7); stroke: #000; stroke-miterlimit: 10;"/>
          <polygon points="913.56 87.18 854.3 87.18 869.3 32.6 928.56 32.6 913.56 87.18" style="fill: url(#linear-gradient-8); stroke: #000; stroke-miterlimit: 10;"/>
          <polygon points="695.66 87.18 688.16 112.08 543.26 112.08 550.76 87.18 695.66 87.18" style="fill: url(#linear-gradient-9); stroke: #000; stroke-miterlimit: 10;"/>
        </g>
        <text id="best-of" transform="translate(413.41 22.92)" style="fill: #fff; font-family: IntegralCF-DemiBold, &apos;Integral CF&apos;; font-size: 19px; letter-spacing: -.01em;">Best Of {$panelData.seriesLength}</text>
        <text id="game" transform="translate(426.36 106.92)" style="fill: #fff; font-family: IntegralCF-DemiBold, &apos;Integral CF&apos;; font-size: 19px; letter-spacing: -.01em;">Game {$panelData.blueScore + $panelData.orngScore + 1}</text>
        <text id="time" transform="translate(423.86 72.31)" style="fill: #fff; font-family: IntegralCF-DemiBold, &apos;Integral CF&apos;; font-size: 35px; letter-spacing: -.01em;">{time}</text>
        <g id="blue">
          <g id="blue-ticks">
            <polygon id="blue-tick-1" points="349.71 109.11 369.71 109.11 364.06 90.02 344.06 90.02 349.71 109.11" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/>
            <polygon id="blue-tick-2" points="318.23 109.11 338.23 109.11 332.57 90.02 312.57 90.02 318.23 109.11" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/>
            <polygon id="blue-tick-3" points="286.75 109.11 306.75 109.11 301.09 90.02 281.09 90.02 286.75 109.11" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/>
            <polygon id="blue-tick-4" points="255.26 109.11 275.26 109.11 269.61 90.02 249.61 90.02 255.26 109.11" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/>
          </g>
          <text id="blue-score" transform="translate(25.7 72.31)" style="fill: #fff; font-family: IntegralCF-DemiBold, &apos;Integral CF&apos;; font-size: 35px; letter-spacing: -.01em;">{$data?.teams[0].score || 0}</text>
          <text id="blue-name" transform="translate(352.2 60.31)" dominant-baseline="middle" text-anchor="end" style="fill: #fff; font-family: IntegralCF-DemiBold, &apos;Integral CF&apos;; font-size: 35px; letter-spacing: -.01em;">{$panelData?.blueName || $data?.teams[0].name || ""}</text>
        </g>
        <g id="orng">
          <g id="orng-ticks">
            <polygon id="orng-tick-1" points="579.61 109.11 559.61 109.11 565.26 90.02 585.26 90.02 579.61 109.11" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/>
            <polygon id="orng-tick-2" points="611.09 109.11 591.09 109.11 596.75 90.02 616.75 90.02 611.09 109.11" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/>
            <polygon id="orng-tick-3" points="642.57 109.11 622.57 109.11 628.23 90.02 648.23 90.02 642.57 109.11" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/>
            <polygon id="orng-tick-4" points="674.06 109.11 654.06 109.11 659.71 90.02 679.71 90.02 674.06 109.11" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/>
          </g>
          <text id="orng-score" transform="translate(879.34 72.31)" style="fill: #fff; font-family: IntegralCF-DemiBold, &apos;Integral CF&apos;; font-size: 35px; letter-spacing: -.01em;">{$data?.teams[1].score || 0}</text>
          <text id="orng-name" transform="translate(574.84 60.31)" dominant-baseline="middle" style="fill: #fff; font-family: IntegralCF-DemiBold, &apos;Integral CF&apos;; font-size: 35px; letter-spacing: -.01em;">{$panelData?.orngName || $data?.teams[1].name || ""}</text>
        </g>
      </g>
    </g>
  </svg>
</main>

<style>

</style>