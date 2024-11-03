// Q10 you got this wrong so pay attenton
function foo(param = "no") {
  return "yes";
}

function bar(param = "no") {
  return param === "no" ? "yes" : "no";
}

console.log(bar(foo)); // no
