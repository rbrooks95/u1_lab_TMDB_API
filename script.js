const API_KEY = "58cec9f92b6d481edd0424a7eac7e2e0";
const DOMAIN = "https://api.themoviedb.org/3";
const IMAGE_BASE_PATH = "https://image.tmdb.org/t/p/original";

const button = document.querySelector("button");
const movieTitle = document.querySelector("input");
const section = document.querySelector(".movie-list");

button.addEventListener("click", async () => {
  let titles = movieTitle.value;
  let response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${titles}&api_key=${API_KEY}`
  );
  const result = response.data.results;
  for (const i of result) {
    console.log(i.original_title);
  }
  let dogPic = response.data.message;
  //section.innerHTML = `<img src=${dogPic}>`;
});
