var moltin = new Moltin({publicId: 'ImodV6Jq0s7ZZRN5DMNX58jymMyFfCQSCfQTMAX6qu'});
moltin.Authenticate(function(){
  //AJAX para productos de la galería
  moltin.Product.List({collection : "1365439206553289390"},function(product) {
        // Productos en la galería
        var productos_json = JSON.stringify(product);
        $.post("php/galeria.php",{productos : productos_json}, function(data, status){
            $("#galeria").html(data);
            $('.modal-trigger').leanModal();
        });
    }, function(error) {
        // Something went wrong...
    });
  //AJAX para productos secundarios
  moltin.Product.List({collection : "1365487476491158201"},function(product) {
        // Productos en la galería
        var productos_json = JSON.stringify(product);
        $.post("php/secundario.php",{productos : productos_json}, function(data, status){
            $("#secundario").html(data);
            $('.modal-trigger').leanModal();
            $('.materialboxed').materialbox();
        });
    }, function(error) {
        // Something went wrong...
    });
  //Mostrar carrito, si es que lo hay
  imprimir_carrito();
});
//Agregar productos al carrito
function agregar(id){
  $('.precargador').css('display','block');
  moltin.Authenticate(function(){
    //Llamada para agregar al carrito
    moltin.Cart.Insert(id,1,null,function(cart) {
      imprimir_carrito();
    });
    }, function(error) {
          // Something went wrong...
  });
}
function quitar(id){
  $('.precargador').css('display','block');
  moltin.Authenticate(function(){
    //Llamada para agregar al carrito
    moltin.Cart.Item(id,function(item) {
      console.log(item);
      var cantidad = item.quantity;
      console.log(cantidad);
      if (cantidad>1) {
        moltin.Cart.Update(id,{quantity: cantidad-1},function() {
          imprimir_carrito();
        });
      }
      else {
        moltin.Cart.Remove(id,function(cart) {
          imprimir_carrito();
        });
      }
    });
    }, function(error) {
          // Something went wrong...
  });
}
//Imprimir contenido carrito
function imprimir_carrito(){
  moltin.Cart.Contents(function(items) {
    var items_json = JSON.stringify(items);
    $.post("php/items.php",{content : items_json}, function(data, status){
        $("#carrito_items").html(data);
        var total = items.totals.post_discount.raw.without_tax;
        $("#total").html(total);
        $('.precargador').css('display','none');
        $(".bolita").html(items.total_unique_items);
  });
  }, function(error) {
      // Something went wrong...
  });
}
