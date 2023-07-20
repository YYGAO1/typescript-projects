// Put your checkEmotion and speak functions here! ✨
// See ./original.js for their older JavaScript code.

const checkEmotion = async (knownEmotions, emotion, callback) {
     setTimeout(() => {
        await callback(knownEmotions.has(emotion))
    }, 1000)

}

const speak = async (knownEmotions, newEmotion, phrase, callback) => {
    await checkEmotion(knownEmotions, newEmotion, (hasEmotion) => {
        if (hasEmotion) {
            callback(`"${phrase}" (${newEmotion})`)
        }
        else {
            callback (
                undefined,
                new Error(`Does not compute. I do not understand ${newEmotion}.`)
            )
        }
    })
}

module.exports.checkEmotion = checkEmotion;
module.exports.speak = speak;
