const _ = require('lodash')

export default function randomSound() {
    const shuffle = _.shuffle([
        'ahright.wav',
        'difficult.wav',
        'gryffindor.wav',
        'hufflepuff.wav',
        'iknow.wav',
        'iknowjustwhattodo.wav',
        'itsallhere.wav',
        'ravenclaw.wav',
        'rightok.wav',
        'slytherin.wav',
        'wheretoputyou.wav'
    ])
    return '/audio/' + _.last(shuffle)
}
