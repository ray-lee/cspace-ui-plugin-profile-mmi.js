import { defineMessages } from 'react-intl';

export default {
  orgTermStatuses: {
    values: [
      'quickadded',
      'needsattention',
      'inprogress',
      'complete',
    ],
    messages: defineMessages({
      quickadded: {
        id: 'option.orgTermStatuses.quickadded',
        defaultMessage: 'quick added',
      },
      needsattention: {
        id: 'option.orgTermStatuses.needsattention',
        defaultMessage: 'needs attention',
      },
      inprogress: {
        id: 'option.orgTermStatuses.inprogress',
        defaultMessage: 'in progress',
      },
    }),
  },
};
