import { AngularSamplePage } from './app.po';

describe('angular-sample App', () => {
  let page: AngularSamplePage;

  beforeEach(() => {
    page = new AngularSamplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
