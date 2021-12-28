export default (configContext) => {
  const {
    OptionPickerInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    document: {
      'ns2:organizations_common': {
        orgTermGroupList: {
          orgTermGroup: {
            termSource: {
              [config]: {
                view: {
                  type: OptionPickerInput,
                  props: {
                    source: 'nameSources',
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
