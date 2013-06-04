$(document).ready(function () {
  $("#die-form").submit(function(event) {
    event.preventDefault();
    var url = $(this).attr("action");
    // var data = $("#die").attr();

    $.post(url, function(server_response) {
     var die = $(server_response).find('img');
     $('#die').html(die);
    });
  });
});
