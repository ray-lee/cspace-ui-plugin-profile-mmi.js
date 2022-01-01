import fields from './fields';
import forms from './forms';
import optionLists from './optionLists';
import title from './title';

export default () => (configContext) => ({
  optionLists,
  recordTypes: {
    collectionobject: {
      fields: fields(configContext),
      forms: forms(configContext),
      title: title(configContext),
    },
  },
});
