$(function () {
  $.getJSON('http://github.com/totoloco/now_playing/raw/master/now_playing.js', 'totoloco_now_playing', function (data) {
    alert(data.length);
  });
});
