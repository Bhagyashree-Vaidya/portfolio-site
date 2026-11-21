import type { Teardown } from "./types";
import spotifyDiscovery from "./spotify-discovery";
import airbnbSearchAndTrust from "./airbnb-search-and-trust";
import bestBuyOmnichannel from "./best-buy-omnichannel";
import amazonShoppingSearch from "./amazon-shopping-search";
import amazonRufusAiAssistant from "./amazon-rufus-ai-assistant";
import staplesB2bReordering from "./staples-b2b-reordering";
import walmartSearchAndPickup from "./walmart-search-and-pickup";

// Register each teardown here (import + list entry), newest first.
export const TEARDOWNS: Teardown[] = [
  spotifyDiscovery,
  airbnbSearchAndTrust,
  bestBuyOmnichannel,
  amazonShoppingSearch,
  amazonRufusAiAssistant,
  staplesB2bReordering,
  walmartSearchAndPickup,
];

export const getTeardown = (slug: string) => TEARDOWNS.find((t) => t.slug === slug);
