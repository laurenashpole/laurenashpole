import PropTypes from 'prop-types';
import styles from './MediaBlock.styles.js';

const MediaBlock = ({ post }) => {
  return (
    <div className="media">
      {post.photos &&
        <div className="media__content media__content--img">
          {post.photos.map((photo, i) => {
            return (
              <div key={i}>
                <img alt={photo.alt || null} src={photo.url} />
                <div dangerouslySetInnerHTML={{ __html: photo.caption }} />
              </div>
            );
          })}
        </div>
      }

      {post.video_id && post.video_type === 'youtube' &&
        <div className="media__content media__content--video">
          <iframe width="700" height="383" src={`https://www.youtube.com/embed/${post.video_id}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        </div>
      }

      <div dangerouslySetInnerHTML={{ __html: post.caption }} />

      <style jsx global>
        {styles}
      </style>
    </div>
  );
};

MediaBlock.propTypes = {
  post: PropTypes.object
};

export default MediaBlock;
