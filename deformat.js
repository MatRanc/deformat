document.getElementById("deformat").addEventListener("click", function() {
	const text = document.getElementById("text");
	text.value = text.value.replace(/(\r\n|\n|\r)/gm, " ").replace(/\s+/g, " ");
});

document.getElementById("clear").addEventListener("click", function() {
	document.getElementById("text").value = "";
});

document.getElementById("copy").addEventListener("click", function () {
	const text = document.querySelector("#text");
	text.select();
	document.execCommand("copy");
	showToast();
});

function showToast() {
	const toast = document.getElementById("toast");
	toast.style.display = "block";
	setTimeout(() => {
		toast.style.display = "none";
	}, 3000);
}

document.getElementById("theme").addEventListener("click", function () {
	const root = document.documentElement;
	const dark = (root.style.colorScheme || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")) === "dark";
	root.style.colorScheme = dark ? "light" : "dark";
	localStorage.setItem("theme", root.style.colorScheme);
});
