import { SamDashPage } from './app.po';

describe('sam-dash App', function() {
  let page: SamDashPage;

  beforeEach(() => {
    page = new SamDashPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
