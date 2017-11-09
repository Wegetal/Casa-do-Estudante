<?php
$db_name = "Trab_Angular";
$mysql_user = "root";
$mysql_pass="";
$servername = "localhost";
$conn = mysqli_connect($servername , $mysql_user , $mysql_pass , $db_name);
$sql="insert into post(post_title,post_ct,id_user,id_categoria) values('Capitais da Europa','Qual a capital da noruega?',1,2)"

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}$conn->mysqli_query($sql);
$conn->close();
?>