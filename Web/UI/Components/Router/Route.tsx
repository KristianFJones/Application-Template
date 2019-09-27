// Web/UI/Components/Router/Route.tsx
import React, { PropsWithChildren } from 'react';
import { Route as RouteComponent } from 'react-router-dom';
import { useImport } from '../Providers/ImportProvider';

export interface ImportedRouteInput {
  imported: Promise<{ default: any }>;
  path: string;
}

interface RouteProps {
  imported?: ImportedRouteInput;
  path: string;
  exact?: boolean;
}

export function Route({
  imported,
  children,
  path,
  exact = false,
}: PropsWithChildren<RouteProps>): React.ReactElement {
  const Component = useImport({
    ...imported,
    Loader: () => <div>Loading</div>,
  });

    return (
      <RouteComponent
        exact={exact}
        path={path}
        component={Component}
      />
    );
}