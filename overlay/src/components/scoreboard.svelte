<script>
  import { data } from "../scripts/socket.js"
  let time;
  $: {
    console.log($data)

    time = $data.game.time_seconds

    time = `${$data.game.isOT ? "+":""}${Math.floor(time/60)}:${time%60 < 10 ? "0" + time%60 : time%60}`
  }
</script>

<main>
    <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" width="1121.33" height="104.09" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1121.33 104.09" style="position: absolute; top: 0; left: 400">
      <defs>
        <linearGradient id="linear-gradient" x1="456.62" y1="36.38" x2="664.72" y2="36.38" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#4638ac"/>
          <stop offset=".5" stop-color="#7a46e9"/>
          <stop offset="1" stop-color="#4638ac"/>
        </linearGradient>
        <linearGradient id="New_Gradient_Swatch_3" data-name="New Gradient Swatch 3" x1="456.62" y1="87.53" x2="664.72" y2="87.53" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#4638ac"/>
          <stop offset=".5" stop-color="#7a46e9"/>
          <stop offset="1" stop-color="#4638ac"/>
        </linearGradient>
        <linearGradient id="New_Gradient_Swatch_2" data-name="New Gradient Swatch 2" x1="1120.32" y1="36.38" x2="665.72" y2="36.38" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#197c77"/>
          <stop offset="1" stop-color="#4638ac"/>
        </linearGradient>
        <linearGradient id="New_Gradient_Swatch_2-2" data-name="New Gradient Swatch 2" x1="849.25" y1="87.53" y2="87.53" xlink:href="#New_Gradient_Swatch_2"/>
        <linearGradient id="New_Gradient_Swatch_2-3" data-name="New Gradient Swatch 2" x1="1.01" x2="455.62" y2="36.38" xlink:href="#New_Gradient_Swatch_2"/>
        <linearGradient id="New_Gradient_Swatch_2-4" data-name="New Gradient Swatch 2" x1="3.84" y1="87.53" x2="456.13" y2="87.53" xlink:href="#New_Gradient_Swatch_2"/>
      </defs>
      <g id="Layer_1-2" data-name="Layer 1">
        <g>
          <rect x="456.62" y=".5" width="208.1" height="71.77" style="fill: url(#linear-gradient);"/>
          <path d="M664.21,1V71.77h-207.1V1h207.1M665.21,0h-209.1V72.77h209.1V0h0Z"/>
        </g>
        <g>
          <rect x="456.62" y="73.27" width="208.1" height="28.52" style="fill: url(#New_Gradient_Swatch_3);"/>
          <path d="M664.21,73.77v27.52h-207.1v-27.52h207.1m1-1h-209.1v29.52h209.1v-29.52h0Z"/>
        </g>
        <g>
          <polygon points="665.72 72.27 665.72 .5 1120.32 .5 1065.49 72.27 665.72 72.27" style="fill: url(#New_Gradient_Swatch_2);"/>
          <path d="M1119.31,1l-54.07,70.77h-399.03V1h453.1m2.02-1h-456.12V72.77h400.52L1121.33,0h0Z"/>
        </g>
        <g>
          <polygon points="665.72 101.79 665.72 73.27 849.25 73.27 827.46 101.79 665.72 101.79" style="fill: url(#New_Gradient_Swatch_2-2);"/>
          <path d="M848.24,73.77l-21.03,27.52h-161v-27.52h182.02m2.02-1h-185.05v29.52h162.49l22.55-29.52h0Z"/>
        </g>
        <g>
          <polygon points="55.84 72.27 1.01 .5 455.62 .5 455.62 72.27 55.84 72.27" style="fill: url(#New_Gradient_Swatch_2-3);"/>
          <path d="M455.12,1V71.77H56.09L2.02,1H455.12M456.12,0H0L55.6,72.77H456.12V0h0Z"/>
        </g>
        <g>
          <polygon points="293.87 101.79 272.08 73.27 455.62 73.27 455.62 101.79 293.87 101.79" style="fill: url(#New_Gradient_Swatch_2-4);"/>
          <path d="M455.12,73.77v27.52h-161l-21.03-27.52h182.02m1-1h-185.05l22.55,29.52h162.49v-29.52h0Z"/>
        </g>
        <text transform="translate(53.54 48.35)" style="font-family: Arial;font-weight: 800; font-size: 39px;">{$data?.teams[0]?.name || ""}</text>
        <text transform="translate(1072.97 48.35)" text-anchor="end" style="font-family: Arial;font-weight: 800; font-size: 39px;">{$data?.teams[1]?.name || ""}</text>
        <text transform="translate(561.45 54.37)" text-anchor="middle" style="font-family: Arial;font-weight: 800; font-size: 50.74px;">{time}</text>
        <text transform="translate(498.82 96.42)" style="font-family: Arial;font-weight: 800; font-size: 25px;">Best of 5</text>
        <g>
          <rect x="401.65" y="77.71" width="36.9" height="19.63" style="fill: #fff; stroke: #000; stroke-miterlimit: 10; stroke-width: 2px;"/>
          <rect x="364.75" y="77.71" width="36.9" height="19.63" style="fill: #fff; stroke: #000; stroke-miterlimit: 10; stroke-width: 2px;"/>
          <rect x="327.85" y="77.71" width="36.9" height="19.63" style="fill: #fff; stroke: #000; stroke-miterlimit: 10; stroke-width: 2px;"/>
          <polygon points="304.66 97.35 327.83 97.35 327.83 77.73 289.67 77.73 304.66 97.35" style="fill: #fff; stroke: #000; stroke-miterlimit: 10; stroke-width: 2px;"/>
        </g>
        <g>
          <rect x="682.79" y="77.71" width="36.9" height="19.63" style="fill: #fff; stroke: #000; stroke-miterlimit: 10; stroke-width: 2px;"/>
          <rect x="719.69" y="77.71" width="36.9" height="19.63" transform="translate(1476.27 175.04) rotate(-180)" style="fill: #fff; stroke: #000; stroke-miterlimit: 10; stroke-width: 2px;"/>
          <rect x="756.58" y="77.71" width="36.9" height="19.63" transform="translate(1550.07 175.04) rotate(-180)" style="fill: #fff; stroke: #000; stroke-miterlimit: 10; stroke-width: 2px;"/>
          <polygon points="816.67 97.35 793.5 97.35 793.5 77.73 831.67 77.73 816.67 97.35" style="fill: #fff; stroke: #000; stroke-miterlimit: 10; stroke-width: 2px;"/>
        </g>
        <text transform="translate(427.21 48.36)" text-anchor="middle" style="font-family: Arial; font-weight: 800; font-size: 39px;">{$data?.teams[0]?.score || ""}</text>
        <text transform="translate(692.54 48.36)" text-anchor="middle" style="font-family: Arial; font-weight: 800; font-size: 39px;">{$data?.teams[1]?.score || ""}</text>
      </g>
    </svg>
</main>

<style>

</style>