import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import UserMessageView from './UserMessageView';


import s from './ChatHistoryView.css';


class ChatMessage extends React.PureComponent {
  render() {
    const { message } = this.props;

    if (message.type === 'message') {
      const { text, userAvatar, userName, fromMe } = message;

      return (
        <UserMessageView
          text={text}
          userAvatar={userAvatar}
          userName={userName}
          alignRight={!!fromMe}
        />
      );
    }
    return (
      <div>(unrecogrized chat message type)</div>
    );
  }
}

@connect(state => ({
  messages: state.chat.messages
}))
export default class ChatHistoryView extends React.PureComponent {
  render() {
    const { messages } = this.props;

    return (
      <div className={s.root}>
        {messages.map(message => (
          <ChatMessage key={message.id} message={message} />
        ))}
      </div>
    );
  }
}

ChatHistoryView.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape()).isRequired
};

