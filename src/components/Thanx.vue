<template>
    <transition appear
                appear-active-class="intro-appear"
                name="intro">
        <div class="intro">Thank u !</div>
    </transition>
</template>

<script>
export default {
    name: "Thanx"
}
</script>

<style scoped>
.intro {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
}

.intro-appear {
    animation: fade-in 1s;
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