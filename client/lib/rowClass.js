UI.registerHelper('rowClass', function(rowNumber) {
  if(rowNumber % 2 == 0) {
    return "even-row";
  } else {
    return "odd-row";
  }
});
