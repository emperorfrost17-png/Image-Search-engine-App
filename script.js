const accessKey = "bcyMDxd_WDg9084xRZ63AtI73qQ4KuEMyasWc1sKyIM";
const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");

let keyword = "";
let page = 1;

async function searchImages() {
  keyword = searchBox.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

  const response = await fetch(url);
  const data = await response.json();

  if (page === 1) {
    searchResult.innerHTML = "";
  }

  const results = data.results;

  results.map((result) => {
    // Create a new image element for each result from Unsplash
    const image = document.createElement("img");
    //This will put the image in the img tag
    image.src = result.urls.small;
    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";

    // Put the image inside the link so the image becomes clickable
    imageLink.appendChild(image);
    //imageLink will be displayed in the search result
    searchResult.appendChild(imageLink);
  });
  showMoreBtn.style.display = "block";
}
// Listen for when the search form is submitted, then run this function
searchForm.addEventListener("submit", (e) => {
  /*
  This stops the form’s default behavior.

By default, when you click a form’s submit button, the browser reloads the page and sends the form data through the URL. In your app, that would interrupt your JavaScript search.
*/
  // So e.preventDefault() says: Don’t reload the page. Let my JavaScript handle the search instead
  e.preventDefault();
  //Everytime we add a new keyword the page will be one
  page = 1;
  searchImages();
});
showMoreBtn.addEventListener("click", () => {
  page++;
  searchImages();
});
