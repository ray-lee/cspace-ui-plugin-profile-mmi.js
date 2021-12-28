import { defineMessages } from 'react-intl';

export default {
  locationTermStatuses: {
    values: [
      'quickadded',
      'needsattention',
      'inprogress',
      'complete',
    ],
    messages: defineMessages({
      quickadded: {
        id: 'option.locationTermStatuses.quickadded',
        defaultMessage: 'quick added',
      },
      needsattention: {
        id: 'option.locationTermStatuses.needsattention',
        defaultMessage: 'needs attention',
      },
      inprogress: {
        id: 'option.locationTermStatuses.inprogress',
        defaultMessage: 'in progress',
      },
    }),
  },
  locationTypes: {
    values: [
      'room',
      'row',
      'bay',
      'shelf',
      'gallery',
      'floor',
      'rack',
      'section',
      'subsection',
    ],
    messages: defineMessages({
      subsection: {
        id: 'option.locationTypes.subsection',
        defaultMessage: 'sub-section',
      },
    }),
  },
};
