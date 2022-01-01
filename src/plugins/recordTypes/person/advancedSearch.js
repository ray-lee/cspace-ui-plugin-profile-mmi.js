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
        path: 'ns2:persons_common/personTermGroupList/personTermGroup/termDisplayName',
      },
      {
        op: OP_EQ,
        path: 'ns2:persons_common/personTermGroupList/personTermGroup/termStatus',
      },
      {
        op: OP_EQ,
        path: 'ns2:persons_common/personTermGroupList/personTermGroup/termFlag',
      },
      {
        op: OP_RANGE,
        path: 'ns2:persons_common/birthDateGroup',
      },
      {
        op: OP_RANGE,
        path: 'ns2:persons_common/deathDateGroup',
      },
      ...extensions.core.advancedSearch,
    ],
  };
};
