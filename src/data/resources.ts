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
  ],
  "operating-systems": [
    { title: "Linux for beginners", url: yt("linux command line for beginners") },
    { title: "Linux file permissions", url: yt("linux file permissions chmod explained") },
  ],
  cryptography: [
    { title: "Hashing vs encryption", url: yt("hashing vs encryption explained") },
    { title: "How password cracking works", url: yt("how password cracking works explained") },
  ],
  threats: [
    { title: "How to spot phishing", url: yt("how to spot phishing emails") },
    { title: "Types of malware", url: yt("types of malware explained") },
  ],
  "web-security": [
    { title: "OWASP Top 10 for beginners", url: yt("OWASP top 10 explained for beginners") },
    { title: "SQL injection explained", url: yt("SQL injection explained") },
  ],
  defense: [
    { title: "Firewalls explained", url: yt("how firewalls work explained") },
    { title: "Defence in depth", url: yt("defense in depth cybersecurity explained") },
  ],
  "ethical-hacking": [
    { title: "Ethical hacking for beginners", url: yt("ethical hacking for beginners full course") },
    { title: "Nmap and Wireshark basics", url: yt("nmap wireshark tutorial for beginners") },
  ],
  "response-and-careers": [
    { title: "Incident response explained", url: yt("incident response process explained") },
    { title: "How to start a cybersecurity career", url: yt("how to start a cybersecurity career with no experience") },
  ],
};

export const courses: Resource[] = [
  { name: "Professor Messer: Security+", url: "https://www.professormesser.com/", blurb: "Free video training for the CompTIA Security+ exam." },
  { name: "Google Cybersecurity Certificate", url: "https://grow.google/certificates/cybersecurity/", blurb: "Beginner-friendly, no experience needed." },
  { name: "Cisco Networking Academy", url: "https://www.netacad.com/", blurb: "Free intro courses in cybersecurity and networking." },
  { name: "freeCodeCamp", url: "https://www.freecodecamp.org/", blurb: "Free long-form courses, including security topics." },
  { name: "NIST Cybersecurity Framework", url: "https://www.nist.gov/cyberframework", blurb: "How organisations organise their defences." },
  { name: "CISA Resources", url: "https://www.cisa.gov/resources-tools", blurb: "Practical guides from the US cyber defence agency." },
];

export const labs: Resource[] = [
  { name: "TryHackMe", url: "https://tryhackme.com/", blurb: "Guided rooms in your browser. Best first lab." },
  { name: "OverTheWire", url: "https://overthewire.org/wargames/", blurb: "Command-line games, start with Bandit." },
  { name: "picoCTF", url: "https://picoctf.org/", blurb: "Beginner-friendly capture-the-flag challenges." },
  { name: "PortSwigger Web Security Academy", url: "https://portswigger.net/web-security", blurb: "Free, excellent web hacking labs." },
  { name: "OWASP Juice Shop", url: "https://owasp.org/www-project-juice-shop/", blurb: "A deliberately insecure shop to practise on." },
  { name: "Hack The Box", url: "https://www.hackthebox.com/", blurb: "Harder machines when you are ready." },
