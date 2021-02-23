function distanciadatas(data1, data2) {
	let strarr1 = data1.split("/");
	if (
		strarr1[0] == undefined ||
		strarr1[1] == undefined ||
		strarr1[2] == undefined
	)
		return "";
	let strarr2 = data2.split("/");
	if (
		strarr2[0] == undefined ||
		strarr2[1] == undefined ||
		strarr2[2] == undefined
	)
		return "";
	strarr1 = new Date(strarr1[2], strarr1[1], strarr1[0]);
	strarr2 = new Date(strarr2[2], strarr2[1], strarr2[0]);
	strarr1 < strarr2 ? ([strarr1, strarr2] = [strarr2, strarr1]) : null;
	return Math.floor(
		(strarr1.getTime() - strarr2.getTime()) / (24 * 60 * 60 * 1000 * 7)
	);
}

function changeHandler() {
	let inputs = document.querySelectorAll("input");
	document.querySelector("p").innerHTML =
		distanciadatas(inputs[0].value, inputs[1].value) + " semanas";
}
