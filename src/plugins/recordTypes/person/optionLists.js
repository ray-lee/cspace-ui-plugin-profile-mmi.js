import { defineMessages } from 'react-intl';

export default {
  personTermStatuses: {
    values: [
      'quickadded',
      'needsattention',
      'inprogress',
      'complete',
    ],
    messages: defineMessages({
      quickadded: {
        id: 'option.personTermStatuses.quickadded',
        defaultMessage: 'quick added',
      },
      needsattention: {
        id: 'option.personTermStatuses.needsattention',
        defaultMessage: 'needs attention',
      },
      inprogress: {
        id: 'option.personTermStatuses.inprogress',
        defaultMessage: 'in progress',
      },
    }),
  },
  personTermTypes: {
    values: [
      'corporation',
      'group',
      'individual',
    ],
    messages: defineMessages({
      corporation: {
        id: 'option.personTermTypes.corporation',
        defaultMessage: 'organization',
      },
    }),
  },
  genders: {
    values: [
      'female',
      'male',
      'nonbinary',
      'transgender',
    ],
  },
  affiliatedPersonOrgTypes: {
    values: [
      'employee',
      'founder',
      'member',
      'partner',
    ],
  },
};
