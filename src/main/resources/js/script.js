let colors = [
  "red",
  "green",
  "blue",
  "orange",
  "gray",
  "Beige",
  "BlueViolet",
  "DarkCyan",
];

let r = parseInt(Math.random() * 8);
$(function () {
  $("body").css("background-color", colors[r]);
});
