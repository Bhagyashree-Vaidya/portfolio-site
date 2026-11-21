import type { Teardown } from "./types";

const t: Teardown = {
  slug: "spotify-discovery",
  company: "Spotify",
  product: "Music discovery and personalized playlists",
  title: "How could Spotify make discovery feel less like a loop?",
  metaTitle: "Spotify Discovery: A Product Teardown",
  description: "A teardown of Spotify's discovery and personalized playlists: where they shine, where they repeat themselves, and three ideas to widen taste gently.",
  date: "2026-11-21",
  brand: { bg: "#1DB954", ink: "#1F2540" },
  about: [
    "Spotify is the biggest audio streaming service in the world, and personalization sits at the center of it. Discover Weekly, Daylist, Release Radar and the AI DJ all try to answer the same question: what should you hear next?",
    "For most people the answer is pretty good. The harder part shows up after a few years, when the recommendations start to feel like a mirror. This teardown looks at that gap between comfort and curiosity.",
  ],
  facts: [
    { label: "Monthly active users", value: "777 million in Q2 2026, up 12% year over year", source: "Spotify Newsroom" },
    { label: "Premium subscribers", value: "300 million in Q2 2026, up 9% year over year", source: "Spotify Newsroom" },
    { label: "AI DJ reach", value: "Used by 94 million Premium users since its 2023 launch, in over 75 markets", source: "Spotify Newsroom" },
  ],
  personas: [
    { name: "Maya Okafor", age: 29, who: "Nurse on rotating shifts who listens on long commutes", goal: "Find new music that fits her mood without spending her break scrolling", frustration: "Her Discover Weekly keeps circling the same three genres she liked in 2021" },
    { name: "Daniel Reyes", age: 46, who: "High school teacher and lapsed vinyl collector", goal: "Hear what is new in the scenes he used to follow", frustration: "Shared family playlists and his kid's music have muddied his recommendations" },
  ],
  journeys: [
    { name: "Monday Discover Weekly", journey: "Opens the playlist on the train, saves two tracks, skips the rest", painpoint: "Many tracks sound like songs she already saved, so the playlist feels safe but flat", emotion: "Mildly content, slightly bored" },
    { name: "Asking the DJ for something new", journey: "Taps DJ, requests something different, gets a reshuffle of familiar artists", painpoint: "There is no clear dial for how far from her usual taste she wants to go", emotion: "Curious, then let down" },
    { name: "Shared account drift", journey: "Plays kids' songs in the car, sees them show up in his Daylist that evening", painpoint: "Fixing it means hunting for 'exclude from taste profile' on each playlist", emotion: "Annoyed, a little exposed" },
  ],
  ideas: [
    { title: "A visible adventure dial", what: "A simple slider on Discover Weekly and DJ from 'close to home' to 'surprise me'", why: "Lets people choose how much risk they want today instead of guessing at it", tradeoff: "More adventurous picks will get skipped more, which can look bad on short-term metrics" },
    { title: "Context modes that do not train taste", what: "One tap to mark a session as car, kids, party or sleep so it stays out of the taste profile", why: "Keeps recommendations honest for people who share devices or play music for others", tradeoff: "Adds a choice in a product people love because it asks so little of them" },
    { title: "Explain one pick per playlist", what: "A short line on one track like 'because you saved two Afrobeats songs last month'", why: "A small reason makes a stranger song feel worth a full listen", tradeoff: "Explanations can feel creepy if they are too specific, so the copy needs care" },
  ],
  metrics: [
    "Share of listeners who save at least one track from an artist new to them each week",
    "Skip rate in the first 30 seconds on new-artist tracks, by dial setting",
    "Week 4 retention of people who use the adventure dial versus those who do not",
    "Number of support contacts and searches about removing songs from the taste profile",
    "Listening time from saved new-artist tracks 30 days after discovery",
  ],
  sources: [
    { label: "Spotify Q2 2026 earnings", url: "https://newsroom.spotify.com/2026-08-04/spotify-q2-2026-earnings/" },
    { label: "Spotify Newsroom: AI DJ", url: "https://newsroom.spotify.com/tag/ai-dj/page/1" },
  ],
};

export default t;
