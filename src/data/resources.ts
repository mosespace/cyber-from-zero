export type Resource = { name: string; url: string; blurb: string };

const yt = (q: string) => `https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`;

/** Video channels. These link to the channel pages on YouTube. */
export const videoChannels: Resource[] = [
  { name: "Professor Messer", url: "https://www.youtube.com/@professormesser", blurb: "Free, full Security+ video course. Calm and clear." },
  { name: "NetworkChuck", url: "https://www.youtube.com/@NetworkChuck", blurb: "Fun, energetic networking and hacking explainers." },
  { name: "The Cyber Mentor", url: "https://www.youtube.com/@TheCyberMentor", blurb: "Beginner ethical hacking courses and career advice." },
  { name: "John Hammond", url: "https://www.youtube.com/@_JohnHammond", blurb: "CTF walkthroughs and malware analysis." },
  { name: "LiveOverflow", url: "https://www.youtube.com/@LiveOverflow", blurb: "Deep dives into how hacking really works." },
  { name: "Computerphile", url: "https://www.youtube.com/@Computerphile", blurb: "Friendly university-level explanations of computing ideas." },
  { name: "IppSec", url: "https://www.youtube.com/@ippsec", blurb: "Step-by-step Hack The Box machine solutions." },
];

/** One video search per module, so you can watch a topic right after reading it. */
export const moduleVideos: Record<string, { title: string; url: string }[]> = {
  "digital-world": [
    { title: "How the internet works, for beginners", url: yt("how the internet works explained for beginners") },
    { title: "Binary and data explained", url: yt("binary numbers explained simply") },
  ],
  "security-mindset": [
    { title: "The CIA triad explained", url: yt("CIA triad confidentiality integrity availability explained") },
  ],
  networking: [
    { title: "Networking basics full course", url: yt("networking basics for beginners IP ports OSI model") },
    { title: "The OSI model explained", url: yt("OSI model explained simply") },
