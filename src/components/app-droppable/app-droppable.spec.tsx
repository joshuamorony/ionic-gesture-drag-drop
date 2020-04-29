import { newSpecPage } from '@stencil/core/testing';
import { AppDroppable } from './app-droppable';

describe('app-droppable', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AppDroppable],
      html: `<app-droppable></app-droppable>`,
    });
    expect(page.root).toEqualHtml(`
      <app-droppable>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </app-droppable>
    `);
  });
});
