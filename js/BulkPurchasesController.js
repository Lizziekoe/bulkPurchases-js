bulkShirts.controller('ShirtsCtrl', function ShirtsCtrl($scope) {
  $scope.shirts = [];
  $scope.addShirt = function() {
    $scope.shirts.push({ size: "{{size}}", color: "{{color}}"} )
  };

  $(document).ready(function() {
    $("img").click(function() {
      $(this).toggleClass("click");
      $('html, body').animate({
      scrollTop: $("#color").offset().top
      }, 1000);
    });
  });
    $(".color").click(function() {
      $(this).toggleClass("click");
    });

});
