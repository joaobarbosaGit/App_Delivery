<?php
$grupos_idgrupos = $_REQUEST["grupos_idgrupos"];
$username = "joaolu98_admin";
$password = "net261015";
$server = "localhost";
$port = "3306";
$databasename = "joaolu98_bd_delivery";
$tablename = "Produto";
$connection = mysqli_connect(
    $server,
    $username,
    $password,
    $databasename,
    $port
);
if (mysqli_connect_errno()){
    trigger_error(mysqli_connect_error(), E_USER_ERROR);
}

$stmt = mysqli_prepare($connection, "SELECT * FROM $tablename WHERE Grupos_idGrupos = ?");
mysqli_stmt_bind_param($stmt,'i',$grupos_idgrupos);
mysqli_stmt_execute($stmt);
mysqli_stmt_bind_result($stmt, $rows->idProduto, $rows->Nome_Produto, $rows->Descricao, $rows->Valor, $rows->Valor_Promocional, $rows->Grupos_idGrupos);
$result = array();
while(mysqli_stmt_fetch($stmt)){
	$string = utf8_encode($rows->Nome_Produto);
    $string2 = utf8_encode($rows->Descricao);
    $string3 = utf8_encode($rows->Valor);
    $string4 = utf8_encode($rows->Valor_Promocional);
    $string5 = utf8_encode($rows->Grupos_idGrupos);
    $output = array('idProduto' => $rows->idProduto, 'Nome_Produto' => $string,'Descricao' => $string2, 'Valor' => $string3, 'Valor_Promocional' => $string4, 'Grupos_idGrupos' => $string5);
    array_push($result,$output);
}

mysqli_close($connection);
echo json_encode($result,JSON_UNESCAPED_UNICODE);


?>