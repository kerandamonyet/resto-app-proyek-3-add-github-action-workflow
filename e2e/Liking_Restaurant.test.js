Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

const likingRestaurant = async (I) => {
  I.amOnPage('/');

  I.seeElement('.restaurant-item__footer a');
  I.wait(2);
  I.click(locate('.restaurant-item__footer a').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');
};
Scenario('liking one restaurant', async ({ I }) => {
  I.wait(2);
  await likingRestaurant(I);
});

Scenario('Unliking one restaurant', async ({ I }) => {
  I.wait(2);
  await likingRestaurant(I);

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');
  I.click(locate('.restaurant-item__footer a').first());
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.see('Your Favorited Restaurant', '.content__heading');
});
