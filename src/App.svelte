<script>
  import About from './About.svelte';
  import GameList from './GameList.svelte';

  const electron = window.require('electron');
  const { ipcRenderer } = electron;
  const gameData = window.require('../games.json');

  const home = gameData.filter(e => e.name === 'Home')[0];
  const custom = gameData.filter(e => e.name === 'Custom')[0];
  const games = gameData.filter(e => e.name !== 'Home' && e.name !== 'Custom');
  games.sort();
  games.unshift(custom);
  games.unshift(home);

  let selectedGame = home.name;
  let statusMessage = '';
  let clicks = 0;

  let showAbout = false;

</script>

<main>
	<header>
    <h1> <div class="fab fa-nintendo-switch"></div> Nintendo Switch<br>Discord Status </h1>
  </header>

  <div class=spacer></div>

  {#if showAbout}
    <div class="aboutModal">
      <About bind:show={showAbout}/>
    </div>
    <div class="aboutModalCover"></div>
  {/if}

  <div class=container>
      <form>
          <h2> Game </h2>
          <div class=spacer></div>
          <GameList games={games} bind:selectedGame />
          <div class=spacer></div>
          <h2> Status </h2>
          <div class=spacer></div>
          <input 
            class="input is-danger" 
            type=text id=status 
            placeholder="Online, Karting with friends, etc."
            bind:value={statusMessage}
          />
          <div class=spacer></div>
          <input 
            class="button is-danger" 
            type="button"
            value="Submit"
            on:click="{() => ipcRenderer.send('game', selectedGame, statusMessage)}"
          >
        </form>

      <div class=lilSpacer></div>
      <button 
        class="button is-warning" 
        id="idle"
        on:click="{() => {
          clicks++;
          ipcRenderer.send("idle", clicks);
        }}"
      > 
        Idle 
      </button>
      <div class=bigSpacer></div>
      <a 
        id=about 
        style="color:gray;"
        on:click="{() => showAbout = !showAbout}"
      > 
        About 
      </a>
  </div>
</main>

<style>
.aboutModal {
  position: absolute;
  background-color: white;
  z-index: 100;
}

.aboutModalCover {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.7);
  height: 24rem;
  width: 100vw;
  z-index: 99;
}

.container {
    max-width: 20em;
    margin: auto;
    color: #000;
}

.spacer {
    margin-top: 20px;
}

.lilSpacer {
    margin-top: 10px;
}

.bigSpacer {
    margin-top: 25px;
}

</style>