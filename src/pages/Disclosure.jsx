import Markdown from "react-markdown";
import disclosure from "../utils/markdown/disclosure.js";

const Disclosure = () => {
  return (
    <div className="py-4">
      <Markdown className={"prose "}>{disclosure}</Markdown>
    </div>
  );
};

export default Disclosure;
