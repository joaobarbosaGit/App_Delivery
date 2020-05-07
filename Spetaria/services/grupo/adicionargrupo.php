<?php
$nome_grupo = utf8_decode($_REQUEST["nome_grupo"]);
$imagem = utf8_decode($_REQUEST["imagem"]);
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
$stmt = mysqli_prepare($connection, "INSERT INTO $tablename (Nome_Grupo,Imagem) VALUES (?,?)");
mysqli_stmt_bind_param($stmt,'ss',$nome_grupo);
mysqli_stmt_execute($stmt);
mysqli_close($connection);


?>