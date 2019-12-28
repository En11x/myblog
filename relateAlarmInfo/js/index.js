
const vm = new Vue({
	el:'#app',
	components:{

    },
    created () {

      //初始化人员表单验证规则及人员表单增加数据
      this.personFormData.map(item=>{
          this.$set(this.DAlarmPersonObj, item.key, '');
          if(item.rule){
            this.personFormRules[item.key] = item.rule
          }
      }) 
      this.stationFormData.map(item=>{
          this.$set(this.DAlarmStationObj,item.key,'');
          if(item.rule){
              this.stationFormRules[item.key] = item.rule
          }
      })

      this.articleFormData.map(item=>{
        this.$set(this.DAlarmArticleObj,item.key,'');
        if(item.rule){
            this.articleFormRules[item.key] = item.rule
        }
    })

      this.handleClick({name:'person'})
    },
	data:{
        tabActiveName:'person',
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
            formRef:'',
            formModel:{},
            formRules:{},
            formData:[]
        },
        //表格数据
        tableData:[],
        //人员表单数据
        personFormData:[
            {
                key:'sylb',
                label:'人员类别',
                type:'select',
                selectList:[
                    {
                        selectLabel:'州内人员',
                        value:'1'
                    }
                ]
            },
            {
                key:'sjrylb',
                label:'人员角色',
                isTableHeader:true,
                type:'select',
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
                type:'input',
            },
            {
                key:'xm',
                label:'姓名',
                type:'input',
                isTableHeader:true,
                rule:[
                    { required: true, message: '请输入姓名', trigger: 'blur' },
                    { min:2, max:6, message: '长度在2-6个字符', trigger: 'blur' }
                ]
            },
            {
                key:'xb',
                label:'性别',
                type:'select',
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
                rule:[
                    {type: 'date', required: true, message: '请选择出生日期', trigger: 'change' },
                ]
            },
            {
                key:'mz',
                label:'民族',
                type:'select',
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
                selectList:[]
            },
            {
                key:'zjlx',
                label:'证件类型',
                type:'select',
                selectList:[]
            },
            {
                key:'zjhm',
                label:'证件号码',
                type:'input',
            },
            {
                key:'lxdh',
                label:'联系电话',
                type:'input',
            },
            {
                key:'gj',
                label:'国籍',
                type:'select',
                selectList:[]
            },
            {
                key:'whcd',
                label:'文化程度',
                type:'select',
                selectList:[]
            },
            {
                key:'hyzk',
                label:'婚姻状况',
                type:'select',
                selectList:[]
            },
            {
                key:'sg',
                label:'身高',
                type:'input',
            },
            {
                key:'byzk',
                label:'兵役现状',
                type:'select',
                selectList:[]
            },
            {
                key:'zjxy',
                label:'宗教信仰',
                type:'select',
                selectList:[]
            },
            {
                key:'zzmm',
                label:'政治面貌',
                type:'select',
                selectList:[]
            },
            {
                key:'fwcs',
                label:'服务处所',
                type:'input',
            },
            {
                key:'zylb',
                label:'职业类别',
                type:'select',
                selectList:[]
            },
            {
                key:'hjqh',
                label:'户籍区划',
                type:'select',
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
                type:'input',
            },
            {
                key:'hjxz',
                label:'户籍详址',
                type:'input',
                className:'col-md-6',
                rule:[
                    { required:true,message:'请输入户籍详址',trigger:'blur'},
                    { max:5,message:'超过长度限制',trigger:'blur'}
                ]
            },
            {
                key:'xzqh',
                label:'现住区划',
                type:'select',
                selectList:[]
            },
            {
                key:'xzzrq',
                label:'现住责任区',
                type:'select',
                selectList:[]
            },
            {
                key:'xzxz',
                label:'现住详址',
                type:'input',
                className:'col-md-6'
            },
            
            {
                key:'rylb',
                label:'人员类别',
                type:'input',
            },
            {
                key:'rybq',
                label:'人员标签',
                type:'input',
            },
            
        ],
        //人员表格数据
        DAlarmPerson:[
        ],
        //人员表单验证
        personFormRules:{},
        //添加的表单数据
        DAlarmPersonObj: {},
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
                isTableHeader:true,
            },
            {
                key:'lb',
                label:'类别',
                type:'select',
                isTableHeader:true,
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
                isTableHeader:true,
            },
            {
                key:'cdph',
                label:'产地或品牌',
                type:'input',
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
            },
            {
                key:'wpx',
                label:'性质',
                type:'select',
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

        //图片
        DAlarrmPicture:[],
        DAlarrmPictureObj:{
            tpsm:'',  //图片说明
            url:'',  //图片地址
        }
    },
    methods: {
        //点击标签页handleClickTab
        handleClick(tab){
            if(tab.name ==='person'){
                this.formInfo.formRef='personForm'
                this.formInfo.formModel=this.DAlarmPersonObj
                this.formInfo.formRules=this.personFormRules
                this.formInfo.formData=this.personFormData

                this.tableData = this.DAlarmPerson
            }else if(tab.name === 'station'){
                this.formInfo.formRef='stationForm'
                this.formInfo.formModel=this.DAlarmStationObj
                this.formInfo.formRules=this.stationFormRules
                this.formInfo.formData=this.stationFormData

                this.tableData = this.DAlarmStation
            }else if(tab.name === 'article'){
                this.formInfo.formRef='articleForm'
                this.formInfo.formModel=this.DAlarmArticleObj
                this.formInfo.formRules=this.articleFormRules
                this.formInfo.formData=this.articleFormData

                this.tableData = this.DAlarmArticle
            }
            else{
                this.formInfo={
                    formRef:'',
                    formModel:{},
                    formRules:{},
                    formData:[]
                }
            }
            console.log(this.formInfo)
        },
        //表单保存之前验证
        beforeSaveForm(){
            let formName = this.formInfo.formRef
            //去除前后空格
            for(var key in this.formInfo.formModel){
                if(typeof this.formInfo.formModel[key] === "string"){
                    this.formInfo.formModel[key] = this.formInfo.formModel[key].trim()
                }
            }
            console.log(this.$refs[formName])
            this.$refs[formName][0].validate((valid)=>{
                if(valid){
                    //验证成功
                    this.$message.error('成功');
                    this.saveFormData(formName)
                }else{
                    console.log(valid)
                    this.$message.error('失败')
                    return false
                }
            })
        },
        //重置表单，重新输入
        resetForm(){
            let formName = this.formInfo.formRef
            console.log(this.$refs[formName])
            this.$refs[formName][0].resetFields();
        },
        //保存表单数据
        saveFormData(formName){
            // if(formName === 'personForm'){
                
            //     //保存人员表单
            //     let obj = JSON.parse(JSON.stringify(this.DAlarmPersonObj))
            //     console.log(obj)
            //     this.DAlarmPerson.push(obj);
            //     this.resetForm(formName)
            // }
            let obj = JSON.parse(JSON.stringify(this.formInfo.formModel))
            this.tableData.push(obj)
            this.resetForm(formName)
        },
        //对象深拷贝
        deepCopy(obj){
            let newObj = obj.constructor === Array? []:{};
            if(typeof obj !== 'object') return false
            for(var i in obj){
                newObj[i] = typeof obj[i] ==='object'?this.deepCopy(obj[i]):obj[i]
            }
            return newObj
        }
    }
})
