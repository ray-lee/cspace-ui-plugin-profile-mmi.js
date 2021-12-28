import fields from './fields';
import optionLists from './optionLists';

export default () => (configContext) => ({
  optionLists,
  recordTypes: {
    work: {
      fields: fields(configContext),
    },
  },
});
