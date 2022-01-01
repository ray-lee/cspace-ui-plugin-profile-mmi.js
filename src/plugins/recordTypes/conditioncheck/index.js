import fields from './fields';
import forms from './forms';
import optionLists from './optionLists';

export default () => (configContext) => ({
  optionLists,
  recordTypes: {
    conditioncheck: {
      fields: fields(configContext),
      forms: forms(configContext),
    },
  },
});
