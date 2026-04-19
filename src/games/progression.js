import runGame from '../index.js'

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min


const generateProgression = (start, step, length) => {
    const progression = []
    for (let i = 0; i < length; i += 1) {
        progression.push(start + i * step)
    }
    return progression
}

const generateRound = () => {
    const length = getRandomNumber(5, 10) 
    const start = getRandomNumber(1, 20)
    const step = getRandomNumber(2, 10)
    const progression = generateProgression(start, step, length)

    const hiddenIndex = getRandomNumber(0, length - 1)
    const correctAnswer = String(progression[hiddenIndex])

 
    const questionArray = progression.map((num, index) => (
        index === hiddenIndex ? '..' : String(num)
    ))
    const question = questionArray.join(' ')

    return [question, correctAnswer]
}

const playProgressionGame = () => {
    const rule = 'What number is missing in the progression?'
    runGame(rule, generateRound)
}

export default playProgressionGame
