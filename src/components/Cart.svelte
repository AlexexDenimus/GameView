<script>
import { createEventDispatcher } from 'svelte';
import Blur from './Blur.svelte';
import CartItem from './CartItem.svelte';

import { cartItems } from '../store';

export let open = false;
$: classes = open ? 'wrapper' : 'wrapper closed';
const dispatch = createEventDispatcher();

function cartClick() {
  dispatch('cartClick', {});
}
</script>

<style>
  .wrapper {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 300px;
    background: white;
    transition: transform .3s ease-out;
    box-shadow: 0 0 40px rgba(0, 0, 0, 0.3);
  }
  .description {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 24px;
  }
  .closed {
    transform: translateX(100%);
  }
  span {
    cursor: pointer;
  }
</style>

<div class={classes}>
<div class="description">
  <h1>Cart</h1><span on:click="{cartClick}">❌</span>
</div>
    {#each $cartItems as {title, price, img, id}}
        <CartItem title={title} price={price} img={img} id={id} />
    {/each}
</div>
