<?php

include "conexao.php";
$data=json_decode(file_get_contents("php://input"));
$id=$data->id;

$query="DELETE r  FROM respostas r WHERE  r.id_post=$id;";

$dbhandle->query($query);
$query1 = "DELETE p FROM post p WHERE p.id_post=$id;";

$dbhandle->query($query1);





 ?>
