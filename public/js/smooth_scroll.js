$('body').scrollspy({target: "#navigation", offset: 0})

$('#navigation a, #cover a').on('click', function(event) {
    if (this.hash !== '') {
        event.preventDefault()

        let hash = this.hash

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function() {
            window.location.hash = hash
        })
    }
})