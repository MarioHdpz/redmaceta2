<!DOCTYPE html>
<html>
  <body>
      <?php
      //Recibimos el JSON con todos los productos y lo convertimos a objeto
      $json = $_POST['productos'];
      $productos_json = json_decode($json);
      $i=1;
      //Obtenemos los datos necesarios para llenar cada ficha
      foreach ($productos_json as $producto) {
        $title = $producto->{'title'};
        $id = $producto->{'id'};
        $unidad = $producto->{'unidad'};
        $descripcion = $producto->{'descripcion_corta'};
        $precio = $producto->{'price'}->{'data'}->{'raw'}->{'without_tax'};
        $url = $producto->{'images'}[0]->{'url'}->{'http'};
      ?>
          <div class="secundario-ficha<?php echo $i; ?> col s12 l6">
            <div class="secundario-contenedor z-depth-1">
              <div class="col s6 secundario-img "><img class="responsive-img materialboxed" src="<?php echo $url; ?>"/></div>
              <div class="col s6">
                <div class="secundario-copy">
                  <h5 class="secundario-title"><?php echo $title; ?></h5>
                  <p><?php echo $descripcion; ?></p>
                </div>
                <div class="secundario-accion"><a class="secundario-boton waves-effect waves-light btn-flat" href="#!" onclick="agregar('<?php echo $id; ?>')">Comprar</a><span>$<?php echo $precio; ?></span></div>
              </div>
            </div>
          </div>
      <?php $i++;} ?>
</body>
</html>
