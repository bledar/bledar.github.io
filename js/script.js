$(function () {
   $.ajax({
    type:"GET",
    url:"js/data",
    success:function(data) {
        var obj = JSON.parse(data);
        var info='';
        var social='';
        for (var i=0; i < obj.info.length;i++ ) { 
          info +='<li><img class="icon" src="'+obj.info[i].icon_url+'" alt=""><span class="label">'+obj.info[i].label+'</span><span class="value">'+obj.info[i].value+'</span></li>';
        }
        for (var i =0; i < obj.social.length;i++) {
          social+='<li><img class="icon" src="'+obj.social[i].icon_url+'" alt=""><span class="label">'+obj.social[i].label+'</span><span class="value"><a href="'+obj.social[i].link+'">'+obj.social[i].user+'</a></span>'
        }
        $("title").text(obj.info[0].value+ ' | Resume');
        $(".title h1").text(obj.info[0].value);
        $(".title h2").text(obj.title);
        $("#info-list").delay(500).html(info).slideDown("slow");
        $("#social-list").delay(1000).html(social).slideDown("slow");
    }
   })

});