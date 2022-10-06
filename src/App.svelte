<!-- TESTING Adding the ability to create notifications -->

<div id="notification" class="hidden">
  <p id="message"></p>
  <button id="close-button" onClick="closeNotification()">
    Close
  </button>
  <button id="restart-button" onClick="restartApp()" class="hidden">
    Restart
  </button>
</div>

<!-- TESTING -->

<script>
  import About from './About.svelte';
  import GameList from './GameList.svelte';

  // Testing notification listener
  const notification = document.getElementById('notification');
  const message = document.getElementById('message');
  const restartButton = document.getElementById('restart-button');
  // Done
  const electron = window.require('electron');
  const { ipcRenderer } = electron;
  const gameData = window.require('../games.json');
  const version = window.require('../package.json').version;

  const home = gameData.filter(e => e.name === 'Home')[0];
  const custom = gameData.filter(e => e.name === 'Custom')[0];
  const games = gameData.filter(e => e.name !== 'Home' && e.name !== 'Custom');
  games.sort();
  games.unshift(custom);
  games.unshift(home);

  let selectedGame = home.name;
  let statusMessage = '';
  let customGameName = '';
  let clicks = 0;

  let showAbout = false;

  ipcRenderer.on('update_available', () => {
  ipcRenderer.removeAllListeners('update_available');
  message.innerText = 'A new update is available. Downloading now...';
  notification.classList.remove('hidden');
});

ipcRenderer.on('update_downloaded', () => {
  ipcRenderer.removeAllListeners('update_downloaded');
  message.innerText = 'Update Downloaded. It will be installed on restart. Restart now?';
  restartButton.classList.remove('hidden');
  notification.classList.remove('hidden');
});

function closeNotification() {
  notification.classList.add('hidden');
}

function restartApp() {
  ipcRenderer.send('restart_app');
}

</script>

<main>
	<header>
    <h1> <div class="fab fa-nintendo-switch"></div> Nintendo Switch<br>Discord Status </h1>
    <p>v{version}</p>
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
          <GameList games={games} bind:customGame={customGameName} bind:selectedGame />
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
            on:click="{() => ipcRenderer.send('game', selectedGame, statusMessage, customGameName)}"
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

#notification {
  position: fixed;
  bottom: 20px;
  left: 20px;
  width: 200px;
  padding: 20px;
  border-radius: 5px;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}
.hidden {
  display: none;
}

</style>