import { defineMessages } from 'react-intl';

export default {
  recordStatuses: {
    values: [
      'new',
      'firstedit',
      'finaledit',
      'completedpublish',
      'completeddonotpublish',
    ],
    messages: defineMessages({
      firstedit: {
        id: 'option.recordStatuses.firstedit',
        defaultMessage: 'first edit',
      },
      finaledit: {
        id: 'option.recordStatuses.finaledit',
        defaultMessage: 'final edit',
      },
      completedpublish: {
        id: 'option.recordStatuses.completedpublish',
        defaultMessage: 'completed/publish',
      },
      completeddonotpublish: {
        id: 'option.recordStatuses.completeddonotpublish',
        defaultMessage: 'completed/do not publish',
      },
    }),
  },
  measuredParts: {
    values: [
      'artifact',
      'base',
      'frame',
      'framed',
      'image-size',
      'mount',
      'paper-size',
      'plate-size',
      'unframed',
    ],
  },
  sexes: {
    values: [
      'female',
      'male',
      'nonbinary',
      'transgender',
    ],
  },
  collectionCategories: {
    values: [
      'notyetassigned',
      'distribution',
      'exhibition',
      'industryasawhole',
      'marketing',
      'merchandising',
      'production',
      'reception',
      'worksofart',
    ],
    messages: defineMessages({
      notyetassigned: {
        id: 'option.collectionCategories.notyetassigned',
        defaultMessage: 'not yet assigned',
      },
      industryasawhole: {
        id: 'option.collectionCategories.industryasawhole',
        defaultMessage: 'industry (as a whole)',
      },
      worksofart: {
        id: 'option.collectionCategories.worksofart',
        defaultMessage: 'works of art',
      },
    }),
  },
  contentEntityTypes: {
    values: [
      'depicts',
      'references',
      'seealso',
    ],
    messages: defineMessages({
      seealso: {
        id: 'option.contentEntityTypes.seealso',
        defaultMessage: 'see also',
      },
    }),
  },
};
