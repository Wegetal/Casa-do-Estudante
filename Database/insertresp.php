
<?php
include "conexao.php";
$data=file_get_contents("php://input");
$data=json_decode($data);





$id_user=$data->id_user;
$resp=$data->resp;
$id_post=$data->id_post;

$query="INSERT INTO respostas  VALUES(null,'".$resp."','".$id_user."',$id_post,0);";

$dbhandle->query($query);
//	}

	//else {

		//$id=$dbhandle->real_escape_string($data->id);
    //   $name=$dbhandle->real_escape_string($data->name);
  //     	$query="UPDATE student SET studname = '".$name."' WHERE studid=$id ";
      // 	$dbhandle->query($query);
//


//	}

?>
