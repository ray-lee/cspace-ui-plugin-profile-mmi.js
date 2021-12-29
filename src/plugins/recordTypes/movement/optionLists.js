import { defineMessages } from 'react-intl';

export default {
  moveReasons: {
    values: [
      'conservation',
      'exhibition',
      'inventory',
      'loan',
      'newstoragelocation',
      'photography',
      'research',
      'returntohomelocation',
    ],
    messages: defineMessages({
      returntohomelocation: {
        id: 'option.moveReasons.returntohomelocation',
        defaultMessage: 'return to home location',
      },
    }),
  },
};
