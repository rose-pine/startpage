function updateClock() {
	const date = new Date();
	const hours = date.getHours();
	const minutes = date.getMinutes();
	const ampm = hours >= 12 ? 'pm' : 'am';
	hours = hours % 12;
	hours = hours ? hours : 12;
	minutes = minutes < 10 ? '0'+minutes : minutes;
	const time = hours + ':' + minutes + ' ' + ampm;
	document.getElementById('time').innerHTML = time;
	setTimeout(updateClock, 1000);
}

updateClock();
