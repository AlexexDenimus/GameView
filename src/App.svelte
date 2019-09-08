<script>
  import { Router, Link, Route } from 'svelte-routing';
  import { Auth } from './components/Auth';

  export let url = '';
</script>

<Router {url}>
  <nav>
    <Link to="/">Home</Link>
    <Link to="auth">Auth</Link>
  </nav>
  <div>
    <Route path="auth" component={Auth} />
    <Route path="/">
      <div>home page</div>
    </Route>
  </div>
</Router>
