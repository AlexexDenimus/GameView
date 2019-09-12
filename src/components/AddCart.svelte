<script>
	import { createEventDispatcher } from 'svelte';

    import Blur from './Blur.svelte';
    import Form from './Form.svelte';
    import SignButton from './SignButton.svelte';

    const dispatch = createEventDispatcher();

    const addNewItem = () => {
      const title = document.getElementById('title').value;
      const price = document.getElementById('price').value;
      const description = document.getElementById('description').value;
      const img = document.getElementById('img').value;
      dispatch('ADD_ITEM', {
        title, price, description, img
      })
    };
</script>

<style>
    h3 {
        font-size: 24px;
        font-weight: 500;
    }
    span {
        color: green;
    }
    textarea, input {
        width: 100%;
        border: none;
        border-radius: 5px;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
        background-color: #ffffff;
        margin-top: 20px;
        height: 44px;
        padding-left: 14px;
    }

    textarea {
        height: 140px;
        padding-top: 8px;
    }
    .buttons {
        display: flex;
        flex-direction: row;
        justify-content: flex-end; 
    }
</style>

<div>
    <Blur />
    <Form>
        <h3>Create <span>your own</span> product</h3>
        <input placeholder="Product name" id="title" />
        <input type=number placeholder="Product price" id="price" />
        <textarea placeholder="Product description" id="description" ></textarea>
        <input placeholder="Picture link" id="img" />
        <div class="buttons">
            <SignButton text="Add" on:click={addNewItem} />
            <slot></slot>
        </div>
    </Form>
</div>