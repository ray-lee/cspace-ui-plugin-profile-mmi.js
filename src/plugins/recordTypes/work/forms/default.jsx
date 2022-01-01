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
  } = configContext.recordComponents;

  return (
    <Field name="document">
      <Panel name="info" collapsible>
        <Field name="workTermGroupList">
          <Field name="workTermGroup">
            <Panel>
              <Row>
                <Field name="termDisplayName" />
                <Field name="termStatus" />
                <Field name="termSource" />
                <Field name="termFlag" />
              </Row>

              <Row>
                <Field name="termSourceDetail" />
                <Field name="termSourceNote" />
              </Row>
            </Panel>
          </Field>
        </Field>

        <Cols>
          <Col>
            <Field name="genre" />
            <Field name="medium" />

            <Field name="workDateGroupList">
              <Field name="workDateGroup" />
            </Field>

            <Field name="workHistoryNote" />
          </Col>

          <Col>
            <Field name="migratedEntityGroupList">
              <Field name="migratedEntityGroup">
                <Field name="migratedEntity" />
                <Field name="migratedEntityType" />
              </Field>
            </Field>

            <Field name="creatorGroupList">
              <Field name="creatorGroup">
                <Field name="creator" />
                <Field name="creatorType" />
              </Field>
            </Field>

            <Field name="publisherGroupList">
              <Field name="publisherGroup">
                <Field name="publisher" />
                <Field name="publisherType" />
              </Field>
            </Field>
          </Col>
        </Cols>
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
