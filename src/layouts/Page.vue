<template>
    <div class="page-wrapper">
        <div class="content list-content">
            <header>
                <h2>Areena elokuvat</h2>
            </header>
            <div class="container">
                <div class="row">
                    <div class="column">
                        <router-view></router-view>
                    </div>
                </div>
            </div>
        </div>
        <div class="content details-content">
            <router-view name="details"></router-view>
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

<style lang="scss">
.page-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.content {
    top: 0;
    left: 0;
    overflow-y: scroll;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
    position: absolute;
    width: 100%;
    height: 100%;
    transition: transform 250ms;
}

.details-content {
    left: 100%;
}

.details-open .content {
    transform: translateX(-100%);
}

header {
    padding: 1.5rem;
    color: #fff;
    background: #1f2224;
    text-align: center; 

    h2 {
        margin: 0;
        font-size: 2.1rem;
    }
}
</style>
