import React from 'react';
import { Spinner } from 'reactstrap';
import './LoadingModal.scss';

const LoadingModal = (props) => {
  return (
    <div className="loading-modal">
      <Spinner color="dark" />
    </div>
  );
}

export default LoadingModal;
