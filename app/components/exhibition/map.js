import Component from '@glimmer/component';
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { select } from "d3-selection";
import { easeSin } from "d3-ease";
import { transition } from "d3-transition";

export default class ExhibitionMapComponent extends Component {

  @tracked showingModal = "none";

  @action closeModal(){
    this.showingModal = "none";
  }

  @action showModal(id){
    this.showingModal = id;
  }

  get color(){
    if(this.args.place === "acfny"){
      return "#ee3e28";
    }

    return "#1e67b1";
  }


  @action addDots() {
    const pulse = this.pulse;
    const g = select(`svg.${this.args.place}-map`)
      .insert("g");
    g.selectAll("circle")
      .data(this.args.data)
      .enter()
        .append("circle")
        .attr("cx", d => d.x)
        .attr("cy", d => d.y)
        .attr("r", 70)
        .on("click", d => this.showModal(d.id))
        .attr("fill", this.color)
        .attr("stroke", this.color)
        .each(function(d) {;
          const self = select(this);
          console.log(self);
          pulse(self);
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
