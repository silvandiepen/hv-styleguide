import { newE2EPage } from '@stencil/core/testing';

describe('hv-input-text', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hv-input-text></hv-input-text>');

    const element = await page.find('hv-input-text');
    expect(element).toHaveClass('hydrated');
  });
});
