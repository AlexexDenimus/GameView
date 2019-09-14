<script>
import Blur from './Blur.svelte';
import CartItem from './CartItem.svelte';

import { cartItems } from '../store';

export let open = false;
$: classes = open ? 'wrapper' : 'wrapper closed';
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

  .closed {
    transform: translateX(100%);
  }
</style>

<div class={classes}>
    {#each $cartItems as {title, price, img, id}}
        <CartItem title={title} price={price} img={img} id={id} />
    {/each}
</div>
