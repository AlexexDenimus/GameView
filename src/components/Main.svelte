<script>
  import { navigate } from 'svelte-routing';

  import Header from './Header.svelte';
  import Hero from './Hero.svelte';
  import CardList from './CardList.svelte';

  import { userType } from '../store';

  if ($userType !== 'admin' && $userType !== 'user') {
    navigate('/auth');
  }
</script>

<Header />
<Hero />
<CardList />
