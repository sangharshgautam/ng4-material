import { SealPage } from './app.po';

describe('seal App', () => {
  let page: SealPage;

  beforeEach(() => {
    page = new SealPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
