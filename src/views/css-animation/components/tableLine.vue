<template>
        <tr>
          <td rowspan="3"><p>{{ column1Text }}</p></td>
          <td >{{ scoreStandardTextArr[0] }}</td>
          <td >4</td>
          <td rowspan="3">{{ valArr[0]??'' }}</td>
          <td >4</td>
          <td rowspan="3">{{ valArr[1]??'' }}</td>
          <td >4</td>
          <td rowspan="3">{{ valArr[2]??'' }}</td>
          <td >4</td>
          <td rowspan="3">{{ valArr[3]??'' }}</td>
        </tr>
        <tr>
          <td >{{ scoreStandardTextArr[1] }}</td>
          <td >6</td>
          <td >6</td>
          <td >6</td>
          <td >6</td>
        </tr>
        <tr>
          <td >{{ scoreStandardTextArr[2] }}</td>
          <td >10</td>
          <td >10</td>
          <td >10</td>
          <td >10</td>
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
  scoreStandardTextArr: {type: Array,required: true}
});
  </script>

<style lang="scss" scoped>

td {
border: 1px solid #ccc;
width: 12px;
height: 16px;
padding: 4px 0
}

</style>