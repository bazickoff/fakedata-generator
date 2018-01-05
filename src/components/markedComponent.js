import React from 'react';
import marked from 'marked';

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: true,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: true
});

export default ({ output, format = 'jsx' }) => (
  <div
    style={{
      background: '#EEEEEE',
      width: '100%',
      padding: '5px',
      overflow: 'auto'
    }}
    dangerouslySetInnerHTML={{
      __html: marked(`\`\`\`${format}\n${output}\n\`\`\``)
    }}
  />
);
