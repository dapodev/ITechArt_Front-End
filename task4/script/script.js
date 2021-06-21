// Task A

function delay(duration) {
  if (typeof duration !== "number") {
    throw new TypeError(duration + " is not a number");
  }

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
}

function logHi() {
  console.log("Hi");
}

delay(2000).then(logHi);

// Task B

function makeDroids() {
  const droids = [];

  for (let /*var*/ i = 0; i < 10; i++) {
    const droid = () => {
      console.log("D" + i);
    };
    droids.push(droid);
  }
  return droids;
}

for (let d of makeDroids()) {
  d();
}

// Task C

const TIME_MULTIPLIER = 4000;
const ACCEPTABLE_DELAY = 2000;

const promise = new Promise((resolve, reject) => {
  const delay = Math.floor(Math.random() * TIME_MULTIPLIER);
  setTimeout(() => {
    if (delay > ACCEPTABLE_DELAY) {
      reject(
        "Delay " +
          delay +
          " is too long. Max acceptable delay is " +
          ACCEPTABLE_DELAY
      );
    }

    resolve();
  }, delay);
});

promise
  .then(() => console.log("Hello, ITechArt!"))
  .catch((err) => console.error(err));

// Task D

class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = "HttpError";
    this.response = response;
  }
}

async function loadJson(url) {
  let response = await fetch(url);
  if (response.status == 200) {
    return response.json();
  } else {
    throw new HttpError(response);
  }
}

async function demoGithubUser() {
  let isProcessing = false;
  let user;

  do {
    const name = prompt("Login?", "iliakan");
    user = await loadJson(`https://api.github.com/users/${name}`)
      .then((user) => {
        alert(`Full name: ${user.name}.`);
        isProcessing = false;
        return user;
      })
      .catch((err) => {
        if (err instanceof HttpError && err.response.status == 404) {
          alert("We can’t find such user.");
          isProcessing = true;
        } else {
          throw err;
        }
      });
  } while (isProcessing);

  return user;
}

demoGithubUser();
