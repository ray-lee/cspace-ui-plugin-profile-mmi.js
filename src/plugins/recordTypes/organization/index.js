import fields from './fields';
import optionLists from './optionLists';

export default () => (configContext) => ({
  optionLists,
  recordTypes: {
    organization: {
      fields: fields(configContext),
    },
  },
});
