<script>
  import { afterUpdate } from 'svelte';
  export let stack = [];
  export let popStack;
  let classes = '';

  afterUpdate(() => {
    if (stack.length > 0) {
      if (!classes) {
        classes = 'success';
        setTimeout(() => {
          classes = '';
          popStack();
        }, 1000);
      }
    }
  });
</script>

<style>
  .success {
    position: absolute;
    right: -25px;
    top: 25%;
    width: 20px;
    height: 20px;
    background: green;
    opacity: 0;
    animation: success ease-in-out 1s infinite;
    background: url('../img/ckeck.png') center;
    background-size: cover;
  }
  @keyframes success {
    0% {
      opacity: 0;
      transform: translateY(40%);
    }
    40%,
    60% {
      opacity: 1;
      transform: none;
    }
    100% {
      opacity: 0;
      transform: translateY(-40%);
    }
  }
</style>

<span class={classes} />
