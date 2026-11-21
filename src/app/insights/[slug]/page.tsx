import { docMetadata, docPage, staticParams } from "@/components/content/routes";

export const dynamicParams = false;
export const generateStaticParams = staticParams("insight");
export const generateMetadata = docMetadata("insight");
export default docPage("insight");
