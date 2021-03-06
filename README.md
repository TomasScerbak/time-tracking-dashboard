# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats


Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [https://github.com/TomasScerbak/time-tracking-dashboard.git]
- Live Site URL: [https://tomasscerbak.github.io/time-tracking-dashboard/]

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- SCSS
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla JS

### What I learned

I've learned how to work with arbitrary json files to load data, how to use fetch method and update elements


```js
daily.addEventListener("click", () => {
  fetch("/data.json")
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
```

