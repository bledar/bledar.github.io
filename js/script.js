$(function () {
   $.ajax({
    type:"GET",
    url:"js/data",
    success:function(data) {
        var obj = JSON.parse(data);
        var info='';
        var social='';
        var work='';
        var education='';        
        var skills='';  

        for (var i=0; i<obj.info.length;i++ ) { 
          info +='<li><img class="icon" src="'+obj.info[i].icon_url+'" alt=""><span class="label">'+obj.info[i].label+'</span><span class="value">'+obj.info[i].value+'</span></li>';
        }
        for (var i=0; i<obj.social.length;i++) {
          social+='<li><img class="icon" src="'+obj.social[i].icon_url+'" alt=""><span class="label">'+obj.social[i].label+'</span><span class="value"><a href="'+obj.social[i].link+'">'+obj.social[i].user+'</a></span>'
        }
        for (var i=0; i<obj.work.length;i++) {
            work+='<li><span class="date">'+obj.work[i].date+'</span><span class="title">'+obj.work[i].title+'</span><span class="company">'+obj.work[i].commpany+'</span><span class="desc">'+obj.work[i].desc+'</span></li>';
        }
        for (var i=0; i<obj.education.length;i++) {
            education+='<li><span class="date">'+obj.education[i].years+'</span><span class="title">'+obj.education[i].title+'</span><span class="company">'+obj.education[i].school+'</span><span class="desc">'+obj.education[i].desc+'</span></li>';
        }
        for (var i=0; i<obj.skills.length;i++) {
            skills+='<div class="itemSkill">'+obj.skills[i].name+'<span class="skillBar"><span class="skillBarProgress" style="width:'+obj.skills[i].level+'%"></span></span></div>';
        }

        $("title").text(obj.info[0].value+ ' | Resume');
        $(".title h1").text(obj.info[0].value);
        $(".title h2").text(obj.title);
        $("#info-list").html(info);
        $("#social-list").html(social);
        $("#work_list").html(work);
        $("#about_me h2").html(obj.category.about_label);
        $("#about_me p").html(obj.about_me);
        $("#education_label").html(obj.category.education_label);
        $("#work_label").html(obj.category.work_label);
        $("#education_list").html(education);
        $("#skills_list").html(skills);
        $("#skills_label").html(obj.category.skills_label);
        $("#loading").fadeOut(700);
    }
   })

});