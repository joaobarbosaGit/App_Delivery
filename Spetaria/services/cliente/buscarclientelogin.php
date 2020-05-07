<?php
$email = $_REQUEST["email"];

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

$stmt = mysqli_prepare($connection, "SELECT Email,Senha FROM $tablename WHERE Email = ? ");
mysqli_stmt_bind_param($stmt,'s',$email);
mysqli_stmt_execute($stmt);
mysqli_stmt_bind_result($stmt, $rows->Email, $rows->Senha);
$stmt->store_result();
if($stmt->num_rows == 0){
$output = array('Email' => "Vazio", 'Senha' => "Vazio");
}else{	
while(mysqli_stmt_fetch($stmt)){
$string = utf8_encode($rows->Email);
$string2 = utf8_encode($rows->Senha);
$output = array('Email' => $string, 'Senha' => $string2);
}
}

mysqli_close($connection);
echo json_encode($output, JSON_UNESCAPED_UNICODE);

?>