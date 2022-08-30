$(document).ready(function(){

    $("a").click(function(){
        var indiceScroll = this.hash
        $("html, body").animate(
            {
                scrollTop: $(indiceScroll).offset().top -70
            },
            1500 
        )
    })

})