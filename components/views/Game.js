import html from "html-literal";

export default st => html`
  <div id="media-page">
    <h2>List of All Games:</h2>
  </div>
  <section id="game-page">
    ${st.games
      .map(game => {
        return formatGame(game);
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
    <input id="selectButtonFuture" type="button" value="Future List" data-name="${
      game.name
    }" data-img="${game.picUrl}" data-genre="${game.genre}" data-year="${
    game.yearReleased
  }">
  <input id="selectButtonPast" type="button" value="Past List" data-name="${
    game.name
  }" data-img="${game.picUrl}" data-genre="${game.genre}" data-year="${
    game.yearReleased
  }">
    </div>

  `;
}

// <!-- <h2>List of All Games:</h2>
//   <table id="media">
//     <thead>
//       <tr>
//         <th>Name</th>
//         <th>Genre</th>
//         <th>Year Released</th>
//         <th>Console</th>
//       </tr>
//     </thead>
//     ${st.games
//     .map(game => {
//       return `<tr><td>${game.name}</td><td>${game.genre.join(" & ")}</td><td>${
//         game.yearReleased
//       }</td><td>${game.console}</td><td><input id="selectButton"
//                         type="button"
//                         value="submit"
//                         onclick="show()"></td></tr>`;
//     })
//     .join("")}
//   </table> -->
// `;
// // function show() {
// //   let rowId = event.target.parentNode.parentNode.id;
// //   let data = document.getElementById(rowId).querySelectorAll(".row-data");
// //   let name = data[0].innerHTML;
// //   let age = data[1].innerHTML;
// //   alert("Name: " + name + "/nAge " + age);
// // }
// // document.querySelector("#selectButton").addEventListener("click", () => {
// //   console.log("I was clicked");
// // });

// // function formatMediaEntry(game) {
// //   return `
// //     <div class="intro-paragraph">
// //       <p>${game.name} was released in ${game.yearReleased} and has the following tags: ${game.genre}</p>
// //     </div>
// //   `;
// // }
