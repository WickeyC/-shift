import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const FadeIn: React.FC<{
  duration?: number;
  delay?: number;
  children: React.ReactNode;
}> = ({
  duration = 300,
  delay = 0,
  children
}) => {
  return (
    <FadeInWrapper
      style={{        
        animationDuration: duration + 'ms',
        animationDelay: delay + 'ms',
      }}
    >
      {children}
    </FadeInWrapper>
  );
};

const FadeInWrapper = styled.div`
  @media (prefers-reduced-motion: no-preference) {
    animation-name: ${fadeIn};
    animation-fill-mode: backwards;
  }
`;

const Wrapper = styled.div``;

interface ChatProps {
  readonly visible: boolean;
}

const Chat = styled.div<ChatProps>`
  position: absolute;
  z-index: 2000;
  position: fixed;
  bottom: 100px;
  right: 20px;
  box-shadow: 0px 12px 20px 0px #00000026;
  background-color: #f6f8fb;
  height: 560px;
  width: 360px;
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  transform: ${(props) =>
    props.visible ? 'translateY(0)' : 'translateY(8px)'};
  visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.visible ? '1' : '0')};
  transition: transform 0.2s ease-in-out,
    ${(props) =>
      props.visible ? 'opacity .3s' : 'visibility 0s .3s, opacity .3s'};
`;

const Header = styled.header`
  height: 78px;
  background: linear-gradient(92.69deg, #405fff 0%, #4284fb 100%);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 30px;
  p {
    font-size: 13px;
    color: #fff;
    margin: 0;
    &:first-child {
      font-weight: 500;
      margin-bottom: 8px;
    }
  }
  button {
    top: 15px;
    right: 12px;
    position: absolute;
    background: none;
    img {
      width: 12px;
      height: 12px;
    }
  }
`;

const ChatView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1;
  padding: 30px 30px 16px 30px;
  overflow-y: scroll;
`;

const ChatMsgQuestion = styled.button`
  background-color: #e8edfb;
  align-self: flex-end;
  padding: 7px 12px;
  border-radius: 5px;
  color: #355c97;
  margin-bottom: 14px;
  font-size: 13px;
`;

const ChatMsgUser = styled.div`
  background-color: #fff;
  align-self: flex-end;
  padding: 7px 12px;
  border-radius: 5px;
  margin-bottom: 14px;
  font-size: 13px;
`;

const StyledChatMsgReply = styled.div`
  display: flex;
`;

const ProfileIcon = styled.div`
  min-width: 34px;
  height: 34px;
  background-color: #fff;
  border-radius: 50%;
  margin-left: -20px;
  margin-right: 10px;
  box-shadow: 0px 1px 6px -1px #c0c7ff;
  img {
    width: 10px;
    height: 22px;
  }
`;

const ChatMsgReplyText = styled.div`
  background-color: #4284fb;
  align-self: flex-end;
  padding: 7px 12px;
  border-radius: 5px;
  color: #fff;
  margin-bottom: 14px;
  font-size: 13px;
`;

const MessageForm = styled.form`
  background-color: #fff;
  border-top: 1px solid #d7dff1;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  input[type='text'] {
    width: 100%;
    height: 60px;
    padding: 0 30px;
    border: 1px solid #fff;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    outline: none;
  }
