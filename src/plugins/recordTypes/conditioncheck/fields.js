import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    TextInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    document: {
      'ns2:conditionchecks_mmi': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/conditioncheck/local/mmi',
          },
        },
        conditionCheckReasonExhibition: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.conditionchecks_mmi.conditionCheckReasonExhibition.name',
                defaultMessage: 'Loan in/out exhibition',
              },
            }),
            searchView: {
              type: TextInput,
            },
            view: {
              type: TextInput,
              props: {
                readOnly: true,
              },
            },
          },
        },
      },
    },
  };
};
