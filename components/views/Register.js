import html from "html-literal";

export default st => html`
  <!-- this is the login page -->
  <div class="flex-container">
    <div class="flex-child red">
  <h3>User Registration</h3>
        <div>
          <form action="" method="POST">
          <label for="username">Username:</label>
          <input id="userNameInput" type="text" id="username" name="username" placeholder="Enter Username...">
        </div>

        <div>
          <label for="pass">Password (8 characters minimum):</label>
          <input id="userPassInput" type="password" id="pass" name="password" placeholder="Enter Password..."
                minlength="8" required>
        </div>
        <input id="submitButtonOne" type="submit" value="Register">
        </form>

        <div class="register-home">
        Not a user? Register <a href="/Register">here!</a>
        </div>
    </div>
  </div>
`;
