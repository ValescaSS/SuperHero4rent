$(function() {
  $("#date").combodate({
    minYear: 2019,
    maxYear: 2020
  });
});

$(function() {
  $("#time1").combodate({
    firstItem: "name",
    minuteStep: 1
  });
});

$(function() {
  $("#time2").combodate({
    firstItem: "name",
    minuteStep: 1
  });
});
