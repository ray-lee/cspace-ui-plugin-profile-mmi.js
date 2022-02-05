import fields from './fields';
import forms from './forms';
import optionLists from './optionLists';
import vocabularies from './vocabularies';

export default () => (configContext) => ({
  optionLists,
  recordTypes: {
    concept: {
      vocabularies,
      fields: fields(configContext),
      forms: forms(configContext),
    },
  },
});
