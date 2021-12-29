import fields from './fields';
import optionLists from './optionLists';

export default () => (configContext) => ({
  optionLists,
  recordTypes: {
    conditioncheck: {
      fields: fields(configContext),
    },
  },
});
