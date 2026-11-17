import { Controller } from "@hotwired/stimulus";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Connects to data-controller="dam-fill"
// Animates fill-level bars and percentage counters for Moroccan dam basins
export default class extends Controller {
  static targets = ["bar", "pct"];

  connect() {
    this.animated = false;
    this.reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // The markup ships with the final values so the section stays readable
    // without JavaScript. Only reset to zero when we are going to animate.
    if (this.reduce) {
      this.animated = true;
      return;
    }

    this.barTargets.forEach(bar => { bar.style.width = "0%"; });
    this.pctTargets.forEach(el => { el.textContent = "0٪"; });

    this.trigger = ScrollTrigger.create({
      trigger: this.element,
      start: "top 80%",
      onEnter: () => this.animate()
    });
  }

  disconnect() {
    if (this.trigger) this.trigger.kill();
  }

  animate() {
    if (this.animated) return;
    this.animated = true;

    this.barTargets.forEach((bar, i) => {
      const fill = parseFloat(bar.dataset.fill);
      gsap.to(bar, {
        width: `${fill}%`,
        duration: 1.6,
        delay: i * 0.22,
        ease: "power3.out"
      });
    });

    this.pctTargets.forEach((el, i) => {
      const target = parseFloat(el.dataset.target);
      const obj = { n: 0 };
      gsap.to(obj, {
        n: target,
        duration: 1.6,
        delay: i * 0.22,
        ease: "power3.out",
        onUpdate: () => { el.textContent = Math.round(obj.n) + "٪"; }
      });
    });
  }
}
