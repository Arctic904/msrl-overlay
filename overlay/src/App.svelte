<script>
  import Scoreboard from "./components/scoreboard.svelte";
  import { onMount } from "svelte";

  import { createSocketConnection } from "./scripts/socket.js"
import Focscard from "./components/focscard.svelte";
import Playercard from "./components/playercard.svelte";

  onMount(() => {
        createSocketConnection()
  })
</script>

<main>
  <img src="/src/assets/Asset%204.png" alt="test" width="1920" height="1080" style="position:absolute; left: 0px; top: 0px;">
  <Scoreboard />
  <Focscard />
  <Playercard />

</main>
