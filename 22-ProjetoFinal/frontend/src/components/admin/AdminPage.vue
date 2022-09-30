<template>
    <div class="admin-pages">
        <PageTitle icon="fa fa-cogs" main="Administração do Sistema" sub="Cadastros & Cia" />
        <div class="admin-pages-tabs">
            <tabsVue :options="{ useUrlFragment: false }">
                <tabVue name="Artigos">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, hic incidunt voluptas, tempora perspiciatis ducimus iusto doloremque magni vitae, nesciunt sequi consequuntur. Ut repudiandae atque minima illo maiores reprehenderit magnam?</p>
                </tabVue>
                <tabVue name="Categorias">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quae nostrum harum voluptatem iure architecto cum a. Iste et consequatur, fuga nostrum deserunt amet qui inventore repudiandae neque magnam ipsum ex, maxime quia illum minus labore? Quae reiciendis id, aspernatur beatae neque porro aliquid a?
                </tabVue>
                <tabVue name="Usuários">
                    Third tab content
                </tabVue>
            </tabsVue>
        </div>
    </div>
</template>

<script>
import PageTitle from '../template/PageTitle.vue'

export default {
    name: 'AdminPage',
    components: { PageTitle },

}
</script>

<style>

    /* .tabs-component {
        border: solid 1px #ddd;
    } */

    .tabs-component-tabs {
        padding: 0;
        align-items: stretch;
        display: flex;
        justify-content: flex-start;
        margin-bottom: -1px;
        border-radius: 6px;
        list-style: none;
    }

    .tabs-component-tab {
        margin-right: 0.5rem;
        background-color: #fff;
        border: solid 1px #ddd;
        color: #777;
        border-radius: 3px 3px 0 0;
        margin-right: 0.5em;
        transform: translateY(2px);
        transition: transform .3s ease;
    }

    .tabs-component-tab.is-active {
        border-bottom: solid 1px #fff;
        z-index: 2;
        transform: translateY(0);
        color: red;
    }

    .tabs-component-tab-a {
        align-items: center;
        color: inherit;
        display: flex;
        padding: 0.75em 1em;
        text-decoration: none;
    }

    .tabs-component-tab-a:hover {
        color: #7778;
    }

    .tabs-component-panels {
        background-color: #fff;
        border: solid 1px #ddd;
        border-radius: 3px 3px 0 0;
        padding: 10px;
        transform: translateZ(2px);
        transition: transform .3s ease;
    }

</style>