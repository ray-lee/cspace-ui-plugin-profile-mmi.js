import { defineMessages } from 'react-intl';

export default {
  conditionCheckReasons: {
    values: [
      'conservation',
      'damagedintransit',
      'loanin',
      'loanout',
      'newacquisition',
    ],
    messages: defineMessages({
      loanout: {
        id: 'option.conditionCheckReasons.loanout',
        defaultMessage: 'loan out',
      },
    }),
  },
};
