<template>
    <div>
        <label>{{ label }}
            <template v-if="activated">
                <transition
                        appear
                        appear-active-class="icon-appear"
                        name="fa"
                        mode="out-in"
                >
                    <fa-icon
                            :key="valid"
                            :class="valid ? 'text-green-500' : 'text-red-500'"
                            :icon="valid ? 'check-circle' : 'exclamation-circle'"
                    />
                </transition>
            </template>

        </label>
        <el-input placeholder="Please input" v-model="value" @input="handleInput($event)"/>
    </div>
</template>

<script>

export default {
    props: {
        label: {type: String, required: true},
        value: {default: ""},
        valid: {default: true},
    },
    computed: {
        activated() {
            return this.value && !!this.value.trim()
        },
    },
    methods: {
        handleInput(event) {
            this.$emit("inputfield", event);
        }
    },
}
</script>

<style scoped>
.icon-appear {
    animation: fade-in 0.5s;
}

.fa-enter-active {
    animation: bounce-in 0.5s;
}

.fa-leave-active {
    animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(1.25);
    }
    100% {
        transform: scale(1);
    }
}

@keyframes fade-in {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

</style>