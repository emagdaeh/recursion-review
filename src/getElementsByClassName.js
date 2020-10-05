// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  var input = document.body.children;//return an array of nodes
  var result = [];

  //arguments,
  if (arguments.length === 2) {
    input = arguments[1];
  }
  console.log('className: ', className);

  for (var i = 0; i < input.length; i++) {
    // need conditional to isolate className from other info
    var currentNode = input[i];
    if (currentNode.className === className) {
      result.push(currentNode);
    }

    // if hasChildNodes, iterate, find more className
    if (currentNode.hasChildNodes()) {
      var theKids = currentNode.children;
      if (Array.isArray(theKids)) {
        for (var j = 0; j < theKids.length; j++) {
          getElementsByClassName(className, theKids[j]);
        }
      }
    }
  }
  console.log('result: ', result);
  return result;
};