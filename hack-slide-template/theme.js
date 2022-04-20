import React from 'react';
import { github } from "@code-surfer/themes";
import { Prism } from 'react-syntax-highlighter'
import * as prismThemes from 'react-syntax-highlighter/dist/esm/styles/prism';
import { prism } from '@mdx-deck/themes';
const orange = "#F9A857";
const black = "#333333";
const white = "#FFFFFF";
const darkOrange = "#271400";

const getLanguage = className => {
  const match = /language-(\w*)/.exec(className || 'language-javascript')
  let lang = 'javascript'
  if (match && match.length > 1) {
    lang = match[1]
  }
  console.log(lang);
  if (lang === 'gql') {
    return 'graphql';
  }
  return lang
}

export const pre = props => props.children

export const code = props => {
  const language = getLanguage(props.className)
  return <Prism language={language} style={prismThemes.prism} {...props} />
}

let newTheme = github;
console.log(newTheme.styles.CodeSurfer);
newTheme.styles.CodeSurfer.subtitle = {
  ...github.styles.CodeSurfer.subtitle,
  borderRadius: '.5em',
  margin: '.3em 10em',
  width: 'calc(100% - 20em)'
};

export const codeTheme = newTheme;

export default {
  googleFont: 'https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap',
  fonts: {
    body: '"DM Sans", sans-serif',
    monospace: '"Roboto Mono", monospace',
  },
  colors: {
    text: black,
    background: white,
    primary: orange,
  },
  fontWeights: {
    body: 400,
    heading: 700,
  },
  components: {
    ...prism.components,
    pre,
    code
  },
  styles: {
    b: {
      color: 'primary',
    },
    h1: {
      fontSize: 84,
      fontWeight: 'heading',
    },
    h2: {
      fontSize: 48,
      fontWeight: 'body',
    },
  }
};
