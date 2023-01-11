import React from "react";

function Emoji({ minutes }) {
    const getEmojiCounter = () => {
        function getEmoji(time, emoji) {
            // round minutes by the time given
            let count = Math.ceil(minutes / time);
            // get the desired emote
            let countEmojis = emoji;
            // add emojis for the amount of time
            for (let i = 0; i < count - 1; i++) {
                countEmojis = countEmojis.slice() + emoji;
            }
            return countEmojis;
        }

        if (minutes < 30) {
            return getEmoji(5, "☕️");
        } else {
            return getEmoji(10, "🍱");
        }
    }
    

    return (
    <small>{`${getEmojiCounter()} ${minutes} minute read.`}</small>
    )
}

export default Emoji;