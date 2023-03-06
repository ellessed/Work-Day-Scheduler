var today = moment();

var choices = {
  beginHour: 7,
  endHour: 20,
};

//var entry = JSON.parse(localStorage.getItem("start")) || [];

function refreshTimeSlot() {
  //this grabs the current hour
  var presentHour = moment().hour();
  //select all time blocks and iterate through each element
  $(".time-block").each(function (index, element) {
    var hour = $(element).attr("data-hour");
    //if the hour is less than the current hour then it will be directed to the past class
    if (hour < presentHour) {
      $(element).find(".description").addClass("past");
      //otherwise if the hour is the current hour we set class as present
    } else if (hour == currentHour) {
      $(element).find(".description").addClass("present");
      //future time, the text in the middle will change
    } else {
      $(element).find(".description").addClass("future");
    }
  });
}

//Get the data hour attribute, find the sibling element,and previous child element, this pulls out the text box and generatres a value
//value is stored under task variable
function saveTask(e) {
  //e.preventDefault();

  var hour = $(e.target).parent().parent().attr("data-hour");
  var task = $(e.target).parent().prev().children().val();

  localStorage.setItem(hour, task);
  //developer purposes to check it is working
  console.log("now saved");
}

//defines how the calendar slots will generate
function produceTimeSlots() {
  for (var hour = choices.beginHour; hour <= choices.endHour; hour++) {
    //tasks from local storage loaded here
    var taskSaved = localStorage.getItem(hour);

    var timeBlock = $("<div>").addClass("row time-block");
    timeBlock.attr("data-hour", hour);

    var hourBlock = $("<div id=hour>")
      .addClass("col-sm-2 hour")
      .text(moment(hour, "h").format("h A"));
    var description = $("<div>").addClass("col-sm-8 row");
    var textArea = $("<textarea>").addClass("col-md-12 description");
    textArea.val(taskSaved);

    var saveContainer = $("<div>").addClass(
      "saveBtn d-flex justify-content-center align-items-center"
    );
    saveContainer.on("click", saveTask);
    var saveButton = $("<i>").addClass("fas fa-save");

    timeBlock.append(hourBlock);
    timeBlock.append(description);
    description.append(textArea);
    timeBlock.append(saveContainer);
    saveContainer.append(saveButton);

    $(".container").append(timeBlock);
  }
}
// var hourBlock = $("div");

// hourBlock.addClass("row time-block");
// hourBlock.attr("time-slot", hour);
// var hourBlock = $("div")
//   .addClass(
//     "col-1 col-sm-1 col-md-1 col-xl-1 d-flex align-items-center justify-content-center border-top border-dark"
//   )
//   .text(moment(hour, "h"));

function init() {
  // Create the time slots
  loadTimeSlots();
  //depending on the time of day, the timeslots background colour will update
  timeRefresh();
  // displays the day of the week
  var presentDay = moment().format("MMM DD, YYYY, hh:mm:ss a");
  $("#presentDay").text(presentDay);

  setInterval(timeRefresh, 10000);
}
init();
