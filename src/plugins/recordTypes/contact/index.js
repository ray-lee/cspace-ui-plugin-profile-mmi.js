import fields from './fields';

export default () => (configContext) => ({
  recordTypes: {
    contact: {
      fields: fields(configContext),
    },
  },
});
