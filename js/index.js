
(function() {
	var u = navigator.userAgent,
		app = navigator.appVersion;
	var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //Android终端
	var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
	// var maynot = document.getElementById("maynot");
	// var sure = document.getElementById("sure");
	var title = document.getElementsByClassName("title");
	var main = document.getElementsByClassName("main");
	var footer = document.getElementsByClassName("footer");
	// debugger
	if (isAndroid) {
		title.style.marginTop = '-1px';
		main.style.marginTop = '-1px';
		footer.style.marginTop = '-1px';
	}
	if (isIOS) {
		
	}
})();
