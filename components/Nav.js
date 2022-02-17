import html from "html-literal";

export default links => html`
  <nav>
    <i class="fas fa-bars"></i>
    <ul class="hidden--mobile nav-links">
      ${links
        .map(
          link =>
            `<li><a href="/${link.title !== "Home" ? link.title : ""}" title="${
              link.title
            }" data-navigo>${link.text}</a></li>`
        )
        .join("")}
    </ul>
  </nav>
`;

{
  /* <li>Home</li>
    <li>Catalog</li>
    <li><button1>User Page</button1></li>
    <li>
        <form action="" method="POST">
            <label for="search">Search</label>
            <input type="text" name="search" id="search" placeholder="Search here..." />
        </form>
    </li> */
}
