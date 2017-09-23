<template>
    <div v-if="loaded">
        <h3>{{ item.title.fi }}</h3>
        <p>{{ item.description.fi }}</p>
        <button @click="close">Close</button>
    </div>
</template>

<script>
import get from '../utils/api';

export default {
    name: 'item',
    data() {
        return {
            item: {},
            loaded: false
        }
    },
    created() {
        if (this.$route.params.details) {
            this.fetch();
        }
    },
    watch: {
        $route: function(to, from) {
            if (to.params.details) {
                this.fetch();
            }
        }
    },
    methods: {
        close() {
            document.body.classList.remove('details-open');
            this.$router.push({ params: { details: null }});
        },
        fetch: function() {
            this.loaded = false;
            get(`/programs/items/${this.$route.params.details}.json`).promise.then(res => {
                this.item = res.data;
                this.loaded = true;
            }).catch(err => {
                console.log(err);
            });
        }
    }
}
</script>
