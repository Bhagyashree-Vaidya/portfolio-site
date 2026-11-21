import { IndexPage, indexMetadata } from "@/components/content/routes";

export const metadata = indexMetadata(
  "expertise",
  "PM Expertise: AI, Search and E-commerce",
  "What Shree Vaidya does as a product manager in AI agents and evaluation, search and ranking, and e-commerce and omnichannel commerce, with links to the work behind it.",
);

export default function Page() {
  return (
    <IndexPage
      kind="expertise"
      heading="Expertise"
      intro="The three areas I work in, what each role involves, and which parts I have owned in production versus studied."
    />
  );
}
