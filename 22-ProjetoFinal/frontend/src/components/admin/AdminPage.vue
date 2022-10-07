<template>
    <div class="admin-pages">
        <PageTitle icon="fa fa-cogs" main="Administração do Sistema" sub="Cadastros & Cia" />
        <div class="admin-pages-tabs">
            <tabsVue :options="{ useUrlFragment: false }">
                <tabVue name="Artigos">
                    <ArticleAdmin />
                </tabVue>
                <tabVue name="Categorias">
                    <CategoryAdmin />
                </tabVue>
                <tabVue name="Usuários">
                    <UserAdmin />
                </tabVue>
            </tabsVue>
        </div>
    </div>
</template>

<script>
import PageTitle from '../template/PageTitle.vue'
import ArticleAdmin from './ArticleAdmin.vue'
import CategoryAdmin from './CategoryAdmin.vue'
import UserAdmin from './UserAdmin.vue'

export default {
    name: 'AdminPage',
    components: { PageTitle, ArticleAdmin, CategoryAdmin, UserAdmin },

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