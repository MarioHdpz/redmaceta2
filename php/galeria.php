<!DOCTYPE html>
<html>
  <body>
<?php
  //Recibimos el JSON con todos los productos y lo convertimos a objeto
  $json = $_POST['productos'];
  $productos_json = json_decode($json);
  //Obtenemos los datos necesarios para llenar cada ficha
  foreach ($productos_json as $producto) {
  $title = $producto->{'title'};
  $unidad = $producto->{'unidad'};
  $precio = $producto->{'price'}->{'value'};
  $url = $producto->{'images'}[0]->{'url'}->{'http'};
 ?>
    <div class="col s12 m6 l4">
      <div class="galeria-producto card ">
        <div class="card-image waves-effect waves-block waves-light"><a class="modal-trigger" href="#modal1"><img src="<?php echo $url; ?>"/></a></div>
        <div class="card-content producto-info">
          <h4 class="producto-info__precio">$127</h4><span class="producto-info__nombre truncate"><?php echo $title; ?></span><span class="producto-info__unidad">  <?php echo $unidad; ?></span><a class="producto-info__boton waves-effect waves-light btn-flat" href="#">Comprar</a>
        </div>
      </div>
    </div>
  <?php } ?>
  </body>
</html>
