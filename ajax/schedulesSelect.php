<?php
require_once "./conection/pdo.php";
$sql = "SELECT *,ger_cidades.nome AS cidade_nome FROM ger_ecommerce_cliente
INNER JOIN ger_cidades ON ger_ecommerce_cliente.cliente_cidade = ger_cidades.idCidade
INNER JOIN ger_estados ON ger_estados.idEstado = ger_cidades.idEstado
WHERE ger_ecommerce_cliente.idCliente = '$idUsuario'";
$sql = $pdo->query($sql);

if($sql->rowCount() > 0 ){
   $dados = $sql->fetch(PDO::FETCH_ASSOC);
}
$nome = $dados["cliente_nome"] . " " . $dados["cliente_sobrenome"];
$email = $dados["cliente_email"];
$cpfClient = $dados["cliente_cpf"];
$shippingAddressStreet = $dados['cliente_endereco'];
$shippingAddressNumber = $dados["cliente_numero"];
$shippingAddressComplement = $dados["cliente_complemento"];
$shippingAddressDistrict = $dados["cliente_bairro"];
$shippingAddressPostalCode = $dados["cliente_cep"];
$shippingAddressCity = $dados["cidade_nome"];
$shippingAddressState = $dados["sigla"];