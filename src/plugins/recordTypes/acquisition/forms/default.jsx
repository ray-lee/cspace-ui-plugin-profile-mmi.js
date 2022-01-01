const template = (configContext) => {
  const {
    React,
  } = configContext.lib;

  const {
    Panel,
    Row,
    Cols,
    Col,
  } = configContext.layoutComponents;

  const {
    Field,
    InputTable,
  } = configContext.recordComponents;

  return (
    <Field name="document">
      <Panel name="info" collapsible>
        <Cols>
          <Col>
            <Field name="acquisitionReferenceNumber" />
            <Field name="mmiAccessionDate" subpath="ns2:acquisitions_mmi" />

            <InputTable name="acquisitionAuthorizer">
              <Field name="acquisitionAuthorizer" />
              <Field name="acquisitionAuthorizerDate" />
            </InputTable>

            <Field name="mmiAcquisitionDates" subpath="ns2:acquisitions_mmi">
              <Field name="mmiAcquisitionDate" />
            </Field>

            <Field name="acquisitionMethod" />

            <Field name="acquisitionSources">
              <Field name="acquisitionSource" />
            </Field>

            <Field name="owners">
              <Field name="owner" />
            </Field>

            <Field name="acquisitionExtent" subpath="ns2:acquisitions_mmi" />
          </Col>

          <Col>
            <Panel name="priceInformation">
              <InputTable name="groupPurchasePrice">
                <Field name="groupPurchasePriceCurrency" />
                <Field name="groupPurchasePriceValue" />
              </InputTable>

              <InputTable name="objectOfferPrice">
                <Field name="objectOfferPriceCurrency" />
                <Field name="objectOfferPriceValue" />
              </InputTable>

              <InputTable name="objectPurchaseOfferPrice">
                <Field name="objectPurchaseOfferPriceCurrency" />
                <Field name="objectPurchaseOfferPriceValue" />
              </InputTable>

              <InputTable name="objectPurchasePrice">
                <Field name="objectPurchasePriceCurrency" />
                <Field name="objectPurchasePriceValue" />
              </InputTable>

              <InputTable name="originalObjectPurchasePrice">
                <Field name="originalObjectPurchasePriceCurrency" />
                <Field name="originalObjectPurchasePriceValue" />
              </InputTable>
            </Panel>

            <Field name="acquisitionReason" />
          </Col>
        </Cols>

        <Field name="approvalGroupList">
          <Field name="approvalGroup">
            <Field name="approvalGroup" />
            <Field name="approvalIndividual" />
            <Field name="approvalStatus" />
            <Field name="approvalDate" />
            <Field name="approvalNote" />
          </Field>
        </Field>
        <Field name="acquisitionNote" />
        <Field name="acquisitionProvisos" />

        <Row>
          <Field name="acquisitionFundingList">
            <Field name="acquisitionFunding">
              <Field name="acquisitionFundingCurrency" />
              <Field name="acquisitionFundingValue" />
              <Field name="acquisitionFundingSource" />
              <Field name="acquisitionFundingSourceProvisos" />
            </Field>
          </Field>
        </Row>

        <Field name="creditLine" />
      </Panel>
    </Field>
  );
};

export default (configContext) => ({
  template: template(configContext),
});
