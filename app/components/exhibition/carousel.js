import Component from '@glimmer/component';
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";
import fade from 'ember-animated/transitions/fade';
import { fadeIn, fadeOut } from 'ember-animated/motions/opacity';

export default class ExhibitionCarouselComponent extends Component {

  src(count) {
    // const filename = this.args.photoScheme.replace("#", count);
    return `assets/exhibition-photos/${this.args.photoScheme.replace("#", count)}.jpg`;
  }

  @tracked
  activePhoto = this.src(1);

  @action
  * transition({ insertedSprites, removedSprites}) {
    for (let sprite of removedSprites) {
      fadeOut(sprite);
    }
    for (let sprite of insertedSprites) {
      fadeIn(sprite);
    }
  }

  transitionDuration = 1500;

  loopDuration = 6000;

  @action
  startCarousel(count) {
    setTimeout(() => {
      this.activePhoto = this.src(count);
      if(count < this.args.photoCount) {
        this.startCarousel(count + 1);
      } else {
        this.startCarousel(1);
      }
    }, this.loopDuration)
  }
}
