export default (configContext) => {
  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    document: {
      'ns2:movements_common': {
        movementReferenceNumber: {
          [config]: {
            view: {
              props: {
                source: 'inventory,movement',
              },
            },
          },
        },
        currentLocation: {
          [config]: {
            view: {
              props: {
                source: 'location/local',
              },
            },
          },
        },
      },
    },
  };
};
