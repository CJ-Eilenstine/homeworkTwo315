export var wordArray = ["home", "about", "flavors"];

// Url Change

export function changeRoute() {
    let hashTag = window.location.hash;
    let pageID = hashTag.replace('#', '');
    console.log(hashTag + ' ' + pageID);
    
    if (pageID != '') {
    $.get(`pages/${pageID}.html`, function (data) {
     console.log('data ' + data);
     $('#app').html(data);
    });
    } else {
    $.get(`pages/home.html`, function (data) {
    console.log('data ' + data);
     $('#app').html(data);
    });
    }
}

// Login/Out

var loggedInOut = false;


export function setLoggedInOut(){
    if (loggedInOut == true){
        loggedInOut = false;
        $("nav .anchors .login").html("Log In");
    }else {
        loggedInOut = true;
        $("nav .anchors .login").html("Log Out");
    }
}

export function getLoggedInOut() {
    return loggedIn;
}