<script>
  import { navigate } from 'svelte-routing';
  import { onMount } from 'svelte';

  import Header from './Header.svelte';
  import Hero from './Hero.svelte';
  import CardList from './CardList.svelte';
  import About from './About.svelte';
  import Footer from './Footer.svelte';
  import Cart from './Cart.svelte';

  import { userType } from '../store';

  let isCartOpen = false;

  function switchCart() {
    isCartOpen = !isCartOpen;
  }

  $: rootClasses = isCartOpen ? 'root with-cart' : 'root';

  onMount(() => {
    if ($userType !== 'admin' && $userType !== 'user') {
      navigate('/auth');
    }
  });
</script>

<style>
  .root {
    width: 100%;
    transition: transform .3s ease-out;
  }
  .with-cart {
    transform: translateX(-50px);
  }
</style>

<div class={rootClasses}>
  <Header on:cartClick={switchCart} />
  <Hero />
  <CardList />
  <About />
  <Footer />
</div>
<aside>
  <Cart open={ isCartOpen } on:cartClick={switchCart} />
</aside>

