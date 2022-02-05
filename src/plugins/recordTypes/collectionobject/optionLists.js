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
        defaultMessage: 'Not yet assigned',
      },
      distribution: {
        id: 'option.collectionCategories.distribution',
        defaultMessage: 'Distribution',
      },
      exhibition: {
        id: 'option.collectionCategories.exhibition',
        defaultMessage: 'Exhibition',
      },
      industryasawhole: {
        id: 'option.collectionCategories.industryasawhole',
        defaultMessage: 'Industry (as a whole)',
      },
      marketing: {
        id: 'option.collectionCategories.marketing',
        defaultMessage: 'Marketing',
      },
      merchandising: {
        id: 'option.collectionCategories.merchandising',
        defaultMessage: 'Merchandising',
      },
      production: {
        id: 'option.collectionCategories.production',
        defaultMessage: 'Production',
      },
      reception: {
        id: 'option.collectionCategories.reception',
        defaultMessage: 'Reception',
      },
      worksofart: {
        id: 'option.collectionCategories.worksofart',
        defaultMessage: 'Works of art',
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
