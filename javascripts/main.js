var app = angular.module("CalsWeirdBground", []);

app.controller("weirdStuff", ($scope) =>{
  $scope.images = [
     "http://static.boredpanda.com/blog/wp-content/uploads/2014/08/useless-object-design-the-unusable-katerina-kamprani-3.jpg",
     "http://static.boredpanda.com/blog/wp-content/uploads/2014/08/useless-object-design-the-unusable-katerina-kamprani-2.jpg",
     "http://www.technocrazed.com/wp-content/uploads/2013/07/italian-inventor-useless-inventions-from-useful-objects130.jpg",
     "https://68.media.tumblr.com/30dd0e2a0d1d2e8303990cf2076b9a54/tumblr_n0vsliNxCL1s818wuo1_500.jpg",
     "http://weburbanist.com/wp-content/uploads/2015/07/flesh-art-tian.jpg",
     "http://4.bp.blogspot.com/-49b0gZf4n6Y/VblNfX9eW3I/AAAAAAAC3S8/Bp89lVPR3JU/s640/flesh-art-barbaccia-1-468x257.jpg",
     "https://pbmo.files.wordpress.com/2013/06/flesh-can-by-brock-davis.jpg",
     "http://www.siws.fr/wp-content/uploads1/2012/11/Anders-Kris%C3%A1r-Cuirass-2005-53x37.5x15.5cm-silicone-paint-on-silicone-mounted-on-fiberglass-with-board-plastic-padding-brass-screws-screw-eyes-steel-wire-and-metal-hardware.jpg",
     "https://i.obozrevatel.com/8/821648/gallery/96297_image_large.jpg",
     "http://sensiblereason.com/wp-content/uploads/2014/02/Flesh-art.jpg"

  ];

  $scope.showListView = true;





  $scope.showMeTheMoney = () => {
      $scope.showListView = false;
    };
});