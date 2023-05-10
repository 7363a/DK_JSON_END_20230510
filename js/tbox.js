$(function(){
        $.ajax({

            url: "./json/dk.json",

            dataType: "json",

            success : function(data){

                if(data.length>0){

        
            
                    for(var i in data){
                
                        
                        $(".tbox").eq(i).find("img").attr("src", "img/"+data[i].url);

                        $(".tbox").eq(i).find("h5 > a").text(data[i].title);      

                        $(".tbox").eq(i).find("h6 > a").text(data[i].price);                            


                    }

                }

            }

        });
    });
