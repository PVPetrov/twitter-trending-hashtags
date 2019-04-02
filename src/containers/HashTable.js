import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Table from '../components/Table';
import { getHashtags } from '../actions';

const HashTable = ({ stats: { data, loading }, getHashtags }) => {
  useEffect(() => {
    getHashtags(['USA', 'Germany', 'FRA']);
  }, []);
  return <Table data={data} />
}

HashTable.propTypes = {
  stats: PropTypes.shape({
    data: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
  }).isRequired,
}

const mapStateToProps = (state) => ({
  stats: state.stats
})

const mapDispatchToProps = {
  getHashtags
}


export default connect(mapStateToProps, mapDispatchToProps)(HashTable);