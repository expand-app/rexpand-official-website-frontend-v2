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
// const jsonToHtml = (json: RichTextContent): string => {
//   if (!json) {
//     return "";
//   }
//   const elements = json.map((block, index) => {
//     if (block.type === "paragraph") {
//       const children = block.children.map((child, childIndex) => {
//         if (child.type === "text" && child.text === "") {
//           return "<br />";
//         }
//         return child.text;
//       });
//       return `<p key=${index}>${children.join("")}</p>`;
//     }
//     return null;
//   });

//   return elements.join("");
// };
const JsonToHtml = ({ data }: { data: any }) => {
  return (
    <div>
      {data.map((item, index) => {
        if (item.type === "paragraph") {
          return (
            <p key={index}>
              {item.children.map((child, childIndex) => {
                if (child.type === "text") {
                  const text = child.text;
                  if (child.text === "") {
                    return <br key={childIndex} />;
                  }
                  if (child.bold && child.italic) {
                    return (
                      <strong key={childIndex}>
                        <em>{text}</em>
                      </strong>
                    );
                  } else if (child.bold) {
                    return <strong key={childIndex}>{text}</strong>;
                  } else if (child.italic) {
                    return <em key={childIndex}>{text}</em>;
                  } else {
                    return text;
                  }
                }
                return null;
              })}
            </p>
          );
        } else if (item.type === "heading") {
          const HeadingTag = `h${item.level}`;
          return (
            <HeadingTag key={index}>
              {item.children.map((child, childIndex) => {
                if (child.type === "text") {
                  return child.text;
                }
                return null;
              })}
            </HeadingTag>
          );
        }
        return null;
      })}
    </div>
  );
};

// 定义组件的 props 类型
// interface RichTextDisplayProps {
//   content: RichTextContent | any;
// }
// const RichTextDisplay: React.FC<RichTextDisplayProps> = ({ content }) => {
//   const htmlContent = jsonToHtml(content);

//   return <div>{parse(htmlContent)}</div>;
// };

export default JsonToHtml;
