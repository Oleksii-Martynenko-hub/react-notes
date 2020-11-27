import React from 'react';
import { generate } from 'shortid';


export default ( content, isSaveLineBreakTabs ) => {
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
              <i>&nbsp;&nbsp;</i>
              {word}
            </span>
          ))}
        </p>
      );
    });
  }

  return <p>{content}</p>;
};
