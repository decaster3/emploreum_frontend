/**
*
* Candidate
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { BASEURL } from '../../../../global-constants';
// import styled from 'styled-components';


export const Candidate = (props) => {
  const { name, imgUrl, rejectCandidate, acceptCandidate, candidateId, vacancyId } = props;
  const urlProfile = `/company/employee/${candidateId}`;
  const imgProfile = `${BASEURL}/${imgUrl}`;
  return (
    <tr>
      <td>
        <img src={imgProfile} alt="Avatar" className="avatar img-circle" />
        <Link to={urlProfile}>{ name }</Link>
      </td>
      <td className="text-right">
        <button
          className="btn btn-default"
          onClick={() => rejectCandidate(candidateId, vacancyId)}
        >
          Reject
        </button>
        <button
          onClick={() => acceptCandidate(candidateId, vacancyId)}
          className="btn btn-success"
        >
          Accept
        </button>
      </td>
    </tr>
  );
};

Candidate.propTypes = {
  name: PropTypes.string,
  imgUrl: PropTypes.string,
  rejectCandidate: PropTypes.func,
  acceptCandidate: PropTypes.func,
  candidateId: PropTypes.string,
  vacancyId: PropTypes.string,
};

export default Candidate;
