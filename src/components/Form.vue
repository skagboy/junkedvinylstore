<template>
    <Header title="Fill contact info"></Header>
    <form>
        <el-steps :active="1" finish-status="success">
            <el-step title="Step 1"/>
            <el-step title="Step 2"/>
            <el-step title="Step 3"/>
            <el-step title="Step 4"/>
        </el-steps>
        <progress-bar :progress="showProgress"></progress-bar>
        <div class="forms">
            <input-field v-for="(field,i) in info" :key="i"
                         :value="field.value"
                         :label="field.label"
                         :valid="field.valid"
                         :activated="field.activated"
                         @inputfield="onInput(i, $event)">
            </input-field>
        </div>
        <el-button style="margin-top: 12px" @click="next" :disabled="!checkFormCompleted">Next step</el-button>
    </form>
</template>

<script>
import InputField from "./InputField.vue";
import ProgressBar from "./ProgressBar.vue";
import {mapGetters, mapState} from "vuex";

export default {
    name: "EnterForm",
    components: {
        InputField,
        ProgressBar,
    },
    mounted() {
        this.$store.dispatch("forms/init");
    },
    computed: {
        ...mapState("forms/", ["info"]),
        ...mapGetters("forms/", ["showProgress", "checkFormCompleted"]),
    },
    methods: {
        onInput(i, value) {
            this.$store.commit("forms/fillFormField", {path: i, value});
        },
        next() {
            this.$router.push("/document");
        }
    },
}
</script>

<style scoped>
.forms {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(min-content, max-content);
    grid-gap: 16px;
}
</style>