import fields from './fields';
import optionLists from './optionLists';

export default () => (configContext) => ({
  optionLists,
  recordTypes: {
    movement: {
      fields: fields(configContext),
      lockable: false,
      lockOnSave: false,
    },
  },
});
