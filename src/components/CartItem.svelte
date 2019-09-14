<script>
  import { removeFromCart } from '../store'

  export let title;
  export let price;
  export let img;
  export let id;
</script>

<style>
    .root {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        width: 100%;
        margin-top: 8px;
    }
    button {
        background: #ced7f9;
        color: red;
        font-size: 18px;
        padding: 4px;
        border: none;
        margin-top: 10px;
        position: relative;
        outline: none;
  }
  .info {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-left: 8px;
        width: 100%;
  }
    .info_price {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
  }
    img {
        width: 80px;
        min-height: 64px;
    }
</style>

<div class="root">
    <img src={img} alt="cartitem" />
    <div class="info">
    <p>{title}</p>
    <div class="info_price">
        <span>{price}</span>
        <button on:click="{() => removeFromCart(id)}">Delete</button>
    </div>
    </div>
</div>