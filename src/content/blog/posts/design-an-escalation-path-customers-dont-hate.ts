import type { BlogPost } from "../types";

const post: BlogPost = {
  "slug": "design-an-escalation-path-customers-dont-hate",
  "title": "How do you design a chatbot handoff customers don't hate?",
  "metaTitle": "How to Design a Chatbot Handoff Customers Like",
  "description": "How to design a chatbot handoff customers don't hate: clear rules for when the bot stops, honest status, and no making people repeat themselves.",
  "date": "2026-12-22",
  "category": "pm-problem",
  "tags": [
    "chatbots",
    "customer support",
    "human in the loop",
    "ux"
  ],
  "body": [
    "Decide in advance when the bot stops, and make the handoff carry context so the customer never repeats themselves. Most people don't hate chatbots. They hate being stuck in a loop with one, or getting passed to a person who asks the same questions again.",
    "Start with stop rules. Write down the cases where the bot should hand off right away: the customer asks for a person, money or health is involved, the bot has failed to understand twice, or the customer sounds upset. Make these rules explicit and testable instead of leaving them to the model's judgment. Then decide what the bot says while it waits. Honest status matters. In Medicare plan discovery at Unity Senior Health, one rule we held to was that an unknown network status must never look like out of network. Handoffs need the same honesty. If the wait is ten minutes, say ten minutes, and don't say a person is coming if one isn't.",
    "The business side pulls the other way, because every handoff costs agent time. That's a real trade-off, and it's tempting to make escalation hard to find so the numbers look better. A common result is that people escalate anyway, angrier, after wasting time. I'd measure handoffs alongside what happens after: was the issue resolved, and did the customer come back about the same thing. A lower handoff rate only counts as a win if resolution holds up. Someone should own the stop rules, with support leaders in the room, since they see the failures first.",
    "This week, read twenty conversations that ended in a handoff. For each, note the turn where a person should have stepped in and the turn where they actually did. The gap between those two is your target. Then check what the human agent saw when they picked up. If it wasn't the full conversation, fix that first."
  ],
  "related": [
    {
      "href": "/insights/human-in-the-loop-ai-design",
      "label": "Human-in-the-loop AI design"
    }
  ]
};

export default post;
