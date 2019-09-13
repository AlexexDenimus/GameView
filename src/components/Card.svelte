<script>
  import Checkmark from './Checkmark.svelte';

  import { userType, addToCart } from '../store'
  import { USER_TYPE } from '../consts';

  export let title;
  export let description;
  export let price;
  export let img;
  let successStack = [];


  function add(item) {
    addToCart(item);
    successStack = [...successStack, 'success'];
    console.log({successStack});
  }

  const popStack = () => {
  	successStack = successStack.slice(1, successStack.length);
  }
</script>

<style>
  * {
    font-family: 'Sarabun', sans-serif;
  }
  .wrapper {
    display: flex;
    flex-direction: column;
    min-width: 300px;
  }
  img {
    height: 164px;
    width: 100%;
  }
  .info {
    display: flex;
    flex-direction: column;
  }
  .text {
    display: flex;
    justify-content: space-between;
  }
  .text,
  .button {
    padding: 0 20px;
  }
  .name,
  .price {
    font-size: 24px;
    font-weight: 100;
  }
  .desc {
    font-size: 14px;
    font-weight: 100;
  }
  .button {
    display: flex;
    justify-content: flex-end;
  }
  .buttons {
    display: flex;
    justify-content: space-between;
  }
  button {
    background: #ced7f9;
    color: #3b7632;
    font-size: 18px;
    padding: 10px;
    border: none;
    margin-top: 10px;
    position: relative;
    outline: none;
  }
</style>

<div class="wrapper">
  <img src={img} alt="test" />
  <div class="text">
    <div class="info">
      <span class="name">{title}</span>
      <span class="desc">{description}</span>
    </div>
    <span class="price">${price}</span>
  </div>
  <div class='{$userType === USER_TYPE.user ? "button" : "buttons"}'>
  {#if $userType === USER_TYPE.user}
    <button
      on:click="{() => add({title, description, price, img})}"
    >add to cart
      <Checkmark stack={successStack} popStack={popStack} />
    </button>
  {:else}
    <button>edit item</button>
    <button>remove item</button>
  {/if}
  </div>
</div>
