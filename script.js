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
  console.log(result);
  //loop for movie title
  for (const i of result) {
    const h1 = document.createElement("h1");
    h1.innerText = i.original_title;
    console.log(i.original_title);
    document.body.appendChild(h1);

    // const h1 = document.createElement("h1");
    // h1.innerText = i.original_title;
    // document.body.appendChild(h1);
    // console.log(i.original_title);

    const image = document.createElement("div");
    let imgLink = `https://image.tmdb.org/t/p/w500/${i.poster_path}`;
    image.innerHTML = `<img src=${imgLink}>`;
    console.log(imgLink);
    document.body.appendChild(image);
  }

  //section.innerHTML = `<img src=${dogPic}>`;
});
