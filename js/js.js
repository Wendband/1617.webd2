$(document).ready(function() {
        $(".center div").click(function() {
                $('.center div').removeClass('active');
                $(this).addClass('active');
                imagetitle = $(this).attr("title");
                imagesrc = $(this).attr("href");
                $(".image-container .image-title").fadeOut(400, function() {
                        $(".image-container .image-title").text(imagetitle);
                }).fadeIn(400);
                $(".image-container .image").fadeOut(400, function() {
                        $(".image-container .image").children("img").attr("src", imagesrc);
                }).fadeIn(400);
                return false;
        });
});
