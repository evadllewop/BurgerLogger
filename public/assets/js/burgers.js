$(function () {
  $(".change-devoured").on("click", function (event) {
    var id = $(this).data("id");
    var newDevour = $(this).data("newdevoured");

    var newDevouredState = {
      devoured: newDevour
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function () {
        console.log("changed devoured to", newDevour);
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    // alert($("input[name=devoured]:checked", ".create-form").val().trim())

    var newBurger = {
      burger_name: $("#burgerName").val().trim(),
      devoured: $("input[name=devoured]:checked", ".create-form").val().trim()
    };


    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-devoured").on("click", function (event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE",

    }).then(function () {
      console.log("Deleted burger", id);
      location.reload();
    });
  });
});