<script>
  import { userType, setUserType } from "../store";

  const switchAdmin = () => (isAdmin = !isAdmin);
</script>

<p class="sarabun">
  Hello, {$userType} to become a{$userType === 'admin' ? ' user' : 'n admin'},
  click the
  <button
    on:click={() => setUserType($userType === 'admin' ? 'user' : 'admin')}>
    button
  </button>
</p>
