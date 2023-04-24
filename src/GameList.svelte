<script>
  import Select from 'svelte-select'
 export let selectedGame;
 export let games;
 export let customGame;

 let localSelect = selectedGame;

</script>

<main>
  <div class="select is-danger">
    <Select 
      items={games} 
      value={localSelect} 
      optionIdentifier="name"
      labelIdentifier="name"
      isClearable={false}
      containerStyles="width: 20rem;"
      on:select="{(e) => selectedGame = e.detail.name}"
    />
<!-- When "custom" is selected from the games list, this additional input field appears-->
    {#if selectedGame === 'Custom'}
      <input 
        class="input is-danger customName"
        type="text" 
        bind:value={customGame} 
        placeholder="Game's name"
      >
    {/if}
  </div>
</main>


<style>

.customName {
  margin: 1rem auto;
}

.select {
  --itemIsActiveBG: #e60012;
  --itemHoverBG: #ff9fa7;
  --borderFocusColor: #e60012;
  --border: 1px solid #e60012;
}

</style>