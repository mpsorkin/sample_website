const recommendButton = document.getElementById("recommendButton");
const experienceInput = document.getElementById("experience");
const timeInput = document.getElementById("time");
const resultBox = document.getElementById("result");

recommendButton.addEventListener("click", function () {
  const experience = experienceInput.value;
  const time = timeInput.value;

  if (experience === "" || time === "") {
    resultBox.textContent = "Please select both your experience level and available time.";
    return;
  }

  let recommendation = "";

  if (experience === "beginner" && time === "short") {
    recommendation = "You should try a short forest walk. It will be easy, relaxing, and beginner-friendly.";
  } else if (experience === "beginner" && time === "medium") {
    recommendation = "You should try a lake loop. It gives you nice scenery without being too difficult.";
  } else if (experience === "beginner" && time === "long") {
    recommendation = "You should choose a longer but flat nature trail so you can enjoy the day without too much climbing.";
  } else if (experience === "intermediate" && time === "short") {
    recommendation = "You should try a quick hill trail. It will give you a workout without taking too much time.";
  } else if (experience === "intermediate" && time === "medium") {
    recommendation = "You should try a scenic lake loop or moderate forest hike.";
  } else if (experience === "intermediate" && time === "long") {
    recommendation = "You should try a longer mountain hike with a viewpoint at the end.";
  } else if (experience === "advanced" && time === "short") {
    recommendation = "You should try a steep short climb for a fast but challenging hike.";
  } else if (experience === "advanced" && time === "medium") {
    recommendation = "You should try a rocky mountain trail with some elevation gain.";
  } else if (experience === "advanced" && time === "long") {
    recommendation = "You should try a full-day mountain hike with difficult terrain and scenic views.";
  }

  resultBox.textContent = recommendation;
});