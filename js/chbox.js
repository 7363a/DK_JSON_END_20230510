$(function () {

    $.ajax({

        url: "./json/chbox.json",

        dataType: "json",

        success: function (data) {

            if (data.length > 0) {



                for (var i in data) {


                    $(".chbox").eq(i).find("img").attr("src", "img/" + data[i].url);

                    $(".chbox").eq(i).find("h5 > a").text(data[i].title);

                    $(".chbox").eq(i).find("h6 > a").text(data[i].price);


                }

            }

        }

    });


});