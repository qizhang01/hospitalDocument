<template>
        <tr>
          <td rowspan="3"><p class="fist_column_text">{{ column1Text }}</p></td>
          <td >{{ scoreStandardTextArr[0] }}</td>
          <td @click="handleColumnClick(1, 4)">4</td>
          <td rowspan="3">{{ valArr[0]??'' }}</td>
          <td @click="handleColumnClick(2, 4)">4</td>
          <td rowspan="3">{{ valArr[1]??'' }}</td>
          <td @click="handleColumnClick(3, 4)">4</td>
          <td rowspan="3">{{ valArr[2]??'' }}</td>
          <td @click="handleColumnClick(4, 4)">4</td>
          <td rowspan="3">{{ valArr[3]??'' }}</td>
        </tr>
        <tr>
          <td >{{ scoreStandardTextArr[1] }}</td>
          <td @click="handleColumnClick(1, 6)">6</td>
          <td @click="handleColumnClick(2, 6)">6</td>
          <td @click="handleColumnClick(3, 6)">6</td>
          <td @click="handleColumnClick(4, 6)">6</td>
        </tr>
        <tr>
          <td >{{ scoreStandardTextArr[2] }}</td>
          <td @click="handleColumnClick(1, 10)">10</td>
          <td @click="handleColumnClick(2, 10)">10</td>
          <td @click="handleColumnClick(3, 10)">10</td>
          <td @click="handleColumnClick(4, 10)">10</td>
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
  scoreStandardTextArr: {type: Array,required: true},
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

</style>