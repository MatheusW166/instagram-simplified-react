import Mention from "../components/Mention";

export function isMentionFormat(text) {
  return /^@\S+$/g.test(text);
}

/**
 * Converts all '@...' into 'Mention' component and returns
 * an array with all words and mentions.
 * @param {string} text
 * @returns Array<string | Mention>
 */
export default function addMentions(text) {
  const tokens = text.split(" ");
  return tokens.map((token, index) =>
    isMentionFormat(token) ? <Mention key={index} text={token} /> : `${token} `
  );
}
