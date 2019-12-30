let that;
const vm = new Vue({
	el:'#app',
	components:{

    },


	beforeCreate(){
		that = this
	},
	created() {

	    // 初始化人员表单数据
      this.personFormData.map(item=>{
          this.$set(this.DAlarmPersonObj, item.key, '');
          //匹配规则
          if(item.rule){
              this.personFormRules[item.key] = item.rule
          }
      })

			this.getAllDictionary().then(res=>{
				this.allDictionary = res.data
				//初始化人员表单验证规则及人员表单增加数据
				this.personFormData.map(item=>{
					//匹配字典项
					if(item.dictionary){
						item.selectList = this.allDictionary[item.dictionary]
					}

					//默认国籍
					this.DAlarmPersonObj.gj = '156'

				})


		this.stationFormData.map(item=>{
			this.$set(this.DAlarmStationObj,item.key,'');
			if(item.rule){
				this.stationFormRules[item.key] = item.rule
			}

			//匹配字典项
			item.selectList = item.dictionary ? this.allDictionary[item.dictionary]:[]
		})


		this.articleFormData.map(item=>{
			this.$set(this.DAlarmArticleObj,item.key,'');
		if(item.rule){
			this.articleFormRules[item.key] = item.rule
		}

		//匹配字典项
		item.selectList = item.dictionary? this.allDictionary[item.dictionary]:[]

	})

		// this.handleClick({name:'person'})

          this.formInfo = this.personFormData
          this.loading = false
			})




    },
	data:{
        tabActiveName:'person',
        formEditData:{},
				loading:true,
				baseUrl :"http://172.16.14.171:20014",
				allDictionary:{},

        tabList:[
            {
                name:'person',
                label:'涉警人员信息',
            },
            {
                name:'station',
                label:'涉警单位信息',
            },
            {
                name:'article',
                label:'涉警物品信息',
            },
            {
                name:'picture',
                label:'涉警图片信息',
            }
        ],
        //表单数据信息
        formInfo:{

        },
        //表格数据
        tableData:[],
        //人员表单数据
        personFormData:[
					{
						key:'rylx',
						label:'人员类型',
						type:'select',
						isShow:true,
						selectList:[
							{
								item:'州内人员',
								code:'1'
							},
							{
								item:'州外人员',
								code:'2'
							}
						]
					},
            {
                key:'sylb',
                label:'人员类别',
                type:'select',
								dictionary:19,
                isShow:true,
                selectList:[
                    {
                        selectLabel:'州内人员',
                        value:'1'
                    },
                    {
                        selectLabel:'州外人员',
                        value:'2'
                    }
                ]
            },
            {
                key:'sjrylb',
                label:'人员角色',
                isTableHeader:true,
                type:'select',
								dictionary:23,
                isShow:true,
                selectList:[
                    {
                        selectLabel:'州内人员',
                        value:'1'
                    }
                ]
            },
            {
                key:'sjlb',
                label:'涉警类别',
                type:'select',
                isShow:true,
								dictionary:24,
                selectList:[
                    {
                        selectLabel:'州内人员',
                        value:'1'
                    }
                ]
            },

            {
                key:'bmch',
                label:'别名',
                isShow:true,
                type:'input',
                rule:[
                    {max:50,message:'最多输入50字',trigger:"blur"}
                ]
            },
            {
                key:'xm',
                label:'姓名',
                type:'input',
                isShow:true,
                isTableHeader:true,
                rule:[
                    { required: true, message: '请输入姓名', trigger: 'blur' },
                    { min:2, max:30, message: '长度在2-30个字符', trigger: 'blur' }
                ]
            },
            {
                key:'xb',
                label:'性别',
                type:'select',
								dictionary:1,
                isShow:true,
                isTableHeader:true,
                selectList:[
                    {
                        selectLabel:'州内人员',
                        value:'1'
                    }
                ],
                rule:[
                    { required: true, message: '请选择性别', trigger: 'change' },
                ]
            },
            {
                key:'gmsfhm',
                label:'公民身份证号',
                type:'input',
                isShow:true,
                isTableHeader:true,
                rule:[
                    { required: true, message: '请输入身份证号', trigger: 'blur' },
                    {
                        pattern: /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/,
                        message: '证件号码格式有误！',
                        trigger: 'blur'
                     }
                ]
            },
            {
                key:'csrq',
                label:'出生日期',
                isTableHeader:true,
                type:'date',
                isShow:true,
                rule:[
                    {type: 'date', required: true, message: '请选择出生日期', trigger: 'change' },
                ]
            },
            {
                key:'mz',
                label:'民族',
                type:'select',
								dictionary:7,
                isShow:true,
                isTableHeader:true,
                selectList:[
                    {
                        selectLabel:'州内人员',
                        value:'1'
                    }
                ],
                rule:[
                    { required:true,message:'请选择民族',trigger:'change'}
                ]
            },
            {
                key:'jgqx',
                label:'籍贯区县',
                type:'select',
								dictionary:9,
							isSearch:true,
                isShow:true,
                selectList:[]
            },
            {
                key:'zjlx',
                label:'证件类型',
                type:'select',
								dictionary:10,
                isShow:true,
                selectList:[]
            },
            {
                key:'zjhm',
                label:'证件号码',
                isShow:true,
                type:'input',
                rule:[
                    {max:18,message:'最长18位',trigger:'blur'}
                ]
            },
            {
                key:'lxdh',
                label:'联系电话',
                isShow:true,
                type:'input',
                rule:[
                    {pattern: /(^1[3|4|5|7|8|9]\d{9}$)|(^09\d{8}$)/,message:'请输入正确手机号'}
                ]
            },
            {
                key:'gj',
                label:'国籍',
                type:'select',
								dictionary:11,
								isSearch:true,

                isShow:true,
                selectList:[]
            },
            {
                key:'whcd',
                label:'文化程度',
                type:'select',
								dictionary:14,
                isShow:true,
                selectList:[]
            },
            {
                key:'hyzk',
                label:'婚姻状况',
								dictionary:2,
                type:'select',
                isShow:true,
                selectList:[]
            },
            {
                key:'sg',
                label:'身高',
                isShow:true,
                type:'input',
                rule:[
                    {pattern:/^([1,2][0-9]{2})$/,message:'请输入正确身高',trigger:'blur'}
                ]
            },
            {
                key:'byzk',
                label:'兵役现状',
                type:'select',
								dictionary:3,
                isShow:true,
                selectList:[]
            },
            {
                key:'zjxy',
                label:'宗教信仰',
                type:'select',
								dictionary:6,
                isShow:true,
                selectList:[]
            },
            {
                key:'zzmm',
                label:'政治面貌',
                type:'select',
							dictionary:13,
                isShow:true,
                selectList:[]
            },
            {
                key:'fwcs',
                label:'服务处所',
                type:'input',
                isShow:true,
                rule:[
                    {
                        max:150,message:'最长输入150字',trigger:'blur'
                    }
                ]
            },
            {
                key:'zylb',
                label:'职业类别',
                type:'select',
							dictionary:15,
                isShow:true,
                selectList:[]
            },
            {
                key:'hjqh',
                label:'户籍区划',
                type:'select',
							dictionary:9,
							isSearch:true,
                isShow:true,
                selectList:[
                    {
                        selectLabel:'州内人员',
                        value:'1'
                    }
                ],
                rule:[
                    { required:true,message:'请选择户籍区划',trigger:'change'}
                ]
            },
            {
                key:'jwzrq',
                label:'户籍责任区',
                type:'select',
							dictionary:9,
							isSearch:true,
                isShow:true,
            },

            {
                key:'xzqh',
                label:'现住区划',
                type:'select',
							dictionary:9,
							isSearch:true,
                isShow:true,
                selectList:[]
            },
            {
                key:'xzzrq',
                label:'现住责任区',
                type:'select',
							dictionary:5,
							isSearch:true,
                isShow:true,
                selectList:[]
            },
            {
                key:'hjxz',
                label:'户籍详址',
                type:'input',
                isShow:true,
                className:'col-md-6',
                rule:[
                    { required:true,message:'请输入户籍详址',trigger:'blur'},
                    { max:100,message:'最多输入100字',trigger:'blur'}
                ]
            },
            {
                key:'xzxz',
                label:'现住详址',
                type:'input',
                isShow:true,
                className:'col-md-6',
                rule:[
                    {max:100,message:'最多输入100字',trigger:'blur'}
                ]
            },
            {
                key:'rybq',
                label:'人员标签',
                isShow:true,
                type:'input',
                className:'col-md-6',
                rule:[{
                    max:60,message:'最长输入60字',trigger:'blur'
                }]
            },

        ],
        //人员表格数据
        DAlarmPerson:[
        ],
        //人员表单验证
        personFormRules:{
        },
        //添加的表单数据
        DAlarmPersonObj: {
					// bmch: "",
					// byzk: "",
					// csrq: "",
					// fwcs: "",
					// gj:"123",
					//
					// gmsfhm: "",
					// hjqh: "",
					// hjxz: "",
					// hyzk: "",
					// jgqx: "",
					// jwzrq: "",
					// lxdh: "",
					// mz: "",
					// rybq: "",
					// rylb: "",
					// sg: "",
					// sjlb: "",
					// sjrylb: "",
					// sylb: "",
					// whcd: "",
					// xb: "",
					// xm: "",
					// xzqh: "",
					// xzxz: "",
					// xzzrq: "",
					// zjhm: "",
					// zjlx: "",
					// zjxy: "",
					// zylb: "",
					// zzmm: ""

	},
        //单位表单数据
        stationFormData:[
            {
                key:'dwmc',
                label:'单位名称',
                type:'input',
                isTableHeader:true,
                rule:[
                    {required:true,message:'请输入单位名称',trigger:'blur'},
                    {max:100,message:'最多输入100字',trigger:'blur'}
                ]
            },
            {
                key:'sjlb',
                label:'涉警类别',
								dictionary:20,
                type:'select',
                isTableHeader:true,
                selectList:[
                    {
                        selectLabel:'州内人员',
                        value:'1'
                    }
                ]
            },
            {
                key:'fssj',
                label:'发生时间',
                type:'date',
                isTableHeader:true,
            },
            {
                key:'fsdd',
                label:'发生地点',
                type:'input',
                isTableHeader:true,
                rule:[
                    {max:100,message:'最多输入100字',trigger:'blur'}
                ]
            },
            {
                key:'zjzrr',
                label:'直接责任人',
                isTableHeader:true,
                type:'input',
                rule:[
                    {max:30,message:'最多输入30字',trigger:'blur'}
                ]
            },
            {
                key:'sjzgr',
                label:'事件主管人',
                isTableHeader:true,
                type:'input',
                rule:[
                    {max:30,message:'最多输入30字',trigger:'blur'}
                ]
            },
        ],
        DAlarmStation:[],
        DAlarmStationObj:{},
        stationFormRules:{},
        //物品表单数据
        articleFormData:[
            {
                key:'mc',
                label:'名称',
                type:'input',
                isTableHeader:true,
                rule:[
                    {required:true,message:'请输入名称',trigger:'blur'},
                    {max:100,message:'最多输入50字',trigger:'blur'}
                ]
            },
            {
                key:'sl',
                label:'数量',
                type:'input',
                isTableHeader:true,
                rule:[
                    {pattern:/^([0]|[1-9][0-9]*)$/,message:'请输入0或正整数',trigger:'blur'},
                    {max:100,message:'最多输入10字',trigger:'blur'}
                ]
            },
            {
                key:'dw',
                label:'单位',
                type:'select',
								dictionary:27,
                isTableHeader:true,
								selectList:[]
            },
            {
                key:'lb',
                label:'类别',
                type:'select',
								dictionary:12,
                isTableHeader:true,
								selectList:[]
            },
            {
                key:'xh',
                label:'型号',
                type:'input',
                rule:[
                    {max:20,message:'最多输入20字',trigger:'blur'}
                ]
            },
            {
                key:'ys',
                label:'颜色',
                type:'select',
								dictionary:18,
                isTableHeader:true,
								selectList:[]
            },
            {
                key:'cdph',
                label:'产地或品牌',
                type:'input',
                className:'col-md-6',
                rule:[
                    {max:70,message:'最多输入70字',trigger:'blur'}
                ]
            },
            {
                key:'bhhm',
                label:'编号或号码',
                type:'input',
                rule:[
                    {max:23,message:'最多输入23字',trigger:'blur'}
                ]
            },
            {
                key:'wpj',
                label:'物品价值',
                type:'input',
                rule:[
                    {max:10,message:'最多输入10字',trigger:'blur'}
                ]
            },
            {
                key:'zt',
                label:'状态',
                type:'select',
								dictionary:21,
								selectList:[]
            },
            {
                key:'wpx',
                label:'性质',
                type:'select',
								selectList:[],
								dictionary:29
            },
            {
                key:'tzms',
                label:'特征描述',
                type:'textarea',
                className:'col-md-12',
                rule:[
                    {max:250,message:'最多输入250字',trigger:'blur'}
                ]
            },
            {
                key:'url',
                label:'上传图片',
                type:'uploadImg',
                className:'col-md-12',
                isTableHeader:true
            }
        ],
        DAlarmArticle:[],
        DAlarmArticleObj:{},
        articleFormRules:{},

        articlePhotoFiles:[],

        //图片
        DAlarrmPicture:[],
        // DAlarrmPictureObj:{
        //     tpsm:'',  //图片说明
        //     url:'',  //图片地址
        // },
        // pictureFiles:[],

    },
    methods: {

	      // 点击tab页
        handleClick(){
            switch (this.tabActiveName) {
                case "person":
                    this.tableData = this.DAlarmPerson
                    break
                case "station":
                    this.tableData = this.DAlarmStation
                    break
                case "article":
                    this.tableData = this.DAlarmArticle
                    break
            }
        },
				//获取所有数据字典项
				getAllDictionary(){
					return  axios.post(this.baseUrl+'/api/jp-BSPA-PolSituInfo-ms/alarmsynthesize/dictionary/list',[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29])
				},

        changePersonType(type){
            if(type==='rylx'){
                //州内人员
                this.personFormData.map(item=>{
                    if(this.DAlarmPersonObj[type]==='1'){

                        if(item.key === 'gmsfhm' || item.key === 'rylx' || item.key ==='xzxz'){
                            item.isShow = true
                        }else{
                            item.isShow = false
                        }
                    }else{
                        item.isShow = true
                    }
                })
                console.log(type,this.DAlarmPersonObj[type])
            }


        },

        //表单保存之前验证
        beforeSaveForm(formName,formObj){
            //去除前后空格
            for(var key in this[formObj]){
                if(typeof this[formObj][key] === "string"){
                    this[formObj][key] = this[formObj][key].trim()
                }
            }
            console.log(this.$refs[formName])

            this.$refs[formName].validate((valid)=>{
                if(valid){
                    //验证成功
                    this.$message.error('成功');
                    this.saveFormData(formName,formObj)
                }else{
                    console.log(valid)
                    this.$message.error('失败')
                    return false
                }
            })
        },
        //重置表单，重新输入
        resetForm(formName){
            console.log(this.$refs[formName])
            this.$refs[formName].resetFields();
        },
        //修改表单数据
        handleEdit(index,item){
            if(this.tabActiveName === 'article'){
                this.DAlarmArticleObj = item
                if(item.url.length){
                    item.url.map(item=>{
                        this.articlePhotoFiles.push({imgSrc:item})
                    })
                }
            }else if(this.tabActiveName === 'person'){
                this.DAlarmPersonObj = item
            }else if(this.tabActiveName === 'station'){
                this.DAlarmStationObj = item
            }
            this.tableData.splice(index,1)
            // console.log(this.formInfo,'2222222222')
            // this.formInfo.formModel = item
        },
        //删除表单数据
        handleDelete(index,item){
            this.tableData.splice(index,1)
        },
        //保存表单数据
        saveFormData(formName,formObj){
            // if(formName === 'personForm'){

            //     //保存人员表单
            //     let obj = JSON.parse(JSON.stringify(this.DAlarmPersonObj))
            //     console.log(obj)
            //     this.DAlarmPerson.push(obj);
            //     this.resetForm(formName)
            // }
            if(formName === 'articleForm'){
                //上传图片
                let urlArr=[];
                //应使用批量上传
                this.articlePhotoFiles.map(item=>{
                    this.uploadImg(item.fileObj).then(data=>{
                        urlArr.push(data.data.fileID)
                    }).catch(err=>{
                        console.log(err)
                    })
                    urlArr.push(item.imgSrc)
                })
                this.DAlarmArticleObj.url = urlArr
                this.articlePhotoFiles = []
            }
            let obj = JSON.parse(JSON.stringify(this[formObj]))
            this.tableData.push(obj)
            this.resetForm(formName)
        },
				//提交所有表单数据
				submitData(){
					if(this.DAlarmPerson.length === 0 && this.DAlarmStation.length===0&&this.DAlarmArticle.length===0&&this.DAlarrmPicture.length===0){
						return false
					}

					let paramObj = {
						DAlarmPerson:this.DAlarmPerson,
						DAlarmStation:this.DAlarmStation,
						DAlarmArticle:this.DAlarmArticle,
						DAlarrmPicture:this.DAlarrmPicture
					}

					console.log(paramObj,'????????????')
				},
        //选择图片
        selectImgs(ele){
            console.log(this.$refs.articlePhoto)
            let imgArr = ele.target.files;
            for(let i=0;i<imgArr.length;i++){
                console.log(1111)
                let imgTypeArr = imgArr[i].type.split('/');
                let imgType = imgTypeArr[imgTypeArr.length-1];
                if(this.isImg(imgType)){
                    let json = {
                        imgSrc:window.URL.createObjectURL(imgArr[i]),
                        type:imgArr[i].type,
                        fileObj:imgArr[i]
                    }
                    this.articlePhotoFiles.push(json)

                }else{
                    this.$message.error('请上传图片文件')
                }

            }
            ele.target.value = ''
        },
        //上传图片
        uploadImg(fileObj){
            let param = new FormData();
            param.append('file',fileObj);
            let configFile = {
                headers:{'Content-Type':'multipart/form-data'}
            }
            return axios.post(this.baseUrl + '/api/jp-TIFS-FileCenter-ms/file',param,configFile)
        },
        selectPictures(ele){
            let imgArr = ele.target.files;
            for(let i=0;i<imgArr.length;i++){
                let imgTypeArr = imgArr[i].type.split('/');
                let imgType = imgTypeArr[imgTypeArr.length-1];
                if(this.isImg(imgType)){
                    //上传图片
                    this.uploadImg(imgArr[i]).then(data=>{
                        let fileID = data.data.fileID
                        let json ={
                            tpsm:'',  //图片说明
                            url:this.baseUrl + "/api/jp-TIFS-FileCenter-ms/file?businessId="+fileID,  //图片地址
                        }
                        this.DAlarrmPicture.push(json)
                    }).catch(err=>{
                        console.log(err)
                    })

                }else{
                    this.$message.error('请上传图片文件')
                }

            }
            ele.target.value = ''
        },
        //删除图片
        deleteImg(index,type){

            if(type === 'article'){
                //删除物品信息的图片
                this.articlePhotoFiles.splice(index,1)
            }else if(type==='picture'){
                this.DAlarrmPicture.splice(index,1)
            }
        },
        //验证是否为图片
        isImg(type) {
            if (type === "jpg" || type === "png" || type === "jpeg" ||
            type === "gif") {
            return true
            }
            return false;
        },
        //对象深拷贝
        deepCopy(obj){
            let newObj = obj.constructor === Array? []:{};
            if(typeof obj !== 'object') return false
            for(var i in obj){
                newObj[i] = typeof obj[i] ==='object'?this.deepCopy(obj[i]):obj[i]
            }
            return newObj
        },
				//转换时间
				transormDate(date,flag=true){
					var date = new Date(date);
					Y = date.getFullYear() + '-';
					M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
					D = date.getDate() + ' ';
					// h = date.getHours() + ':';
					// m = date.getMinutes() + ':';
					// s = date.getSeconds();
					return flag?Y+M+D:Y+M+D+h+m+s
				},
				//图片加载失败
				imgError(e){
					e.target.src = 'require("../images/error-img.png")'
					e.onerror = null
				}
    },
    watch: {
        tabActiveName(v1){
            switch (v1) {
                case "person":
                    this.formInfo = this.personFormData
                    break
                case "station":
                    this.formInfo = this.stationFormData
                    break
                case "article":
                    this.formInfo = this.articleFormData
                    break
            }
        }

    },
	filters:{
		tableFilter(val){
			console.log(val,'?????????????')
			if(val[0] === ''){
				return val[0]
			}else{
				let newValue = ""

				if(val[1].type === 'select'){
					newValue = val[1].selectList.find(item=>item.code == val[0]).item
					// newValue = that.allDictionary[23].find(item=>item.code===val[0]).item
				}
				else{
					newValue = val[0]
				}
				return newValue
			}

		}
	}
})
