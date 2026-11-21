import type { Teardown } from "./types";

const t: Teardown = {
  slug: "staples-b2b-reordering",
  company: "Staples",
  product: "Small-business reordering and supplies",
  title: "How could Staples make reordering supplies take one minute, not twenty?",
  metaTitle: "Staples Small-Business Reordering: Teardown",
  description: "A teardown of Staples reordering for small businesses: why restocking the same supplies still takes effort, and three ideas to make it close to automatic.",
  date: "2026-11-21",
  brand: { bg: "#CC0000", ink: "#FFFFFF" },
  about: [
    "Staples has sold office supplies for about 40 years, and a lot of its business today is offices that buy the same things over and over: paper, toner, coffee, cleaning supplies. For a small office, the person ordering is usually also doing five other jobs.",
    "The product question is simple. How little attention can reordering take while still feeling in control of spend?",
  ],
  facts: [
    { label: "Ownership", value: "Sycamore Partners agreed to acquire Staples for $6.9 billion in 2017", source: "Fortune" },
    { label: "40 years", value: "Staples marked 40 years with a new brand platform in September 2026", source: "Business Wire" },
  ],
  personas: [
    { name: "Janelle Brooks", age: 36, who: "Office manager at a 14-person dental practice", goal: "Never run out of gloves, paper or toner during a busy week", frustration: "She rebuilds roughly the same cart every month from memory and old invoices" },
    { name: "Omar Siddiqui", age: 49, who: "Owner of a small accounting firm who approves every purchase", goal: "Keep supply spend predictable without micromanaging", frustration: "He only sees what was bought after the card is charged" },
  ],
  journeys: [
    { name: "Monthly restock", journey: "Logs in, searches each item, checks past orders, adds to cart", painpoint: "Past orders exist but turning them into a new cart still takes many taps", emotion: "Tedious" },
    { name: "Running out", journey: "Notices toner is low on a Thursday, orders next-day", painpoint: "Nothing warned her earlier, so she pays for urgency and stress", emotion: "Frazzled" },
    { name: "Approving spend", journey: "Gets a card notification, opens the order to check it", painpoint: "No simple view of what is usual versus unusual this month", emotion: "Uneasy" },
  ],
  ideas: [
    { title: "Smart standing list", what: "A saved list with suggested quantities based on past order rhythm, reordered in one tap", why: "Turns a twenty minute task into a quick review", tradeoff: "Wrong suggestions can lead to overstock and returns" },
    { title: "Run-out nudges", what: "A gentle reminder a few days before an item usually runs out, based on order history", why: "Avoids rush orders and the scramble that comes with them", tradeoff: "Too many nudges become noise, so frequency needs limits" },
    { title: "Owner approval with a usual range", what: "Orders above a set amount wait for one-tap approval, showing how this order compares to a normal month", why: "Gives owners control without making them review every box of pens", tradeoff: "Approval steps can delay urgent orders if the owner is slow to respond" },
  ],
  metrics: [
    "Median time to place a repeat order",
    "Share of orders placed from a standing list",
    "Rate of next-day rush orders per account per quarter",
    "Approval turnaround time for orders over the threshold",
    "Account retention at 12 months for businesses using standing lists",
  ],
  sources: [
    { label: "Fortune: Sycamore Partners to acquire Staples", url: "https://fortune.com/2017/06/29/staples-sycamore-partners-buyout/" },
    { label: "Business Wire: Staples marks 40 years", url: "https://secure.businesswire.com/news/home/20260915679080/en/Staples-Marks-40-Years-of-Easy-with-New-Brand-Platform-Challenging-Businesses-to-Stop-Choosing-Hard" },
  ],
};

export default t;
