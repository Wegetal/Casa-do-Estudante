<?php
$db_name = "Trab_Angular";
$mysql_user = "root";
$mysql_pass="";
$servername = "localhost";
$data = array();
$cat=$_GET['cat'];
$con = mysqli_connect($servername , $mysql_user , $mysql_pass , $db_name);






$query="Select * from categoria where cat='".$cat."'";


$rs=$con->query($query);

while ($row = $rs->fetch_array()) {
  $data[] = $row;
}

	
    
    print json_encode($data);



	

	

?>