export default (configContext) => {
  const {
    AutocompleteInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    document: {
      'ns2:concepts_common': {
        citationGroupList: {
          citationGroup: {
            citationSource: {
              [config]: {
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'citation/local',
                  },
                },
              },
            },
          },
        },
        additionalSourceGroupList: {
          additionalSourceGroup: {
            additionalSource: {
              [config]: {
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'citation/local',
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
