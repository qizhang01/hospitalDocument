export function flapArray(arr){
    const result = []
    const map = new Map()
    arr.forEach((item)=>{
        const currentLen= result.length
        item.info.length>1 && map.set(currentLen, item.info.length)
        item.info.forEach((el)=>{
            const temp={
                ...item,
                ...el
            }
            result.push(temp)
        })
    })

    return {
        newList: result,
        cobineMap: map
    }
}

export const useInfoArr=[
    {
        id: 1,
        name: "王芳",
        bedNo: 6020,
        gender: "女",
        age: 38,
        hospitalNo: 199632,
        drugInfoList: [{
            drugId: 1223,
            drugName: '5%葡萄糖注射液',
            drugNumber: "1.00",
            dose: "500",
            usage: "静滴"
        },{
            drugId: 1224,
            drugName: '盐酸丁卡因/6g/支',
            drugNumber: "1.00",
            dose: "6",
            usage: "静注"
        }],
        info:[
            {
                frequency: "st",
                flowType: "排药",
                speed: "65滴/分",
                involver: '何家琪',
                recordTime: "2025-09-11 08:56",
                notes: ""
            },
            {
                frequency: "qd",
                flowType: "加药",
                speed: "65滴/分",
                involver: '马思婷',
                recordTime: "2025-09-21 08:56",
                notes: ""
            }
        ],
        time: "2025-10-3 10:30",
        doctorAdvice: "",
    },
    {
        id: 2,
        name: "张问伟",
        bedNo: 6025,
        gender: "男",
        age: 58,
        hospitalNo: 199636,
        drugInfoList: [{
            drugId: 1223,
            drugName: '5%葡萄糖注射液',
            drugNumber: "1.00",
            dose: "500",
            usage: "静滴"
        },{
            drugId: 1225,
            drugName: '2025息肉术后方(溯源) (脾胃病)',
            drugNumber: "3.00",
            dose: "64",
            usage: "口服"
        },,{
            drugId: 1228,
            drugName: '迪塞米松注射液',
            drugNumber: "3.00",
            dose: "64",
            usage: "口服"
        }],
        info:[
            {
                frequency: "st",
                flowType: "排药",
                speed: "65滴/分",
                involver: '何家琪',
                recordTime: "2025-09-11 08:56",
                notes: ""
            },
            {
                frequency: "qd",
                flowType: "加药",
                speed: "65滴/分",
                involver: '马思婷',
                recordTime: "2025-09-21 08:56",
                notes: ""
            },
            {
                frequency: "qd",
                flowType: "加药",
                speed: "65滴/分",
                involver: '谢婷',
                recordTime: "2025-09-21 08:56",
                notes: ""
            }
        ],
        time: "2025-10-3 11:30",
        doctorAdvice: "",
        notes: "",
        involver: ''
    }
]