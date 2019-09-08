<script>
  export let isPrimary = true;
  export let text = 'signin as default';
</script>

<style>
  .primary {
    background: #3b7632;
    color: white;
  }
  .secondary {
    background: white;
    color: #3b7632;
  }
  button {
    border-radius: 5px;
    margin-top: 20px;
    font-size: 18px;
    font-weight: 600;
    padding: 10px;
    width: 100%;
    text-transform: uppercase;
  }
</style>

<button class={(isPrimary && 'primary') || 'secondary'} on:click>{text}</button>
