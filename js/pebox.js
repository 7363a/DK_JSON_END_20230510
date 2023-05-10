$(function () {

    $.ajax({

        url: "./json/pebox.json",

        dataType: "json",

        success: function (data) {

            if (data.length > 0) {



                for (var i in data) {


                    $(".pebox").eq(i).find("img").attr("src", "img/" + data[i].url);

                    $(".pebox").eq(i).find("h5 > a").text(data[i].title);

                    $(".pebox").eq(i).find("h6 > a").text(data[i].price);


                }

            }

        }

    });


});