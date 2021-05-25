console.log("Let's get this party started!");

const searchButton = document.querySelector("#searchBtn");
const removeButton = document.querySelector("#removeBtn");

function createDivs() {}

async function getGiphy() {
	//get the search term from the input field
	const searchTerm = document.getElementById("input").value;

	const res = await axios.get("http://api.giphy.com/v1/gifs/search", {
		params: {
			q: searchTerm,
			api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym",
		},
	});

	console.log(res);

	//div that created div will be added to
	const parentDiv = document.getElementById("parentDiv");

	//create newdiv for gif
	const newDiv = document.createElement("div");

	//image to be added to newdiv
	const newImg = document.createElement("img");
	newImg.classList.add("img-fluid");
	const randomNum = Math.floor(Math.random() * 5);
	newImg.src = res.data.data[randomNum].images.original.url;

	//need to add new img to img
	newDiv.append(newImg);

	//appending the newdiv to parent div
	parentDiv.append(newDiv);

	const myData = res.data;
	return res.data.data;
}

searchButton.addEventListener("click", function (e) {
	e.preventDefault();

	const img = getGiphy();
});
