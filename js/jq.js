$(function(){
//控制输入框只能输入一位并且是数字
$(".inputCont-one").focus();
$(".line-one").hide()
onload = function(){
var txts = on.getElementsByTagName("input");
for(var i = 0; i<txts.length;i++){
var t = txts[i];
t.index = i;
t.setAttribute("readonly", true);
t.onkeyup=function(){
if(this.value=this.value.replace(/\D/g,'')) {
var next = this.index + 1;
if(next > txts.length - 1) return;
txts[next].removeAttribute("readonly");
txts[next].focus();
}else{
$(this).focus();
}
}
}
txts[0].removeAttribute("readonly");
}
// 输入框获得焦点的时候后面的横线消失
$(".inputCont-one").focus(function(){
$(".line-one").hide()
})
$(".inputCont-two").focus(function(){
$(".line-two").hide()
})
$(".inputCont-three").focus(function(){
$(".line-three").hide()
})
$(".inputCont-four").focus(function(){
$(".line-four").hide()
})
$(".inputCont-six").focus(function(){
$(".line-six").hide()
})
$(".inputCont-five").focus(function(){
$(".line-five").hide()
})
})
