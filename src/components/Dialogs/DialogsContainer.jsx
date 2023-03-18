
import { updateNewMessageBodyCreator } from "../../redux/dialogs-reducer";
import { sendMessageCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import AuthNavigate from "../HOC/AuthNavigate";

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  
  };
};




const mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreator(body));
    },
    sendMessage: () => {
      dispatch(sendMessageCreator());
    },
  };

};
const AuthNavigateComponent = AuthNavigate(Dialogs)

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthNavigateComponent);


export default DialogsContainer;
