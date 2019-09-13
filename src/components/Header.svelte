<script>
  import { link } from 'svelte-routing';
  import { createEventDispatcher } from 'svelte';
  import logo from '../img/ECO_logo.svg';
  import cart from '../img/shopping-cart.svg';

  import {userType} from '../store';

  const dispatch = createEventDispatcher();

  function cartClick() {
    dispatch('cartClick', {});
  }
</script>

<style>
  .logo {
    width: 170px;
    height: 50px;
  }
  .black-line {
    width: 100%;
    height: 60px;
    background-color: #15201a;
  }
  .root {
    padding: 16px 250px 16px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  .text {
    font-size: 24px;
    color: #000000;
    font-weight: 300;
    cursor: pointer;
    text-decoration: none;
  }
  .cart {
    width: 32px;
    height: 32px;
    margin-left: 24px;
    margin-right: 4px;
  }
  .panel {
    display: flex;
  }
</style>

<div>
  <div class="black-line" />
  <div class="root">
    <div class="logo">
      {@html logo}
    </div>
    <div class="panel">
      <a href="/auth" class="text sarabun" use:link>log {$userType === '' ? 'in' : 'out'}</a>
      <div class="cart">
        {@html cart}
      </div>
      <span class="text sarabun" on:click={cartClick}>cart</span>
    </div>
  </div>
</div>
