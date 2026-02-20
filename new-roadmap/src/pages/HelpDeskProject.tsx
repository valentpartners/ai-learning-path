import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import content from "../data/HELP_DESK_PROJECT.md?raw";

export default function HelpDeskProject() {
  return (
    <div className="container">
      <article className="markdown-body">
        <Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>
      </article>
    </div>
  );
}
