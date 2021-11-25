import React from 'react';

import ScrollToBottom from 'react-scroll-to-bottom';

import Message from './Message/Message';

import '../Messages/Messages.css';

const Messages = ({messages, name}) => (
  <ScrollToBottom className="messages">
    {messages.map((message, i) => <div key={i}><Message message={message} name={name}/></div>)}
  </ScrollToBottom>
 /*  messages.map((message) => {
    console.log(message);
    return(console.log(message))
  }) */
)


export default Messages;