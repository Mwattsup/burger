$(document).ready(function () {
    $('#submitBtn').on('click', function (event) {
        event.preventDefault();

        const newBurger = {
            burgerName: $('#inputField').val().trim()
        }

        function submitBurger(burger) {
            $.post("/", burger, function () {
                $('#inputField').val('');
                location.reload();
            });
        }

        submitBurger(newBurger);

    });

    $('.btn-outline-info').on('click', function (event) {
        event.preventDefault();

        const devour = {
            id: parseInt(event.target.id)
        }
        
        function updateStatus(burger) {
            $.ajax({
              method: "PUT",
              url: "/",
              data: burger
            }).then(function(){
                location.reload();
            })
            console.log(burger);
          }

          updateStatus(devour);
          
        });
});