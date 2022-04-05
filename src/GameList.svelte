<script>
  import Select from 'svelte-select'
 export let selectedGame;
 export let games;

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
  </div>
</main>


<style>

.select {
  --itemIsActiveBG: #e60012;
  --itemHoverBG: #ff9fa7;
  --borderFocusColor: #e60012;
  --border: 1px solid #e60012;
}

</style>