function foo() {
  console.log(module, exports);
}

foo();

module.exports = foo;

foo();
