// Task A

const DOWNLOADS = [
  {
    id: 1,
    title: "Recipe",
    status: "Done",
  },
  {
    id: 2,
    title: "Workouts",
    status: "Pending",
  },
  {
    id: 3,
    title: "Passwords",
    status: "Pending",
  },
  {
    id: 4,
    title: "To Do 2021",
    status: "Pending",
  },
  {
    id: 5,
    title: "Books",
    status: "Failed",
  },
];

const STATUSES = {
  pending: "Pending",
  done: "Done",
  failed: "Failed"
}

let keyUpTimer;

const TEXTFIELDS_SYNCHRONISATION_DELAY = 1000;
window.onload = () => {
  document.querySelector(".checking-start").addEventListener("click", () => {
    checkStatuses();
  });

  document.querySelector(".task-B-form").addEventListener("keyup", (event) => {
    clearTimeout(keyUpTimer);

    const className = event.path[0].className;

    keyUpTimer = setTimeout(() => {
      synchroniseFields(className);
    }, TEXTFIELDS_SYNCHRONISATION_DELAY);
  });
};

const STATUS_COLUMN_INDEX = 2;
const INTERVAL_DELAY = 5000;
const TIMEOUT_DELAY = 3000;

function checkStatuses() {
  setTimeout(() => {
    const interval = setInterval(() => {
      console.log("Check started..");

      const table = document.querySelector("#status-table");

      for (let i = 0; i < table.rows.length; i++) {
        let cell = table.rows[i].cells[STATUS_COLUMN_INDEX];

        if (cell.innerText === STATUSES.pending) {
          cell.innerText = STATUSES.done;
          return;
        }
      }

      console.log("Check finished");
      clearInterval(interval);
    }, INTERVAL_DELAY);
  }, TIMEOUT_DELAY);
}

// Task B
// TODO
// find more elegant way

function synchroniseFields(classname) {
  const input1 = document.querySelector(".input-1");
  const input2 = document.querySelector(".input-2");

  if (classname === "input-1") {
    input2.value = input1.value;
  }

  if (classname === "input-2") {
    input1.value = input2.value;
  }
}
