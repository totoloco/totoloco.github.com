$(function () {
  $.getJSON('http://totoloco.github.com/now_playing.js', 'totoloco_now_playing', function (data) {
    alert(data.length);
  });
});
