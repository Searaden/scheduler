$(function () {
  // Listener for click events on the save button
  $(".saveBtn").on("click", function () {
    // Get the parent time-block and its id
    var timeBlock = $(this).closest(".time-block");
    var id = timeBlock.attr("id");

    // Get the user input from the textarea
    var description = timeBlock.find(".description").val();

    // Save the user input in local storage using the id as the key
    localStorage.setItem(id, description);
  });

  // Apply past, present, or future class to each time block
  $(".time-block").each(function () {
    var id = $(this).attr("id"); // Get the id attribute value
    var idParts = id.split("-"); // Split the id value into an array
    var hourString = idParts[1]; // Retrieve the hour string from the array
    var hour = parseInt(hourString); // Convert the hour string to an integer

    var currentHour = dayjs().format("H");
    if (hour < currentHour) {
      $(this).addClass("past");
    } else if (hour == currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });

  // Get user input from local storage and set textarea values
  $(".time-block").each(function () {
    var id = $(this).attr("id"); 
    var description = localStorage.getItem(id); 
    var text = $(this).find(".description");

    if (description) {
      text.val(description); // Set the value of the textarea to the description in local storage
    }
  });

  // Display the current date and time in the header
  var currentDateTime = dayjs().format("dddd, MMMM D, YYYY, HH:mm:ss");
  $("#currentDay").text(currentDateTime);

  var currentHour = dayjs().format("H");
  console.log(currentHour);
});
