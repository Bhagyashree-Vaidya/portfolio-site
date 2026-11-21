import type { BlogPost } from "../types";

const post: BlogPost = {
  "slug": "building-a-data-product-for-researchers",
  "title": "What do you learn from building a data product for researchers?",
  "metaTitle": "Building a Data Product for Researchers",
  "description": "Lessons from building a data tool for a Starlink research lab: why speed matters, how researchers come to trust results and why error analysis belongs in it.",
  "date": "2027-03-03",
  "category": "pm-problem",
  "tags": [
    "data products",
    "research tools",
    "ux",
    "error analysis"
  ],
  "body": [
    "Researchers will use a data product when it's fast and when they can see why it got each answer. Accuracy matters, but a number on its own isn't enough. They want to check the result against what they know and find where it went wrong. If they can't, they'll redo the work by hand and the tool becomes shelfware.",
    "At a University of Washington research lab, I built a 0-to-1 Python and Streamlit data product for Starlink satellite downlink captures from a rooftop antenna. It compares detected satellite signals with predictive orbital models and turns raw, noisy captures into labeled satellite tracks. Processing went from hours to under a minute, and detection accuracy reached 90%+ using DBSCAN clustering and Hungarian-algorithm matching. A teammate on the project noted that when the original detector produced fragmented detections on real-world captures, I worked on curve fitting, fragment merging and matching refinements to improve detection quality.",
    "The product lessons are fairly general. Speed changes behavior. When processing drops from hours to under a minute, people start exploring instead of batching their questions. Trust comes from showing the work. I built precision and recall views and error analysis into the tool, so researchers can see where each detection was right or wrong instead of taking an accuracy number on faith. Interface design still matters for expert users. Captures, Doppler tracks, detections and predicted satellite passes all needed clear structure, status indicators and error states. Experts are often patient with complexity, but that doesn't mean they enjoy hunting for things.",
    "If you're building for researchers or any expert audience, try this: for your main output, add a way to see the cases where the system was wrong, side by side with the cases where it was right. Then sit with one user while they look at it. What they check first tells you what they need to trust. If you want to see the tool, there's a [live version of the Starlink Spectrogram Tool](https://starlink-spectrogram-tool.streamlit.app/)."
  ],
  "related": [
    {
      "href": "/expertise/ai-product-management",
      "label": "AI product management"
    }
  ]
};

export default post;
