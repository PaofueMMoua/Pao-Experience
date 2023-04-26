<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pao Experience</title>
    <link rel="stylesheet" href="./css/style.css">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Signika:wght@300&display=swap');
    </style>
</head>

<body class="abt">
    <header>
        <ul class="nav-bar">
            <li class="nav-item"><a href=""><img src="./img/PM.png" alt="Logo" class="Logo"></a></li>
            <li class="nav-item"><a href="index.html">Home</a></li>
            <li class="nav-item"><a href="./about.html">About</a></li>
            <li class="nav-item"><a href="./resume.html">Resume</a></li>
            <li class="nav-item"><a href="./Portfolio.html">Portfolio</a></li>
            <li class="nav-item"><a href="./contact.html">Contact</a></li>
        </ul>
    </header>


    <form action="mailto:paofuemmoua@gmail.com" method="post" enctype="multipart/form-data" name="emailtest">
        Name : <input type="text" name="Visitor"> <br><br>
        Message : <textarea name="VisitorComment" cols="20" rows="4"></textarea> <br><br>
        <input type="submit" value="Submit">
     </form>
     
<?php
$errors = ”;
$myemail = 'PaofueMMoua@gmail.com';
if(empty($_POST[‘name’]) || empty($_POST[’email’]) || empty($_POST[‘message’])){

$errors .= “\n Error: all fields are required”;

}

$name = $_POST[‘name’];

$email_address = $_POST[’email’];

$message = $_POST[‘message’];

if (!preg_match(

“/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i”, $email_address))

{

$errors .= “\n Error: Invalid email address”;

}

if( empty($errors))

{

$to = $myemail;

$email_subject = “Contact form submission: $name”;
$email_body = “You have received a new message. “.

” Here are the details:\n Name: $name \n “.

“Email: $email_address\n Message \n $message”;

$headers = “From: $myemail\n”;

$headers .= “Reply-To: $email_address”;

mail($to,$email_subject,$email_body,$headers);

//redirect to the ‘thank you’ page

header(‘Location: contact-form-thank-you.html’);

}

?>


    <footer class="row main dkgreen foot">
        <a href="./index.html"><img src="./img/PM.png" alt="Logo" class="Logo"></a>
        <div class="column">
            <h4>Contact Info</h4>
            <a href="https://www.instagram.com/pao_experience/">Instagram</a>
            <h5>PaofueMMoua@gmail.com</h5>
        </div>
        <div class="column">
            <ul class="column">
                <li class="nav-item"><a href="./index.html">Home</a></li>
                <li class="nav-item"><a href="./about.html">About</a></li>
                <li class="nav-item"><a href="./resume.html">Resume</a></li>
                <li class="nav-item"><a href="./Portfolio.html">Portfolio</a></li>
                <li class="nav-item"><a href="">Contact</a></li>
            </ul>
        </div>
    </footer>
    <script src="./js/test.js"></script>
    </body>
    
    </html>