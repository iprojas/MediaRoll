$(document).ready(function() {
  			$("div.container").on("click", ".dice", function() {
  				var roll = Math.floor((Math.random() * 6) + 1);
  				$(this).attr("class", "dice");
  				setTimeout(function() {
  					$(".dice").addClass("roll-" + roll);
  				}, 1);
				  setTimeout(function() {
				  window.open(roll+".html","_self");
				}, 3500);
  			});
  		});