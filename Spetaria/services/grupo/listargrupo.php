<?php
$username = "joaolu98_admin";
$password = "net261015";
$server = "localhost";
$port = "3306";
$databasename = "joaolu98_bd_delivery";
$tablename = "Grupos";
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

$stmt = mysqli_prepare($connection, "SELECT * FROM $tablename ");
mysqli_stmt_execute($stmt);
mysqli_stmt_bind_result($stmt, $rows->idGrupos,$rows->Nome_Grupo,$rows->Imagem);
$result = array();
while(mysqli_stmt_fetch($stmt)){
	$string = utf8_encode($rows->Nome_Grupo);
	$string2 = utf8_encode($rows->Imagem);
    $output = array('idGrupos' => $rows->idGrupos, 'Nome_Grupo' => $string, 'Imagem' => $string2);
    array_push($result,$output);
}

mysqli_close($connection);
echo json_encode($result,JSON_UNESCAPED_UNICODE);


?>