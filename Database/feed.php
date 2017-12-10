<?php
//database settings
include "conexao.php";

$query="select * from post  inner join usuario on post.id_user=usuario.id_user inner join categoria on post.id_cat = categoria.id_cat  order by hora DESC;";

$rs=$dbhandle->query($query);

while ($row = $rs->fetch_array()) {
  $data[] = $row;
}




       print json_encode($data);
?>
