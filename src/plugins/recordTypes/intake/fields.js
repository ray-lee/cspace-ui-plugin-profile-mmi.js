export default (configContext) => {
  const {
    TextInput,
  } = configContext.inputComponents;

  const {
    mergeStrategy,
    configKey: config,
  } = configContext.configHelpers;

  return {
    document: {
      'ns2:intakes_common': {
        entryNumber: {
          [config]: {
            view: {
              props: {
                source: 'mmi-intake',
              },
            },
          },
        },
        conditionCheckMethods: {
          conditionCheckMethod: {
            [config]: {
              view: {
                type: TextInput,
                props: mergeStrategy.override({}),
              },
            },
          },
        },
        conditionCheckReasons: {
          conditionCheckReason: {
            [config]: {
              view: {
                type: TextInput,
                props: mergeStrategy.override({}),
              },
            },
          },
        },
      },
    },
  };
};
