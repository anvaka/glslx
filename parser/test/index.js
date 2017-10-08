var parser = require('../');
let res = parser.check(`
vec2 velocity(vec2 p) {
  vec2 v = vec2(0., 0.);
  v.x = 1.;
  v.y = atan(p.y);
  return v;
}
`)
console.log(res.log, res.log.diagnostics)
