import React, { createContext, useRef, useContext } from "react";
import PropTypes from "prop-types";
import io from "socket.io-client";

export const SocketContext = createContext(undefined);

export const useSocket = () => useContext(SocketContext);

export function SocketProvider({ children, uri, options }) {
  const socketRef = useRef();

  if (!socketRef.current) {
    socketRef.current = io(uri, options || {});
  }

  return (
    <SocketContext.Provider value={socketRef.current}>
      {children}
    </SocketContext.Provider>
  );
}

SocketProvider.propTypes = {
  children: PropTypes.node.isRequired,
  uri: PropTypes.string.isRequired,
  options: PropTypes.object,
};
