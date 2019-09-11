<script>
  import { link } from 'svelte-routing';
  import facebook from '../img/socials/facebook.svg';
  import vk from '../img/socials/vk.svg';
  import inst from '../img/socials/inst.svg';
  import telegram from '../img/socials/telegram.svg';

  let links = [{img: facebook, link: 'https://www.facebook.com'}, {img: vk, link: 'https://www.vk.com'}, {img: inst, link: 'https://www.instagram.com'}, {img: telegram, link: 'https://www.telegram.org'}];

</script>

<style>
    .root{
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin: 32px auto 50px;
    }
    .link_block {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        min-height: 54px;
        padding-left: 243px;
    }
    a {
        font-size: 18px;
        text-decoration: none;
    }
    .social_block {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding-right: 250px;
    }
    .social_link {
        width: 60px;
        height: 60px;
        margin-right: 20px;
    }
</style>

<div class="root">
    <div class="link_block">
        <a href="/" use:link>Contact Us</a>
        <a href="/" use:link>Support</a>
    </div>
    <div class="social_block">
        {#each links as {link, img} }
            <div class="social_link">
                <a href={ link }>{@html img}</a>
            </div>
        {/each}
    </div>
</div>
