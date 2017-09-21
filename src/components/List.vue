<template>
    <div v-if="items">
        <ul>
            <li v-for="item in items" :key="item.id">
                <span @click="details">{{ item.title.fi }}</span>
            </li>
        </ul>
        <router-link to="list/2" class="button">test</router-link>
    </div>
</template>

<script>
import get from '../utils/api';

export default {
    data() {
        return {
            items: [],
            offset: 0
        }
    },
    created() {
        this.fetch();
    },
    methods: {
        reset() {
            document.body.classList.remove('details-open');
        },
        details() {
            document.body.classList.add('details-open');
        },
        fetch: function() {
            get(`/programs/items.json?category=5-135&availability=ondemand&mediaobject=video&offset=${this.offset}`).promise.then(res => {
                this.items = res.data;
                this.offset += 25;
            }).catch(err => {
                console.log(err);
            });
        }
    }
}
</script>
