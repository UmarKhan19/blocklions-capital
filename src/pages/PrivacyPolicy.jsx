import Markdown from "react-markdown";
import privacyPolicy from "../utils/markdown/privacyPolicy";
const PrivacyPolicy = () => {
  return (
    <div className="py-4">
      <Markdown className={"prose"}>{privacyPolicy}</Markdown>
    </div>
  );
};

export default PrivacyPolicy;
