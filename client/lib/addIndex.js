UI.registerHelper('addIndex', function(all) {
  return _.map(all, function(val, index) {
    return {index: index, value: val};
  });
});

UI.registerHelper('addOneBasedIndex', function(all) {
  return _.map(all, function(val, index) {
    return {index: index + 1, value: val};
  });
});
