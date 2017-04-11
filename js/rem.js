//	加载之后执行
	window.onload=function(){
//		设计稿宽度里的字体大小
		var fontSize=100;
		var designWidth=750;
		function rem(){
//			获取实际视口宽度
			var CW=document.documentElement.clientWidth;
			var mm=document.documentElement.clientHeight;
			var scale=CW/designWidth;
//			alert("视口实际宽度："+CW+"px");
//			alert("视口实际高度："+mm+"px");
			/*设置根目录实际字体大小*/
			document.querySelector("html").style.fontSize=fontSize*scale+"px";
		}
		
		rem();
//		设置视口里的实际字体大小
		window.onresize=rem;
	}