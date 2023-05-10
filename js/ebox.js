$(function () {

    $.ajax({

        url: "./json/ebox.json",

        dataType: "json",

        success: function (data) {

            if (data.length > 0) {



                for (var i in data) {


                    $(".ebox").eq(i).find("img").attr("src", "img/" + data[i].url);

                    $(".ebox").eq(i).find("h5 > a").text(data[i].title);

                    $(".ebox").eq(i).find("p > a").text(data[i].subtitle);


                }

            }

        }

    });


});