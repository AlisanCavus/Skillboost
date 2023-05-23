import emojiRegex from "emoji-regex";
export const removeEmojis = (text:string) => {
    const regex = emojiRegex();
    return text.replace(regex, '');
  }