export default (configContext) => {
  const {
    formatRefName,
  } = configContext.formatHelpers;

  return {
    default: {
      valueType: {
        formatValue: formatRefName,
      },
    },
  };
};
