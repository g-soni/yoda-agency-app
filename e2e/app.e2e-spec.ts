import { YodaAgencyPage } from './app.po';

describe('yoda-agency App', function() {
  let page: YodaAgencyPage;

  beforeEach(() => {
    page = new YodaAgencyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
