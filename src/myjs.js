<script>
 $("button").click(function () {
    $("#content").hide();
    $("#yt")[0].src += "?autoplay=1";
    setTimeout(function(){ $("#yt").show(); }, 200);
});
   
</script>

  <script>
    app = angular.module('main', [])
    app.controller('mainCntrl', function ($scope) {
        $scope.click = function(){
            alert("Title was clicked")
        }
    })
</script>