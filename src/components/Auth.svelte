<script>
  import { navigate } from 'svelte-routing';

  import { setUserType } from '../store';
  import { USER_TYPE } from '../consts';

  import Form from './Form.svelte';
  import SignButton from './SignButton.svelte';

  const onClick = userType => {
    setUserType(userType);
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
    <SignButton text="Login as shopper" on:click="{() => onClick(USER_TYPE.user)}" />
    <SignButton
      text="Login as admin"
      isPrimary={false}
      on:click="{() => onClick(USER_TYPE.admin)}" />
  </Form>
</div>
