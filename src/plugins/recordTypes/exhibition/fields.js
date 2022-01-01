import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    CompoundInput,
    DateInput,
    OptionPickerInput,
    TermPickerInput,
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
      'ns2:exhibitions_common': {
        venueGroupList: {
          venueGroup: {
            venue: {
              [config]: {
                view: {
                  props: {
                    source: 'organization/local,organization/shared,organization/ulan,place/local,place/shared,place/tgn',
                  },
                },
              },
            },
          },
        },
      },
      'ns2:exhibitions_mmi': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/exhibition/local/mmi',
          },
        },
        mmiExhibitionObjectGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          mmiExhibitionObjectGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.exhibitions_mmi.mmiExhibitionObjectGroup.name',
                  defaultMessage: 'Object checklist',
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
            mmiExhibitionObjectNumber: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.exhibitions_mmi.mmiExhibitionObjectNumber.fullName',
                    defaultMessage: 'Object number',
                  },
                  name: {
                    id: 'field.exhibitions_mmi.mmiExhibitionObjectNumber.name',
                    defaultMessage: 'Number',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            mmiExhibitionObjectName: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.exhibitions_mmi.mmiExhibitionObjectName.fullName',
                    defaultMessage: 'Object name',
                  },
                  name: {
                    id: 'field.exhibitions_mmi.mmiExhibitionObjectName.name',
                    defaultMessage: 'Name',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            mmiExhibitionObjectType: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.exhibitions_mmi.mmiExhibitionObjectType.fullName',
                    defaultMessage: 'Object type',
                  },
                  name: {
                    id: 'field.exhibitions_mmi.mmiExhibitionObjectType.name',
                    defaultMessage: 'Type',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'exhibitionobjecttype',
                  },
                },
              },
            },
            mmiExhibitionObjectConsCheckDate: {
              [config]: {
                dataType: DATA_TYPE_DATE,
                messages: defineMessages({
                  fullName: {
                    id: 'field.exhibitions_mmi.mmiExhibitionObjectConsCheckDate.fullName',
                    defaultMessage: 'Object cons. check',
                  },
                  name: {
                    id: 'field.exhibitions_mmi.mmiExhibitionObjectConsCheckDate.name',
                    defaultMessage: 'Cons. check',
                  },
                }),
                view: {
                  type: DateInput,
                },
              },
            },
            mmiExhibitionObjectConsTreatment: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.exhibitions_mmi.mmiExhibitionObjectConsTreatment.fullName',
                    defaultMessage: 'Object cons. treatment',
                  },
                  name: {
                    id: 'field.exhibitions_mmi.mmiExhibitionObjectConsTreatment.name',
                    defaultMessage: 'Cons. treatment',
                  },
                }),
                view: {
                  type: OptionPickerInput,
                  props: {
                    source: 'exhibitionConsTreatmentStatuses',
                  },
                },
              },
            },
            mmiExhibitionObjectMount: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.exhibitions_mmi.mmiExhibitionObjectMount.fullName',
                    defaultMessage: 'Object mount',
                  },
                  name: {
                    id: 'field.exhibitions_mmi.mmiExhibitionObjectMount.name',
                    defaultMessage: 'Mount',
                  },
                }),
                view: {
                  type: OptionPickerInput,
                  props: {
                    source: 'exhibitionMountStatuses',
                  },
                },
              },
            },
            mmiExhibitionObjectSection: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.exhibitions_mmi.mmiExhibitionObjectSection.fullName',
                    defaultMessage: 'Object section',
                  },
                  name: {
                    id: 'field.exhibitions_mmi.mmiExhibitionObjectSection.name',
                    defaultMessage: 'Section',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            mmiExhibitionObjectCase: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.exhibitions_mmi.mmiExhibitionObjectCase.fullName',
                    defaultMessage: 'Object case',
                  },
                  name: {
                    id: 'field.exhibitions_mmi.mmiExhibitionObjectCase.name',
                    defaultMessage: 'Case',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            mmiExhibitionObjectSeqNum: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.exhibitions_mmi.mmiExhibitionObjectSeqNum.fullName',
                    defaultMessage: 'Object floor plan ID',
                  },
                  name: {
                    id: 'field.exhibitions_mmi.mmiExhibitionObjectSeqNum.name',
                    defaultMessage: 'Floor plan ID',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            mmiExhibitionObjectRotation: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.exhibitions_mmi.mmiExhibitionObjectRotation.fullName',
                    defaultMessage: 'Object rotation',
                  },
                  name: {
                    id: 'field.exhibitions_mmi.mmiExhibitionObjectRotation.name',
                    defaultMessage: 'Rotation',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            mmiExhibitionObjectNote: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.exhibitions_mmi.mmiExhibitionObjectNote.fullName',
                    defaultMessage: 'Object note',
                  },
                  name: {
                    id: 'field.exhibitions_mmi.mmiExhibitionObjectNote.name',
                    defaultMessage: 'Note',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
          },
        },
      },
    },
  };
};
