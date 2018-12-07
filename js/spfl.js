(function(){
	var qjd1=document.getElementById("qjd1");
	var two=document.getElementById("two");
	var js1=document.getElementById("js1");
	var js2=document.getElementById("js2");
	two.onclick=function(){
		if(getStyle(js1).display=="block"){
			js1.style.display="none";
			js2.style.display="block";
			qjd1.style.display="block";
		}else if(getStyle(js2).display=="block"){
			js2.style.display="none";
			js1.style.display="block";
			qjd1.style.display="none";
		}
	}
}());

//点击样式
(function(){
	var sort=document.getElementsByClassName("sort")[0];
	var price=document.getElementsByClassName("price")[0];
	
	yangshi(sort);
	yangshi(price);	
}());


//分页
(function(){
	var sy=document.getElementById("sy");
	var qy=document.getElementById("qy");
	var xy=document.getElementById("xy");
	var my=document.getElementById("my");
	var ul=document.getElementById("ul");
	var items=document.getElementsByClassName("item");
		ul.onclick=function(e){
		var e=e||window.event;
		var target=e.target||e.srcElement;
		if(target.className=="item"){
			for(var i=0;i<items.length;i++){
				if(items[i].className=="item b2"){
					items[i].className="item";
				}
			}
			target.className+=" b2";
		}
	}
	sy.onclick=function(){
		for(var i=0;i<items.length;i++){
			if(items[i].className=="item b2"){
				items[i].className="item";
			}
		}
		items[0].className+=" b2";
	}
	my.onclick=function(){
		for(var i=0;i<items.length;i++){
			if(items[i].className=="item b2"){
				items[i].className="item";
			}
		}
		items[items.length-1].className+=" b2";
	}
	qy.onclick=function(){
		for(var i=1;i<items.length;i++){
			if(items[i].className=="item b2"){
				items[i].className="item";
				items[i-1].className+=" b2";
				break;
			}
		}
	}
	xy.onclick=function(){
		for(var i=0;i<items.length-1;i++){
			if(items[i].className=="item b2"){
				items[i].className="item";
				items[i+1].className+=" b2";
				break;
			}
		}
	}
}());

(function(){
var content=document.getElementsByClassName("i_content1")[0];
var a=content.getElementsByClassName("a1");
for(var i=0;i<a.length;i++){
	a[i].onclick=function(){
		var i1=this.children[0];
		i1.className="";
		for(var j=0;j<a.length;j++){
			if(a[j].className=="a1 b2"){
				a[j].className="a1";
				a[j].children[0].className="";
			}
		}
		this.className+=" b2";
		i1.className="i1";
	}
}
}());

//点击样式
function yangshi(obj){
	var bbb=obj.getElementsByClassName("bbb");
	for(var i=0;i<bbb.length;i++){
		bbb[i].onclick=function(){
			for(var i=0;i<bbb.length;i++){
				if(bbb[i].className=="bbb b2"){
					bbb[i].className="bbb";
				}
			}
			this.className="bbb b2";
		}
	}
}

//导航动画
function fade(obj,target,callback){
	clearInterval(obj.fade);
	var a_Right=parseInt(getStyle(obj).right);
	obj.fade=setInterval(function(){
		var right=parseInt(getStyle(obj).right);
		if(a_Right==0){
			obj.style.right=right+20+"px";
		}else if(a_Right==296){
			obj.style.right=right-20+"px";
		}
		
		if(Math.abs(target-right)<20){
			clearInterval(obj.fade)
			obj.style.right=target+"px";
			if(callback){
				callback();
			}
		}
	},16)
}

//获取样式
function getStyle(obj){
	return getComputedStyle(obj,null)?getComputedStyle(obj,null):obj.currentStyle;
}