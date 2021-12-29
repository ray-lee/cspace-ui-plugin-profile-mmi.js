import fields from './fields';

export default () => (configContext) => ({
  recordTypes: {
    exhibition: {
      fields: fields(configContext),
    },
  },
});
