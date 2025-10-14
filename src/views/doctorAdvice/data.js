export default [
    { 
        id: 1,
        name: "王芳"

    },{
        id: 2,
        name: "张亚南"
    },
    { 
        id: 3,
        name: "张伟芳"

    },{
        id: 4,
        name: "陈亚东"
    },
        { 
        id: 5,
        name: "刘思芳"

    },{
        id: 6,
        name: "张问伟"
    }
]


export const useInfoArr=[
    {
        id: 1,
        name: "王芳",
        bedNo: 6020,
        gender: "女",
        age: 38,
        hospitalNo: 199632,
        frequency: "st",
        drugInfoList: [{
            id: 1223,
            name: '5%葡萄糖注射液',
            number: "1.00",
            dose: "500ml",
            usage: "静滴"
        },{
            id: 1224,
            name: '盐酸丁卡因/6g/支',
            number: "1.00",
            dose: "6ml",
            usage: "静注"
        }],
        startTime: "2025-10-3 10:30",
        endTime: "2025-10-3 11:30",
        doctorAdvice: "",
        notes: "",
        involver: '谢如燕',
        endor: "谢如燕",
        usage: "静注",
        status: "已结束"
    },
    {
        id: 2,
        name: "张问伟",
        bedNo: 6025,
        gender: "男",
        age: 58,
        hospitalNo: 199636,
        frequency: "qd",
        drugInfoList: [{
            id: 1223,
            name: '5%葡萄糖注射液',
            number: "1.00",
            dose: "500ml",
            usage: "静滴"
        },{
            id: 1225,
            name: '2025息肉术后方(溯源) (脾胃病)',
            number: "3.00",
            dose: "64g",
            usage: "口服"
        }],
        startTime: "2025-10-3 10:30",
        endTime: "2025-10-3 11:30",
        doctorAdvice: "",
        notes: "",
        involver: '马思婷',
        endor: "谢如燕",
        usage: "静注",
        status: "已执行"
    }
]

export const drugInfoArr=[
    {
        id: 1,
        name: "王芳",
        bedNo: 6020,
        gender: "女",
        age: 38,
        hospitalNo: 199632,
        frequency: "st",
        drugInfoList: [{
            id: 1223,
            name: '5%葡萄糖注射液',
            number: "1.00",
            dose: "500ml",
            usage: "静滴"
        },{
            id: 1224,
            name: '盐酸丁卡因/6g/支',
            number: "1.00",
            dose: "6ml",
            usage: "静注"
        }],
        planTime: "2025-10-3 11:30",
        startTime: "2025-10-3 10:30",
        endTime: "2025-10-3 11:30",
        doctorAdvice: "",
        notes: "",
        involver: '谢如燕',
        endor: "谢如燕",
        usage: "静注",
        status: "已拆分",
        involveStatus: "未到执行时间"
    },
    {
        id: 2,
        name: "王芳",
        bedNo: 6025,
        gender: "男",
        age: 58,
        hospitalNo: 199636,
        frequency: "qd",
        drugInfoList: [{
            id: 1223,
            name: '5%葡萄糖注射液',
            number: "1.00",
            dose: "500ml",
            usage: "静滴"
        },{
            id: 1225,
            name: '2025息肉术后方(溯源) (脾胃病)',
            number: "3.00",
            dose: "64g",
            usage: "口服"
        }],
        planTime: "2025-10-3 11:30",
        startTime: "2025-10-3 10:30",
        endTime: "2025-10-3 11:30",
        doctorAdvice: "",
        notes: "",
        involver: '马思婷',
        endor: "谢如燕",
        usage: "静注",
        status: "已执行",
        involveStatus: "已到执行时间"
    }
]

export const drugInfo=
    {
        id: 1,
        name: "王芳",
        bedNo: 6020,
        gender: "女",
        age: 38,
        hospitalNo: 199632,
        drugInfoList: [{
            id: 1223,
            drugName: '5%葡萄糖注射液',
            number: "1.00",
            dose: "500",
            usage: "静滴",
            frequency: "st",
            unit: "ml",
            specifications: "200ml"
        },{
            id: 1224,
            drugName: '盐酸丁卡因/6g/支',
            number: "1.00",
            dose: "6",
            usage: "静注",
            frequency: "st",
            unit: "ml",
            specifications: "20ml"
        }],
        startTime: "2025-10-3 10:30",
        endTime: "2025-10-3 11:30",
        doctor: '李达'
}


export function flatObjToList(obj){
    const result = []
    obj.drugInfoList.forEach(item=>{
        const temp = {
            ...obj,
            ...item,
        }
        result.push(temp)
    })
    return result
}