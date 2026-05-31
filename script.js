const accessKey = "bcyMDxd_WDg9084xRZ63AtI73qQ4KuEMyasWc1sKyIM";
const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");

let keyword = "";
let page = 1;

async function searchImages() {
  keyword = searchBox.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}`;

  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
}
// Listen for when the search form is submitted, then run this function
searchForm.addEventListener("submit", (e) => {
  /*
  This stops the form’s default behavior.

By default, when you click a form’s submit button, the browser reloads the page and sends the form data through the URL. In your app, that would interrupt your JavaScript search.
*/ 
// So e.preventDefault() says: Don’t reload the page. Let my JavaScript handle the search instead
  e.preventDefault();
  page = 1;
  searchImages();
});
