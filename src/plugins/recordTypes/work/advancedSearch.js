export default (configContext) => {
  const {
    OP_EQ,
    OP_CONTAIN,
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
        path: 'ns2:works_common/workTermGroupList/workTermGroup/termDisplayName',
      },
      {
        op: OP_EQ,
        path: 'ns2:works_common/workTermGroupList/workTermGroup/termStatus',
      },
      {
        op: OP_EQ,
        path: 'ns2:works_common/workTermGroupList/workTermGroup/termFlag',
      },
      {
        op: OP_EQ,
        path: 'ns2:works_common/genre',
      },
      {
        op: OP_EQ,
        path: 'ns2:works_common/medium',
      },
      ...extensions.core.advancedSearch,
    ],
  };
};
