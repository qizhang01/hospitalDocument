<template>
	<div class="container">
        <el-form v-show="showSearch" :inline="true" :model="searchForm">
			<el-form-item label="时间范围" style="width: 308px; margin-left: 6px;">
				<el-date-picker
					v-model="searchForm.date"
					value-format="YYYY-MM-DD"
					type="daterange"
					range-separator="-"
					start-placeholder="开始日期"
					end-placeholder="结束日期"
				></el-date-picker>
			</el-form-item>
<!-- 
			<el-form-item>
				<el-button
					v-auth="'/adminAuth/list'"
					type="primary"
					style="margin-left: -16px"
					@click="searchEvent"
				>
					查询
				</el-button>
			</el-form-item> -->
		</el-form>
        <div class="item">
            <div class="topic">医嘱类别</div>
              <el-radio-group v-model="radioType">
                <el-radio v-for="(item,index) in doctorAdviceType" :label="index">{{ item }}</el-radio>
            </el-radio-group>
        </div>

        <div class="item">
            <div class="topic">用药方式</div>
            <el-select v-model="value" placeholder="请选择">
                <el-option
                v-for="(item, index) in medicineUsage"
                :key="index"
                :label="item"
                :value="item"
                >
                </el-option>
            </el-select>
        </div>

        <div class="item">
            <div class="topic">医嘱类型</div>
            <el-radio-group v-model="radioTimeType">
                <el-radio v-for="(item,index) in timeType" :label="index">{{ item }}</el-radio>
            </el-radio-group>
        </div>

        <div class="item">
            <div class="topic">状态</div>
            <el-radio-group v-model="radioStatusType">
                <el-radio v-for="(item,index) in statusType" :label="index">{{ item }}</el-radio>
            </el-radio-group>
        </div>

        <div class="item">
            <div class="topic">在院查询</div>
            <el-button
                v-auth="'/adminAuth/list'"
                type="primary"
                style="margin-left: 4px"
                @click="searchEvent"
            >
                查询
            </el-button>
        </div>

        <div class="item">
            <div class="topic">出院查询</div>
            <el-date-picker
                v-model="searchForm.date"
                value-format="YYYY-MM-DD"
                type="daterange"
                range-separator="-"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
            ></el-date-picker>
            <el-button
                v-auth="'/adminAuth/list'"
                type="primary"
                style="margin: 10px 4px 0px;"
                @click="searchEvent"
            >
                查询
            </el-button>
        </div>

        <div >
            <el-button
                v-auth="'/adminAuth/list'"
                type="primary"
                style="margin-left: 4px"
                @click="searchEvent"
            >
                刷新
            </el-button>
            <el-button
                v-auth="'/adminAuth/list'"
                type="primary"
                style="margin-left: 4px"
                @click="searchEvent"
            >
                打印
            </el-button>
        </div>
	</div>
</template>

<style lang="scss" scoped>
    .item {
        border: 1px solid #ddd;
        position: relative;
        margin: 20px 0px;
        padding: 10px 16px;
        .topic {
            position: relative;
            top: -20px;
        }
    }
    .empty-line {
        height: 20px;
    }
</style>

<script setup>
    import { ref, onMounted, watch } from "vue";
    import {doctorAdviceType, timeType, statusType, medicineUsage} from './options'
    
    const radioType = ref(0)
    const radioTimeType = ref(0)
    const radioStatusType = ref(0)
    const showSearch = ref(true);
    const value = ref("")
    // 数据源
    const searchForm = ref({
        date: "",
        page: 1,
        page_size: 20
    });

    const searchEvent=()=>{

    }
</script>