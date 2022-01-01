const template = (configContext) => {
  const {
    React,
  } = configContext.lib;

  const {
    Col,
    Cols,
    Panel,
  } = configContext.layoutComponents;

  const {
    Field,
    Subrecord,
  } = configContext.recordComponents;

  const {
    extensions,
  } = configContext.config;

  return (
    <Field name="document">
      <Panel name="media" collapsible>
        <Cols>
          <Col>
            <Field name="identificationNumber" />
            <Field name="title" />
          </Col>

          <Col>
            <Field name="publishToList">
              <Field name="publishTo" />
            </Field>
          </Col>
        </Cols>

        <Panel name="file" collapsible>
          <Subrecord name="blob" showDetachButton />
        </Panel>

        <Field name="externalUrl" />

        {extensions.dimension.form}

        <Cols>
          <Col>
            <Field name="isPrimary" subpath="ns2:media_mmi" />

            <Field name="typeList">
              <Field name="type" />
            </Field>

            <Field name="creator" />
            <Field name="copyrightStatement" />
          </Col>

          <Col>
            <Field name="isOriginalMedia" subpath="ns2:media_mmi" />
            <Field name="mediaView" subpath="ns2:media_mmi" />
            <Field name="mediaStatus" subpath="ns2:media_mmi" />
            <Field name="rightsHolder" />
          </Col>
        </Cols>

        <Field name="description" />
      </Panel>
    </Field>
  );
};

export default (configContext) => ({
  template: template(configContext),
});
