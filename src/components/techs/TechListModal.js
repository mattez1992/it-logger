import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import TechItem from "./TechItem";
import PropTypes from "prop-types";
import { getTechs } from "../../actions/techActions";
const TechListModal = ({ tech: { techs, loading }, getTechs }) => {
  // const [techs, setTechs] = useState([]);
  // const [loading, setLoading] = useState(true);
  useEffect(() => {
    getTechs();
    // eslint-disable-next-line
  }, []);
  // const getTechs = async () => {
  //   setLoading(true);
  //   const res = await fetch("/techs");
  //   const data = await res.json();
  //   console.log(data);
  //   setTechs(data);
  //   setLoading(false);
  // };

  return (
    <div id="list-tech-modal" className="modal">
      <div className="modal-content">
        <h4>Technician List</h4>
        <ul className="collection">
          {!loading &&
            techs !== null &&
            techs.map((tech) => <TechItem tech={tech} key={tech.id} />)}
          {/* {!loading &&
            techs !== null &&
            techs.map((tech) => (
              <li className="collection-item">
                {tech.firstName} {tech.lastName}
              </li>
            ))} */}
        </ul>
      </div>
    </div>
  );
};
TechListModal.propTypes = {
  tech: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired,
};
// to get things from you app level state
const mapStateToProps = (state) => ({
  // describe what you want from the state
  // the state.log points to the log in the rootReducer combined reducers.
  tech: state.tech,
});
export default connect(mapStateToProps, { getTechs })(TechListModal);
