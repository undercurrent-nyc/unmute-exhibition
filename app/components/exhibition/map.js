import Component from '@glimmer/component';
import { action } from "@ember/object";
import { select } from "d3-selection";

export default class ExhibitionMapComponent extends Component {

  get color(){
    if(this.args.place === "acfny"){
      return "#ee3e28";
    }

    return "#1e67b1";
  }


  @action addDots() {
    const g = select(`svg.${this.args.place}-map`)
      .insert("g");
    g.selectAll("circle")
      .data(this.args.data)
      .enter()
        .append("circle")
        .attr("cx", d => d.x)
        .attr("cy", d => d.y)
        .attr("r", 70)
        .attr("fill", this.color);
  }
}
