import { newE2EPage } from '@stencil/core/testing';

describe('app-draggable', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-draggable></app-draggable>');

    const element = await page.find('app-draggable');
    expect(element).toHaveClass('hydrated');
  });
});
