import { defineMessages } from 'react-intl';

export default {
  migratedEntityTypes: {
    values: [
      'artist',
      'director',
      'publishingcompany',
      'developer',
      'productioncompany',
      'networkcableservice',
      'distributioncompany',
    ],
    messages: defineMessages({
      artist: {
        id: 'option.migratedEntityTypes.artist',
        defaultMessage: 'artist',
      },
      director: {
        id: 'option.migratedEntityTypes.director',
        defaultMessage: 'director',
      },
      publishingcompany: {
        id: 'option.migratedEntityTypes.publishingcompany',
        defaultMessage: 'publishing company',
      },
      developer: {
        id: 'option.migratedEntityTypes.developer',
        defaultMessage: 'developer',
      },
      productioncompany: {
        id: 'option.migratedEntityTypes.productioncompany',
        defaultMessage: 'production company',
      },
      networkcableservice: {
        id: 'option.migratedEntityTypes.networkcableservice',
        defaultMessage: 'network/cable service',
      },
      distributioncompany: {
        id: 'option.migratedEntityTypes.distributioncompany',
        defaultMessage: 'distribution company',
      },
    }),
  },
};
