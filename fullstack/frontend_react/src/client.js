import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'x8dlc5dy',
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: 'skw3Ah6mAOIfb3HSZKQEjQxpdD38IL0DYUjtXqUYgDoIaRNZVi9CGiPNDRx8GuDI1RX02XphTwZ8eGG1TGcbhw8VoFcDOVRrnjO9ryTaU6MTPRVNVY8RAzELOwgelDYLWggx49mzjaFXtIRM696B0WDnBpKLCuMcEjD6LvAgNNSKMNQS57ps',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);