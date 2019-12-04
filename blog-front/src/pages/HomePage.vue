<template>
	<div class="container">
		<div class="video-container">
			<div :style="fixStyle" class="filter"></div>
			<video :style="fixStyle" autoplay loop class="fillWidth">
				<source src="/static/video/BoatVideo.mp4" type="video/mp4" />?????? video ???????????
				<!-- <source :src="PATH_TO_WEBM" type="video/webm">?????? video ??????????? -->
			</video>
            <div class='container-box'>
                <div class='avatar t-c'>
                    <img src="/static/images/avatarBlog.jpg" alt="" srcset="" width='75px' height="75px">
                </div>
                <div class='t-c'><p>梦在远方，即刻起航...</p></div>
                <div class='nav t-c'><a href="#">点击进入博客</a></div>
            </div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'HomePage',
	data() {
		return {
            fixStyle:''
        }
    },
    mounted(){
        window.onresize = () => {
			const windowWidth = document.body.clientWidth
			const windowHeight = document.body.clientHeight
            const windowAspectRatio = windowHeight / windowWidth
			let videoWidth
			let videoHeight
			if (windowAspectRatio < 0.5625) {
				videoWidth = windowWidth
				videoHeight = videoWidth * 0.5625
				this.fixStyle = {
					height: windowWidth * 0.5625 + 'px',
					width: windowWidth + 'px',
					'margin-bottom': (windowHeight - videoHeight) / 2 + 'px',
					'margin-left': 'initial'
				}
			} else {
				videoHeight = windowHeight
				videoWidth = videoHeight / 0.5625
				this.fixStyle = {
					height: windowHeight + 'px',
					width: windowHeight / 0.5625 + 'px',
					'margin-left': (windowWidth - videoWidth) / 2 + 'px',
					'margin-bottom': 'initial'
				}
			}
		}
		setTimeout(()=>{window.onresize()},0)
    }
}
</script>

<style scoped lang='less'>
.video-container {
	position: relative;
	height: 100vh;
    overflow: hidden;
}
.video-container .filter {
	z-index: 1;
	position: absolute;
    background: rgba(0, 0, 0, 0.4);
}
.container-box{
    width: 50%;
    height: 50%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    background: rgba(255,255,255,.3);
    z-index: 9;
    .avatar img{
		border-radius: 50%;
	}
}
</style>
