$(document).ready(carregou);

function carregou(){
	console.log("ZIp ZAp Zoom");
	var posicaodivisao1 = $("#divisao1").offset().top-60;
	var posicaodivisao2 = $("#divisao2").offset().top-60;
	var posicaodivisao3 = $("#divisao3").offset().top-60;
	var posicaodivisao4 = $("#divisao4").offset().top-60;
	console.log(posicaodivisao4);
	
	
	$("#btn1").click(godivisao1);
	$("#btn2").click(godivisao2);
	$("#btn3").click(godivisao3);
	$("#btn4").click(godivisao4);
	
		function godivisao1(){
		console.log("1 ok");
		$("html,body").animate({scrollTop: posicaodivisao1},1000);
	}
	
		function godivisao2(){
		console.log("2 ok");
		$("html,body").animate({scrollTop: posicaodivisao2},1000);
	}
	
		function godivisao3(){
		console.log("3 ok");
		$("html,body").animate({scrollTop: posicaodivisao3},1000);
	}
	
	function godivisao4(){
		console.log("4 ok");
		$("html,body").animate({scrollTop: posicaodivisao4},1000);
	}
}