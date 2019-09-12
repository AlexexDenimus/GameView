<script>
  import Card from './Card.svelte';
  import cardList from '../cards';
  import SignButton from './SignButton.svelte';
  import AddCart from './AddCart.svelte';

  import { userType } from '../store';
  import { USER_TYPE } from '../consts';

  let { cards } = cardList;
  let openModal = false;
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
    .add {
        width: 64px;
        margin: 0 auto 64px;
    }
</style>

<div class="root" id="grid">
    <h1>Our Shop</h1>
    <div class="grid">
        {#each cards as {title, description, price, img}}
            <Card title={title} description={description} price={price} img={img} />
        {/each}
    </div>
    {#if $userType === USER_TYPE.admin}
    <div class="add">
        <SignButton text="Add" on:click="{() => { return openModal = true }}" />
    </div>
    {/if}
    {#if openModal}
        <AddCart>
            <SignButton isPrimary={false} text="Cancel" on:click="{() => { return openModal = false }}"/>
        </AddCart>
    {/if}
</div>


