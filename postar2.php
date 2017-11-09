<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "Trab_Angular";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "INSERT INTO post 
VALUES (1, 'Qual a capital da Noruega', 'Capitais da Europa',1,null,2)";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>