// Web/Server/State.tsx
import React from 'react';
import { NormalizedCacheObject } from 'apollo-cache-inmemory';
import { AppConfiguration } from 'Server/Config';
import { renderToNodeStream } from 'react-dom/server';

export interface AppState {
  PROPS: any;
  APOLLO_STATE: NormalizedCacheObject;
  CONFIG: AppConfiguration;
}

interface AppStateScriptProps {
  state: AppState;
}

export function AppStateScript({
  state,
}: AppStateScriptProps): React.ReactElement {
  return (
    <script
      type='text/javascript'
      dangerouslySetInnerHTML={{
        __html: `window.APP_STATE = ${JSON.stringify(state)}`,
      }}
    />
  );
}

export function renderAppStateScriptStreams(state: AppState) {
  return renderToNodeStream(<AppStateScript state={state} />);
}