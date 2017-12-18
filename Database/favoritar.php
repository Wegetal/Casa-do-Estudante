<?php
include "conexao.php";
$data=file_get_contents("php://input");
$data=json_decode($data);





$id=$data->id;
$query="UPDATE respostas set melhoresp=true where id_resp=$id;";

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
