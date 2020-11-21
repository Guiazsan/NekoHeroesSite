var phone = false;
var miniMenuCollpase = false;

function pronto() {
    mudarScale();    
}

function mudarScale() {
    var minWidth = 1024;
    var width = document.body.clientWidth;
    
    var menuItens = document.getElementsByClassName("menuItem");
    if ( width <= minWidth) {        
        for(var i = 0; i < menuItens.length; i++) {
            menuItens[i].hidden = true;
        }        
    } else {
        for(var i = 0; i < menuItens.length; i++) {
            menuItens[i].hidden = false;
        }   
    }

    document.getElementById("menuButton").hidden = width > minWidth;
    document.getElementById("miniMenu").hidden = width > minWidth;
}

function collapseMiniMenu() {
    this.miniMenuCollpase = !this.miniMenuCollpase;
    document.getElementById("miniMenu").setAttribute('style', this.miniMenuCollpase ? 'height: 87vh !important;' : 'height: 0vh !important;');

    var miniMenuItens = document.getElementsByClassName("miniMenuItem");

    for(var i = 0; i < miniMenuItens.length; i++) {
        miniMenuItens[i].setAttribute('style', this.miniMenuCollpase ? 'opacity: 100%' : 'opacity: 0% !important')
    }  

    if (this.miniMenuCollpase) {
        for(var i = 0; i < miniMenuItens.length; i++) {
            miniMenuItens[i].hidden = false;
        }
    } else {
        setTimeout(function () {
            for(var i = 0; i < miniMenuItens.length; i++) {
                miniMenuItens[i].hidden = !this.miniMenuCollpase;
            }    
        }, 1000);
    }
}