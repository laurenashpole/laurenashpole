export const isThreadViewPost = (obj) => {
  return (
    obj !== null &&
    typeof obj === 'object' &&
    obj['$type'] === 'app.bsky.feed.defs#threadViewPost'
  );
};

export const isRecord = (obj) => {
  return (
    obj !== null &&
    typeof obj === 'object' &&
    (obj['$type'] === 'app.bsky.feed.post' ||
      obj['$type'] === 'app.bsky.feed.post#main')
  );
};
