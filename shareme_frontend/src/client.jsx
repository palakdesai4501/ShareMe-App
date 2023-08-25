import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId: '5por7u6w',
    dataset: 'production',
    apiVersion: '2021-11-16',
    useCdn: true,
    token: 'skXsCDeSW0bpDPLxBylGjugNw6RgI7vD4fxf4IG3UzIRQLW0zi81bsrHVWs1u7sPob1zTWGzbJZhix9LQRp7c1HImReNSJpO08WTWaWSUE922bG2PWpMRtw1cRdBEuFhgQSH3IGSIqasX8FR07BtOcVhTeJoN5jGHf2P1WAZRakOlTm9J2SN',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
 
