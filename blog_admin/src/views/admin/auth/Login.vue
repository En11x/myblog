//后台登录页面
<template>
	<div class="login">
		<div class="login-wrap">
			<h1 class="login-title">博客系统-后台管理</h1>
			<div class="login-form-wrap">
				<el-form :model="loginForm" :rules="loginRules" ref="loginForm" label-width="100px">
					<el-form-item label="用户名" prop="username">
						<el-input type="text" :maxlength="11" placeholder="请输入用户名" v-model="loginForm.username"></el-input>
					</el-form-item>
					<el-form-item label="密码" prop="password">
						<el-input type="password" :maxlength="16" placeholder="请输入密码" v-model="loginForm.password"></el-input>
					</el-form-item>

					<el-form-item>
						<el-button type="primary" @click="submitForm('loginForm')">立即登录</el-button>
					</el-form-item>
				</el-form>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Login',
	data() {
		return {
			loginForm: {
				username: '',
				password: ''
			},
			loginRules: {
				username: [
					{
						required: true,
						message: '请输入用户名',
						trigger: 'blur'
					},
					{
						min: 6,
						max: 10,
						message: '长度在 6 到 10 个字符',
						trigger: 'blur'
					}
				],
				password: [
					{
						required: true,
						message: '请输入密码',
						trigger: 'blur'
					},
					{
						min: 6,
						message: '密码不能少于6位',
						trigger: 'blur'
					}
				]
			}
		}
	},
	methods: {
		submitForm(formName) {
			this.$refs[formName].validate(valid => {
				if (valid) {
					alert('submit!')
				} else {
					console.log('error submit!!')
					return false
				}
			})
		},
		
	},
	components: {}
}
</script>

<style lang='stylus' scoped>
    .login
        position fixed
        top 0px
        left 0
        bottom 0
        right 0px
        z-index 8888
        background-color rgba(255,255,255,1)
        
        .login-wrap
            position relative
            padding 20px
            max-width 460px
            border-radius 10px
            margin 20px auto 
            line-height 1
            top 50%
            transform translateY(-50%)
            .login-title
                color #262a30
                text-align center
                margin-top 20px
                margin-bottom 30px
            .login-form-wrap
                margin 0 auto
            .el-button
                width 100%
                height 40px
                border-radius 5px
                background-color #262a30
                color #fff
                transition all 0.3s
                

</style>
