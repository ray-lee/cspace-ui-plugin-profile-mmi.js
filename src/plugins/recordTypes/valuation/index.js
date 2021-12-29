import fields from './fields';

export default () => (configContext) => ({
  recordTypes: {
    valuation: {
      fields: fields(configContext),
    },
  },
});
