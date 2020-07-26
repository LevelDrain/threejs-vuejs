<template>
    <div id="app">
        <section class="sec">
            <RotateBox/>
        </section>
    </div>
</template>

<script>
    import RotateBox from "./components/RotateBox";

    export default {
        name: "App",
        components: {
            RotateBox
        }
    };
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    .sec {
        margin-bottom: 50px;
    }
</style>
