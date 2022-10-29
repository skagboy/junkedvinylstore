<template>
    <div class="header">
        <div>{{ title }}</div>
        <div class="cart">
            <span class="title">Amount of items in your cart {{ getAmount }}</span>
            <fa-icon icon="exclamation-circle"/>
        </div>
    </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    name: "Header",
    props: {
        title: {type: String, default: "Complete this action"}
    },
    computed: {
        ...mapGetters("cart/", ["getAmount"]),
    }
}
</script>

<style scoped>å
.cart {
    display: flex;
    justify-content: end;
    align-items: center;
}

.title {
    padding-right: 10px;;
}

.header {
    display: flex;
    justify-content: space-between;
    height: 40px;
    border-bottom: 1px solid black;
    margin-bottom: 40px;
    padding: 10px;
}

</style>