# Content style guide

Our reader is **an 18 year old with no experience** who wants to understand cybersecurity.
Everything we write should make that person feel capable, not lost.

## 1. Voice

- Friendly, calm and direct. Talk to "you".
- Encouraging, never talking down. Avoid "simply", "obviously", "just" and "as everyone knows".
- Serious about ethics, light about everything else. A small joke is fine. Mocking the reader is not.

## 2. Simple English

| Do                                        | Avoid                                |
| ----------------------------------------- | ------------------------------------ |
| Short sentences (aim for under 20 words)  | Long sentences with several clauses  |
| Everyday words: "use", "check", "start"   | "utilise", "verify", "commence"      |
| Active voice: "The server sends the page" | "The page is sent by the server"     |
| One idea per sentence                     | Stacking three ideas with commas     |
| Explain a term the first time it appears  | Assuming the reader knows an acronym |

Spell out acronyms once: "multi-factor authentication (MFA)". After that, MFA is fine.

## 3. Teach with comparisons

Start with something familiar, then name the technical thing.

> **Good:** Think of a big apartment building. The IP address is the street address. The port is the door number.
>
> **Weak:** An IP address identifies a host, and a port identifies a process on that host.

Say where the comparison breaks down if it matters.

## 4. Lesson structure

Every lesson follows the same shape so learners know what to expect:

1. **A short intro** (2 to 3 sentences). Why this matters.
2. **Two to four `##` sections**, each with one clear idea.
3. **A table or diagram** when it shows something better than words.
4. **A "Why this matters for security" part** connecting it to defence.
5. **Try it yourself**, when there is something safe to do.
6. **Remember**: three short bullet points. This becomes the takeaway card.

Aim for **5 to 9 minutes** of reading (about 400 to 700 words).

## 5. Facts and numbers

- Check facts against trustworthy sources (standards bodies, vendor docs, respected books).
- Do not invent statistics. If a number is only to illustrate an idea, **label it** ("illustrative numbers").
- Prefer principles that stay true over details that change quickly (versions, prices, rankings). If a
  detail will change, say where to find the current version.
- Write in your own words. Do not copy from other courses or websites.

## 6. Safety and ethics

- Always say **permission matters**. Practice only on your own devices, local practice apps or targets that allow it.
- Explain attacks so people can **defend**. Do not publish ready-to-run harm.
- No real people, companies or websites as targets (the documented testing hosts such as `scanme.nmap.org` are fine, with the project's rules of use).
- Avoid fear-mongering. Be honest about risk and give the reader something to do.

## 7. Quizzes

- Test understanding, not trivia. "Why" beats "what year".
- Four options. Wrong answers should be believable.
- The `why` explanation teaches in one sentence.
- Use different positions for the correct answer (do not always make it C).

## 8. Labs

- State the goal, what you need and the time it takes.
- Number the steps. One action per step. Show the exact command in a code block.
- Say what the learner should **see** when it works.
- Finish with questions and a checkpoint ("You can now explain...").
- Give commands for Mac, Windows and Linux when they differ.

## 9. Inclusive writing

- Use "they" for a single person of unknown gender.
- Avoid idioms that do not translate ("piece of cake", "hit the ground running").
- Do not assume a country, income, or a fast computer. Mention free tools.
- Avoid "master/slave", "whitelist/blacklist" in new text. Use "primary/replica" and "allow-list/deny-list".

## 10. Before you open a pull request

- [ ] I read it out loud and it sounds natural.
- [ ] Every new word is explained.
- [ ] Sentences are short and clear.
- [ ] Facts are checked and numbers are real or labelled.
- [ ] It is safe, legal and defensive.
- [ ] The front matter is complete and the last section is **Remember**.
- [ ] `npm run format` and `npm run build` pass.
