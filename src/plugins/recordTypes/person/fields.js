import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    AutocompleteInput,
    CompoundInput,
    OptionPickerInput,
    StructuredDateInput,
    TextInput,
  } = configContext.inputComponents;

  const {
    mergeStrategy,
    configKey: config,
  } = configContext.configHelpers;

  const {
    extensions,
  } = configContext.config;

  return {
    document: {
      'ns2:persons_common': {
        personTermGroupList: {
          personTermGroup: {
            termType: {
              [config]: {
                view: {
                  type: OptionPickerInput,
                  props: {
                    source: 'personTermTypes',
                  },
                },
              },
            },
            salutation: {
              [config]: {
                view: {
                  type: TextInput,
                  props: mergeStrategy.override({}),
                },
              },
            },
            title: {
              [config]: {
                view: {
                  type: TextInput,
                  props: mergeStrategy.override({}),
                },
              },
            },
            termSource: {
              [config]: {
                view: {
                  type: OptionPickerInput,
                  props: {
                    source: 'nameSources',
                  },
                },
              },
            },
          },
        },
        birthDateGroup: {
          [config]: {
            view: {
              // TODO: PersonStructuredDateInput
              type: StructuredDateInput,
            },
          },
        },
        deathDateGroup: {
          [config]: {
            view: {
              // TODO: PersonStructuredDateInput
              type: StructuredDateInput,
            },
          },
          ...extensions.structuredDate.fields,
        },
      },
      'ns2:persons_mmi': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/person/local/mmi',
          },
        },
        affiliatedPersonOrgGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          affiliatedPersonOrgGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.persons_mmi.affiliatedPersonOrgGroup.name',
                  defaultMessage: 'Affiliated entity',
                },
              }),
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            affiliatedPersonOrg: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.persons_mmi.affiliatedPersonOrg.fullName',
                    defaultMessage: 'Affiliated entity name',
                  },
                  name: {
                    id: 'field.persons_mmi.affiliatedPersonOrg.name',
                    defaultMessage: 'Name',
                  },
                }),
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'person/local,person/shared,organization/local,organization/shared',
                  },
                },
              },
            },
            affiliatedPersonOrgType: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.persons_mmi.affiliatedPersonOrgType.fullName',
                    defaultMessage: 'Affiliated entity type',
                  },
                  name: {
                    id: 'field.persons_mmi.affiliatedPersonOrgType.name',
                    defaultMessage: 'Type',
                  },
                }),
                view: {
                  type: OptionPickerInput,
                  props: {
                    source: 'affiliatedPersonOrgTypes',
                  },
                },
              },
            },
          },
        },
        lifeSpan: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.persons_mmi.lifeSpan.name',
                defaultMessage: 'Life span',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        orgContactNames: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          orgContactName: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.persons_mmi.orgContactName.name',
                  defaultMessage: 'Entity\'s contact name',
                },
              }),
              repeating: true,
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'person/local,person/shared,organization/local,organization/shared',
                },
              },
            },
          },
        },
        orgFunctions: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          orgFunction: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.persons_mmi.orgFunction.name',
                  defaultMessage: 'Function',
                },
              }),
              repeating: true,
              view: {
                type: TextInput,
              },
            },
          },
        },
      },
    },
  };
};
