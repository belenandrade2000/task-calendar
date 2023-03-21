
dayjs.extend(window.dayjs_plugin_advancedFormat);

$(function () {
 
  $(".saveBtn").on("click", function () {
    var input = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, input);
  })
 
  $('.time-block').each(function(){
    var inputBlock = $(this).attr('id');
    var localVal = localStorage.getItem(inputBlock);
    if (localVal !== null){
      $(this).find('textarea').val(localVal);
    }
  })


  var hour24 = dayjs().format("H");
  console.log(hour24);
  for (var i =9; i<18; i++){
    if (i < hour24)
    $("#hour-"+i).addClass("past")
    if (i == hour24)
    $("#hour-"+i).addClass("present")
    if (i > hour24)
    $("#hour-"+i).addClass("future")
  }

  var today = dayjs();
$('#currentDay').text(today.format('dddd, MMMM Do'));
});
