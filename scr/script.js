function updateClock() {
	let date = new Date();
	let hours = date.getHours();
	let minutes = date.getMinutes();
	let ampm = hours >= 12 ? 'pm' : 'am';
	hours = hours % 12;
	hours = hours ? hours : 12;
	minutes = minutes < 10 ? '0'+minutes : minutes;
	let time = hours + ':' + minutes + ' ' + ampm;
	document.getElementById('time').innerHTML = time;
	setTimeout(updateClock, 1000);
}

updateClock();
