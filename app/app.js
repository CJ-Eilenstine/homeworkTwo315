import * as Model from "../model/model.js"

import { setLoggedInOut } from "../model/model.js";

function initURLListener() {
$(window).on('hashchange', Model.changeRoute);
Model.changeRoute();
}

$(document).ready(function () {
initURLListener();
});

// Login/out

function initListeners() {
    $("nav .anchors .login").on("click", (e) => {
        e.preventDefault();
        let btnID = e.currentTarget.id;
        console.log(btnID);
        addPageContent(btnID);
    });
    $("nav .anchors .login").on("click", (e) => {
        e.preventDefault();        setLoggedInOut();
    })
}