'use strict';


module.exports = function ($rootScope, $scope, $state, $data, SANITRANSPORT) {


    $scope.clock = new Date();

    var url= SANITRANSPORT+"modification";

$scope.salva = function(){
    var user = {

                Email : $scope.email,
                Telefono : $scope.number,
                Citta : $scope.city,
                Via : $scope.street,
                Patente : $scope.license,
                Emissione : $scope.dateofissue,
                Scadenza : $scope.dateofexpiration,
                Tipopatente : $scope.typelicense,
              };


     var request = {
                    'method' : 'POST',
                    'url' : url ,
                    'headers' : {  'Content-Type': 'application/json' },
                    'data' : user
                    };


     $http(request).success(function(data, status, headers, config)
       {
         if(status==200)

         alert('Salvato con Successo');

       }).error(function(){
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("Errore Salvataggio");
        });
 };


  $scope.camera = function () {

    var options = {
      quality: 50,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.CAMERA,
      allowEdit: true,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 100,
      targetHeight: 100,
      popoverOptions: CameraPopoverOptions,
      saveToPhotoAlbum: false
    };

    $cordovaCamera.getPicture(options).then(function(imageData) {
      var image = document.getElementById('myImage');
      image.src = "data:image/jpeg;base64," + imageData;
    }, function(err) {
      // error
    });

  };

};
