const template = (configContext) => {
  const {
    React,
  } = configContext.lib;

  const {
    Col,
    Cols,
    Panel,
    Row,
  } = configContext.layoutComponents;

  const {
    Field,
  } = configContext.recordComponents;

  return (
    <Field name="document">
      <Panel name="info" collapsible>
        <Cols>
          <Col>
            <Field name="exhibitionNumber" />
            <Field name="type" />
            <Field name="title" />
          </Col>

          <Col>
            <Field name="sponsors">
              <Field name="sponsor" />
            </Field>

            <Field name="organizers">
              <Field name="organizer" />
            </Field>

            <Field name="publishToList">
              <Field name="publishTo" />
            </Field>
          </Col>
        </Cols>

        <Row>
          <Field name="venueGroupList">
            <Field name="venueGroup">
              <Field name="venue" />
              <Field name="venueOpeningDate" />
              <Field name="venueClosingDate" />
              <Field name="venueAttendance" />
              <Field name="venueUrl" />
            </Field>
          </Field>
        </Row>

        <Field name="workingGroupList">
          <Field name="workingGroup">
            <Panel>
              <Row>
                <Field name="workingGroupTitle" />
                <Field name="workingGroupNote" />
              </Row>

              <Row>
                <Field name="exhibitionPersonGroupList">
                  <Field name="exhibitionPersonGroup">
                    <Field name="exhibitionPerson" />
                    <Field name="exhibitionPersonRole" />
                  </Field>
                </Field>
              </Row>
            </Panel>
          </Field>
        </Field>

        <Cols>
          <Col>
            <Field name="planningNote" />
            <Field name="curatorialNote" />
          </Col>

          <Col>
            <Field name="generalNote" />
            <Field name="boilerplateText" />
          </Col>
        </Cols>

        <Field name="galleryRotationGroupList">
          <Field name="galleryRotationGroup">
            <Field name="galleryRotationName" />
            <Field name="galleryRotationStartDateGroup" />
            <Field name="galleryRotationEndDateGroup" />
            <Field name="galleryRotationNote" />
          </Field>
        </Field>

        <Field name="exhibitionReferenceGroupList">
          <Field name="exhibitionReferenceGroup">
            <Field name="exhibitionReference" />
            <Field name="exhibitionReferenceType" />
            <Field name="exhibitionReferenceNote" />
          </Field>
        </Field>
      </Panel>

      <Panel name="planningInfo" collapsible collapsed>
        <Field name="exhibitionSectionGroupList">
          <Field name="exhibitionSectionGroup">
            <Field name="exhibitionSectionName" />
            <Field name="exhibitionSectionLocation" />
            <Field name="exhibitionSectionObjects" />
            <Field name="exhibitionSectionNote" />
          </Field>
        </Field>

        <Field name="exhibitionStatusGroupList">
          <Field name="exhibitionStatusGroup">
            <Field name="exhibitionStatus" />
            <Field name="exhibitionStatusDate" />
            <Field name="exhibitionStatusNote" />
          </Field>
        </Field>
      </Panel>

      <Panel name="exhibitedObjectInformation" collapsible collapsed>
        <Field name="mmiExhibitionObjectGroupList" subpath="ns2:exhibitions_mmi">
          <Field name="mmiExhibitionObjectGroup">
            <Field name="mmiExhibitionObjectNumber" />
            <Field name="mmiExhibitionObjectName" />
            <Field name="mmiExhibitionObjectType" />
            <Field name="mmiExhibitionObjectConsCheckDate" />
            <Field name="mmiExhibitionObjectConsTreatment" />
            <Field name="mmiExhibitionObjectMount" />
            <Field name="mmiExhibitionObjectSection" />
            <Field name="mmiExhibitionObjectSeqNum" />
            <Field name="mmiExhibitionObjectRotation" />
            <Field name="mmiExhibitionObjectNote" />
          </Field>
        </Field>
      </Panel>
    </Field>
  );
};

export default (configContext) => ({
  template: template(configContext),
});
