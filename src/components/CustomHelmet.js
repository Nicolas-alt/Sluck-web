import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const CustomHelmet = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};

CustomHelmet.propTypes = {
  title: PropTypes.string.isRequired,
};

export default CustomHelmet;
