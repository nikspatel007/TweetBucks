import { TweetBucksPage } from './app.po';

describe('tweet-bucks App', () => {
  let page: TweetBucksPage;

  beforeEach(() => {
    page = new TweetBucksPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
