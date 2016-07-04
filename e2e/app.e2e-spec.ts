import { TvWatchlistPage } from './app.po';

describe('tv-watchlist App', function() {
  let page: TvWatchlistPage;

  beforeEach(() => {
    page = new TvWatchlistPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('tvw works!');
  });
});
