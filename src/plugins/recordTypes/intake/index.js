import fields from './fields';
import forms from './forms';
import idGenerators from './idGenerators';
import optionLists from './optionLists';

export default () => (configContext) => ({
  idGenerators,
  optionLists,
  recordTypes: {
    intake: {
      fields: fields(configContext),
      forms: forms(configContext),
    },
  },
});
