export default (configContext) => (data) => {
  const {
    getPart,
  } = configContext.recordDataHelpers;

  const {
    getDisplayName,
  } = configContext.refNameHelpers;

  if (!data) {
    return '';
  }

  const common = getPart(data, 'valuationcontrols_common');

  if (!common) {
    return '';
  }

  const valuationcontrolReferenceNumber = common.get('valuationcontrolRefNumber');
  const valueType = getDisplayName(common.get('valueType'));

  return [valuationcontrolReferenceNumber, valueType].filter((part) => !!part).join(' – ');
};
