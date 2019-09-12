<script>
    import Blur from './Blur.svelte';
    import Form from './Form.svelte';
    import SignButton from './SignButton.svelte';
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
        <input placeholder="Product name" />
        <input type=number placeholder="Product price" />
        <textarea placeholder="Product description" ></textarea>
        <input placeholder="Picture link" />
        <div class="buttons">
            <SignButton text="Add" />
            <slot></slot>
        </div>
    </Form>
</div>