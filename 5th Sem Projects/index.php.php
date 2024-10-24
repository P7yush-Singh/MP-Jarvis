<?php
$server = "localhost";
$username = "root";
$password = "";
$db = "records";

$conn = mysqli_connect($server, $username, $password, $db);
if (!$conn) {
    die("Error" . mysqli_connect_error());
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $password = htmlspecialchars($_POST['password']);
    $confirm_password = htmlspecialchars($_POST['cpassword']);

    // Password confirmation check
    if ($password !== $confirm_password) {
        $showError = "Passwords do not match!";
    } else {
        if (registerUser($conn, $name, $email, $password, $confirm_password)) {
            // Registration successful
            $showAlert = true;
            // Uncomment the following line if you want to redirect to login page
            header("Location: index.php");
            // exit();
        } else {
            // Registration failed
            $showError = "Registration failed! Please try again.";
        }
    }
}

function registerUser($conn, $name, $email, $password, $confirm_password) {
    $sql = "INSERT INTO `accounts` (`name`, `email`, `password`, `cpassword`) VALUES ('$name', '$email', '$password', '$confirm_password')";
    $result = mysqli_query($conn, $sql);
    return $result;
}
?>


<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="Login/style.css"/>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
      integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
      rel="stylesheet"
    />
    <title>ECC Login</title>
  </head>
  <body>
    <div class="container" id="container">
      <div class="sign-up">
        <form action="other.php" method="post">
          <h1>Create Account</h1>
          <div class="icons">
            <a href="#" class="icon"><i class="fa-brands fa-facebook"></i></a>
            <a href="#" class="icon"><i class="fa-brands fa-instagram"></i></a>
            <a href="#" class="icon"><i class="fa-brands fa-google"></i></a>
            <a href="#" class="icon"><i class="fa-brands fa-github"></i></a>
          </div>
          
          <input type="text" name="name" placeholder="Name" required/>
          <input type="text" name="email" placeholder="Email" required/>
          <input type="password" name="password" placeholder="Enter Password" class="passlen" required/>
          <input type="password" name="cpassword" placeholder="Confirm Password" class="passlen" required/>
          <button onclick="validateForm()">Sign Up</button>
        </form>
      </div>
      <div class="sign-in">
      <form action="other.php" method="post">
          <h1>Sign In</h1>
          <div class="icons">
            <a href="#" class="icon"><i class="fa-brands fa-facebook"></i></a>
            <a href="#" class="icon"><i class="fa-brands fa-instagram"></i></a>
            <a href="#" class="icon"><i class="fa-brands fa-google"></i></a>
            <a href="#" class="icon"><i class="fa-brands fa-github"></i></a>
          </div>
          
          <input type="email" placeholder="Email" required>
          <input type="password" placeholder="Password" class="passlen" required>
          <a href="#" class="effect">Forget password</a>
          <button>Sign In</button>
        </form>
      </div>
      <div class="toogle-container">
        <div class="toogle">
          <div class="toogle-panel toogle-left">
            <h1>Welcome User!</h1>
            <p>If you already have an account</p>
            <button class="hidden" id="login">Sign In</button>
          </div>
          <div class="toogle-panel toogle-right">
            <h1>Hello, User!</h1>
            <p>"If you don't have an account"</p>
            <button class="hidden" id="register">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
    <script src="Login/script.js"></script>
  </body>
</html>