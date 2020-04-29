/** @jsx jsx */
import { jsx } from "theme-ui";
import { Prism } from "react-syntax-highlighter";
import { getLanguage } from "@mdx-deck/themes/syntax-highlighter";

export const theme = {
  fonts: {
    body: "monospace",
    monospace: "monospace",
  },
  colors: {
    text: "black",
    background: "white",
    primary: "blue",
  },
  styles: {
    li: {
      fontSize: "1.5rem",
      margin: "1rem 0",
    },
    blockquote: {
      fontStyle: "italic",
      backgroundColor: "#f8f8f8",
      padding: "1rem",
      border: "1px solid black",
      boxShadow: "0.5rem 0.9rem 0 0.2rem",
    },
    img: {
      width: "unset",
      height: "unset",
    },
    p: {
      code: {
        backgroundColor: "#f7f7f7",
      },
    },
    a: {
      textDecoration: "none",
      "--transition": "250ms 33ms cubic-bezier(0.19, 1, 0.22, 1)",
      position: "relative",
      zIndex: 0,
      color: "currentColor",
      outline: "none",
      transition: "color var(--transition)",
      ":before": {
        content: "''",
        display: "block",
        height: "0.6em",
        position: "absolute",
        top: "50%",
        right: "-0.15rem",
        left: "-0.1rem",
        zIndex: -1,
        backgroundColor: "rgba(0, 0, 255, 0.12)",
        transition:
          "background-color var(--transition), transform var(--transition)",
      },
      ":hover, :focus": {
        color: "white",
        ":before": {
          backgroundColor: "rgba(0, 0, 255, 1)",
          transform: "translateY(-50%) rotateZ(0.37deg) scaleY(2)",
        },
      },
    },
  },
  components: {
    pre: (props) => props.children,
    code: (props) => {
      const language = getLanguage(props.className);
      return (
        <Prism
          language={language}
          customStyle={{
            backgroundColor: "#f7f7f7",
            padding: "1em",
          }}
          {...props}
          style={{}}
          sx={{
            minWidth: 200,
            fontSize: "0.9em",
            lineHeight: 1.4,
            ".punctuation, .operator": {
              opacity: 0.3,
            },
          }}
        />
      );
    },
  },
};
