import { createClient } from 'next-sanity';

export function sanityClient(projectId) {
  return createClient({
    projectId,
    dataset: 'production',
    apiVersion: '2022-03-25',
    useCdn: true,
  });
}
