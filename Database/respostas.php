<?php

include "conexao.php";
$id=$_GET['id_post'];
  $query="select * from respostas  inner join usuario on respostas.id_user=usuario.id_user inner join post on respostas.id_post=post.id_post where respostas.id_post='".$id."' order by id_resp=post.id_melhorresp desc;";

$rs=$dbhandle->query($query);

while ($row = $rs->fetch_array()) {
  $data[] = $row;
}




       print json_encode($data);
?>
