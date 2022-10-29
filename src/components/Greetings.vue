<template>
    <transition appear
                appear-active-class="intro-appear"
                name="intro">
        <div class="intro">On this page you can purchase exclusive dubplates. Stay Tuned! You will be redirected in a
            few seconds...
        </div>
    </transition>
</template>

<script>
export default {
    name: "Greetings",
    mounted() {
        setTimeout(() => {
            this.$router.push("/shop");
        }, 5000);
    }
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