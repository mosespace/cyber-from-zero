export type Resource = { name: string; url: string; blurb: string };

const yt = (q: string) => `https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`;

/** Video channels. These link to the channel pages on YouTube. */
