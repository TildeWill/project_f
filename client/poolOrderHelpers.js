Template.pool.helpers({
  poolOrder: function(fencers) {
    var poolOrder = [
      {"left": 1, "right": 2},
      {"left": 3, "right": 4},
      {"left": 5, "right": 1},
      {"left": 2, "right": 3},
      {"left": 5, "right": 4},
      {"left": 1, "right": 3},
      {"left": 2, "right": 5},
      {"left": 4, "right": 1},
      {"left": 3, "right": 5},
      {"left": 4, "right": 2}
    ];

    var toReturn = [];
    poolOrder.forEach(function(item) {
      toReturn.push(
        {
          "left": item.left,
          "right": item.right,
          "leftName": fencers[item.left - 1].competitor.last_name,
          "rightName": fencers[item.right - 1].competitor.last_name
        }
      );
    });
    return toReturn;
  }
});
