<?php
include "conexao.php";
$data=file_get_contents("php://input");
$data=json_decode($data);





$id=$data->id;
$name=$data->name;
$email=$data->email;
$foto=$data->foto;
$query="INSERT INTO usuario VALUES($id,'".$email."','".$name."','".$foto."')";

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
