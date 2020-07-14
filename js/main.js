$(function() {
    //Auto play modal video
    $(".video").click(function() {
        var theModal = $(this).data("target"),
        videoSRC = $(this).attr("data-vide0"),
        vide0SRCauto = videoSRC + "?modestbranding=1&rel=0&controls=0&showinfo0&html5=1&autoplay=1";
        $(theModal + ' iframe').attr('src', videoSRCauto);
        $(theModal + ' button.close').click(function() {
            $(theModal + ' iframe').attr('src', videoSRC);
        });
    });
});

