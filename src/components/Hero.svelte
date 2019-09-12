<script>
  import heroImg from '../img/Hero.jpg';
</script>

<style>
  .wrapper {
    position: relative;
  }
  .text {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
  }
  .clean {
    padding-top: 79px;
  }
  .clean,
  .ecology {
    font-size: 96px;
    -webkit-font-smoothing: antialiased;
  }
  .recycled {
    font-size: 144px;
  }
  a {
    display: block;
    color: black;
    text-decoration: none;
    background: #ececec;
    margin-top: 140px;
    width: 300px;
    height: 60px;
    font-size: 24px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  a:active {
    background: #bbbbbb;
  }
  img {
    width: 100%;
  }
</style>

<div class="wrapper">
  <img src={heroImg} alt="hero" />
  <div class="text">
    <span class="clean">clean.</span>
    <span class="ecology">ecology.</span>
    <span class="recycled">recycled.</span>
    <a href="#grid">try it now.</a>
  </div>
</div>
