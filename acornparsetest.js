const {parse} = require("acorn");

function g(str) {
  const a = parse(str, {ecmaVersion: 2020});
  var e = new Set();
  for (var i in a.body) {
    if ("VariableDeclaration"===a.body[i].type) {
      for (var j in a.body[i].declarations) {
        e.add(a.body[i].declarations[j].id.name);
      }
    } else if ("FunctionDeclaration"===a.body[i].type) {
      e.add(a.body[i].id.name);
    }
  }
  return e;
}

if (process.argv.length > 2) {
  console.log(Array.from(g(process.argv.slice(2).join(" "))).join(", "));
}
