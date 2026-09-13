// ---------------------------------------------------------------------------
// SITE CONTENT
// Edit this file to update anything on the site — text, links, skills,
// portfolio videos, achievements. No other file needs to change.
// ---------------------------------------------------------------------------

export const personalInfo = {
  name: "Anshu Kashyap",
  initials: "AK",
  tagline: "You give the idea, I give the result.",
  title: "Video Editor | Social Media Content Creator",
  introduction:
    "I create engaging visual content through cinematic editing, storytelling, and creative ideas. With 2 years of editing experience and a growing social media presence, I help brands and creators connect with their audience.",
  about: [
    "3rd Year College Student",
    "2 Years of Video Editing Experience",
    "Instagram Creator with 32K+ Followers",
    "Passionate about storytelling and digital content",
    "Skilled in creating reels, shorts, and social media videos",
  ],
  aboutParagraph:
    "I'm a 3rd-year college student and a passionate video editor with two years of experience crafting engaging short-form content. I run my own Instagram platform with 32K+ followers, where I create cinematic edits, storytelling reels, and trend-based videos that connect with audiences.",
  location: "Indore, India",
  // Drop your resume PDF in the /public folder as "resume.pdf" — this link
  // will start working automatically. See README for details.
  resumeUrl: "/resume.pdf",
};

// Replace these placeholder links with your real ones.
export const socialLinks = {
  instagram: "https://instagram.com/anshu_.edits",
  email: "mailto:youremail@example.com",
  whatsapp: "https://wa.me/91XXXXXXXXXX",
  linkedin: "https://linkedin.com/in/your-linkedin",
};

// icon must match one of the names imported in components/Skills.js
export const skills = [
  { name: "Video Editing", icon: "Film" },
  { name: "Reel Editing", icon: "Clapperboard" },
  { name: "Short-form Content Creation", icon: "Zap" },
  { name: "Storytelling", icon: "BookOpen" },
  { name: "Motion Graphics", icon: "Sparkles" },
  { name: "Color Grading", icon: "Palette" },
  { name: "Sound Design", icon: "Volume2" },
  { name: "Social Media Growth", icon: "TrendingUp" },
];

export const tools = ["CapCut", "Alight Motion", "Canva", "Adobe Premiere Pro"];

export const experience = {
  role: "Social Media Content Creator",
  org: "@anshu_.edits",
  metric: "32K+ Followers",
  timeline: [
    {
      title: "Content Creation Journey",
      description:
        "Started experimenting with short-form edits and steadily built a consistent posting rhythm and visual style.",
    },
    {
      title: "Audience Growth",
      description:
        "Grew the Instagram platform to 32K+ engaged followers through consistent, high-quality uploads.",
    },
    {
      title: "Viral Reel Creation",
      description:
        "Produced multiple reels that broke out beyond the existing audience and reached new viewers at scale.",
    },
    {
      title: "Trend Analysis",
      description:
        "Tracks emerging audio, formats, and edit styles early, and adapts them to fit a distinct creative voice.",
    },
    {
      title: "Creative Storytelling",
      description:
        "Shapes every edit around a clear narrative arc, not just cuts and effects, so content connects emotionally.",
    },
  ],
};

export const achievements = [
  { value: "32K+", label: "Instagram Followers" },
  { value: "2", label: "Years Experience" },
  { value: "100+", label: "Videos Created" },
  { value: "Multiple", label: "High-Engagement Reels" },
];

// Add a YouTube video ID (works great with Unlisted videos) to make a card
// playable. Leave youtubeId empty to show a "Coming soon" placeholder card
// instead of a broken link — nothing ever breaks on the live site.
export const portfolioProjects = [
  {
    id: "cinematic-edits",
    title: "Cinematic Edits",
    category: "Cinematic",
    description:
      "Film-style color grading, deliberate pacing, and letterboxed framing turn everyday footage into something that feels shot for the big screen.",
    youtubeId: "",
  },
  {
    id: "bollywood-edits",
    title: "Bollywood Edits",
    category: "Bollywood",
    description:
      "High-energy cuts synced to music beats, saturated color, and dramatic transitions built for classic Bollywood-style moments.",
    youtubeId: "",
  },
  {
    id: "emotional-storytelling",
    title: "Emotional Storytelling",
    category: "Storytelling",
    description:
      "Slower pacing, natural sound, and careful sequencing built around a feeling rather than a punchline.",
    youtubeId: "",
  },
  {
    id: "motivational-reels",
    title: "Motivational Reels",
    category: "Motivational",
    description:
      "Punchy voiceover pairing, rhythmic cuts, and bold typography built to move an audience to act.",
    youtubeId: "",
  },
  {
    id: "brand-style-videos",
    title: "Brand Style Videos",
    category: "Brand",
    description:
      "Clean, on-brand edits with consistent color and pacing, built to match a brand's existing visual identity.",
    youtubeId: "",
  },
  {
    id: "trending-shorts",
    title: "Trending Shorts",
    category: "Trending",
    description:
      "Fast turnarounds on trending audio and formats, adapted quickly without losing a distinct creative voice.",
    youtubeId: "",
  },
];
