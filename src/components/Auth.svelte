<script>
  import { navigate } from 'svelte-routing';

  import { setUserType } from '../store';

  import Form from './Form.svelte';
  import SignButton from './SignButton.svelte';

  const onClick = usrType => {
    setUserType(usrType);
    navigate('/');
  };
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
    <SignButton text="Login as shopper" on:click={() => onClick('user')} />
    <SignButton
      text="Login as admin"
      isPrimary={false}
      on:click={() => onClick('admin')} />
  </Form>
</div>
