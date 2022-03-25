"use strict";
(function()
{
    let protected_route: string[] = [
        "contact-list"
    ];

    if(protected_route.indexOf(router.ActiveLink) > -1){
        // if user does not exist in session storage
        if(!sessionStorage.getItem("user"))
        {

            // redirect to the login page
            location.href = "/login";
        }
    }

    
    
})();