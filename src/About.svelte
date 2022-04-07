<script>
  const version = window.require('../package.json').version;
  export let show;
</script>

<main>
  <div class=aboutHeader>
    <h1 class=left> About </h1>
    <button 
      on:click="{() => show = false}"
      class="closeButton"
    >
      X
    </button>
  </div>

  <div class=spacer></div>

  <div class="aboutContainer left">
      <p>
        Nintendo Switch Discord Status v{version} was forked by hobby-grade from 'NS-RPC' developed by Da532 in hopes of there being an option for those who want to display their Switch games on Discord. 
        <br> Shout out to "Electron in Action" by Steve Kinney. Thanks Brandon, Jake, & Owen 
        <br> Made with &hearts; on DevTerm
      </p>
  </div>
</main>


<style>

.aboutContainer {
  max-width: 30em;
  margin: auto 1rem;
  color: #000;
}

.closeButton {
  background-color: white;
  color: #e60012;
  width: 2rem;
  height: 2rem;
  font-size: x-large;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Roboto;
  margin-left: auto;
}

.closeButton:hover {
  background-color: #e60012;
  color: white;
}
  
.left {
  text-align: left;
}

.spacer {
  margin-top: 20px;
}

.aboutHeader {
  background-color:#e60012;
  color:white;
  padding: 0.5em;
  font-family: Roboto;
  font-style: italic;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>