export class TvWatchlistPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('tvw-root h1')).getText();
  }
}
