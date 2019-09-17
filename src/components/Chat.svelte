<script>
    import {onMount} from 'svelte';
    import io from 'socket.io-client';

    import {userType} from '../store';

    let hidden = true;
    let socket;
    const flipHide = () => hidden = !hidden;

    onMount(() => {
    	socket = initSocket();
    	setTimeout(() => login(socket), 1000);
    });

    const initSocket = () => io('http://localhost:3000');
    const login = (socket) => socket.emit('message', $userType);

    $: chatClasses = "chat ".concat(hidden ? 'hidden' : '');
</script>

<style>
    .chat {
        position: fixed;
        bottom: 0;
        right: 10px;
        width: 350px;
        height: 500px;
        background: white;
        box-shadow: -6px -5px 20px 0px rgba(0, 0, 0, 0.5);
        border-radius: 10px 10px 0 0;
        overflow: hidden;
        transition: height .3s ease-out;
    }
    .chat.hidden {
        height: 50px;
    }
    .header {
        padding: 10px;
        position: relative;
        top: 0;
        left: 0;
        right: 0;
        background: yellow;
        height: 50px;
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
        user-select: none;
        cursor: pointer;
    }
</style>

<div class={chatClasses}>
    <div class="header" on:click={flipHide}>
        <button>_</button>
        <h3>Онлайн-чат с поддержкой</h3>
    </div>
</div>
