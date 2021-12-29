import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    CompoundInput,
    DateInput,
    TextInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    DATA_TYPE_DATE,
  } = configContext.dataTypes;

  return {
    document: {
      'ns2:acquisitions_common': {
        acquisitionReferenceNumber: {
          [config]: {
            view: {
              props: {
                source: 'accession-activity',
              },
            },
          },
        },
      },
      'ns2:acquisitions_mmi': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/acquisition/local/mmi',
          },
        },
        mmiAccessionDate: {
          [config]: {
            dataType: DATA_TYPE_DATE,
            messages: defineMessages({
              name: {
                id: 'field.acquisitions_mmi.mmiAccessionDate.name',
                defaultMessage: 'Accession date',
              },
            }),
            view: {
              type: DateInput,
            },
          },
        },
        mmiAcquisitionDates: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          mmiAcquisitionDate: {
            [config]: {
              dataType: DATA_TYPE_DATE,
              messages: defineMessages({
                name: {
                  id: 'field.acquisitions_mmi.mmiAcquisitionDate.name',
                  defaultMessage: 'Acquisition date',
                },
              }),
              repeating: true,
              view: {
                type: DateInput,
              },
            },
          },
        },
        acquisitionExtent: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.acquisitions_mmi.acquisitionExtent.name',
                defaultMessage: 'Extent',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
      },
    },
  };
};
