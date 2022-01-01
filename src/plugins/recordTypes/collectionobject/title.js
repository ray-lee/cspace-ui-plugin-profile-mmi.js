export default (configContext) => (data) => {
  const {
    getPart,
  } = configContext.recordDataHelpers;

  if (!data) {
    return '';
  }

  const common = getPart(data, 'collectionobjects_common');
  const mmi = getPart(data, 'collectionobjects_mmi');

  const objectNumber = common && common.get('objectNumber');
  const title = mmi && mmi.get('objectTitle');

  return [objectNumber, title].filter((part) => !!part).join(' – ');
};
