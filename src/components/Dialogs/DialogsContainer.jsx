import React from "react";
import {
    sendMessageCreator,
    updateNewMessageBodyCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

// const DialogsContainer = () => {
//
//
//     return <StoreContext.Consumer>
//         {
//             (store) => {
//                 // let state = store.getState().messagesPage;
//                 let onSendMessageClick = () => {
//                     store.dispatch(sendMessageCreator());
//                 };
//                 let onNewMessageChange = (body) => {
//                     store.dispatch(updateNewMessageBodyCreator(body));
//                 };
//                 return <Dialogs
//                     updateNewMessageBody={onNewMessageChange}
//                     sendMessage={onSendMessageClick}
//                     messagesPage={store.getState().messagesPage}
//                 />
//             }
//         }
//     </StoreContext.Consumer>
// };

let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body));
        },
        sendMessage: () => {
            dispatch(sendMessageCreator());
        }
    }
}

const DialogsContainer = compose(connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect) (Dialogs)

// let AuthRedirectComponent = withAuthRedirect(Dialogs);
//
// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;
