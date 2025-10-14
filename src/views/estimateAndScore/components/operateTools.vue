<template>
    <e-card class="operate-tools">
        <div class="item">
            <span class="topic">文书查询</span>
            <el-form-item label="操作时间">
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
                    style="margin-left: 16px"
					@click="searchEvent"
				>
					刷新
				</el-button>
                <el-button
					v-auth="'/adminAuth/list'"
					type="primary"
					style="margin-left: 16px"
					@click="searchEvent"
				>
					查询全部
				</el-button>
			</el-form-item>
        </div>
        <div class="item">
            <span class="topic">文书录入</span>
            <el-form-item>
				<el-button
					v-auth="'/adminAuth/list'"
					type="primary"
					@click="newCreate"
				>
					新建
				</el-button>
                <el-button
					v-auth="'/adminAuth/list'"
					type="primary"
					style="margin-left: 16px"
					@click="searchEvent"
				>
					修改
				</el-button>
			</el-form-item>
        </div>
        <div class="item">
            <span class="topic">文书打印</span>
            <el-form-item>
				<el-button
					v-auth="'/adminAuth/list'"
					type="primary"
					@click="searchEvent"
				>
					打印预览
				</el-button>
                <el-button
					v-auth="'/adminAuth/list'"
					type="primary"
					style="margin-left: 16px"
					@click="searchEvent"
				>
					文书续打
				</el-button>
			</el-form-item>
        </div>
    </e-card>
</template>

<style lang="scss" scoped>
.operate-tools{
    position: absolute;
    bottom: 10px;
    left: 0px;
    display: flex;
    width: 100%;
    justify-content: center;
}
.item {
    border: 1px solid #ddd;
    margin-right: 60px;
    position: relative;
    padding: 0px 16px;
    .topic {
      position: relative;
      top: -10px;
    }
}
</style>

<script setup>
import { ref, onMounted } from "vue";
    const props = defineProps({
        patientInfo: Object,
        tableName: String,
    })
    
    const emit = defineEmits(["handleCreate"])
        // 数据源
    const searchForm = ref({
        id: 0,
        name: "",
        date: "",
        page: 1,
        page_size: 10
    });

    const searchEvent = ()=>{

    }

    const newCreate = ()=>{
        emit('handleCreate')
    }
</script>