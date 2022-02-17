import html from "html-literal";

export default st => html`
  <div id="media-page">
    <h2>List of All Media:</h2>
  </div>
  <section id="game-page">
    ${st.lists.games
      .map(game => {
        return formatGame(game);
      })
      .join("")}
    ${st.lists.movies
      .map(movie => {
        return formatMovie(movie);
      })
      .join("")}
    ${st.lists.books
      .map(book => {
        return formatBook(book);
      })
      .join("")}
  </section>
`;

function formatGame(game) {
  return `
    <div class="game-flex">
    <h3>Game Name: ${game.name}</h3>
    <img src=${game.picUrl}>
    <h4>Game Info</h4>
    <h5>Genre: ${game.genre.join(" & ")}<br>
    Released: ${game.yearReleased}<br>
    Consoles: ${game.console}</h5>
    </div>
  `;
}
function formatMovie(movie) {
  return `
<div class="movie-flex">
<h3>Movie Name: ${movie.name}</h3>
<img src=${movie.picUrl}>
<h4>Movie Info</h4>
<h5>Genre: ${movie.genre.join(" & ")}<br>
Released: ${movie.yearReleased}<br>
Studio: ${movie.distributor}</h5>
</div>
`;
}
function formatBook(book) {
  return `
    <div class="book-flex">
    <h3>Book Name: ${book.name}</h3>
    <img src=${book.picUrl}>
    <h4>Book Info</h4>
    <h5>Genre: ${book.genre.join(" & ")}<br>
    Released: ${book.yearReleased}<br>
    Author: ${book.author}</h5>
    </div>
  `;
}

// {
/* <div id="media-border">
    <table id="media">
      <thead>
        <tr>
          <th>Name</th>
          <th>Genre</th>
          <th>Year Released</th>
          <th>Console</th>
        </tr>
      </thead>
      ${st.lists.games
        .map(list => {
          return `<tr><td>${list.name}</td><td>${list.genre.join(
            " & "
          )}</td><td>${list.yearReleased}</td><td>${list.console}</td></tr>`;
        })
        .join("")}
    </table>

    <table id="media">
      <thead>
        <tr>
          <th>Name</th>
          <th>Genre</th>
          <th>Year Released</th>
          <th>On Amazon</th>
        </tr>
      </thead>
      ${st.lists.books
        .map(list => {
          return `<tr><td>${list.name}</td><td>${list.genre.join(
            " & "
          )}</td><td>${list.yearReleased}</td><td>Yes</td></tr>`;
        })
        .join("")}
    </table>

    <table id="media">
      <thead>
        <tr>
          <th>Name</th>
          <th>Genre</th>
          <th>Year Released</th>
          <th>Distributor</th>
        </tr>
      </thead>
      ${st.lists.movies
        .map(list => {
          return `<tr><td>${list.name}</td><td>${list.genre.join(
            " & "
          )}</td><td>${list.yearReleased}</td><td>${
            list.distributor
          }</td></tr>`;
        })
        .join("")}
    </table>
  // </div> */

// function formatGameEntry(list) {
//   return html`
//     <table id="media">
//       <tr>
//         <th>Name</th>
//         <th>Genre</th>
//         <th>Year Released</th>
//         <th>Console</th>
//       </tr>
//       ${list.games
//         .map(list => {
//           return `<tr><td>${list.name}</td><td>${list.genre.join(
//             " & "
//           )}</td><td>${list.yearReleased}</td><td>${list.console}</td></tr>`;
//         })
//         .join("")}
//     </table>
//   `;
// }
