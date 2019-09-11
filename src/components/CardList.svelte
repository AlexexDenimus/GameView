<script>
  import Card from './Card.svelte';
  import cardList from '../cards';

  let { cards } = cardList;
</script>

<style>
    .root{
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    h1 {
        font-size: 64px;
        text-align: center;
        margin-top: 64px;
        margin-bottom: 24px;
    }
    .grid {
		display: grid;
		grid-template-columns: repeat(3, 300px);
		grid-gap: 20px;
        margin: 24px auto 64px;
    }
</style>

<div class="root">
    <h1>Our Shop</h1>
    <div class="grid">
        {#each cards as {title, description, price, img}}
            <Card title={title} description={description} price={price} img={img} />
        {/each}
    </div>
</div>


