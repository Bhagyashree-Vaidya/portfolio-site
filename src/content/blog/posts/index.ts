import type { BlogPost } from "../types";
import { BATCH_A } from "./batchA";
import { BATCH_B } from "./batchB";
import { BATCH_C } from "./batchC";
import isThisTheProblemWorthSolving from "./is-this-the-problem-worth-solving";
import whenCanAnAiAgentActOnItsOwn from "./when-can-an-ai-agent-act-on-its-own";
import doordashInstacartProductLens from "./doordash-instacart-product-lens";
import checkoutAbandonmentShippingCosts from "./checkout-abandonment-shipping-costs";
import scopeMvpWhenCustomersWantEverything from "./scope-mvp-when-customers-want-everything";
import reduceChoiceOverload from "./reduce-choice-overload";
import bendingSpoonsMailchimpProductLens from "./bending-spoons-mailchimp-product-lens";
import upgradeTheModelOrFixTheHarness from "./upgrade-the-model-or-fix-the-harness";
import findTheStepThatBreaksOnboarding from "./find-the-step-that-breaks-onboarding";
import foxRokuProductLens from "./fox-roku-product-lens";
import addANewProductLineInsideAnExistingFlow from "./add-a-new-product-line-inside-an-existing-flow";
import ipLocationIsNotEnough from "./ip-location-is-not-enough";
import didYourFeatureCauseTheLift from "./did-your-feature-cause-the-lift";
import workdayHoneydewProductLens from "./workday-honeydew-product-lens";

// One file per post. Add the import and list entry here when a post is written.
export const POSTS: BlogPost[] = [
  isThisTheProblemWorthSolving,
  whenCanAnAiAgentActOnItsOwn,
  doordashInstacartProductLens,
  checkoutAbandonmentShippingCosts,
  scopeMvpWhenCustomersWantEverything,
  reduceChoiceOverload,
  bendingSpoonsMailchimpProductLens,
  upgradeTheModelOrFixTheHarness,
  findTheStepThatBreaksOnboarding,
  foxRokuProductLens,
  addANewProductLineInsideAnExistingFlow,
  ipLocationIsNotEnough,
  didYourFeatureCauseTheLift,
  workdayHoneydewProductLens,
  ...BATCH_A,
  ...BATCH_B,
  ...BATCH_C,
];
