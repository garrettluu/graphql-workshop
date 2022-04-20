import React from 'react';
import { Prism as Highlighter } from 'react-syntax-highlighter';

export default ({ children }) => <Highlighter language="graphql">{children}</Highlighter>;
