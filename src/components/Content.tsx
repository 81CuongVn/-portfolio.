import React from 'react';

const Content: React.FC = (props) => {
  return <main id="content">{props.children}</main>;
};

export default Content;
