const text = document.getElementById("text");
const delay = document.getElementById("delay");
const output = document.getElementById("output")

function delaytext(delay) {
	return new Promise((resolve) => {
		setTimeout(resolve, delay);
	})
}
async function run(text, delay){
	await delaytext(delay);
	output.innerText = text;
}
document.getElementById("btn").addEventListener("click", () => {
	const text1 = text.value;
	const delay1 = parseInt(delay.value);
	run(text1, delay1);
});
