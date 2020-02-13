<template>
    <input v-model="value" type="text" @keydown="emmitValue($event)">
</template>

<script>
    const ENTER_KEY = 'Enter';
    export default {
        name: 'CustomInput',
        data: function () {
            return {
                value: '',
            }
        },
        methods: {
            emmitValue: function (event) {
                if (event.key === ENTER_KEY) {
                    this.$emit('value', this.value);
                }
            }
        }
    };
</script>

<style>

</style>
