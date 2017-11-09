<?php
$db_name = "Trab_Angular";
$mysql_user = "root";
$mysql_pass="";
$servername = "localhost";
$data = array();
$id_cat = $_GET['id_cat'];
$con = mysqli_connect($servername , $mysql_user , $mysql_pass , $db_name);






$query="Select * from post where id_categoria=".$id_cat."";


$rs=$con->query($query);

while ($row = $rs->fetch_array()) {
  $data[] = $row;
}

	
    
    print json_encode($data);



	

	

?>