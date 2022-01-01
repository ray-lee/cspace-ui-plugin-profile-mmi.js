export default (configContext) => {
  const {
    OP_EQ,
    OP_CONTAIN,
    OP_RANGE,
  } = configContext.searchOperators;

  const {
    defaultAdvancedSearchBooleanOp,
    extensions,
  } = configContext.config;

  return {
    op: defaultAdvancedSearchBooleanOp,
    value: [
      {
        op: OP_CONTAIN,
        path: 'ns2:collectionobjects_common/objectNumber',
      },
      {
        op: OP_CONTAIN,
        path: 'ns2:collectionobjects_common/otherNumberList/otherNumber/numberValue',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_common/responsibleDepartments/responsibleDepartment',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_mmi/artifactClass',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_mmi/workType',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_common/recordStatus',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_common/computedCurrentLocation',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_mmi/initialCatalogingCompleted',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_mmi/additionalResearchRequired',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_mmi/approvedByCurator',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_mmi/contentWorkList/contentWorkGroup/contentWork',
      },
      {
        op: OP_RANGE,
        path: 'ns2:collectionobjects_common/objectProductionDateGroupList/objectProductionDateGroup',
      },
      ...extensions.core.advancedSearch,
    ],
  };
};
