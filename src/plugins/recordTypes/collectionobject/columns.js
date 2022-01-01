import { defineMessages } from 'react-intl';

export default () => ({
  default: {
    title: {
      disabled: true,
    },
    objectTitle: {
      messages: defineMessages({
        label: {
          id: 'column.collectionobject.default.objectTitle',
          defaultMessage: 'Object title',
        },
      }),
      order: 20,
      sortBy: 'collectionobjects_mmi:objectTitle',
      width: 450,
    },
  },
  narrow: {
    title: {
      disabled: true,
    },
    objectTitle: {
      messages: defineMessages({
        label: {
          id: 'column.collectionobject.narrow.objectTitle',
          defaultMessage: 'Title',
        },
      }),
      order: 20,
      sortBy: 'collectionobjects_mmi:objectTitle',
      width: 450,
    },
  },
});
