var btn = document.getElementById('btn');
var list = document.getElementById('list');
var city;
var data;
var api = {};

btn.addEventListener('click', submit, false);
list.addEventListener('click', delet, true);

function submit() {
	city = document.getElementById('city').value.trim();
	data = document.getElementById('data').value.trim();
	api[city] = data;
	var element = "<tr><th>城市名称</th><th>空气质量</th><th>操作</th></tr>";
	for(var city in api) {
		element += "<tr><td>" + city + "</td><td>" + api[city] + "</td><td><button id='delete'>删除</button></td></tr>";
	}
	list.innerHTML = element;
}

function delet(event) {
	var target = event.target;
	var dnode = target.parentNode.parentNode;
	dnode.parentNode.removeChild(dnode);
}
function check_city() {
	city = document.getElementById('city').value.trim();
	var reg = new RegExp('^[A-Za-z\u4E00-\u9FA5]+$');
	if(!reg.test(city)) {
		document.getElementById('check_city').style.color = 'red';
		btn.disabled = true;
	} else {
        document.getElementById('check_city').style.color = 'black';
        btn.disabled = false;
	}
}
function check_data() {
	data = document.getElementById('data').value.trim();
	console.log(typeof data)
	console.log(data.match(/^\d+$/))
	if(!data.match(/^\d+$/)) {
		document.getElementById('check_data').style.color = 'red';
		btn.disabled = true;
	} else {
        document.getElementById('check_data').style.color = 'black';
        btn.disabled = false;
	}
}