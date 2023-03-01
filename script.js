alert("hover the text with mouse \n -------=------------");
var s = document.getElementById("output").innerHTML;
var o = document.getElementById("output");
s = s.split("");
o.innerHTML = "";
for (i = 0; i < s.length; i++) {
  o.innerHTML += '<span id="' + i + '" class="m">' + s[i] + "</span>";
}
$(".m").hover(function() {
  var styleProps = $(this).css("zoom");
  if (styleProps > 1.01) {
    // alert("mored ukve");
  } else {
    $(this).animate({ zoom: 1.2 }, 200);
    $(this)
      .next()
      .animate({ zoom: 2 }, 200);
    $(this)
      .nextUntil()
      .animate({ zoom: 2 }, 200);
  }
});
$(".m").mouseout(function() {
  $(this).animate({ zoom: 1 }, 200);
  $(this)
    .next()
    .animate({ zoom: 1 }, 400);
  $(this)
    .nextUntil()
    .animate({ zoom: 1 }, 400);
});