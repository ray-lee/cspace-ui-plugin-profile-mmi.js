import fields from './fields';
import forms from './forms';
import optionLists from './optionLists';

export default () => (configContext) => ({
  optionLists,
  recordTypes: {
    media: {
      fields: fields(configContext),
      forms: forms(configContext),
    },
  },
});
