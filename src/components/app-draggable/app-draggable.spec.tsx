import { newSpecPage } from '@stencil/core/testing';
import { AppDraggable } from './app-draggable';

describe('app-draggable', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AppDraggable],
      html: `<app-draggable></app-draggable>`,
    });
    expect(page.root).toEqualHtml(`
      <app-draggable>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </app-draggable>
    `);
  });
});
