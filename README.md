# Telegram Bot - Anti_HI_bot

## Overview
**Anti_HI_bot** is a simple Telegram bot designed for use in group chats with friends. Its main functionality revolves around word filtering. The bot was created with a set of regex patterns to comprehensively identify words, taking into account various characters and similar-looking letters from both the Ukrainian and English alphabets.

In addition to word filtering, the bot has the ability to send random GIFs in response to text messages and images. Depending on the words used in the text messages, the bot can also react with appropriate GIFs. The bot also features several other lighthearted functions.

Created with the intent of adding a touch of amusement to my conversations with friends, this is my very first project in the coding realm. The primary motivation behind its development was to infuse a playful element into our chats and bring some fun. Of course, another significant reason behind the creation of this bot was to enforce a restriction on certain words in our conversations—like saying "hi" and other similar words to my friend (don't ask why).

## Features
- **Word Filtering**: The bot employs advanced regex patterns to detect and filter out specific words, providing a unique chatting experience.
- **Random GIFs**: The bot can send random GIFs in response to text messages and images, adding an element of surprise to conversations.
- **Contextual GIFs**: Based on the content of text messages, the bot can react with GIFs that match the context of the conversation.
- **Laughter Responses**: The bot spreads laughter by responding to messages containing laughter-related keywords with humorous GIFs. It uses a smart probability mechanism to vary the humor level of its responses, creating an engaging and fun atmosphere.
- **Adjective Reactions**: When users include adjectives in their messages, the bot playfully responds with mirrored adjective-based messages. This feature adds a witty twist to conversations and showcases the bot's creativity.
- **GIF Search on Giphy**: The bot can search for GIFs on Giphy using specific tags or translated keywords. This feature enables users to prompt the bot to share GIFs related to their interests or the topic of conversation, adding visual appeal to the chat.
- **User-Specific Interactions**: The bot interacts differently with different users based on user IDs, enhancing the personalized experience.
- **Translation Support**: The bot utilizes the *translatte* library to translate text messages to English, enriching the variety of responses.
- **Customizable Responses**: The code is structured in a way that allows easy expansion of the bot's response library. By adding new trigger words, patterns, or GIF sources, you can make the bot even more interactive and tailored to your group's preferences.

## Usage
1. Invite the **Anti_HI_bot** to your Telegram group chat.
2. Start chatting with your friends.
3. The bot will automatically filter out certain words and respond with appropriate GIFs.
4. Explore the fun and unpredictable interactions the bot offers!

## Note
This project is designed to provide an entertaining and interactive dimension to your Telegram group chats with friends. The word filtering and GIF response mechanisms inject humor and unpredictability into your conversations. If desired, you can further refine the code to make it respond to specific words or phrases you've defined, or even customize the GIFs it sends.

To understand how to create regex queries based on your exported variables, let's break down how you construct your regex patterns. Your approach utilizes template strings to build regex expressions using the predefined variables from your `alphabet.js` file.

Code example:
```javascript
const uaPryvit = new RegExp(`${a.begin}${a.uaP}${a.uaR}${a.uaYi}${a.uaV}${a.uaI}${a.uaT}${a.end}`, 'i');
const engHello = new RegExp(`${a.begin}${a.engH}(${a.engE}|${a.engA})?${a.engL}(${a.engL})?${a.engO}${a.end}`, 'i');
// ... and so on for other patterns
```

In this example:
- `${a.begin}` and `${a.end}` add the start and end of a regex expression, respectively. They are used to make the expression "complete," defining that the phrase must be from the very beginning to the very end of the text.

- `${a.uaP}${a.uaR}${a.uaYi}${a.uaV}${a.uaI}${a.uaT}` combines all the Ukrainian characters to form the word "Привіт" ("Hello" in Ukrainian). Here, you're sequentially combining all the letters.

- `'i'` sets the regex to be case-insensitive, meaning it will match letters regardless of their case (uppercase/lowercase).

With this explanation, you can apply a similar approach to build your own regex patterns based on the exported variables from `alphabet.js` file.

1. Define Character Groups: Define character groups or individual characters you want to match. For instance, `${a.engA}` corresponds to the English letter "A."

2. Combine Patterns: Use template strings to combine characters and groups to form words or phrases. Just like `${a.uaP}${a.uaR}${a.uaYi}` constructs the word "Привіт."

3. Utilize Alternation: When you have alternatives, like `(engE|engA)`, it matches either "E" or "A."

4. Use Quantifiers: For optional characters or groups, like `(${a.engU})?`, you're making "U" optional.
