<?php
//require_once "./conection/pdo.php";
$servername = "localhost";
$database = "agendaFull";
$username = "root";
$password = "";

$sql = "mysql:host=$servername;dbname=$database;";
$dsn_Options = [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION];
// Create a new connection to the MySQL database using PDO, $my_Db_Connection is an object
try { 
  $my_Db_Connection = new PDO($sql, $username, $password, $dsn_Options);
  echo "Connected successfully";
} catch (PDOException $error) {
  echo 'Connection error: ' . $error->getMessage();
}
// Set the variables for the person we want to add to the database
$title = $_POST['title'];
$description = $_POST['description'];
$idUser = "1";
// Here we create a variable that calls the prepare() method of the database object
// The SQL query you want to run is entered as the parameter, and placeholders are written like this :placeholder_name
$my_Insert_Statement = $my_Db_Connection->prepare("INSERT INTO schedules (title, description, idUser) VALUES (:title, :description, :idUser)");
// Now we tell the script which variable each placeholder actually refers to using the bindParam() method
// First parameter is the placeholder in the statement above - the second parameter is a variable that it should refer to
$my_Insert_Statement->bindParam(':title', $title);
$my_Insert_Statement->bindParam(':description', $description);
$my_Insert_Statement->bindParam(':idUser', $idUser);
// Execute the query using the data we just defined
// The execute() method returns TRUE if it is successful and FALSE if it is not, allowing you to write your own messages here
if ($my_Insert_Statement->execute()) {
  echo "New record created successfully";
} else {
  echo "Unable to create record";
}

