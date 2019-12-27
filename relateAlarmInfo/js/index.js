
const vm = new Vue({
	el:'#app',
	components:{

	},
	data:{
		D_ALARM_PERSON: {
			sylb:'', //人员类别
			sjlb:'',  //涉警类别
			sjrylb:'', //人员角色
			gmsfhm:'', //身份证号码
			bmch:'',//别名
			xm:'',//姓名
			xb:'', //性别
			csrq:'', //出生日期
			mz:'',//民族
			jgqx:'',//籍贯区县
			zjlx:'',//证件类型
			zjhm:'',//证件号码
			lxdh:'',//联系电话
			gj:'',//国籍
			whcd:'',//文化程度
			hyzk:'',//婚姻状况
			sg:'',//身高
			byzk:'',//兵役状况
		},
		sizeForm: {
			name: '',
			region: '',
			date1: '',
			date2: '',
			delivery: false,
			type: [],
			resource: '',
			desc: ''
		}
	},
})
