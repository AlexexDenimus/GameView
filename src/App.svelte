<script>
  import { Router, Link, Route } from 'svelte-routing';
  import Auth from './components/Auth.svelte';
  import Main from './components/Main.svelte';

  export let url = '';
</script>

<Router {url}>
  <nav>
    <Link to="/">Auth</Link>
    <Link to="/main">Main</Link>
  </nav>
  <div>
    <Route path="/" component={Auth} />
    <Route path="/main" component={Main} />
</Router>
