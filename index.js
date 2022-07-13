"use-strict";

// DOM variables
const workHours = document.querySelector("#work__hours");
const workHoursPrevious = document.querySelector("#work__hours-previous");
const playHours = document.querySelector("#play__hours");
const playHoursPrevious = document.querySelector("#play__hours-previous");
const studyHours = document.querySelector("#study__hours");
const studyHoursPrevious = document.querySelector("#study__hours-previous");
const exerciseHours = document.querySelector("#exercise__hours");
const exerciseHoursPrevious = document.querySelector(
  "#exercise__hours-previous"
);
const socialHours = document.querySelector("#social__hours");
const socialHoursPrevious = document.querySelector("#social__hours-previous");
const selfHours = document.querySelector("#self__hours");
const selfHoursPrevious = document.querySelector("#self__hours-previous");

const daily = document.querySelector(".daily");
const weekly = document.querySelector(".weekly");
const monthly = document.querySelector(".monthly");

// Fetching data.json and loading data on page load
fetch("data.json")
  .then((response) => {
    return response.json();
  })
  .then((jsondata) => {
    workHours.innerHTML = `${jsondata[0].timeframes.daily.current}hrs`;
    workHoursPrevious.innerHTML = `Last week - ${jsondata[0].timeframes.daily.previous}hrs`;

    playHours.innerHTML = `${jsondata[1].timeframes.daily.current}hrs`;
    playHoursPrevious.innerHTML = `Last week - ${jsondata[1].timeframes.daily.previous}hrs`;

    studyHours.innerHTML = `${jsondata[2].timeframes.daily.current}hrs`;
    studyHoursPrevious.innerHTML = `Last week - ${jsondata[2].timeframes.daily.previous}hrs`;

    exerciseHours.innerHTML = `${jsondata[3].timeframes.daily.current}hrs`;
    exerciseHoursPrevious.innerHTML = `Last week - ${jsondata[3].timeframes.daily.previous}hrs`;

    socialHours.innerHTML = `${jsondata[4].timeframes.daily.current}hrs`;
    socialHoursPrevious.innerHTML = `Last week - ${jsondata[4].timeframes.daily.previous}hrs`;

    selfHours.innerHTML = `${jsondata[5].timeframes.daily.current}hrs`;
    selfHoursPrevious.innerHTML = `Last week - ${jsondata[5].timeframes.daily.previous}hrs`;
  });

// loading data for daily activities
daily.addEventListener("click", () => {
  fetch("data.json")
    .then((response) => {
      return response.json();
    })
    .then((jsondata) => {
      daily.classList.add("active");
      weekly.classList.remove("active");
      monthly.classList.remove("active");

      workHours.innerHTML = `${jsondata[0].timeframes.daily.current}hrs`;
      workHoursPrevious.innerHTML = `Last week - ${jsondata[0].timeframes.daily.previous}hrs`;

      playHours.innerHTML = `${jsondata[1].timeframes.daily.current}hrs`;
      playHoursPrevious.innerHTML = `Last week - ${jsondata[1].timeframes.daily.previous}hrs`;

      studyHours.innerHTML = `${jsondata[2].timeframes.daily.current}hrs`;
      studyHoursPrevious.innerHTML = `Last week - ${jsondata[2].timeframes.daily.previous}hrs`;

      exerciseHours.innerHTML = `${jsondata[3].timeframes.daily.current}hrs`;
      exerciseHoursPrevious.innerHTML = `Last week - ${jsondata[3].timeframes.daily.previous}hrs`;

      socialHours.innerHTML = `${jsondata[4].timeframes.daily.current}hrs`;
      socialHoursPrevious.innerHTML = `Last week - ${jsondata[4].timeframes.daily.previous}hrs`;

      selfHours.innerHTML = `${jsondata[5].timeframes.daily.current}hrs`;
      selfHoursPrevious.innerHTML = `Last week - ${jsondata[5].timeframes.daily.previous}hrs`;
    });
});

// loading data for weekly activities
weekly.addEventListener("click", () => {
  fetch("data.json")
    .then((response) => {
      return response.json();
    })
    .then((jsondata) => {
      daily.classList.remove("active");
      monthly.classList.remove("active");
      weekly.classList.add("active");

      workHours.innerHTML = `${jsondata[0].timeframes.weekly.current}hrs`;
      workHoursPrevious.innerHTML = `Last week - ${jsondata[0].timeframes.weekly.previous}hrs`;

      playHours.innerHTML = `${jsondata[1].timeframes.weekly.current}hrs`;
      playHoursPrevious.innerHTML = `Last week - ${jsondata[1].timeframes.weekly.previous}hrs`;

      studyHours.innerHTML = `${jsondata[2].timeframes.weekly.current}hrs`;
      studyHoursPrevious.innerHTML = `Last week - ${jsondata[2].timeframes.weekly.previous}hrs`;

      exerciseHours.innerHTML = `${jsondata[3].timeframes.weekly.current}hrs`;
      exerciseHoursPrevious.innerHTML = `Last week - ${jsondata[3].timeframes.weekly.previous}hrs`;

      socialHours.innerHTML = `${jsondata[4].timeframes.weekly.current}hrs`;
      socialHoursPrevious.innerHTML = `Last week - ${jsondata[4].timeframes.weekly.previous}hrs`;

      selfHours.innerHTML = `${jsondata[5].timeframes.weekly.current}hrs`;
      selfHoursPrevious.innerHTML = `Last week - ${jsondata[5].timeframes.weekly.previous}hrs`;
    });
});

// loading data for monthly activities
monthly.addEventListener("click", () => {
  fetch("data.json")
    .then((response) => {
      return response.json();
    })
    .then((jsondata) => {
      daily.classList.remove("active");
      monthly.classList.add("active");
      weekly.classList.remove("active");

      workHours.innerHTML = `${jsondata[0].timeframes.monthly.current}hrs`;
      workHoursPrevious.innerHTML = `Last week - ${jsondata[0].timeframes.monthly.previous}hrs`;

      playHours.innerHTML = `${jsondata[1].timeframes.monthly.current}hrs`;
      playHoursPrevious.innerHTML = `Last week - ${jsondata[1].timeframes.monthly.previous}hrs`;

      studyHours.innerHTML = `${jsondata[2].timeframes.monthly.current}hrs`;
      studyHoursPrevious.innerHTML = `Last week - ${jsondata[2].timeframes.monthly.previous}hrs`;

      exerciseHours.innerHTML = `${jsondata[3].timeframes.monthly.current}hrs`;
      exerciseHoursPrevious.innerHTML = `Last week - ${jsondata[3].timeframes.monthly.previous}hrs`;

      socialHours.innerHTML = `${jsondata[4].timeframes.monthly.current}hrs`;
      socialHoursPrevious.innerHTML = `Last week - ${jsondata[4].timeframes.monthly.previous}hrs`;

      selfHours.innerHTML = `${jsondata[5].timeframes.monthly.current}hrs`;
      selfHoursPrevious.innerHTML = `Last week - ${jsondata[5].timeframes.monthly.previous}hrs`;
    });
});
