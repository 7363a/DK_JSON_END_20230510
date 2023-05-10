$(function () {

    $.ajax({

        url: "./json/bbox.json",

        dataType: "json",

        success: function (data) {

            if (data.length > 0) {



                for (var i in data) {


                    $(".bbox").eq(i).find("img").attr("src", "img/" + data[i].url);

                    $(".bbox").eq(i).find("h5 > a").text(data[i].title);

                    $(".bbox").eq(i).find("h6 > a").text(data[i].price);


                }

            }

        }

    });


});