<template>
    <div class="container">
        <div class="row">
            <div class="column">
                <header>
                    HEADER<button @click="test">test</button>
                    <ul>
                        <li v-for="item in items" :key="item.id">
                            {{ item.title.fi }}
                        </li>
                    </ul>
                </header>
            </div>
        </div>
    </div>
</template>

<script>

import get from '../utils/api';

export default {
    name: 'page',
    data() {
        return {
            items: []
        }
    },
    methods: {
        test: function() {
            get('/programs/items.json?category=5-135').promise.then(res => {
                this.items = res.data;
            }).catch(err => {
                console.log(err);
            });
        }
    }
}
</script>
