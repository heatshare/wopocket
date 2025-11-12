var sitejs={
	'addPlayBox':function(str){
		$("#player").append('<iframe id="playframe" width="100%" height="100%" frameborder="0" scrolling="no" src="./cbplayer.html?url='+str+'"></iframe>');
	},
	'chanageColor':function(){
		$(".nav-link").first().addClass("vurlidactive");
		$(".nav-link").click(function(){  //鐐瑰嚮涓嬮潰鐨勬寜閽Е鍙戜簨浠�;
			$(this).addClass("vurlidactive").siblings().removeClass("vurlidactive");
		})  
	},
	'getVurl':function(){
		var vurlstrs = Base64.decode(vinfos);
		var vurlarrs = vurlstrs.split('#');
		var vurlarr = vurlarrs.pop();
	},
	'chooseVurl':function(n){
		var vurls = Base64.decode(vinfos);
		var vurlarr = vurls.split('#');
		var num = n;
		vurl = vurlarr[num].split('$')[1];
		return vurl
	},
	'changeVurl':function(urlid){
		var vurl = sitejs.chooseVurl(urlid);
		sitejs.chanageColor();
		$("#playframe").remove();
		sitejs.addPlayBox(vurl);
	},
	'defaultVurl':function(){
		var vurls = Base64.decode(vinfos);
		var vurlfenge = vurls.split('#');
		var vurlrfenge = vurls.split('$');
		if (vurlfenge.length >= 1) {
			vurl = vurlfenge[0].split('$')[1];
		} else if(vurlrfenge >= 1){
			vurl = vurlfenge[0].split('$')[1];
		}else{
			vurl = vurls;
		}
		sitejs.chanageColor();
		sitejs.addPlayBox(vurl);
	}
}
$(function(){
	sitejs.defaultVurl();
})