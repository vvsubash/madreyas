<template>
    <form>
        <label for="feet">Feet</label>
        <input type="number" name="feet" id="Feet" v-model="feet">
        <label for="meter">Meter</label>
        <input type="number" name="meter" id="Feet" v-model="meter">
    <p>{{meter}}</p>
    </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup () {
        

        return {
            data() {
                return {
                    feet: 0,
                    meter: 12
                }
            },
        }
    }
})
</script>
