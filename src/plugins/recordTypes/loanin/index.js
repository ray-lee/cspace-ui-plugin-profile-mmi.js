import fields from './fields';
import forms from './forms';
import idGenerators from './idGenerators';

export default () => (configContext) => ({
  idGenerators,
  recordTypes: {
    loanin: {
      fields: fields(configContext),
      forms: forms(configContext),
    },
  },
});
