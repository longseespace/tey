import { Window } from 'react-qml';
import { connect } from 'react-redux';
import * as React from 'react';

import { addWorkspace, getTeamInfo } from '../state/workspace';
import { getChannelList } from '../state/conversation';
import { hideWindow, loginWindowVisibilitySelector } from '../state/window';
import { signInWithPassword } from '../lib/slack';
import ErrorBoundary from '../components/ErrorBoundary';
import LoginForm from '../components/LoginForm';

const hideLoginWindow = () => hideWindow('login');

const connectToRedux = connect(
  state => ({
    visible: loginWindowVisibilitySelector(state),
  }),
  {
    onClose: hideLoginWindow,
    addWorkspace,
    getTeamInfo,
    getChannelList,
  }
);

const styles = {
  window: {
    width: 320,
    height: 420,
    color: '#f5f5f5',
  },
};

class LoginWindow extends React.Component {
  windowRef = React.createRef();

  state = {
    signinError: '',
    isProcessing: false,
  };

  constructor(props) {
    super(props);

    this.handleLogin = this.handleLogin.bind(this);
  }

  onClosing = ev => {
    // we don't want default behavior
    // window visibility will be controlled by component's prop
    ev.accepted = false;

    // should dispatch close action here
    this.props.onClose();
  };

  async handleLogin(formData) {
    this.setState({ signinError: '', isProcessing: true });
    const { domain, email, password } = formData;
    const resp = await signInWithPassword(domain, email, password);
    if (!resp.ok) {
      this.setState({ signinError: resp.error, isProcessing: false });
    } else {
      // add workspace
      const { team, user, userEmail, token } = resp;
      this.props.addWorkspace({ team, user, userEmail, token });

      // fetch team info
      this.props.getTeamInfo({ token });

      // fetch channel list
      this.props.getChannelList({ token });

      // reset error
      this.setState({ signinError: '', isProcessing: false });

      // close this window
      this.props.onClose();
    }
  }

  render() {
    const { signinError, isProcessing } = this.state;
    const { visible = true } = this.props;
    return (
      <Window
        visible={visible}
        visibility={visible ? 'Windowed' : 'Hidden'}
        onClosing={this.onClosing}
        title="Login"
        style={styles.window}
        ref={this.windowRef}
        flags={Qt.Dialog}
      >
        <ErrorBoundary>
          <LoginForm
            onSubmit={this.handleLogin}
            submissionError={signinError}
            isProcessing={isProcessing}
          />
        </ErrorBoundary>
      </Window>
    );
  }
}

export default connectToRedux(LoginWindow);
