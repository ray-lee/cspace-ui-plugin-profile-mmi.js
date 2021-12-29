import { defineMessages } from 'react-intl';

export default {
  acquisitionMethods: {
    values: [
      'gift',
      'purchase',
      'bequest',
      'loan',
      'restrictedgifts',
    ],
    messages: defineMessages({
      restrictedgifts: {
        id: 'option.acquisitionMethods.restrictedgifts',
        defaultMessage: 'restricted gifts',
      },
    }),
  },
};
