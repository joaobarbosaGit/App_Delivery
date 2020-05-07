<?php
$idgrupo = $_REQUEST["idgrupo"];
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

$stmt = mysqli_prepare($connection, "SELECT * FROM $tablename WHERE idGrupos = ? ");
mysqli_stmt_bind_param($stmt,'i',$idcampeonato);
mysqli_stmt_execute($stmt);
mysqli_stmt_bind_result($stmt, $rows->idCampeonato,$rows->Nome_Campeonato,$rows->Pais_idPais);
while(mysqli_stmt_fetch($stmt)){
$string = utf8_encode($rows->Nome_Campeonato);
$output = array('idCampeonato' => $rows->idCampeonato, 'Nome_Campeonato' => $string,'Pais_idPais' => $rows->Pais_idPais);

}
mysqli_close($connection);
echo json_encode($output, JSON_UNESCAPED_UNICODE);

?>