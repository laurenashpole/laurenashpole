import React from 'react';
import { Helmet } from 'react-helmet';

const Licensing = () => {
  return(
    <main className="main main--bg-fixed container container--medium">
      <Helmet>
        <title>Licensing - Fonts - Lauren Ashpole</title>
      </Helmet>

      <h2 className="text--uppercase">Licensing</h2>

      <div className="well well--extra-padding">
        <p>Licensing fees provide the time, software, caffeine, and other necessities that go into creating new fonts and improving old ones. At the same time, I love the free font archives and downloading sprees and trying out fonts I might eventually find a use for so I don’t want to discourage any of that. In an attempt to strike a balance, different options are available depending on the type of use:</p>

        <p><span className="text--extra-bold">1) Personal Use.</span> It is definitely not my intention to keep you from sprucing up your scrapbooks, party invitations, Harry Potter fan sites, etc. Therefore, all fonts are free for personal use. But if you decide to sell those things you’ll need a . . .</p>

        <p><span className="text--extra-bold">2) Basic Commercial License.</span> This one is good for small and medium sized businesses, freelancers, craft sellers, and the like for use on products, promotional materials, or web sites. There are no limits on printings or page views but you are only allowed to install the font on up to five computers. A simple example: you’ve decided to self-publish a children’s book with the font Candy Randy on the cover but you’re not sure how many copies you’ll eventually sell. That’s fine. As long as you follow the five computer rule the price is the same if you print ten books or 10,000. Prices can be found on the individual font pages. Click <a title="End-User Licensing Agreement" href="/fonts/eula/">here</a> to view the EULA. If you’re a large company and you’ll definitely be installing the font on a lot of computers there’s the. . .</p>

        <p><span className="text--extra-bold">3) Corporate License.</span> This is an unrestricted license intended for large multinational corporations and agencies working for large multinational corporations. If it’s probable that I might stumble upon you using my fonts in my day to day shopping and subway riding or you need additional forms signed, this might be you. To check or to get rates, email <a href="mailto:lauren@laurenashpole.com}">lauren@laurenashpole.com</a>.</p>

        <p>This might not be the most clear cut method of categorization so feel free to <a href="mailto:lauren@laurenashpole.com">ask</a> if you have any questions about where your project falls on the list</p>
      </div>
    </main>
  );
};

export default Licensing;