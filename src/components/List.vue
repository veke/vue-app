<template>
    <div v-if="loaded" class="list">
        <ul>
            <li v-for="item in items" :key="item.id">
                <router-link :to="{ params: { page: $route.params.page || 0, details: item.id } }" @click="details" v-bind:id="item.id">{{ item.title.fi }}</router-link>
            </li>
        </ul>
        <button @click="pageChange(true)" v-if="$route.params.page && $route.params.page > 0">Prev</button>
        <button @click="pageChange()" v-if="items.length">Next</button>
    </div>
</template>

<script>
import get from '../utils/api';

export default {
    data() {
        return {
            items: [],
            loaded: false
        }
    },
    created() {
        this.fetch();
        if (this.$route.params.details) {
            this.details(this.$route.params.details);
        }
    },
    watch: {
        $route: function(to, from) {
            if (from.params.details) {
                document.body.classList.remove('details-open');
            } else if (!to.params.details) {
                this.fetch();
            } else {
                document.body.classList.add('details-open');
            }
        }
    },
    methods: {
        pageChange: function(prevPage) {
            let page = parseInt(this.$route.params.page || 0);
            this.$router.push({params: { page: prevPage ? page - 1 : page + 1 }});
        },
        details() {
            document.body.classList.add('details-open');
        },
        fetch: function() {
            this.loaded = false;
            const page = parseInt(this.$route.params.page) * 25;
            get(`/programs/items.json?category=5-135&availability=ondemand&mediaobject=video&offset=${page ? page : 0}`).promise.then(res => {
                this.items = res.data;
                this.loaded = true;
            }).catch(err => {
                console.log(err);
            });
        }
    }
}
</script>

<style lang="scss">
.list {
    padding: 2rem 0;
}
</style>
