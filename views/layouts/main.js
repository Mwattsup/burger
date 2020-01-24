const render = function(bodyOne, bodyTwo){
    return`
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <title>Eat-Da-Burger!</title>
</head>

<body>
    <div class='container text-center'>
        <div class='row'>
            <div class='col'>
                <h1>Eat-Da-Burger!</h1>
                <p>This is an app that lets you create names for a burger and then "devour" it. It will keep up to date in the database and display them in separate columns based on wether the burger has been devoured or not.</p>
            </div>
        </div>
        <div class='row'>
            <div class='col'>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" id="inputField" placeholder="burger name" aria-label="new burger"
                        aria-describedby="basic-addon2">
                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary" id="submitBtn" type="button">add</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class='container-fluid'>
        <div class='row'>
            <div class='col-6'>
                <div id="burgers">
                    ${bodyOne}
                </div>
            </div>
            <div class='col-6'>
                <div id='devoured'>
                    ${bodyTwo}
                </div>
            </div>
        </div>
    </div>
    <script src="https://code.jquery.com/jquery-3.4.1.js"
        integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU=" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
        integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
        crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
        integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
        crossorigin="anonymous"></script>
        <script type="text/javascript" src="js/buttons.js"></script>
</body>
</html>`
}
exports.render = render;