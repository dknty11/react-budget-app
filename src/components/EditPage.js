import React from 'react';

const EditPage = (props) => (
  <div>
    This is edit page {props.match.params.id}.
  </div>
)

export default EditPage