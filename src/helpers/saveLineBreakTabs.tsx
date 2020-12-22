import React from 'react';
import { generate } from 'shortid';

const saveLineBreakTabs: (content: string, isSaveLineBreakTabs: boolean) => JSX.Element | JSX.Element[] = (
  content: string,
  isSaveLineBreakTabs: boolean
) => {
  if (isSaveLineBreakTabs) {
    const contentSLBWS = content.split('\n');
    if (contentSLBWS.length < 2) return <p>{content}</p>;
    return contentSLBWS.map((line, i) => {
      const words = line.split('  ');
      const key = generate();
      return (
        <p key={key}>
          {words.map((word) => (
            <span key={generate()}>
              {word}
              <i>&nbsp;&nbsp;</i>
            </span>
          ))}
        </p>
      );
    });
  }

  return <p>{content}</p>;
};

export default saveLineBreakTabs;
