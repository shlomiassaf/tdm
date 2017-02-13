import { browser, by, element } from 'protractor';

describe('App', () => {

  beforeEach(() => {
    browser.get('/');
  });

  it('should have a title', () => {
    let subject = browser.getTitle();
    let result  = 'Angular2 Datatable';
    expect(subject).toEqual(result);
  });

  it('should have header', () => {
    let subject = element(by.tagName('datatable-header-cell')).isPresent();
    let result  = true;
    expect(subject).toEqual(result);
  });

});
