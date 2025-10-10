<template>
    <div class="line">
       <p class="topic">{{ topic }}</p>
       <div class="checkboxContainer">
            <span
                v-for="(item, index) in typeArr"
                class="checkboxItem"
                :key="index "
                @click="handleSelect(index, item)"
            >
                <input type="checkbox" id="index" :name="item" :value="item" :checked="selectedValArr.includes(item)">
                <label for="item" class="label">{{ item }}</label>
            </span>
            <input  class="input">
       </div>
    </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
    topic: {
        type: String,
        required: false
    },
    typeArr: Array,
    selectedValArr: Array,
    handleSelect: Function
});
</script>

<style lang="scss">
.line {
    display: flex;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
}
.topic {
    display: flex;
    align-items: center;
    width: 100px;
    border-left: 1px solid black;
    border-right: 1px solid black;
}
.checkboxContainer { 
    padding: 4px;
    border-right: 1px solid black;
}
.checkboxItem {
    display: inline-block;
    width: 90px ;
}

.label {
    margin-left: 3px;
}
.input {
    border: none;
    background-color: inherit;
    border-bottom: 1px solid black;
}
</style>