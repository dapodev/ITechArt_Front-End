// A task

function bind(callback, context) {
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }

  if (context == null) {
    throw new TypeError("context null or not defined");
  }

  return function (arg) {
    let self = new Object(context);

    self.__boundFunction = function () {
      eval(callback.toString())(arg);
    };

    self.__boundFunction(arg);
  };
}

window.x = 1;
const context = { x: 2 };

const testThis = (y) => {
  console.log(`x=${this.x}, y=${y}`);
};

testThis(100); // x=1, y=100

const boundFunction = bind(testThis, context);
boundFunction(100); // x=2, y=100

// B task

function Robot(name) {
  this.name = name;
}

function add(op1, op2) {
  this.name = this.name || "Human";
  return this.name + " can count to " + (op1 + op2);
}

const voltron = new Robot("Voltron");

// 'Human can count to 1' //0 + 1
console.log(add.call(null, 0, 1));

// 'Voltron can count to 3' //1 + 2
console.log(add.apply(voltron, [1, 2]));

// 'Voltron can count to 50' //20 + 30
console.log(add.bind(voltron, 20, 30)());
