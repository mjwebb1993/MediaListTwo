import html from "html-literal";

export default st => html`
  <header>
    <div id="headerTitle">
      <h2>MEDIA LIST EXPRESS</h2>
      <h4>An app that allows you to keep track of your favorites and more!</h4>
    </div>
    <div id="current-page">
      <h3>You are currently on the ${st.view} page</h3>
    </div>
  </header>
`;

// <!-- <a href="">"Call to Action" "Button"</a> --> above line 3
