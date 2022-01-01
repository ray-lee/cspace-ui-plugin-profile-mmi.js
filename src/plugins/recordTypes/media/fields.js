import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    CheckboxInput,
    OptionPickerInput,
    TermPickerInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    DATA_TYPE_BOOL,
  } = configContext.dataTypes;

  return {
    document: {
      'ns2:media_mmi': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/media/local/mmi',
          },
        },
        isPrimary: {
          [config]: {
            dataType: DATA_TYPE_BOOL,
            messages: defineMessages({
              name: {
                id: 'field.media_mmi.isPrimary.name',
                defaultMessage: 'Is primary',
              },
            }),
            view: {
              type: CheckboxInput,
            },
          },
        },
        isOriginalMedia: {
          [config]: {
            dataType: DATA_TYPE_BOOL,
            messages: defineMessages({
              name: {
                id: 'field.media_mmi.isOriginalMedia.name',
                defaultMessage: 'Is original media',
              },
            }),
            view: {
              type: CheckboxInput,
            },
          },
        },
        mediaStatus: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.media_mmi.mediaStatus.name',
                defaultMessage: 'Status',
              },
            }),
            view: {
              type: OptionPickerInput,
              props: {
                source: 'mediaStatuses',
              },
            },
          },
        },
        mediaView: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.media_mmi.mediaView.name',
                defaultMessage: 'View',
              },
            }),
            view: {
              type: TermPickerInput,
              props: {
                source: 'mediaview',
              },
            },
          },
        },
      },
    },
  };
};
