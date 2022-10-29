<template>
    <div class="progress my-4 bg-indigo-100">
        <div class="progressAction bg-indigo-600" :style="getProgressStyles"></div>
    </div>
</template>

<script>
export default {
    props: {
        progress: {type: Number, default: 10},
    },
    computed: {
        getProgressStyles() {
            return {width: this.progress + '%'};
        },
    },
}
</script>

<style scoped>
.progress {
    width: 100%;
    height: 10px;
    position: relative;
}

.progressAction {
    transition: 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
    position: absolute;
    width: 10px;
    height: 10px;
}
</style>