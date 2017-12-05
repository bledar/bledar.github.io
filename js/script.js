$(function () {
   $.ajax({
    type:"GET",
    url:"js/data",
    success:function(data) {
        var obj = JSON.parse(data);
        var info='';
        var links='';
        var work='';
        var education='';        
        var skills='';  

        for (var i=0; i<obj.info.length;i++ ) { 
          info +='<li class="'+obj.info[i].label+'"><i class="'+obj.info[i].icon+'" aria-hidden="true"></i><span class="label">'+obj.info[i].label+'</span><span class="value">'+obj.info[i].value+'</span></li>';
        }
        for (var i=0; i<obj.links.length;i++) {
          links+='<li class="'+obj.links[i].label+'"><i class="'+obj.info[i].icon+'" aria-hidden="true"></i><span class="label">'+obj.links[i].label+'</span><span class="value"><a href="'+obj.links[i].link+'">'+obj.links[i].user+'</a></span>'
        }
        for (var i=0; i<obj.work.length;i++) {
            work+='<li><span class="date">'+obj.work[i].date+'</span><span class="title">'+obj.work[i].title+'</span><span class="company">'+obj.work[i].commpany+'</span><span class="desc">'+obj.work[i].desc+'</span></li>';
        }
        for (var i=0; i<obj.education.length;i++) {
            education+='<li><span class="date">'+obj.education[i].years+'</span><span class="title">'+obj.education[i].title+'</span><span class="company">'+obj.education[i].school+'</span><span class="desc">'+obj.education[i].desc+'</span></li>';
        }
        for (var i=0; i<obj.skills.length;i++) {
            skills+='<div class="itemSkill"><span class="skillName">'+obj.skills[i].name+'</span></div>';
        }

        $("title").text(obj.info[0].value+ ' | Resume');
        $(".title h1").text(obj.info[0].value);
        $(".title h2").text(obj.title);
        $("#info-list").html(info);
        $("#social-list").html(links);
        $("#work_list").html(work);
        $("#about_me h2").html(obj.category.about_label);
        $("#about_me p").html(obj.about_me);
        $("#education_label").html(obj.category.education_label);
        $("#work_label").html(obj.category.work_label);
        $("#education_list").html(education);
        $("#skills_list").html(skills);
        $("#skills_label").html(obj.category.skills_label);
        $("#loading").delay(1000).fadeOut(700);
    }
   })

});