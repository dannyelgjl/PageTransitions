import Highway from "@dogsstudio/highway";
import { TimelineLite } from "gsap";

class Fade extends Highway.Transition {
  in({ from, to, done }) {}
  out({ from, done }) {
    done();
  }
}

export default Fade;
