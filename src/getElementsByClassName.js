// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, theChildren = document.body.children) {
  var result = [];
  console.log('lookup className:', className);
  console.log('theChildren argument:', theChildren);

  //arguments,
  /*
  if (arguments.length === 2) {
    theChildren = arguments[1];
  }
  */

  /*
  if (UNKNOWN VARIABLE.classList.contains(className) {
    do something
  }
  */

  //childern
  for (var i = 0; i < theChildren.length; i++) {
    // need conditional to isolate className from other info
    var currentNode = theChildren[i].childNodes;
    console.log('currentNode: ', currentNode);
    if (currentNode.classList.contains(className)) {
      result.push(currentNode);
    }
    //currentNode.className === className && currentNode.length !== 0
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
      result.concat(getElementsByClassName(className, theKids));
    }
  }
  console.log('result: ', result);
  return result;
};