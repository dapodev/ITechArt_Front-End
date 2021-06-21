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

let keyUpTimer;

window.onload = () => {
  document.querySelector(".checking-start").addEventListener("click", () => {
    checkStatuses();
  });

  document.querySelector(".task-B-form").addEventListener("keyup", (event) => {
    clearTimeout(keyUpTimer);

    const className = event.path[0].className;

    keyUpTimer = setTimeout(() => {
      synchroniseFields(className);
    }, 1000);
  });
};

const STATUS_COLUMN_INDEX = 2;

function checkStatuses() {
  setTimeout(() => {
    const interval = setInterval(() => {
      console.log("Check started..");

      let table = document.querySelector("#status-table");

      for (let i = 0; i < table.rows.length; i++) {
        let cell = table.rows[i].cells[STATUS_COLUMN_INDEX];

        if (cell.innerText === "Pending") {
          cell.innerText = "Done";
          return;
        }
      }

      console.log("Check finished");
      clearInterval(interval);
    }, 5000);
  }, 3000);
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
