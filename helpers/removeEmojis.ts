import emojiRegex from "emoji-regex";
export const removeEmojis = (text:string) => {
    const regex = emojiRegex();
    return text.replace(regex, '');
  }

  export const sanitizeText = (text:string) =>  {
    const specialChars = /[^\w\s]/gi;
    const sanitizedText = text.replace(specialChars, '');
    return sanitizedText;
  }