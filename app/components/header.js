import Component from '@glimmer/component';
import { action } from "@ember/object";
import { select, selectAll } from "d3-selection";
import { easeQuadOut } from "d3-ease";
import { transition } from "d3-transition";

export default class HeaderComponent extends Component {

  isBlue = false;

  color = this.blue;

  blue = "#1e67b1";

  red = "#ee3e28";
  
  @action
  startAnimation() {
    this.animate();
    setInterval(() => {
      this.animate();
    }, 8000);
  }

  animate(){

    select(".unmute-header-date")
      .transition()
      .duration(250)
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
      .duration(500)
      .attr("transform", "translate(0, 0)")
      .selectAll("path")
      .attr("fill", "black");

    selection.transition()
      .delay(500)
      .ease(easeQuadOut)
      .duration(times * 300)
      .attr("transform", `translate(0, ${times * 262})`)
      .on("end", this.colorText(selection, times));
  }

  colorText(selection, times){
    if(times === 3){
      setTimeout(() => {
        selection.selectAll("path")
          .transition()
          .duration(900)
          .attr("fill", this.color);
        select(".unmute-header-date")
          .selectAll("path")
          .transition()
          .duration(900)
          .attr("fill", this.color);
      }, 2000);
    }
  }
}
