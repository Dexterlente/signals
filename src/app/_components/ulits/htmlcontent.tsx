import React from "react";
import DOMPurify from "dompurify";

const HtmlContent = ({ html }: any) => {
  const cleanHtml = (htmlContent: string) => {
    const cleanedContent = htmlContent
      ?.replace(/<pre[^>]*>[\s\S]*?<\/pre>/gi, "") // Remove <pre> tags and their content
      ?.replace(/```/g, "") // Remove backticks
      ?.replace(/html/g, "") // Remove the word 'html'
      ?.replace(/<\/?body[^>]*>/gi, ""); // Remove <body> tags

    const withTailwind = cleanedContent
      ?.replace(/<(\w+)(\s|>)/g, '<$1 class="mb-4"$2')
      ?.replace(
        /<h([1-6])([^>]*)class="([^"]*)"/g,
        '<h$1$2class="$3 mb-6 font-bold"'
      ) // Add font-bold to h1-h6 tags with existing classes
      ?.replace(/<h([1-6])(\s|>)/g, '<h$1 class="mb-6 font-bold"$2'); // Add font-bold to h1-h6 tags without existing classes

    return DOMPurify.sanitize(withTailwind);
  };

  const sanitizedHtml = cleanHtml(html);

  return (
    <div
      className="prose prose-lg mx-auto"
      dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
    />
  );
};

export default HtmlContent;
