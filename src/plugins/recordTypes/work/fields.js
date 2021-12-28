import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    AutocompleteInput,
    CompoundInput,
    OptionPickerInput,
    StructuredDateInput,
    TextInput,
    TermPickerInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    document: {
      'ns2:works_common': {
        workTermGroupList: {
          workTermGroup: {
            termSource: {
              [config]: {
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'worktermsource',
                  },
                },
              },
            },
          },
        },
        workDateGroupList: {
          workDateGroup: {
            [config]: {
              view: {
                // TODO: WorkStructuredDateInput
                type: StructuredDateInput,
              },
            },
          },
        },
        genre: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.works_common.genre.name',
                defaultMessage: 'Genre',
              },
            }),
            view: {
              type: TermPickerInput,
              props: {
                source: 'workgenre',
              },
            },
          },
        },
        medium: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.works_common.medium.name',
                defaultMessage: 'Medium',
              },
            }),
            view: {
              type: TermPickerInput,
              props: {
                source: 'workmedium',
              },
            },
          },
        },
        scopeNote: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.works_common.scopeNote.name',
                defaultMessage: 'Scope note',
              },
            }),
            view: {
              type: TextInput,
              props: {
                multiline: true,
              },
            },
          },
        },
        sourceNote: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.works_common.sourceNote.name',
                defaultMessage: 'Source note',
              },
            }),
            view: {
              type: TextInput,
              props: {
                multiline: true,
              },
            },
          },
        },
        migratedEntityGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          migratedEntityGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.works_common.migratedEntityGroup.name',
                  defaultMessage: 'Migrated entity',
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
            migratedEntity: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.works_common.migratedEntity.fullName',
                    defaultMessage: 'Migrated entity name',
                  },
                  name: {
                    id: 'field.works_common.migratedEntity.name',
                    defaultMessage: 'Name',
                  },
                }),
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'person/local',
                  },
                },
              },
            },
            migratedEntityType: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.works_common.migratedEntityType.fullName',
                    defaultMessage: 'Migrated entity type',
                  },
                  name: {
                    id: 'field.works_common.migratedEntityType.name',
                    defaultMessage: 'Type',
                  },
                }),
                view: {
                  type: OptionPickerInput,
                  props: {
                    source: 'migratedEntityTypes',
                  },
                },
              },
            },
          },
        },
      },
    },
  };
};
