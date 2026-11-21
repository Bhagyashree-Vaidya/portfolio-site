import { docMetadata, docPage, staticParams } from "@/components/content/routes";

export const dynamicParams = false;
export const generateStaticParams = staticParams("case-study");
export const generateMetadata = docMetadata("case-study");
export default docPage("case-study");
