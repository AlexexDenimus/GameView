<script>
import Blur from './Blur.svelte';

export let open = false;
$: classes = open ? 'wrapper open' : 'wrapper closed';
</script>

<style>
  .wrapper {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100px;
    background: white;
    transition: transform .3s ease-out;
  }

  .closed {
    transform: translateX(100%);
  }
</style>

<div class={classes}>

</div>