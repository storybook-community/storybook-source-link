import React from 'react';
import type { Preview } from '@storybook/react-vite';
import { ErrorBoundary } from 'react-error-boundary';

const preview: Preview = {
  parameters: {
    sourceLinkPrefix:
      'https://github.com/Sirrine-Jonathan/storybook-source-link/blob/main/src/stories/',
    sourceLink: 'ManualTesting/Component.jsx',
  },
  decorators: [
    (Story) => {
      return (
        <ErrorBoundary
          FallbackComponent={() => <p>Something went wrong</p>}
          onError={(error, errorInfo) => {
            console.log('Error caught!');
            console.error(error);
            console.error(errorInfo);
          }}
        >
          <Story />
        </ErrorBoundary>
      );
    },
  ],
};

export default preview;
