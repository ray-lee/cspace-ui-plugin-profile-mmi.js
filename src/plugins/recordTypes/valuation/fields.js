export default (configContext) => {
  const {
    TermPickerInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    document: {
      'ns2:valuationcontrols_common': {
        valueType: {
          [config]: {
            view: {
              type: TermPickerInput,
              props: {
                source: 'valuetype',
              },
            },
          },
        },
      },
    },
  };
};
