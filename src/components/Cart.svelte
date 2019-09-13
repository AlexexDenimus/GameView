<script>
import Blur from './Blur.svelte';
import Card from './Card.svelte';

import { cartItems } from '../store';

export let open = false;
$: classes = open ? 'wrapper open' : 'wrapper closed';
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

  .open {
  }
</style>

<div class={classes}>
    {#each $cartItems as {title, description, price, img}}
        <Card title={title} description={description} price={price} img={img} />
    {/each}
</div>
