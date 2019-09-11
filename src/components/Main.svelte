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

<Header />
<Hero />
<CardList />
<About />
<Footer />

