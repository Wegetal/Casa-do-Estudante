<?php
//database settings
include "conexao.php";

$query="SELECT *, COUNT(*) as pontos FROM respostas inner join usuario on usuario.id_user = respostas.id_user GROUP BY respostas.id_user order by pontos desc;";

$rs=$dbhandle->query($query);

while ($row = $rs->fetch_array()) {
  $data[] = $row;
}




       print json_encode($data);
?>
