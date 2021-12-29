import fields from './fields';

export default () => (configContext) => ({
  recordTypes: {
    media: {
      fields: fields(configContext),
    },
  },
});
