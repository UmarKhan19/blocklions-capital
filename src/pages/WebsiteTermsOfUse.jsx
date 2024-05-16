import Markdown from "react-markdown";
import termsOfUse from "../utils/markdown/termsOfUse";
const WebsiteTermsOfUse = () => {
  return (
    <div className="py-4">
      <Markdown className={"prose"}>{termsOfUse}</Markdown>
    </div>
  );
};

export default WebsiteTermsOfUse;
