GlBackgroundVideo.loadBundle("tmstehfo",["exports"],function(e){var t=window.GlBackgroundVideo.h,n=function(){function e(){this.muted=!0}return e.prototype.componentDidLoad=function(){this.muted&&(this.videoElement.muted=!0)},e.prototype.render=function(){return t("video",{autoplay:!0,loop:!0,playsinline:!0,preload:"auto",muted:this.muted,src:this.src,poster:this.poster})},Object.defineProperty(e,"is",{get:function(){return"gl-background-video"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{muted:{type:Boolean,attr:"muted"},poster:{type:String,attr:"poster"},src:{type:String,attr:"src"},videoElement:{elementRef:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"video.sc-gl-background-video{position:fixed;top:50%;left:50%;min-width:100%;min-height:100%;width:auto;height:auto;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%)}.plt-android.sc-gl-background-video-h   video[poster].sc-gl-background-video, .plt-android   .sc-gl-background-video-h   video[poster].sc-gl-background-video{-o-object-fit:none;object-fit:none}"},enumerable:!0,configurable:!0}),e}();e.GlBackgroundVideo=n,Object.defineProperty(e,"__esModule",{value:!0})});