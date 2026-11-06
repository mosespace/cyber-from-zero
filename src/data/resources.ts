export type Resource = { name: string; url: string; blurb: string };

const yt = (q: string) => `https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`;

/** Video channels. These link to the channel pages on YouTube. */
export const videoChannels: Resource[] = [
  { name: "Professor Messer", url: "https://www.youtube.com/@professormesser", blurb: "Free, full Security+ video course. Calm and clear." },
  { name: "NetworkChuck", url: "https://www.youtube.com/@NetworkChuck", blurb: "Fun, energetic networking and hacking explainers." },
