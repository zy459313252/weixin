/*
* @Author: Administrator
* @Date:   2017-06-17 17:38:23
* @Last Modified by:   Administrator
* @Last Modified time: 2017-06-17 17:43:15
*/

'use strict';
/*window.onload = function() {*/
	function change(num){
		return num < 10 ? "0" + num : num;
	}
	function dateStyle(){
		var date = new Date();
		var hour = date.getHours();
		var mins = date.getMinutes();
		var second = date.getSeconds();
		var time = change(hour) + ":" + change(mins) + ":" + change(second);
		var p1 = document.getElementsByTagName('p')[0];
		p1.innerHTML = time;
	}
	dateStyle();
	window.setInterval(dateStyle,1000);

	var content = document.getElementsByClassName('content')[0];
	var footer = document.getElementById('footer');

	var currentUser = 1;
	function changeUser(){
		var img = footer.getElementsByTagName('img')[0];
		if(currentUser == 1){
			currentUser = 2;
			img.src = 'images/2.jpg';
		} else{
			currentUser = 1;
			img.src = 'images/1.jpg';
		}
	}

	function send(){
		var input = document.getElementById('txt');
		var info = input.value;
		if(currentUser == 1) {
			content.innerHTML = content.innerHTML + '<li><span class="icon lt"><img src="images/1.jpg"/></span><span class="lt chatBox white">'+ info + '</span></li>'
		} else {
			content.innerHTML = content.innerHTML + '<li><span class="icon rt"><img  src="images/2.jpg"/></span><span class="rt chatBox green">'+ info + '</span></li>'
		}

		if(content.scrollHeight > content.clientHeight){
			var ret = content.scrollHeight - content.clientHeight;
			content.scrollTop = ret;
		}
	}
/*}*/