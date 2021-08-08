import Component from '@glimmer/component';
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

export default class TilesTileComponent extends Component {

  @tracked
  img = this.args.tile.imgur;

  useImgurB = true;

  @action launchCarousel(){
    if(this.args.tile.imgurb){
      setInterval(() => {
        if(this.useImgurB){
          this.img = this.args.tile.imgurb;
        } else {
          this.img = this.args.tile.imgur;
        }
        this.useImgurB = !this.useImgurB;
      }, 4000);
    }
  }
}
