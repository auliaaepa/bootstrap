function validateLogin() {
    var alertLogin = document.getElementById("alertLogin");

    function alertDanger(message) {
        var wrapper = document.createElement("div");
        wrapper.innerHTML = '<div class="alert alert-danger d-flex align-items-center alert-dismissible fade show" role="alert">' 
            + '<svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>' 
            + '<div>' + message + '</div>'
            + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
        alertLogin.append(wrapper);
    }
    function alertSuccess(message) {
        var wrapper = document.createElement("div");
        wrapper.innerHTML = '<div class="alert alert-success d-flex align-items-center alert-dismissible fade show" role="alert">' 
            + '<svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>' 
            + '<div>' + message + '</div>'
            + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
        alertLogin.append(wrapper);
    }

    if (document.forms["formLogin"]["email"].value == "") {
        alertDanger("Please fill in email address!");
        document.forms["formLogin"]["email"].focus();
        return false;
    }
    if (document.forms["formLogin"]["password"].value == "") {
        alertDanger("Please fill in password!");
        document.forms["formLogin"]["password"].focus();
        return false;
    } 
    else {
        alertSuccess("Login successful");
    }

    
}