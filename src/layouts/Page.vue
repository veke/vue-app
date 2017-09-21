<template>
    <div class="page-wrapper">
        <div class="content list-content">
            <div class="container">
                <div class="row">
                    <div class="column">
                        <header>
                            <h2>Areena elokuvat</h2>
                        </header>
                    </div>
                </div>
                <div class="row">
                    <div class="column">
                        <transition>
                            <router-view></router-view>
                        </transition>
                    </div>
                </div>
            </div>
        </div>
        <div class="content details-content">
            <item></item>
        </div>
    </div>
</template>

<script>
import Item from '../components/Item.vue';

export default {
    name: 'page',
    components: {
        Item
    }
}
</script>
