var moltin = new Moltin({publicId: 'ImodV6Jq0s7ZZRN5DMNX58jymMyFfCQSCfQTMAX6qu'});
moltin.Authenticate(function(){
  //Obtenemos el productos
  moltin.Product.Search({collections: 'galeria'},function(product) {
        // Handle the product
        console.log(product);
        var productos_json = JSON.stringify(product);
        $.post("php/galeria.php",{productos : productos_json}, function(data, status){
            $("#galeria").html(data);
        });
    }, function(error) {
        // Something went wrong...
    });
});
