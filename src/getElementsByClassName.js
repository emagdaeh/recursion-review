// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, ele = document.body) {
  var nodes = [];
  //base case
  if (ele.classList.contains(className) && !ele.hasChildNodes()) {
    return [ele];
  } else if (!ele.hasChildNodes()) {
    return [];
  }

  //recursion case
  var theChildren = ele.children;//theChildern is HTML collection, not an element any more, which means you cannot use element method directly on it. but this collection can be iterated.
  //then the question is that do you want to use iteration? if so, where?
  if (ele.classList.contains(className)) {
    nodes.push(ele);
  }
  //at this point, we would know if the ele has children or not, and yes it does
  for (var i = 0; i < theChildren.length; i++) {
    nodes = nodes.concat(getElementsByClassName(className, theChildren[i]));
  }

  return nodes;
};