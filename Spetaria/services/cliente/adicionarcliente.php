<?php
$nome = utf8_decode($_REQUEST["nome"]);
$email = utf8_decode($_REQUEST["email"]);
$senha = utf8_decode($_REQUEST["senha"]);
$telefone = utf8_decode($_REQUEST["telefone"]);
$endereco = utf8_decode($_REQUEST["endereco"]);
$complemento = utf8_decode($_REQUEST["complemento"]);

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
$stmt = mysqli_prepare($connection, "INSERT INTO $tablename (Nome, Senha, Email, Telefone, Endereco, Complemento) VALUES (?,?,?,?,?,?)");
mysqli_stmt_bind_param($stmt,'ssssss',$nome,$senha,$email,$telefone,$endereco,$complemento);
mysqli_stmt_execute($stmt);
mysqli_close($connection);


?>