import React from "react";
import parse from "html-react-parser";

// 定义 JSON 数据的类型
interface TextChild {
  text: string;
  type: "text";
}

export interface ParagraphBlock {
  type: "paragraph";
  children: TextChild[];
}

type RichTextContent = ParagraphBlock[];

// JSON 转 HTML 的实用函数
const jsonToHtml = (json: RichTextContent): string => {
  if (!json) {
    return "";
  }
  const elements = json.map((block, index) => {
    if (block.type === "paragraph") {
      const children = block.children.map((child, childIndex) => {
        if (child.type === "text" && child.text === "") {
          return "<br />";
        }
        return child.text;
      });
      return `<p key=${index}>${children.join("")}</p>`;
    }
    return null;
  });

  return elements.join("");
};

// 定义组件的 props 类型
interface RichTextDisplayProps {
  content: RichTextContent | any;
}
const RichTextDisplay: React.FC<RichTextDisplayProps> = ({ content }) => {
  const htmlContent = jsonToHtml(content);

  return <div>{parse(htmlContent)}</div>;
};

export default RichTextDisplay;
