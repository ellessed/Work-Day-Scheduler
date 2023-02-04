var choices = {
    beginHour: 9,
    endHour: 17,
}

var 

//defines how the calendar slots will generate
function produceTimeSlots() {
    for (var hour = choices.beginHour; hour <= options.endHour; hour++ ) {
        var taskSaved = localStorage.getItem(hour);
        
var hourBlock = $('div');

hourBlock.addClass("row time-block");
hourBlock.attr('time-slot', hour);
var hourBlock = $('div')
.addClass('col-1 col-sm-1 col-md-1 col-xl-1 d-flex align-items-center justify-content-center border-top border-dark')
.text(moment (hour, 'h'))
    }
}


function init() {
// Create the time slots
    loadTimeSlots();
    //depending on the time of day, the timeslots background colour will update
    timeRefresh();
// displays the day of the week
var presentDay = moment().format('MMM DD, YYYY, hh:mm:ss a');
$('#presentDay').text(presentDay);

setInterval(timeRefresh, 10000);
};
init();