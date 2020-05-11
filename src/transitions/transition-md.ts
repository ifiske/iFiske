import { Animation } from 'ionic-angular/animations/animation';
import { isPresent } from 'ionic-angular/util/util';
import { PageTransition } from 'ionic-angular/transitions/page-transition';

const TRANSLATEY = 'translateY';
const TRANSLATEX = 'translateX';
const OFF_RIGHT = '100%';
const OFF_BOTTOM = '40px';
const CENTER = '0px';
const SHOW_BACK_BTN_CSS = 'show-back-button';

export class MDTransition extends PageTransition {
  init() {
    super.init();

    const plt = this.plt;
    const enteringView = this.enteringView;
    const leavingView = this.leavingView;
    const opts = this.opts;
    //opts.duration = 2000;

    // what direction is the transition going
    const backDirection = opts.direction === 'back';

    if (enteringView) {
      if (backDirection) {
        this.duration(isPresent(opts.duration) ? opts.duration : 200).easing(
          'cubic-bezier(0.47,0,0.745,0.715)',
        );
      } else {
        this.duration(isPresent(opts.duration) ? opts.duration : 280).easing(
          'cubic-bezier(0.36,0.66,0.04,1)',
        );
        this.enteringPage.fromTo(TRANSLATEX, OFF_RIGHT, CENTER, true);
        if (leavingView) {
          const leavingPage = new Animation(this.plt, leavingView.pageRef());
          this.add(leavingPage.fromTo('scale', '1', '0.9', true));
        }
      }

      if (enteringView.hasNavbar()) {
        const enteringPageEle: Element = enteringView.pageRef().nativeElement;
        const enteringNavbarEle: Element = enteringPageEle.querySelector(
          'ion-navbar',
        );

        const enteringNavBar = new Animation(plt, enteringNavbarEle);
        this.add(enteringNavBar);

        const enteringBackButton = new Animation(
          plt,
          enteringNavbarEle.querySelector('.back-button'),
        );
        this.add(enteringBackButton);
        if (enteringView.enableBack()) {
          enteringBackButton.beforeAddClass(SHOW_BACK_BTN_CSS);
        } else {
          enteringBackButton.beforeRemoveClass(SHOW_BACK_BTN_CSS);
        }
      }
    }

    // setup leaving view
    if (leavingView && backDirection) {
      // leaving content
      this.duration(opts.duration || 200).easing(
        'cubic-bezier(0.47,0,0.745,0.715)',
      );
      const leavingPage = new Animation(plt, leavingView.pageRef());
      this.add(
        leavingPage
          .fromTo(TRANSLATEY, CENTER, OFF_BOTTOM)
          .fromTo('opacity', 1, 0),
      );
    }
  }
}
