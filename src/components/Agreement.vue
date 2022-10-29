<template>
    <div v-if="isDocRead">
        <div class="flex items-center my-1">
            <input class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 checked:bg-indigo-500"
                   type="checkbox" :value="agree" @change="getAgree($event)">
            <label class="ml-2 block text-sm text-gray-900">Agree All</label>
        </div>
        <div class="flex items-center my-1">
            <input class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 checked:bg-indigo-500"
                   type="checkbox" v-model="spam">
            <label class="ml-2 block text-sm text-gray-900">Get Spam</label>
        </div>
        <template v-if="spam">
            <div class="flex items-center my-1">
                <input class="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 checked:bg-indigo-500"
                       type="radio" value="email" v-model="spamNotification" name="spam_n">
                <label class="ml-2 block text-sm text-gray-900">Email</label>
            </div>
            <div class="flex items-center my-1">
                <input class="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 checked:bg-indigo-500"
                       type="radio" value="phone" v-model="spamNotification" name="spam_n">
                <label class="ml-2 block text-sm text-gray-900">Phone</label>
            </div>
        </template>
    </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    data: () => ({
        spam: false,
        agree: false,
        sendForm: false,
        spamNotification: "email",
    }),
    computed: {
        ...mapGetters("document/", ["isDocRead"]),
    },
    methods: {
        getAgree(e) {
            this.$emit("getAgreement", e);
        }
    }
}
</script>

<style scoped>

</style>