import React from 'react';
import { connect } from 'react-redux';

import Note from './Note';

const Notes = ({ notes }) => {
  const defaultProps = { title: 'No notes', content: '' };
  if (!notes.length) return <Note title={defaultProps.title} content={defaultProps.content} />;

  return notes.map(({ title, content, key }) => <Note title={title} content={content} key={key} />);
};

export default connect((state) => ({ notes: state.notes.notes }), null)(Notes);

// const mapStateToProps = state => {
//   return {
//     notes: state.notes.notes
//   }
// }

// export default connect(mapStateToProps, null)(Notes)
