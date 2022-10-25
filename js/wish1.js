var Objects = anime({
  targets: "#Objects .st44 path",
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "easeInOutSine",
  duration: 3000,
  delay: function (el, i) {
    return i * 250;
  },
  direction: "alternate",
  loop: true,
});

var design = anime({
  targets: "#Objects .design .line",
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "easeInOutSine",
  duration: 5000,
  delay: function (el, i) {
    return i * 250;
  },
  direction: "alternate",
  loop: true,
});
