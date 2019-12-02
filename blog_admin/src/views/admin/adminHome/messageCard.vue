//admin首页信息组件
<template>
	<div class="message-card">
        <p>{{title}}</p>
        <slot name='content'></slot>
    </div>
</template>

<script>
export default {
    name: 'messageCard',
    props: ["title"],
	data() {
		return {}
	},
	components: {}
}
</script>

<style lang='stylus' scoped>
    .message-card
        width calc(50% - 10px)
        margin 5px
        transition all 0.3s
        box-shadow: 0px 0px 5px 0px rgba(38, 42, 48, .2)
        overflow-y auto
        padding-right 5px
        > p
            padding 15px
            width 100%
            background-color #f9f9f9
            color #555
            font-size 14px

</style>
