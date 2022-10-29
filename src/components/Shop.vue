<template>
    <Header title="Choose your favorite"></Header>
    <el-steps :active="0" finish-status="success">
        <el-step title="Step 1"/>
        <el-step title="Step 2"/>
        <el-step title="Step 3"/>
        <el-step title="Step 4"/>
    </el-steps>
    <div class="wrapper my-4">
        <div
                v-for="(plate) in getVinylBox"
                :key="plate.id"
        >
            <el-card>
                <img
                        :src="plate.cover"
                        class="image"
                />
                <div style="padding: 14px">
                    <span>{{ plate.title }}</span>
                    <div class="bottom">
                        <div>
                            <time class="time">{{ plate.price }}</time>
                            <time class="time">{{ plate.currency }}</time>
                        </div>
                        <el-button text class="button" @click="buyVinyl(plate)">Buy</el-button>
                    </div>
                </div>
            </el-card>
        </div>
    </div>
    <el-button style="margin-top: 12px" @click="next" :disabled="!getAmount">Next step</el-button>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";
import Header from "./Header.vue";
import {ElNotification} from 'element-plus'

const sorry = () => {
    ElNotification({
        title: 'Sorry :(',
        message: 'You can buy only one item',
        duration: 2000,
    })
}

export default {
    name: "Shop",
    components: {Header},
    computed: {
        ...mapGetters("shop/", ["getVinylBox",]),
        ...mapGetters("cart/", ["isVinylInCart", "getAmount"]),
    },
    methods: {
        ...mapMutations("cart/", ["setItemToCart"]),
        next() {
            this.$router.push("/form");
        },
        buyVinyl(vinyl) {
            if (this.isVinylInCart(vinyl.id)) {
                sorry();
            } else {
                this.setItemToCart(vinyl)
            }
        }
    }
}
</script>

<style scoped>
.wrapper {
    display: flex;
    justify-content: center;
}

.time {
    font-size: 12px;
    color: #999;
}

.bottom {
    margin-top: 13px;
    line-height: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.button {
    padding: 0;
    min-height: auto;
}

.image {
    width: 100%;
    display: block;
}
</style>