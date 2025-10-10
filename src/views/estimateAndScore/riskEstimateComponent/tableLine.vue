<template>
    <tr
        v-for="(item, index) in scoreStandardArr"
                :key="index "
                @click="handleSelect(index, item)"
    >
        <td :rowspan="scoreStandardArr.length" v-if="index===0"><p class="fist_column_text">{{ column1Text }}</p></td>
        <td>{{ scoreStandardArr[index].text }}</td>
        <td class="score_td">{{ scoreStandardArr[index].val }}</td>
        <td class="score_td">{{ valArr[index][0]? "&#10003":'' }}</td>
        <td class="score_td">{{ valArr[index][1]? "&#10003":'' }}</td>
        <td class="score_td">{{ valArr[index][2]? "&#10003":'' }}</td>
        <td class="score_td">{{ valArr[index][3]? "&#10003":'' }}</td>
        <td class="score_td">{{ valArr[index][4]? "&#10003":'' }}</td>
        <td class="score_td">{{ valArr[index][5]? "&#10003":'' }}</td>
        <td class="score_td">{{ valArr[index][6]? "&#10003":'' }}</td>
    </tr>
</template>

<script setup>
    import { defineProps } from "vue";

    const props = defineProps({
        valArr: {
            type: Array,
            required: true
        },
        column1Text: String,
        scoreStandardArr: {type: Array,required: true},
        handleClick: Function
    });

    const handleColumnClick=(column, val)=>{
        props.handleClick(column, val)
    }
</script>

<style lang="scss" scoped>

td {
border: 1px solid #ccc;
width: 12px;
height: 16px;
padding: 4px 0
}

.fist_column_text {
white-space: normal
}

.score_td {
    text-align: center;
}
</style>