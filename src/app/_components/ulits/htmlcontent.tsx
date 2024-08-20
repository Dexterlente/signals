import React from "react";
import DOMPurify from "dompurify";

const HtmlContent = ({ html }: any) => {
  // Function to remove unwanted patterns
  const cleanHtml = (htmlContent: string) => {
    // Remove <pre> and </pre> tags along with their content
    const cleanedContent = htmlContent
      ?.replace(/<pre[^>]*>[\s\S]*?<\/pre>/gi, "") // Remove <pre> tags and their content
      ?.replace(/```/g, "") // Remove backticks
      ?.replace(/html/g, "") // Remove the word 'html'
      ?.replace(/<\/?body[^>]*>/gi, ""); // Remove <body> tags

    return DOMPurify.sanitize(cleanedContent);
  };

  const sanitizedHtml = cleanHtml(html);

  return <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />;
};

export default HtmlContent;
