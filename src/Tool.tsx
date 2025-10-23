import React, { memo } from 'react';
import { RepoIcon } from '@storybook/icons';
import { useParameter } from 'storybook/manager-api';
import {
  IconButton,
  TooltipMessage,
  WithTooltip,
} from 'storybook/internal/components';

import { PARAM_KEY, PREFIX_PARAM_KEY, INFO_LINK, TOOL_ID } from './constants';

const Tooltip = () => (
  <TooltipMessage
    title="Source Link"
    desc={`No repository link set in this story`}
    links={[
      {
        title: 'More Info',
        onClick: () => {
          window.open(INFO_LINK);
        },
      },
    ]}
  />
);

export const getLink = (prefix: string | null, link: string | null) => {
  if (!link) {
    return null;
  }
  if (prefix) {
    link = `${prefix}${link}`;
  }
  return link;
};

export const Tool = memo(function SourceLinkTool() {
  const param_link = useParameter<string | null>(PARAM_KEY, null);
  const param_prefix = useParameter<string | null>(PREFIX_PARAM_KEY, null);
  const link = getLink(param_prefix, param_link);

  return link ? (
    <IconButton
      key={TOOL_ID}
      title={`View Source Repository: ${link}`}
      active={true}
      onClick={() => {
        if (link) {
          window.open(link);
        }
      }}
      aria-label={`View Source Repository: ${link}`}
    >
      <RepoIcon />
    </IconButton>
  ) : (
    <WithTooltip placement="top" trigger="click" tooltip={<Tooltip />}>
      <IconButton
        key={TOOL_ID}
        title="View Source Repository"
        aria-label="View Source Repository"
        active={false}
      >
        <RepoIcon />
      </IconButton>
    </WithTooltip>
  );
});
