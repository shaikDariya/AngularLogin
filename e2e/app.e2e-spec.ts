import { FappPage } from './app.po';

describe('fapp App', () => {
  let page: FappPage;

  beforeEach(() => {
    page = new FappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
