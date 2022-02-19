const template = (configContext) => {
  const {
    React,
  } = configContext.lib;

  const {
    Col,
    Panel,
    Row,
  } = configContext.layoutComponents;

  const {
    Field,
  } = configContext.recordComponents;

  const {
    extensions,
  } = configContext.config;

  return (
    <Field name="document">
      <Panel name="id" collapsible>
        <Row>
          <Col>
            <Field name="objectNumber" />

            <Field name="otherNumberList">
              <Field name="otherNumber">
                <Field name="numberValue" />
                <Field name="numberType" />
              </Field>
            </Field>

            <Field name="responsibleDepartments">
              <Field name="responsibleDepartment" />
            </Field>

            <Row>
              <Field name="artifactClass" subpath="ns2:collectionobjects_mmi" />
              <Field name="workType" subpath="ns2:collectionobjects_mmi" />
            </Row>

            <Field name="numberOfObjects" />

            <Field name="publishToList">
              <Field name="publishTo" />
            </Field>

            <Field name="inventoryStatusList">
              <Field name="inventoryStatus" />
            </Field>
          </Col>

          <Col>
            <Field name="objectTitle" subpath="ns2:collectionobjects_mmi" />
            <Field name="caption" subpath="ns2:collectionobjects_mmi" />
            <Field name="administrativeRemarks" subpath="ns2:collectionobjects_mmi" />
            <Field name="recordStatus" />
            <Field name="computedCurrentLocation" />
            <Field name="initialCatalogingCompleted" subpath="ns2:collectionobjects_mmi" />
            <Field name="additionalResearchRequired" subpath="ns2:collectionobjects_mmi" />
            <Field name="approvedByCurator" subpath="ns2:collectionobjects_mmi" />
          </Col>
        </Row>
      </Panel>

      <Panel name="desc" collapsible collapsed>
        <Field name="distinguishingFeatures" />

        <Field name="mmiInscriptionContents" subpath="ns2:collectionobjects_mmi">
          <Field name="mmiInscriptionContent" />
        </Field>

        {extensions.dimension.form}

        <Field name="contentEntityList" subpath="ns2:collectionobjects_mmi">
          <Field name="contentEntityGroup">
            <Field name="contentEntity" />
            <Field name="contentEntityType" />
            <Field name="contentEntityNote" />
          </Field>
        </Field>

        <Field name="contentWorkList" subpath="ns2:collectionobjects_mmi">
          <Field name="contentWorkGroup">
            <Field name="contentWork" />
            <Field name="contentWorkType" />
            <Field name="contentWorkNote" />
          </Field>
        </Field>

        <Row>
          <Col>
            <Field name="contentLanguages">
              <Field name="contentLanguage" />
            </Field>
          </Col>

          <Col>
            <Field name="contentPlaces">
              <Field name="contentPlace" />
            </Field>
          </Col>
        </Row>

        <Field name="objProdEntityList" subpath="ns2:collectionobjects_mmi">
          <Field name="objProdEntityGroup">
            <Field name="objProdEntity" />
            <Field name="objProdEntityRole" />
            <Field name="objProdEntityNote" />
          </Field>
        </Field>

        <Row>
          <Col>
            <Field name="objectProductionDateGroupList">
              <Field name="objectProductionDateGroup" />
            </Field>

            <Field name="formats" subpath="ns2:collectionobjects_mmi">
              <Field name="format" />
            </Field>

            <Field name="copyNumber" />

            <Field name="mmiTechniques" subpath="ns2:collectionobjects_mmi">
              <Field name="mmiTechnique" />
            </Field>
          </Col>

          <Col>
            <Field name="objectComponentGroupList">
              <Field name="objectComponentGroup" tabular={false}>
                <Field name="objectComponentName" label="" embedded />
              </Field>
            </Field>

            <Field name="editionNumber" />

            <Field name="mmiMaterials" subpath="ns2:collectionobjects_mmi">
              <Field name="mmiMaterial" />
            </Field>
          </Col>
        </Row>

        <Field name="copyrightStatements" subpath="ns2:collectionobjects_mmi">
          <Field name="copyrightStatement" />
        </Field>
      </Panel>

      <Panel name="hist" collapsible collapsed>
        <Field name="objectHistoryNote" />
        <Field name="historicalnotesources" subpath="ns2:collectionobjects_mmi" />

        <Field name="assocOrganizationGroupList">
          <Field name="assocOrganizationGroup">
            <Field name="assocOrganization" />
            <Field name="assocOrganizationType" />
            <Field name="assocOrganizationNote" />
          </Field>
        </Field>

        <Field name="assocDateGroupList">
          <Field name="assocDateGroup">
            <Field name="assocStructuredDateGroup" />
            <Field name="assocDateType" />
            <Field name="assocDateNote" />
          </Field>
        </Field>

        <Field name="provenance" subpath="ns2:collectionobjects_mmi" />

        <Field name="referenceGroupList">
          <Field name="referenceGroup">
            <Field name="reference" />
            <Field name="referenceNote" />
          </Field>
        </Field>
      </Panel>

      <Panel name="hierarchy" collapsible collapsed>
        <Field name="relation-list-item" subpath="rel:relations-common-list" />
      </Panel>
    </Field>
  );
};

export default (configContext) => ({
  template: template(configContext),
});
