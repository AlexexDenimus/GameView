<style>
  .form {
    background: #e4e4e4;
    border-radius: 12px;
    padding: 35px;
    width: 435px;
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 20vh;
    left: calc((100% - 435px) / 2); 
  }
</style>

<div class="form">
  <slot />
</div>
