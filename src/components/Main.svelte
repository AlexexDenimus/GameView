<script>
  import { navigate } from 'svelte-routing';
  import { onMount } from 'svelte';

  import Header from './Header.svelte';
  import Hero from './Hero.svelte';
  import CardList from './CardList.svelte';
  import About from './About.svelte';
  import Footer from './Footer.svelte';


  import { userType } from '../store';

  onMount(() => {
    if ($userType !== 'admin' && $userType !== 'user') {
      navigate('/auth');
    }
  });
</script>

<style>
  .root {
    width: 100%;
  }
</style>

<div class="root">
  <Header />
  <Hero />
  <CardList />
  <About />
  <Footer />
</div>

