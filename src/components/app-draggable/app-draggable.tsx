import { Component, Element, Prop, Host, h, writeTask } from "@stencil/core";
import { createGesture, Gesture } from "@ionic/core";

@Component({
  tag: "app-draggable",
  styleUrl: "app-draggable.css",
  shadow: true,
})
export class AppDraggable {
  @Element() hostElement: HTMLElement;
  @Prop() droppable;
  @Prop() dropData;

  componentDidLoad() {
    const style = this.hostElement.style;

    const dragGesture: Gesture = createGesture({
      el: this.hostElement,
      gestureName: "draggable",
      threshold: 0,
      onStart: () => {
        writeTask(() => {
          style.transition = "none";
          style.opacity = "0.7";
        });
      },
      onMove: (ev) => {
        writeTask(() => {
          style.transform = `translate(${ev.deltaX}px, ${ev.deltaY}px)`;
        });
      },
      onEnd: (ev) => {
        writeTask(() => {
          style.transition = ".3s ease-out";
          style.transform = `translate(0, 0)`;
          style.zIndex = "inherit";
          style.opacity = "1";
        });
        this.droppable.complete(ev, this.dropData);
      },
    });

    dragGesture.enable();
  }

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
