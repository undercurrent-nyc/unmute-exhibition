import Component from '@glimmer/component';
import { action } from "@ember/object";
import { selectAll, select } from "d3-selection";
import { easeSin } from "d3-ease";
import { transition } from "d3-transition";

export default class ExhibitionMapComponent extends Component {

  get color(){
    if(this.args.place === "acfny"){
      return "#ee3e28";
    }

    return "#1e67b1";
  }

  center(element){
    const { x, y, width, height } = element.node().getBBox();
    return {
      x: x + width/2,
      y: y + height/2
    }
  }

  @action startPulseAndClickHandlers() {
    const { pulse, color, center } = this;
    selectAll(`.art-piece.${this.args.place}`)
      .on("click", function() {
        location.hash = `#${this.dataset.piece}`;
      })
      .each(function() {
        const g = select(this);
        const {x, y} = center(g.select("path.circle"));
        g.append("circle")
          .attr("cx", x)
          .attr("cy", y)
          .attr("r", 27)
          .attr("fill", "white")
          .lower();
        const pulser = g.append("circle")
          .attr("cx", x)
          .attr("cy", y)
          .attr("r", 20)
          .attr("fill", color)
          .attr("stroke", color)
          .lower();
        pulse(pulser);
      });
  }

  pulse(element) {
    (function repeat() {
      element
        .transition()
        .duration(500)
        .attr("stroke-width", 0)
        .attr("stroke-opacity", 0)
        .transition()
        .duration(500)
        .attr("stroke-width", 0)
        .attr("stroke-opacity", 0.5)
        .transition()
        .duration(1000)
        .attr("stroke-width", 165)
        .attr("stroke-opacity", 0)
        .ease(easeSin)
        .on("end", repeat);
    })();
  }

}
