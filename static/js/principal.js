$(function (){
  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-20570557-2']);
  _gaq.push(['_setDomainName', 'none']);
  _gaq.push(['_udn', 'none']);
  _gaq.push(['_setAllowLinker', true]);
  _gaq.push(['_trackPageview']);
  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

  var identi='http://identi.ca/api/statuses/home_timeline/ushcompu.json?callback=?&rpp=5';
  $.getJSON(identi,function(data){
    var ht='';
    var text='';
    for(var i=0;i<data.length&&i<5;i++){
      console.log(data[i]);
      text=data[i].text.substr(0,20)+'...';
      ht+='<li><span class="username">@'+data[i].user.screen_name+':</span> <a href="http://identi.ca/notice/'+data[i].id+'">'+text+'</a></li>';
    }
    $('#identica ul').html(ht);
  });
});
