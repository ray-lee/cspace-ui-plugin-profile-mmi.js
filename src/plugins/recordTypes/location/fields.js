export default (configContext) => {
  const {
    OptionPickerInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    document: {
      'ns2:locations_common': {
        locationType: {
          [config]: {
            view: {
              type: OptionPickerInput,
              props: {
                source: 'locationTypes',
              },
            },
          },
        },
      },
    },
  };
};
