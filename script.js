gsap.to(".box", {
  rotation: 360,
  x: "100vw",
  xPercent: -100,
  duration: 3,
  repeat: -1,
  yoyo: true,
  radius: 50,
});

// gsap.to(".box", {
//   duration: 1,
//   rotation: 360,
//   opacity: 1,
//   delay: 0.5,
//   stagger: 0.2,
//   ease: "sine.out",
//   force3D: true,
// });

// document.querySelectorAll(".box").forEach(function (box) {
//   box.addEventListener("click", function () {
//     gsap.to(".box", {
//       duration: 0.5,
//       opacity: 0,
//       y: -100,
//       stagger: 0.1,
//       ease: "back.in",
//     });
//   });
// });