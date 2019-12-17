import { newE2EPage } from '@stencil/core/testing';

describe('hv-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hv-button></hv-button>');

    const element = await page.find('hv-button');
    expect(element).toHaveClass('hydrated');
  });
});
