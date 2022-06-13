<template>
  <div class="timer">

    <button class="start" @click="startTimer" v-if="start">start</button>
    <button class="stop" @click="stopTimer" v-if="!start">stop</button>
    <p class="timer" :value="time"> {{ time }} </p>

  </div>
</template>

<script>

    function getdate() {
        var today = new Date(), m = today.getMinutes(), s = today.getSeconds();
        if (s < 10) {
            s = "0" + s;
        }
        if (m < 10) {
            m = "0" + m;
        }
        $("p .timer").text(m + " : " + s);
        setInterval(function () { getdate(); }, 500);
    }

    export default {
        name: 'Timer',
        props: {
            start: true,
            time: '00:00'
        },
        methods: {
            startTimer() {
                this.start = false;
                getdate();
            },
            stopTimer() {
                clearInterval(timerId);
                this.$emit('stop','$("p .timer").val');
                this.start = true;
            }
        }
    };

</script>

<style scoped>
</style>
