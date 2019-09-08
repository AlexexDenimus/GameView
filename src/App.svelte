<script>
  import { Router, Link, Route } from 'svelte-routing';
  import Auth from './components/Auth.svelte';
  import Main from './components/Main.svelte';

  export let url = '';
</script>

<Router {url}>
  <div>
    <Route path="/" component={Auth} />
    <Route path="/main" component={Main} />
  </div>
</Router>
