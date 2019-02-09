/* <script src="js/TweenMax.min.js"></script>
    <script src="js/pubsub.js"></script> */
import {TimelineMax} from "gsap";

let targets = document.querySelectorAll('.block');

var tl = new TimelineMax();

tl.to("#y", 0.1, {
  opacity: 0,
  yoyo: true,
  repeat: 3
});

tl.fromTo("#mask_rect_all", 1, {
  y: 350,
  height: 40
}, {
  y: 0,
  height: 487
});

tl.to("#mask_rect", 1, {
  x: -235,
});

// PubSub.subscribe("go-letter-go", function () {
//   alert("go letter go");
// })

var options = {
  rootMargin: '0px',
  threshold: [1.0, 0.3, 0.5, 0.7]
}

var observer = new IntersectionObserver(items => {
  items.forEach(el => {
    if (el.isIntersecting && el.intersectionRatio > 0.7) {

      el.target.classList.add("block-active");
      // PubSub.publish("go-letter-go");

    } else {
      el.target.classList.remove("block-active");
    }
  })
}, options);
for (var i = 0; i < targets.length; i++) {
  observer.observe(targets[i]);
}
