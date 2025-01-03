const list = document.querySelector( "#list" ) ;
const type = document.querySelector( ".bar input" ) ;

function addTax() {
    let li = document.createElement( "li" ) ;
    li.innerHTML = type.value
    list.appendChild( li ) ; 
    const cross = document.createElement( "button" ) ;
    li.appendChild( cross ) ;
    cross.innerHTML = "\u00d7" ;
}

const btnn = document.querySelector( ".bar button" ) ;

btnn.addEventListener( "click" , () => {
    if ( type.value === "" ) {
        alert( "plese type some thing" ) ;
    } else {
        addTax() ;
        type.value = "" ;
        saveData() ;
    }
}) ;

list.addEventListener( "click", (event) => {
    console.dir( event.target ) ;
    if ( event.target.nodeName === "LI" ) {
        event.target.classList.toggle( "selected" ) ;
        saveData() ;
    } else if ( event.target.nodeName === "BUTTON" ) {
        event.target.parentNode.remove() ;
    }
}) ;

function saveData() {
    localStorage.setItem( "data", list.innerHTML ) ;
}

function getAfterReset() {
    list.innerHTML = localStorage.getItem( "data" ) ;
}

getAfterReset() ;

//Bolo prem se