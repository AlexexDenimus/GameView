<script>
  import { setUserType } from '../store';

  import Form from './Form.svelte';
  import SignButton from './SignButton.svelte';
</script>

<style>
  .wrapper {
    display: flex;
    justify-content: center;
    margin-top: 200px;
  }
</style>

<div class="wrapper">
  <Form>
    <h1>Login</h1>
    <SignButton text="Login as shopper" on:click={() => setUserType('user')} />
    <SignButton
      text="Login as admin"
      isPrimary={false}
      on:click={() => setUserType('admin')} />
  </Form>
</div>
