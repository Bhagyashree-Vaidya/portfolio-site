import { docMetadata, docPage, staticParams } from "@/components/content/routes";

export const dynamicParams = false;
export const generateStaticParams = staticParams("expertise");
export const generateMetadata = docMetadata("expertise");
export default docPage("expertise");
