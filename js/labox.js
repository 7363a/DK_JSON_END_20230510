$(function () {

    $.ajax({

        url: "./json/labox.json",

        dataType: "json",

        success: function (data) {

            if (data.length > 0) {



                for (var i in data) {


                    $(".labox").eq(i).find("img").attr("src", "img/" + data[i].url);

                    $(".labox").eq(i).find("h5 > a").text(data[i].title);

                    $(".labox").eq(i).find("h6 > a").text(data[i].price);


                }

            }

        }

    });


});