export default (configContext) => {
  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    document: {
      'ns2:loansout_common': {
        loanOutNumber: {
          [config]: {
            view: {
              props: {
                source: 'mmi-loanout-lot',
              },
            },
          },
        },
      },
    },
  };
};
