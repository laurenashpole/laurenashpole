import { sanityClient } from '../../shared/utils/sanityClient';

const FONT_PARTIAL = `
  _id,
  "slug": slug.current,
  images {
    "gallery": gallery[] {
      "url": asset->url,
      alt
    }
  }`;

const TAG_PARTIAL = `
  _id,
  name,
  "slug": slug.current
`;

const FONT_QUERY = `*[_type == 'font' && slug.current == $slug][0] {
    ...,
    "slug": slug.current,
    tags[]->{
      ${TAG_PARTIAL}
    },
    images {
      "gallery": gallery[] {
        "url": asset->url,
        alt
      },
      pinterest {
        "url": asset->url
      }
    },
    previews {
      ...,
      "files": files[] {
        "url": asset->url
      }
    },
    downloads {
      commercial {
        ...,
        file {
          "url": asset->url
        }
      },
      personal {
        ...,
        file {
          "url": asset->url
        }
      }
    }
  }
`;

const FONTS_QUERY = `*[_type == 'font' && active && select(defined($ids) => _id in $ids, true)] | order(name asc) {
  ${FONT_PARTIAL}
}`;

const TAG_QUERY = `*[_type == 'fontTag' && slug.current == $slug][0] {
    ...,
    "slug": slug.current,
    "fonts": *[_type == 'font' && references(^._id)] {
      ${FONT_PARTIAL}
    }
  }
`;

const TAGS_QUERY = `*[_type == 'fontTag'] | order(name asc) {
  ${TAG_PARTIAL}
}`;

export async function fetchFont(slug) {
  return await sanityClient(process.env.SANITY_PROJECT).fetch(FONT_QUERY, {
    slug,
  });
}

export async function fetchFonts(ids) {
  return await sanityClient(process.env.SANITY_PROJECT).fetch(FONTS_QUERY, {
    ids: ids || null,
  });
}

export async function fetchTag(slug) {
  return await sanityClient(process.env.SANITY_PROJECT).fetch(TAG_QUERY, {
    slug,
  });
}

export async function fetchTags() {
  return await sanityClient(process.env.SANITY_PROJECT).fetch(TAGS_QUERY);
}
