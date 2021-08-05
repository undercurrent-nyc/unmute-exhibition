import Component from '@glimmer/component';
import { action } from "@ember/object";
import { select, selectAll } from "d3-selection";
import { easeQuadOut } from "d3-ease";
import { transition } from "d3-transition";

export default class HeaderComponent extends Component {

  seconds = {
    beforeDrop: 2000,
    remainOpen: 3000,
    dropDuration: 1000 / 3,
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
    }, this.seconds.beforeDrop + this.seconds.dropDuration + this.seconds.remainOpen + this.seconds.scrollUp);
  }

  animate(){

    select(".unmute-header-date")
      .transition()
      .selectAll("path")
      .attr("fill", "black");

    this.isBlue = !this.isBlue;

    if(this.isBlue){
      this.color = this.blue;
    } else {
      this.color = this.red;
    }

    for(const times of [1, 2, 3]) {
      this.dropText(select(`.unmute-header-text.u${times}`), times);
    }
  }

  dropText(selection, times){
    selection.transition()
      .duration(this.seconds.scrollUp)
      .attr("transform", "translate(0, 0)")
      .selectAll("path")
      .attr("fill", "black");

    selection.transition()
      .delay(this.seconds.scrollUp + this.seconds.beforeDrop)
      .ease(easeQuadOut)
      .duration(times * this.seconds.dropDuration)
      .attr("transform", `translate(0, ${times * 262})`)
      .on("end", this.colorText(selection, times));
  }

  colorText(selection, times){
    if(times === 3){
      selection.selectAll("path")
        .transition()
        .delay(this.seconds.colorAfterDrop + this.seconds.scrollUp + this.seconds.beforeDrop + this.seconds.dropDuration)
        .attr("fill", this.color);
      select(".unmute-header-date")
        .selectAll("path")
        .transition()
        .delay(this.seconds.colorAfterDrop + this.seconds.scrollUp + this.seconds.beforeDrop + this.seconds.dropDuration)
        .attr("fill", this.color);
    }
  }
}