`;

const Opener = styled.button`
  position: absolute;
  z-index: 2000;
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgb(48, 71, 236);
  box-shadow: rgb(0 0 0 / 6%) 0px 1px 6px 0px, rgb(0 0 0 / 16%) 0px 2px 32px 0px;
  background-image: url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjMwIiB3aWR0aD0iMzUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxmaWx0ZXIgaWQ9ImEiIGhlaWdodD0iMTM4LjclIiB3aWR0aD0iMTMxLjQlIiB4PSItMTUuNyUiIHk9Ii0xNS4xJSI+PGZlTW9ycGhvbG9neSBpbj0iU291cmNlQWxwaGEiIG9wZXJhdG9yPSJkaWxhdGUiIHJhZGl1cz0iMSIgcmVzdWx0PSJzaGFkb3dTcHJlYWRPdXRlcjEiLz48ZmVPZmZzZXQgZHk9IjEiIGluPSJzaGFkb3dTcHJlYWRPdXRlcjEiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIxIi8+PGZlR2F1c3NpYW5CbHVyIGluPSJzaGFkb3dPZmZzZXRPdXRlcjEiIHJlc3VsdD0ic2hhZG93Qmx1ck91dGVyMSIgc3RkRGV2aWF0aW9uPSIxIi8+PGZlQ29tcG9zaXRlIGluPSJzaGFkb3dCbHVyT3V0ZXIxIiBpbjI9IlNvdXJjZUFscGhhIiBvcGVyYXRvcj0ib3V0IiByZXN1bHQ9InNoYWRvd0JsdXJPdXRlcjEiLz48ZmVDb2xvck1hdHJpeCBpbj0ic2hhZG93Qmx1ck91dGVyMSIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwLjA3IDAiLz48L2ZpbHRlcj48cGF0aCBpZD0iYiIgZD0iTTE0LjIzIDIwLjQ2bC05LjY1IDEuMUwzIDUuMTIgMzAuMDcgMmwxLjU4IDE2LjQ2LTkuMzcgMS4wNy0zLjUgNS43Mi00LjU1LTQuOHoiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48dXNlIGZpbGw9IiMwMDAiIGZpbHRlcj0idXJsKCNhKSIgeGxpbms6aHJlZj0iI2IiLz48dXNlIGZpbGw9IiNmZmYiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIiB4bGluazpocmVmPSIjYiIvPjwvZz48L3N2Zz4=) !important;
  background-size: 30px;
  background-repeat: no-repeat;
  background-position: center;
`;

const ChatMsgReply: React.FC<{ text: string }> = (props) => {
  return (
    <StyledChatMsgReply>
      <ProfileIcon className="flex-center">
        <img src="/img/favicon.svg" alt="Logo" />
      </ProfileIcon>
      <ChatMsgReplyText>{props.text}</ChatMsgReplyText>
    </StyledChatMsgReply>
  );
};

const LiveChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [userMsg, setUserMsg] = useState<string>('');
  const [allMessages, setAllMessages] = useState<
    {
      type: string;
      text: string;
    }[]
  >([]);
  const chatView = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatView.current) {
      chatView.current.scrollTop = chatView.current.scrollHeight;
    }
  }, [allMessages]);

  const handleToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAllMessages([...allMessages, {
      type: 'USER',
      text: userMsg.trim(),
    }])
    setUserMsg('');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserMsg(e.target.value);
  };

  return (
    <Wrapper>
      <Chat visible={isOpen}>
        <Header>
          <p>Questions? Chat with us!</p>
          <p>We will reply within a few minutes</p>
          <button
            onClick={() => {
              setIsOpen(false);
            }}
            type="button"
          >
            <img src="/img/close.svg" alt="Close" />
          </button>
        </Header>
        <ChatView ref={chatView}>
          <ChatMsgQuestion
            onClick={() => {
              setAllMessages([...allMessages, {
                type: 'USER',
                text: 'How to Sign Up?'
              }, {
                type: 'REPLY',
                text: '1. Click on the account icon to go to the sign up page. 2. Use email/password or Google SSO to sign up!'
              }]);
            }}
          >
            How to Sign Up?
          </ChatMsgQuestion>
          <ChatMsgQuestion
            onClick={() => {
              setAllMessages([...allMessages, {
                type: 'USER',
                text: 'How to Shop?'
              }, {
                type: 'REPLY',
                text: 'You can go to products page and shop there.'
              }]);
            }}
          >
            How to Shop?
          </ChatMsgQuestion>
          <ChatMsgQuestion
            onClick={() => {
              setAllMessages([...allMessages, {
                type: 'USER',
                text: 'What’s the payment method available?'
              }, {
                type: 'REPLY',
                text: 'You can choose to pay with cash on delivery or credit cards. Hope it helps!'
              }]);
            }}
          >
            What’s the payment method available?
          </ChatMsgQuestion>
          {allMessages.map((msg, index) => {
            if (msg.type === 'REPLY') {
              return (
                <ChatMsgReply
                  text={msg.text}
                  key={`replies-${msg.text}-${index}`}
                />
              );
            } else if (msg.type === 'USER') {
              return (
                <ChatMsgUser key={`msg-${msg.text}-${index}`}>
                  {msg.text}
                </ChatMsgUser>
              );
            }
          })}
        </ChatView>
        <MessageForm onSubmit={handleSubmit}>
          <input
            value={userMsg}
            onChange={handleChange}
            type="text"
            placeholder="Send a message"
          />
        </MessageForm>
      </Chat>
      <Opener onClick={handleToggle} />
    </Wrapper>
  );
};

export default LiveChat;
