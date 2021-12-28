import fields from './fields';
import optionLists from './optionLists';
import vocabularies from './vocabularies';

export default () => (configContext) => ({
  optionLists,
  recordTypes: {
    person: {
      vocabularies,
      fields: fields(configContext),
    },
  },
});
