import { DigitechPage } from './app.po';

describe('digitech App', () => {
  let page: DigitechPage;

  beforeEach(() => {
    page = new DigitechPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
