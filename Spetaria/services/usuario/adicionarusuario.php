<?php
$nome = utf8_decode($_REQUEST["nome"]);
$email = utf8_decode($_REQUEST["email"]);
$telefone = utf8_decode($_REQUEST["telefone"]);
$endereco = utf8_decode($_REQUEST["endereco"]);

$username = "joaolu98_admin";
$password = "net261015";
$server = "localhost";
$port = "3306";
$databasename = "joaolu98_bd_delivery";
$tablename = "Cliente";
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
$stmt = mysqli_prepare($connection, "INSERT INTO $tablename (Nome, Email, Telefone, Endereco) VALUES (?,?,?,?)");
mysqli_stmt_bind_param($stmt,'ssss',$nome,$email,$telefone,$endereco);
mysqli_stmt_execute($stmt);
mysqli_close($connection);


?>