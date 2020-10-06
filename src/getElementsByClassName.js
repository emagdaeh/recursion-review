// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, theChildren = document.body.children) {
  var result = [];

  //arguments,
  /*
  if (arguments.length === 2) {
    theChildren = arguments[1];
  }
  */

  //childern
  for (var i = 0; i < theChildren.length; i++) {
    // need conditional to isolate className from other info
    var currentNode = theChildren[i];
    if (currentNode.className === className && currentNode.length !== 0) {
      result.push(currentNode);
    }

    // if hasChildNodes, iterate, find more className
    if (currentNode.hasChildNodes()) {
      var theKids = currentNode.children;
      //console.log('The theKids: ', theKids);
      /*
      var currentOutput = getElementsByClassName(className, theKids);
      console.log('The currentOutput: ', currentOutput);
      if (currentOutput.length !== 0) {
        result.concat(currentOutput);
      }
      */
      return getElementsByClassName(className, theKids);
    }
  }
  console.log('result: ', result);
  return result;
};