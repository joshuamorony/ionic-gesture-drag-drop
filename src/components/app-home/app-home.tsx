import { Component, State, Element, h } from "@stencil/core";

@Component({
  tag: "app-home",
  styleUrl: "app-home.css",
})
export class AppHome {
  @Element() hostElement: HTMLElement;
  @State() droppableArea;
  @State() cards;
  @State() chosenOne: string = "pick a card...";

  componentWillLoad() {
    this.cards = [
      { title: "Drag Me", content: "To another place" },
      { title: "Drag Me", content: "I am a far better candidate for dragging" },
      { title: "Drag Me", content: "To the place, I belong" },
    ];
  }

  componentDidLoad() {
    this.droppableArea = this.hostElement.querySelector("app-droppable");
  }

  handleDrop(data) {
    this.chosenOne = data.content;
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Drag and Drop</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="ion-padding">
        <app-droppable onElementDropped={(ev) => this.handleDrop(ev.detail)}>
          <div
            style={{
              border: `3px dashed #cecece`,
              width: `100%`,
              height: `200px`,
              display: `flex`,
              alignItems: `center`,
              justifyContent: `center`,
            }}
          >
            <h5>Drop zone!</h5>
          </div>
        </app-droppable>

        <p>
          <strong>The chosen one:</strong> {this.chosenOne}
        </p>

        {this.cards.map((card) => (
          <app-draggable droppable={this.droppableArea} dropData={card}>
            <ion-card>
              <ion-card-header>
                <ion-card-title>{card.title}</ion-card-title>
              </ion-card-header>
              <ion-card-content>{card.content}</ion-card-content>
            </ion-card>
          </app-draggable>
        ))}

        <app-draggable
          droppable={this.droppableArea}
          dropData={{ content: "Why not!" }}
        >
          <ion-chip>
            <ion-icon name="heart" color="primary"></ion-icon>
            <ion-label>A draggable chip?</ion-label>
            <ion-icon name="close"></ion-icon>
          </ion-chip>
        </app-draggable>

        <app-draggable
          droppable={this.droppableArea}
          dropData={{ content: "A button???" }}
        >
          <ion-button>Drag me too, why not!</ion-button>
        </app-draggable>
      </ion-content>,
    ];
  }
}
