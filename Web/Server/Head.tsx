// Web/Server/Head.tsx
import React from 'react';
import { Source, SourceType } from './Sources';
import { renderToStaticNodeStream } from 'react-dom/server';
import ServerStyleSheets from '@material-ui/styles/ServerStyleSheets';

interface HeadProps {
  sources: Source[];
  sheets: ServerStyleSheets;
}

const AppCSS = `#app {
  display: flex;
  flex-direction: column;
}
html, body, #app {
  height: 100%;
  width: 100%;
}`;

export function Head({ sources, sheets }: HeadProps): React.ReactElement {
  return (
    <head>
      <title>Hello World</title>
      <style
        id='jss-server-side'
        dangerouslySetInnerHTML={{ __html: sheets.toString() }}
      />
      <style dangerouslySetInnerHTML={{ __html: AppCSS }} />
      {sources &&
        sources.map(({ src, type }, index) => (
          <link rel='preload' href={src} as={type} key={index} />
        ))}
      {sources &&
        sources
          .filter(({ type }) => type === SourceType.STYLE)
          .map(({ src }, index) => (
            <link rel='stylesheet' type='text/css' href={src} key={index} />
          ))}
    </head>
  );
}

export function renderHeadStream(props: HeadProps): NodeJS.ReadableStream {
  return renderToStaticNodeStream(<Head {...props} />);
}