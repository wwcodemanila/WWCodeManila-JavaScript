const url = "https://jsonplaceholder.typicode.com/users";

$("#users-button").click(function() {
	console.log("Click button");
	$.ajax({
		url: url,
		type: "GET",
		success: function(response) {
			$("#user-list").text(response);
			console.log(response);
		},
		error: function(error) {
			console.error(`Error: ${error}`);
		}
	});
});