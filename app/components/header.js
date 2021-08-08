import Component from '@glimmer/component';
import { action } from "@ember/object";
import { select, selectAll } from "d3-selection";
import { easeQuadOut } from "d3-ease";
import { transition } from "d3-transition";

export default class HeaderComponent extends Component {

  colorChanges = 4;

  seconds = {
    beforeDrop: 500,
    remainOpenUnit: 5000,
    dropDuration: 750 / 3,
    colorAfterDrop: 500,
    scrollUp: 500,
  }

  isBlue = false;

  color = this.blue;

  blue = "#1e67b1";

  red = "#ee3e28";
  
  @action
  startAnimation() {
    this.animate();
    setInterval(() => {
      this.animate();
    }, this.seconds.beforeDrop + 
      this.seconds.dropDuration * 3 + 
      (this.seconds.remainOpenUnit * (2 + this.colorChanges)) + 
      this.seconds.scrollUp);
  }

  animate(){
    for(const times of [1, 2, 3]) {
      this.dropText(select(`.unmute-header-text.u${times}`), times);
    }

    this.colorText(this.seconds.beforeDrop + this.seconds.dropDuration * 3 + this.seconds.colorAfterDrop);
    setTimeout(() => {
      this.colorText(0);
      let change = 0;
      let interval = setInterval(() => {
        if(change === this.colorChanges) {
          this.blackenText();
          clearInterval(interval);
        } else {
          this.colorText(0);
          change += 1;
        }
      }, this.seconds.remainOpenUnit);
    }, this.seconds.beforeDrop + this.seconds.dropDuration * 3 + this.seconds.colorAfterDrop + this.seconds.remainOpenUnit);
  }

  colorText(delay){
    this.isBlue = !this.isBlue;
    if(this.isBlue){
      this.color = this.blue;
    } else {
      this.color = this.red;
    }

    selectAll(".header-colorable path")
      .transition()
      .delay(delay)
      .attr("fill", this.color);
  }

  dropText(selection, times){
    selection.transition()
      .duration(this.seconds.scrollUp)
      .attr("transform", "translate(0, 0)");

    this.blackenText();

    selection.transition()
      .delay(this.seconds.scrollUp + this.seconds.beforeDrop)
      .ease(easeQuadOut)
      .duration(times * this.seconds.dropDuration)
      .attr("transform", `translate(0, ${times * 262})`)
  }

  blackenText(){
    selectAll(".header-colorable path")
      .attr("fill", "black");
  }
}
