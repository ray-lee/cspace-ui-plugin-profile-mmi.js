import columns from './columns';
import fields from './fields';
import title from './title';

export default () => (configContext) => ({
  recordTypes: {
    valuation: {
      columns: columns(configContext),
      fields: fields(configContext),
      title: title(configContext),
    },
  },
});
