const cardTypeOptions = [
    {
        id: 'Animals',
        type: 'Animals'
    },
    {
        id: 'Fruits',
        type: 'Fruits'
    },
    {
        id: 'Numbers',
        type: 'Numbers'
    }
]

const difficultyOptions = [
    {
        id: 'Easy',
        cards: 8
    },
    {
        id: 'Medium',
        cards: 12
    },
    {
        id: 'Hard',
        cards: 16
    }
]

const TimerOptions = [
    {
        id: '60s',
        time: 60
    },
    {
        id: '120s',
        time: 120
    },
    {
        id: '180s',
        time: 180
    },
    {
        id: '240s',
        time: 240
    },
    {
        id: '300s',
        time: 300
    },
    {
        id: 'Infinity',
        time: 0
    }
]

export const GAME_SETTINGS = {
    cardType: cardTypeOptions,
    difficulty: difficultyOptions,
    timer: TimerOptions
}
