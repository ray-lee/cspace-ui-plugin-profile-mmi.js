import forms from './forms';
import optionLists from './optionLists';
import vocabularies from './vocabularies';

export default () => (configContext) => ({
  optionLists,
  recordTypes: {
    concept: {
      vocabularies,
      forms: forms(configContext),
    },
  },
});
