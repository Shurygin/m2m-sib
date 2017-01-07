import { M2mSibPage } from './app.po';

describe('m2m-sib App', function() {
  let page: M2mSibPage;

  beforeEach(() => {
    page = new M2mSibPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
