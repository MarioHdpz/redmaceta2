<!DOCTYPE html>
<html>
  <body>
    <?php
    //Recibimos el JSON con todos los productos y lo convertimos a objeto
    $json = $_POST['content'];
    $items_json = json_decode($json);
    $contents = $items_json->{'contents'};
    //Obtenemos los datos necesarios para llenar cada ficha
    foreach ($contents as $item) {
      $title = $item->{'title'};
      $id = $item->{'id'};
      $unidad = $item->{'unidad'};
      $descripcion = $item->{'descripcion_corta'};
      $precio = $item->{'price'};
      $cantidad = $item->{'quantity'};
    //$url = $item->{'images'}[0]->{'url'}->{'http'};
    ?>
    <li class="collection-item"> <?php echo $title; ?>
      <p>Cantidad: <?php echo $cantidad; ?> - $<?php echo $precio*$cantidad; ?></p>
      <div class="carrito-controllers">
        <i class="carrito-controllers_remove material-icons" onclick="quitar('<?php echo $id; ?>')">remove_circle_outline</i>
        <i class="carrito-controllers_add material-icons" onclick="agregar('<?php echo $id; ?>')">add_circle_outline</i>
      </div>
    </li>
    <?php } ?>
  </body>
</html>
