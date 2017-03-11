import { ProjektAnglarPage } from './app.po';

describe('projekt-anglar App', function() {
  let page: ProjektAnglarPage;

  beforeEach(() => {
    page = new ProjektAnglarPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
