import html from "html-literal";

export default st => html`
  <div id="media-page">
    <h2>User Future List:</h2>
  </div>
  <section id="game-page">
    ${st.hits.map(hit => {
      return formatRecipe(hit);
    })}
    ${st.futureListMovie
      .map(list => {
        return formatMovie(list);
      })
      .join("")}
    ${st.futureListGame
      .map(list => {
        return formatGame(list);
      })
      .join("")}
    ${st.futureListBook
      .map(list => {
        return formatBook(list);
      })
      .join("")}
  </section>
  <div id="media-page">
    <h2>User Past List:</h2>
  </div>
  <section id="game-page">
    ${st.pastListMovie
      .map(list => {
        return formatMovie(list);
      })
      .join("")}
    ${st.pastListGame
      .map(list => {
        return formatGame(list);
      })
      .join("")}
    ${st.pastListBook
      .map(list => {
        return formatBook(list);
      })
      .join("")}
  </section>
`;
function formatRecipe(hit) {
  return `
  <div class="book-flex">
  Name: ${hit.label}
  Image: <img src=${hit.image}>
  </div>
  `;
}
function formatBook(list) {
  return `
  <div class="book-flex">
  <h3>Book Name: ${list.name}</h3>
  <img src=${list.picUrl}>
  <h4>Book Info</h4>
  <h5>Genre: ${list.genre}<br>
  Released: ${list.yearReleased}<br>
  Author: ${list.author}</h5>
  </div>
  `;
}
function formatGame(list) {
  return `
  <div class="game-flex">
  <h3>Game Name: ${list.name}</h3>
  <img src=${list.picUrl}>
  <h4>Game Info</h4>
  <h5>Genre: ${list.genre}<br>
  Released: ${list.yearReleased}<br></h5>
  </div>
  `;
}
function formatMovie(list) {
  return `
  <div class="movie-flex">
  <h3>Movie Name: ${list.name}</h3>
  <img src=${list.picUrl}>
  <h4>Movie Info</h4>
  <h5>Genre: ${list.genre}<br>
  Released: ${list.yearReleased}<br></h5>
  </div>
  `;
}
