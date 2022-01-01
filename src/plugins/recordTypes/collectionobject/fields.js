import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    AutocompleteInput,
    CheckboxInput,
    CompoundInput,
    OptionPickerInput,
    StructuredDateInput,
    TextInput,
    TermPickerInput,
  } = configContext.inputComponents;

  const {
    mergeStrategy,
    configKey: config,
  } = configContext.configHelpers;

  const {
    DATA_TYPE_BOOL,
  } = configContext.dataTypes;

  return {
    document: {
      'ns2:collectionobjects_common': {
        objectNumber: {
          [config]: {
            view: {
              props: {
                source: 'intake,accession,mmi-loanin',
              },
            },
          },
        },
        otherNumberList: {
          otherNumber: {
            numberType: {
              [config]: {
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'numbertype',
                  },
                },
              },
            },
          },
        },
        responsibleDepartments: {
          responsibleDepartment: {
            [config]: {
              defaultValue: 'notyetassigned',
              view: {
                props: {
                  source: 'collectionCategories',
                },
              },
            },
          },
        },
        objectComponentGroupList: {
          objectComponentGroup: {
            objectComponentName: {
              [config]: {
                view: {
                  type: TextInput,
                  props: mergeStrategy.override({}),
                },
              },
            },
          },
        },
        contentConcepts: {
          contentConcept: {
            [config]: {
              view: {
                type: TextInput,
                props: mergeStrategy.override({}),
              },
            },
          },
        },
        contentPlaces: {
          contentPlace: {
            [config]: {
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'place/local',
                },
              },
            },
          },
        },
        objectProductionDateGroupList: {
          objectProductionDateGroup: {
            [config]: {
              view: {
                // TODO: CatalogingStructuredDateInput
                type: StructuredDateInput,
              },
            },
          },
        },
        assocOrganizationGroupList: {
          assocOrganizationGroup: {
            assocOrganization: {
              [config]: {
                view: {
                  props: {
                    source: 'person/local,person/shared,organization/local,organization/shared',
                  },
                },
              },
            },
            assocOrganizationType: {
              [config]: {
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'associatedentitytype',
                  },
                },
              },
            },
          },
        },
        assocDateGroupList: {
          assocDateGroup: {
            assocStructuredDateGroup: {
              [config]: {
                view: {
                  // TODO: CatalogingStructuredDateInput
                  type: StructuredDateInput,
                },
              },
            },
          },
        },
        referenceGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          referenceGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.collectionobjects_common.referenceGroup.name',
                  defaultMessage: 'Reference',
                },
              }),
            },
          },
        },
      },
      'ns2:collectionobjects_mmi': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/collectionobject/local/mmi',
          },
        },
        administrativeRemarks: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_mmi.administrativeRemarks.name',
                defaultMessage: 'Administrative remark',
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
        provenance: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_mmi.provenance.name',
                defaultMessage: 'Provenance',
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
        objectTitle: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_mmi.objectTitle.name',
                defaultMessage: 'Object title',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        initialCatalogingCompleted: {
          [config]: {
            dataType: DATA_TYPE_BOOL,
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_mmi.initialCatalogingCompleted.name',
                defaultMessage: 'Initial cataloging completed',
              },
            }),
            view: {
              type: CheckboxInput,
            },
          },
        },
        approvedByCurator: {
          [config]: {
            dataType: DATA_TYPE_BOOL,
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_mmi.approvedByCurator.name',
                defaultMessage: 'Approved by curator',
              },
            }),
            view: {
              type: CheckboxInput,
            },
          },
        },
        additionalResearchRequired: {
          [config]: {
            dataType: DATA_TYPE_BOOL,
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_mmi.additionalResearchRequired.name',
                defaultMessage: 'Additional research required',
              },
            }),
            view: {
              type: CheckboxInput,
            },
          },
        },
        artifactClass: {
          [config]: {
            defaultValue: 'urn:cspace:movingimage.us:vocabularies:name(artifactclassworktype):item:name(wt350)\'~Undetermined\'',
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_mmi.artifactClass.name',
                defaultMessage: 'Artifact class',
              },
            }),
            view: {
              type: TermPickerInput,
              props: {
                source: 'artifactclassworktype',
              },
            },
          },
        },
        workType: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_mmi.workType.name',
                defaultMessage: 'Work type',
              },
            }),
            view: {
              type: TermPickerInput,
              props: {
                source: 'artifactclassworktype',
              },
            },
          },
        },
        caption: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_mmi.caption.name',
                defaultMessage: 'Caption',
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
        mmiInscriptionContents: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          mmiInscriptionContent: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.collectionobjects_mmi.mmiInscriptionContent.name',
                  defaultMessage: 'Inscription content',
                },
              }),
              repeating: true,
              view: {
                type: TextInput,
                props: {
                  multiline: true,
                },
              },
            },
          },
        },
        contentEntityList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          contentEntityGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.collectionobjects_mmi.contentEntityGroup.name',
                  defaultMessage: 'Content entity',
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
            contentEntity: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_mmi.contentEntity.fullName',
                    defaultMessage: 'Content entity name',
                  },
                  name: {
                    id: 'field.collectionobjects_mmi.contentEntity.name',
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
            contentEntityType: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_mmi.contentEntityType.fullName',
                    defaultMessage: 'Content entity type',
                  },
                  name: {
                    id: 'field.collectionobjects_mmi.contentEntityType.name',
                    defaultMessage: 'Type',
                  },
                }),
                view: {
                  type: OptionPickerInput,
                  props: {
                    source: 'contentEntityTypes',
                  },
                },
              },
            },
            contentEntityNote: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_mmi.contentEntityNote.fullName',
                    defaultMessage: 'Content entity note',
                  },
                  name: {
                    id: 'field.collectionobjects_mmi.contentEntityNote.name',
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
        contentWorkList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          contentWorkGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.collectionobjects_mmi.contentWorkGroup.name',
                  defaultMessage: 'Content work',
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
            contentWork: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_mmi.contentWork.fullName',
                    defaultMessage: 'Content work name',
                  },
                  name: {
                    id: 'field.collectionobjects_mmi.contentWork.name',
                    defaultMessage: 'Name',
                  },
                }),
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'work/local',
                  },
                },
              },
            },
            contentWorkType: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_mmi.contentWorkType.fullName',
                    defaultMessage: 'Content work type',
                  },
                  name: {
                    id: 'field.collectionobjects_mmi.contentWorkType.name',
                    defaultMessage: 'Type',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'contentworktype',
                  },
                },
              },
            },
            contentWorkNote: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_mmi.contentWorkNote.fullName',
                    defaultMessage: 'Content work note',
                  },
                  name: {
                    id: 'field.collectionobjects_mmi.contentWorkNote.name',
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
        objProdEntityList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          objProdEntityGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.collectionobjects_mmi.objProdEntityGroup.name',
                  defaultMessage: 'Object production entity',
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
            objProdEntity: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_mmi.objProdEntity.fullName',
                    defaultMessage: 'Object production entity name',
                  },
                  name: {
                    id: 'field.collectionobjects_mmi.objProdEntity.name',
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
            objProdEntityRole: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_mmi.objProdEntityRole.fullName',
                    defaultMessage: 'Object production entity role',
                  },
                  name: {
                    id: 'field.collectionobjects_mmi.objProdEntityRole.name',
                    defaultMessage: 'Role',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'productionrole',
                  },
                },
              },
            },
            objProdEntityNote: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_mmi.objProdEntityNote.fullName',
                    defaultMessage: 'Object production entity note',
                  },
                  name: {
                    id: 'field.collectionobjects_mmi.objProdEntityNote.name',
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
        mmiTechniques: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          mmiTechnique: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.collectionobjects_mmi.mmiTechnique.name',
                  defaultMessage: 'Technique',
                },
              }),
              repeating: true,
              view: {
                type: TermPickerInput,
                props: {
                  source: 'technique',
                },
              },
            },
          },
        },
        copyrightStatements: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          copyrightStatement: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.collectionobjects_mmi.copyrightStatement.name',
                  defaultMessage: 'Copyright statement',
                },
              }),
              repeating: true,
              view: {
                type: TextInput,
              },
            },
          },
        },
        formats: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          format: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.collectionobjects_mmi.format.name',
                  defaultMessage: 'Format',
                },
              }),
              repeating: true,
              view: {
                type: TermPickerInput,
                props: {
                  source: 'format',
                },
              },
            },
          },
        },
        mmiMaterials: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          mmiMaterial: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.collectionobjects_mmi.mmiMaterial.name',
                  defaultMessage: 'Material',
                },
              }),
              repeating: true,
              view: {
                type: TermPickerInput,
                props: {
                  source: 'material',
                },
              },
            },
          },
        },
        historicalnotesources: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_mmi.historicalnotesources.name',
                defaultMessage: 'Historical note source',
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
