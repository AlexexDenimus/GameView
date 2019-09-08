<script>
  import cardImg from '../img/card-test.jpg';
</script>

<style>
  * {
    font-family: 'Sarabun', sans-serif;
  }
  .wrapper {
    display: flex;
    flex-direction: column;
    max-width: 300px;
  }
  img {
    max-height: 180px;
    max-width: 100%;
  }
  .info {
    display: flex;
    flex-direction: column;
  }
  .text {
    display: flex;
    justify-content: space-between;
  }
  .text,
  .button {
    padding: 0 20px;
  }
  .name,
  .price {
    font-size: 24px;
    font-weight: 100;
  }
  .desc {
    font-size: 14px;
    font-weight: 100;
  }
  .button {
    display: flex;
    justify-content: flex-end;
  }
  button {
    background: #ced7f9;
    color: #3b7632;
    font-size: 18px;
    padding: 10px;
    border: none;
    margin-top: 10px;
  }
</style>

<div class="wrapper">
  <img src={cardImg} alt="test" />
  <div class="text">
    <div class="info">
      <span class="name">product name</span>
      <span class="desc">product description</span>
    </div>
    <span class="price">$100</span>
  </div>
  <div class="button">
    <button>add to cart</button>
  </div>
</div>
