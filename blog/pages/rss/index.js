import { Feed } from 'feed';
import { find } from '../../utils/sanity';

const Rss = () => {};

export async function getServerSideProps ({ res }) {
  const response = await find();

  const feed = new Feed({
    title: 'Lauren Ashpole',
    description: 'The latest font releases and recommendations. Plus code snippets, bookmarks, and project updates.',
    link: process.env.NEXT_PUBLIC_BASE_URL
  });

  response.posts.forEach((post) => {
    feed.addItem({
      title: post.title || post.summary,
      description: `${post.type === 'photo' ? post.photos.map((photo) => `<img src=${photo.url} />${post.caption}`) : ''}${post.type === 'video' ? `<iframe width="700" height="383" src="https://www.youtube.com/embed/${post.video_id}" frameborder="0" />${post.caption}` : ''}${post.type === 'link' ? `<a href=${post.url}>${post.title}</a>: ${post.description}` : ''}${post.type === 'answer' ? `${post.question}: ${post.answer}` : ''}${post.type === 'text' ? post.html : ''}`,
      link: `${process.env.NEXT_PUBLIC_BASE_URL}${post.pathname}`,
      pubDate: new Date(post.date).toISOString().substring(0, 10),
      category: post.tags.map((tag) => { return { name: tag }; })
    });
  });

  res.setHeader('Content-Type', 'text/xml');
  res.write(feed.rss2());
  res.end();

  return {
    props: {}
  };
}

export default Rss;