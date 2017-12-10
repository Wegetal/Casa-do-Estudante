<?php

include "conexao.php";
$id=$_GET['id_user'];
$query="select * from post  inner join usuario on post.id_user=usuario.id_user inner join categoria on categoria.id_cat = post.id_cat where post.id_user='".$id."' order by hora DESC;";

$rs=$dbhandle->query($query);

while ($row = $rs->fetch_array()) {
  $data[] = $row;
}




       print json_encode($data);
?>
