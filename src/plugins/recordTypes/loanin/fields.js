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
      'ns2:loansin_common': {
        loanInNumber: {
          [config]: {
            view: {
              props: {
                source: 'mmi-loanin-lot',
              },
            },
          },
        },
        lenderGroupList: {
          lenderGroup: {
            lendersContact: {
              [config]: {
                view: {
                  props: {
                    source: 'person/local,person/shared,organization/local,organization/shared',
                  },
                },
              },
            },
          },
        },
      },
      'ns2:loansin_mmi': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/loanin/local/mmi',
          },
        },
        loanInCreditLine: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.loansin_mmi.loanInCreditLine.name',
                defaultMessage: 'Credit line',
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
