function calculateAge() {
  const user = {
    year: document.querySelector("#year"),
    month: document.querySelector("#month"),
    day: document.querySelector("#day"),
    clearInputs: function () {
      this.year.value = "";
      this.month.value = "";
      this.day.value = "";
      this.day.focus();
    },
  };

  const output = {
    year: document.querySelector("#out-year"),
    month: document.querySelector("#out-month"),
    day: document.querySelector("#out-day"),
    displayOutput: function () {
      this.year.innerHTML = year;
      this.month.innerHTML = month;
      this.day.innerHTML = days;
    },
  };

  const validation = {
    year: false,
    month: false,
    day: false,
  };

  const date = new Date();
  const date2 = new Date(
    `${user.year.value}/${user.month.value}/${user.day.value}`
  );

  const labels = document.getElementsByTagName("label");
  const p = document.getElementsByTagName("p");

  let year = date.getFullYear() - date2.getFullYear();
  let month = Math.abs(date.getMonth() - date2.getMonth());
  let days = Math.abs(date.getDate() - date2.getDate());

  if (date.getDate() < date2.getDate()) {
    days = Math.abs(days - 30);
    month--;

    if (month < 0) {
      month = 0;
    }
  }

  if (date.getMonth() < date2.getMonth()) {
    month = Math.abs(month - 12);
    year--;
  }

  if (!user.day.value) {
    labels[0].className = "error";
    p[0].innerHTML = "This field is required";
  } else if (
    user.day.value < 1 ||
    user.day.value > 31 ||
    user.day.value.length != 2
  ) {
    labels[0].className = "error";
    p[0].innerHTML = "Must be valid day";
  } else {
    labels[0].className = "";
    p[0].innerHTML = "";
    validation.day = true;
  }

  if (!user.month.value) {
    labels[1].className = "error";
    p[1].innerHTML = "This field is required";
  } else if (
    user.month.value < 1 ||
    user.month.value > 12 ||
    user.month.value.length != 2
  ) {
    labels[1].className = "error";
    p[1].innerHTML = "Must be valid day";
  } else {
    labels[1].className = "";
    p[1].innerHTML = "";
    validation.month = true;
  }

  if (!user.year.value) {
    labels[2].className = "error";
    p[2].innerHTML = "This field is required";
  } else if (user.year.value < 1 || user.year.value > date.getFullYear()) {
    labels[2].className = "error";
    p[2].innerHTML = "Must be valid day";
  } else {
    labels[2].className = "";
    p[2].innerHTML = "";
    validation.year = true;
  }

  if (validation.year && validation.month && validation.day) {
    output.displayOutput();
    user.clearInputs();
  }
}
