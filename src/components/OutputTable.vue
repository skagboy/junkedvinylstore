<template>
    <Header title="Your order"></Header>
    <el-steps :active="3" finish-status="success">
        <el-step title="Step 1"/>
        <el-step title="Step 2"/>
        <el-step title="Step 3"/>
        <el-step title="Step 4"/>
    </el-steps>
    <el-table :data="info" style="width: 100%">
        <el-table-column prop="label" label="Date" width="180"/>
        <el-table-column prop="value" label="Name" width="180"/>
    </el-table>
    <hr />
    <el-table :data="getAllInCart" style="width: 100%">
        <el-table-column prop="title" label="Title" width="180"/>
        <el-table-column prop="artist" label="Artist" width="180"/>
        <el-table-column prop="price" label="Price" width="180"/>
        <el-table-column prop="id" label="Delete" width="180">
            <template #default="scope">
                <el-button @click="deleteItem(scope.row.id)">delete</el-button>
            </template>
        </el-table-column>
    </el-table>
    <el-button style="margin-top: 12px" @click="next" :disabled="!getAmount">Next step</el-button>
</template>

<script>
import {mapGetters, mapMutations, mapState} from "vuex";

export default {
    computed: {
        ...mapState("forms/", ["info"]),
        ...mapGetters("cart/", ["getAllInCart", "isVinylInCart", "getAmount"]),
    },
    methods: {
        ...mapMutations("cart/", ["delVinylFromCart"]),
        next() {
            this.$router.push("/thanx");
        },
        deleteItem(id) {
            this.delVinylFromCart(id);
        }
    }
}
</script>

<style scoped>

</style>