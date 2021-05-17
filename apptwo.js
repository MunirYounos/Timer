let putCurrentDateForAll = new Date();
const domId = document.getElementById('time');
const domTopId = document.getElementById('barTime');

weekDayNames(putCurrentDateForAll);

function weekDayNames(d) {
	weekday = d.getDay(),
		dayslabel = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
		weekday = dayslabel[d.getDay()];
	//switcher
	switch (weekday) {
		case 'Fri':
			console.log('its friday');
			break;
		case 'Sat':
			calculateDeliveryTimeFriday(domId, d, 17);
			calculateDeliveryTimeFriday(domTopId, d, 17);

			console.log('it is satuday !!');
			break;
		case 'Sun':
			console.log('its sunday');
			break;
		default:
			calculateDeliveryTimeEveryDay(domId, d, 14);
			calculateDeliveryTimeEveryDay(domTopId, d, 10);
	}
}


function calculateDeliveryTimeEveryDay(someId, currentDate, setTime) {
	let putDateOfNow = currentDate,
		startDateOfToday = putDateOfNow.setHours(setTime, 00, 00),
		endDateOfToday = putDateOfNow.setHours(23, 59, 59);
	//add zeros
	function addZero(num) {
		return ("0" + parseInt(num)).substr(-2);
	}

	function tick() {
		let now = new Date();
		if (now <= startDateOfToday) {
			let remain = ((startDateOfToday - now) / 1000),
				hours = addZero((remain / 60 / 60) % 60),
				min = addZero((remain / 60) % 60),
				sec = addZero(remain % 60);
			someId.innerHTML = `Levering i morgen - bestil inden <span class="time-go"><span class="time-hour"> ${hours}</span> : <span class="time-min"> ${min}</span> : <span class="time-sec"> ${sec}</span> </span>`;
			setTimeout(tick, 1000);

		} else if (now < endDateOfToday) {
			if (now >= endDateOfToday) { // too late, go to tomorrow
				after.setDate(after.getDate() + 1);
			}
			let remain = ((endDateOfToday - now) / 1000),
				hours = addZero((remain / 60 / 60) % 60),
				min = addZero((remain / 60) % 60),
				sec = addZero(remain % 60);
			someId.innerHTML = `Vi sender i morgen - bestil inden <span class="time-up"  ><span class="time-hour"> ${hours}</span> : <span class="time-min"> ${min}</span> : <span class="time-sec" > ${sec}</span> </span>`;
			setTimeout(tick, 1000);
		}
	}
	tick();
}


function calculateDeliveryTimeFriday(someId, currentDate, setTime) {
	let putDateOfNow = currentDate,
		startDateOfToday = putDateOfNow.setHours(setTime, 28, 00);
	//add zeros
	function addZero(num) {
		return ("0" + parseInt(num)).substr(-2);
	}
	function tick() {
		let now = new Date();
		if (now <= startDateOfToday) {
			let remain = ((startDateOfToday - now) / 1000),
				hours = addZero((remain / 60 / 60) % 60),
				min = addZero((remain / 60) % 60),
				sec = addZero(remain % 60);
			someId.innerHTML = `Levering i morgen - bestil inden <span class="time-go"><span class="time-hour"> ${hours}</span> : <span class="time-min"> ${min}</span> : <span class="time-sec"> ${sec}</span> </span>`;
			setTimeout(tick, 1000);

		} else if (now > startDateOfToday) {
			someId.style.display = 'none';
		}
	}
	tick();
}





function calculateDeliveryTimeSaturday(someId) {
	someId.style.display = 'none';
}
