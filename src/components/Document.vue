<template>
    <Header title="Promise not to pirate the material"></Header>
    <el-steps :active="2" finish-status="success">
        <el-step title="Step 1"/>
        <el-step title="Step 2"/>
        <el-step title="Step 3"/>
        <el-step title="Step 4"/>
    </el-steps>
    <progress-bar :progress="progress"></progress-bar>
    <div class="content bg-indigo-100" @scroll="checkReadingProgress">
        <p ref="firstBlock">This text no one reads. This text no one reads. This text no one reads.</p>
        <p>This text no one reads. This text no one reads. This text no one reads.</p>
        <p>This text no one reads. This text no one reads. This text no one reads.</p>
        <p>This text no one reads. This text no one reads. This text no one reads.</p>
        <p>This text no one reads. This text no one reads. This text no one reads.</p>
        <p>This text no one reads. This text no one reads. This text no one reads.</p>
        <p>This text no one reads. This text no one reads. This text no one reads.</p>
        <p>This text no one reads. This text no one reads. This text no one reads.</p>
        <p>This text no one reads. This text no one reads. This text no one reads.</p>
        <p>This text no one reads. This text no one reads. This text no one reads.</p>
        <p>This text no one reads. This text no one reads. This text no one reads.</p>
        <p>This text no one reads. This text no one reads. This text no one reads.</p>
        <p>This text no one reads. This text no one reads. This text no one reads.</p>
        <p>This text no one reads. This text no one reads. This text no one reads.</p>
        <p>This text no one reads. This text no one reads. This text no one reads.</p>
        <p>This text no one reads. This text no one reads. This text no one reads.</p>
        <p>This text no one reads. This text no one reads. This text no one reads.</p>
        <p>This text no one reads. This text no one reads. This text no one reads.</p>
        <p>This text no one reads. This text no one reads. This text no one reads.</p>
        <p ref="lastBlock">This text no one reads. This text no one reads. This text no one reads.</p>
    </div>
    <agreement @getAgreement="onGetAgreement"></agreement>
    <el-button style="margin-top: 12px" @click.prevent="sendFormData" :disabled="!isAgreeGetting">Next step</el-button>
    <el-dialog
            v-model="dialogVisible"
            title="Check your data"
            width="50%"
    >
        <div>Are you sure you want to place an order?</div>
        <template #footer>
            <button
                    @click="next"
                    class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >Send Data
            </button>
        </template>
    </el-dialog>
</template>

<script>
import {mapGetters, mapState} from "vuex";
import ProgressBar from "./ProgressBar.vue";
import Agreement from "./Agreement.vue";

export default {
    components: {
        ProgressBar,
        Agreement,
    },
    data: () => ({
        isAgreeGetting: false,
        dialogVisible: false,
    }),
    methods: {
        checkReadingProgress(e) {
            const value = Math.round(e.target.scrollTop / (e.target.scrollHeight - e.target.clientHeight) * 100);
            this.$store.commit("document/checkReadingProgress", value);
        },
        sendFormData() {
            this.dialogVisible = true;
        },
        next() {
            this.$router.push("/final");
        },
        onGetAgreement(e) {
            this.isAgreeGetting = e.target.checked;
        }
    },
    computed: {
        ...mapState("document/", ["progress"]),
        ...mapGetters("forms/", ["checkFormCompleted"]),
        ...mapState("forms/", ["info"]),
    },
}
</script>

<style scoped>
.content {
    height: 300px;
    overflow: auto;
}
</style>