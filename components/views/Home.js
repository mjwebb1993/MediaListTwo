import html from "html-literal";

export default st => html`
<section id="home">
  <div class="intro-paragraph">
    <h3>Media List Express Introduction</h3>
      <p>Welcome to Media List Express! This application will allow you to organize the content that you want to watch while never having to guess if you've already seen it!</p>

      <p>Have you ever lost track of what season you were on? Missed a game you wanted to play? Those will be question of the past with these set of features:</p>
        <ul class="feature list">
          <li>View an extensive catalog of Movies, Games and Books</li>
            <li>Separate between the three media categories to narrow your search</li>
            <li>Create two lists: one of your past viewing, and one for what you want to view later</li>
        </ul>
      <p>Below you will be able to log in, register, and see an example of our extensive catalog. Enjoy!</p>
  </div>
  <div class="flex-container">
    <div class="flex-child red">
      <h4>Become a User Today!</h4>
      <h5>Follow the links below to get started!</h5>
    <div class="login-home">
    Already a user? Click <a href="/Login">here</a> to Log in!
    </div>

    <div class="register-home">
        Not a user? Register <a href="/Register">here!</a>
        </div>
    </div>

    <div class="flex-child blue">
      <h4>See some of your favorites like Mass Effect, Endgame and even more!</h4>
      ${st.examples
  .map(example => {
    return formatGame(example);
  })
  .join("")}
  </div>
    </div>
  </div>
</section>
`;

function formatGame(example) {
  return `
    <img src=${example.picUrl} width="100" height="100">
  `;
}
