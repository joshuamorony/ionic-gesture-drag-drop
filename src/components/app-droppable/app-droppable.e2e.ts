import { newE2EPage } from '@stencil/core/testing';

describe('app-droppable', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-droppable></app-droppable>');

    const element = await page.find('app-droppable');
    expect(element).toHaveClass('hydrated');
  });
});
