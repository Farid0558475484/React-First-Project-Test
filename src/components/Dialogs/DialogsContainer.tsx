import { actions } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import AuthNavigate from "../HOC/AuthNavigate";
import { compose } from "redux";
import { AppStateType } from "../../redux/redux-store";

const mapStateToProps = (state:AppStateType) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

export default compose(
  AuthNavigate,
  connect(mapStateToProps, {...actions})
)(Dialogs);
