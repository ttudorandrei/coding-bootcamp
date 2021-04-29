const goToResults = () => {
  window.location.href =
    "http://127.0.0.1:5503/extras/navigation/results.html?cityName=london&eventType=music";
};

$("#results").click(goToResults);
