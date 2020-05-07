<?php
$nome_produto = utf8_decode($_REQUEST["nome_produto"]);
$descricao = utf8_decode($_REQUEST["descricao"]);
$valor = utf8_decode($_REQUEST["valor"]);
$valor_promocional = utf8_decode($_REQUEST["valor_promocional"]);
$grupos_idgrupos = utf8_decode($_REQUEST["grupos_idgrupos"]);


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
$stmt = mysqli_prepare($connection, "INSERT INTO $tablename (Nome_Produto, Descricao, Valor, Valor_Promocional, Grupos_idGrupos) VALUES (?,?,?,?)");
mysqli_stmt_bind_param($stmt,'ssssi',$nome_produto,$descricao,$valor,$valor_promocional,$grupos_idgrupos);
mysqli_stmt_execute($stmt);
mysqli_close($connection);

