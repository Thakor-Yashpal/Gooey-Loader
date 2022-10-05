const circleData = {
    angle: 271,
    interval: null,
    key: 'r',
    mapIndex: 0,
    pos: 0,
    activeEvent: {
        display: {
            image: {
                image: 'bear_art',
                w: 208,
                h: 208,
            },
            caption: 'Walk around with arrow keys or by dragging the arrow control on the screen. Press Enter or click on star button to investigate.',
            button: 'ok!'
        },
    },
    eventActivated: false,
}

const config = { 'l': 1, 'r': -1, 'u': -2, 'd': 2, }
const touchControl = { active: false, timer: null, direction: null, }

const addEvents = (target, event, action, array) => {
    array.forEach(a => event === 'remove' ? target.removeEventListener(a, action) : target.addEventListener(a, action))
}
const mouse = {
    up: (t, e, a) => addEvents(t, e, a, ['mouseup', 'touchend']),
    move: (t, e, a) => addEvents(t, e, a, ['mousemove', 'touchmove']),
    down: (t, e, a) => addEvents(t, e, a, ['mousedown', 'touchstart']),
    enter: (t, e, a) => addEvents(t, e, a, ['mouseenter', 'touchstart']),
    leave: (t, e, a) => addEvents(t, e, a, ['mouseleave', 'touchmove'])
}

const bearData = {
    animationTimer: ['', ''],
    bear: null,
    sprite: null,
    frameOffset: 0,
    interval: null,
    vertPos: 10,
    pause: false,
    direction: null,
}

const senseiData = {
    instructions: {
        walk: 'You can walk around by dragging the circle on the bottom left, or using Arrow keys on your keyboard',
        investigate: `Investigate using the star button or Enter on your keyboard, when you see an '!' appear above your head`,
        location: `If you're tired of walking, you can click or touch the bar above - you'll be transported instantly!`,
        complete: `Looks like you already know what to do! Have fun!`
    },
    intro: `Hi! I'm here to explain what you can do here`,
    greetings: 'Hi again',
    userProgress: {
        walk: false,
        investigate: false,
        location: false,
        complete: false,
    },
    testTimer: null,
    loopTimer: null,
    instruction: null,
    active: true,
    complete: false,
}

const elements = {
    tree: { w: 48, h: 60 },
    talking_tree: { w: 48, h: 60 },
    house1: { w: 80, h: 80, offset: 20 },
    house2: { w: 80, h: 80, offset: 20 },
    cactus: { w: 32, h: 68 },
    talking_cactus: { w: 32, h: 68 },
    art: { w: 52, h: 60, offset: 60 },
    npc: { w: 56, h: 64, offset: 60 },
    crystal: { w: 30, h: 56 },
    crystal_large: { w: 42, h: 78 },
    talking_crystal: { w: 54, h: 88 },
    talking_crystal_event: { w: 54, h: 10 },
    sun: { w: 76, h: 76 },
    sun_event: { w: 76, h: 76 },
    moon: { w: 44, h: 44 },
    moon_event: { w: 44, h: 44 },
    cloud: { w: 80, h: 46 }
}

const linkButton = (url, text) => {
        return `<a href="${url}" target="blank"><button>${text}</button></a>`
    }
    // this needs to be even number to work
const mapData = {
    0: [
        { element: 'cloud', angle: 45, offset: -140, color: 'gold' },
        { element: 'cloud', angle: 75, offset: -100, color: 'gold' },
        { element: 'cloud', angle: 105, offset: -140, color: 'gold' },
        { element: 'cloud', angle: 135, offset: -120, color: 'gold' },
        { element: 'tree', angle: 20, offset: 40, color: 'gold' },
        { element: 'tree', angle: 40, offset: 20, color: 'white' },
        { element: 'tree', angle: 70, offset: 20, color: 'navy' },
        {
            element: 'talking_tree',
            angle: 60,
            offset: 100,
            color: 'gold',
            display: {
                caption: 'Welcome! This started off as an experiment to create a rotating planet, but kind of became a mini portfolio. Enjoy!'
            }
        },
        {
            element: 'house2',
            angle: 110,
            offset: 30,
            display: {
                caption: `Hi, I'm a house. Do you want to see Masa's website?`,
                link: linkButton('https://www.ma5a.com/', `sure, why not`),
                button: 'maybe next time'
            }
        },
        { element: 'tree', angle: 130, offset: 80, color: 'navy' },
        {
            element: 'art',
            angle: 140,
            offset: 20,
            display: {
                image: {
                    image: 'bear_art',
                    w: 160,
                    h: 160,
                },
                caption: 'Hi there! Walk around and investigate! (Hint: look for things with faces)',
            },
        },
        { element: 'tree', angle: 160, offset: 20, color: 'gold' },

    ],
    1: [
        { element: 'tree', angle: 30 },
        { element: 'tree', angle: 20, offset: 90 },
        {
            element: 'house1',
            angle: 50,
            offset: 60,
            display: {
                caption: `Hey there, do you want to see Masa's illustrations?`,
                link: linkButton('https://masahito.co.uk/', `ok!`),
            }
        },
        { element: 'tree', angle: 65, offset: 100, color: 'white' },
        { element: 'tree', angle: 75, offset: 20 },
        {
            element: 'art',
            angle: 105,
            offset: 20,
            color: 'blue',
            display: {
                image: {
                    image: 'panda_art',
                    w: 140,
                    h: 140,
                },
                caption: 'Want to see some pandas bumping into each other?',
                link: linkButton('https://codepen.io/Ma5a/full/WNEBqPO', `yup, I'll have a look`)
            },
        },
        {
            element: 'art',
            angle: 130,
            offset: 20,
            display: {
                image: {
                    image: 'penguin_art',
                    w: 160,
                    h: 150,
                },
                caption: 'Come and play with the point and click penguin',
                link: linkButton('https://codepen.io/Ma5a/full/MWrZPOP', `ok!`)
            },
        },
        {
            element: 'talking_tree',
            angle: 120,
            offset: 100,
            display: { caption: `What? The world is rotating? Why am I not falling off?` }
        },
        { element: 'tree', angle: 150, offset: 20, color: 'white' },
    ],
    2: [
        { element: 'tree', angle: 30, offset: 20, color: 'white' },
        { element: 'tree', angle: 50, offset: 70, color: 'gold' },
        { element: 'tree', angle: 60, offset: 0, color: 'gold' },
        { element: 'tree', angle: 80, offset: 20, color: 'white' },
        { element: 'sun', angle: 105, offset: -70 },
        {
            element: 'sun_event',
            angle: 105,
            offset: 10,
            display: { caption: `Hello, I'm the sun. I'm a huge burning ball of hot plasma.` },
        },
        {
            element: 'talking_tree',
            angle: 120,
            offset: 80,
            color: 'white',
            display: { caption: `I guess I'm one of those things people call NPC.` }
        },
        { element: 'tree', angle: 130, offset: 0, color: 'white' },
        { element: 'tree', angle: 150, offset: 20, color: 'gold' },
    ],
    3: [
        { element: 'crystal', angle: 30, offset: 70 },
        { element: 'crystal', angle: 40, offset: 20 },
        { element: 'crystal', angle: 50, offset: 70 },
        { element: 'crystal_large', angle: 70, offset: 50 },
        { element: 'talking_crystal', angle: 90, offset: -30 },
        {
            element: 'talking_crystal_event',
            angle: 90,
            offset: 10,
            display: { caption: `Konnichiwa, I'm a random crystal floating in space.` },
        },
        { element: 'crystal', angle: 100, offset: 70 },
        { element: 'crystal', angle: 105, offset: -5 },
        { element: 'crystal', angle: 120, offset: 120 },
        { element: 'crystal_large', angle: 130, offset: 60 },
        { element: 'crystal', angle: 140, offset: 20 },
        { element: 'crystal', angle: 160, offset: 40 },
    ],
    4: [
        { element: 'cactus', angle: 30, color: 'navy' },
        { element: 'cactus', angle: 50, offset: 60, color: 'navy' },
        {
            element: 'art',
            angle: 60,
            offset: 20,
            display: {
                image: {
                    image: 'twitter',
                    w: 72,
                    h: 72,
                },
                caption: `Here's Masa's twitter, if you're into that sort of thing`,
                link: linkButton('https://twitter.com/masahitoart', `yeah, I'm into that sort of thing`)
            },
        },
        {
            element: 'art',
            angle: 75,
            offset: 100,
            color: 'blue',
            display: {
                image: {
                    image: 'bot_art',
                    w: 144,
                    h: 144,
                },
                caption: `Want to see small robots destroying each other?`,
                link: linkButton('https://codepen.io/Ma5a/full/LYQoLNR', `urm, ok`),
                button: 'meh'
            },
        },
        {
            element: 'talking_cactus',
            angle: 100,
            offset: 20,
            color: 'gold',
            display: { caption: 'Free hug!' }
        },
        { element: 'cactus', angle: 120, offset: 30, color: 'navy' },
        { element: 'cactus', angle: 150, offset: 60, color: 'gold' },
    ],
    5: [
        { element: 'tree', angle: 30, offset: 50 },
        {
            element: 'talking_tree',
            angle: 50,
            offset: 20,
            display: {
                caption: `I might one day make a small RPG based on this code. Maybe.`,
            },
        },
        { element: 'tree', angle: 60, offset: 100 },
        { element: 'tree', angle: 75, offset: 20 },
        { element: 'tree', angle: 110, offset: 60 },
        {
            element: 'art',
            angle: 130,
            offset: 20,
            display: {
                image: {
                    image: 'kitten_art',
                    w: 120,
                    h: 130,
                },
                caption: 'Want to play with an interactive kitten?',
                link: linkButton('https://codepen.io/Ma5a/full/BapbQam', `of course!`)
            },
        },
        { element: 'tree', angle: 150, offset: 40 },
        { element: 'moon', angle: 95, offset: -90 },
        {
            element: 'moon_event',
            angle: 95,
            offset: 10,
            display: { caption: `Hi there, did you notice that you're actually not moving side ways? The world is moving!` },
        },
    ],
}

const mapDataKeys = Object.keys(mapData)
    // const indicator = document.querySelector('.indicator')
const cellD = 32
const circle = document.querySelector('.circle')
const circleWrapper = document.querySelector('.circle_wrapper')
const pointer = document.querySelector('.pointer')
const background = document.querySelector('.background')
const control = document.querySelector('.touch_circle')
const actionButton = document.querySelector('.action_button')
const displayWrapper = document.querySelector('.display_wrapper')
const displays = document.querySelectorAll('.display')
const sensei = document.querySelector('.sensei')
const speechBubble = document.querySelector('.speech_bubble')
const halfCircumference = r => Math.PI * r
const isNum = x => typeof x === 'number'

const setTargetParams = ({ target, x, y, w, h }) => {
    const { style } = target
    if (isNum(x)) style.left = `${x}px`
    if (isNum(w)) style.width = `${w}px`
    if (isNum(y)) style.top = `${y}px`
    if (isNum(h)) style.height = `${h}px`
}

const placeElements = index => mapData[index].forEach(element => placeElement(element, index))

const placeElement = (element, i) => {
    const newElement = document.createElement('div')
    const offset = i % 2 === 0 ? 0 : 180
    newElement.className = `element ${element.element} ${element.color || ''}`
    circle.append(newElement)
    const { w, h, offset: o } = elements[element.element]
    const vertOffset = h - (element.offset || o || 5)

    setTargetParams({ target: newElement, w, h })
    Object.assign(newElement.style, {
        transform: `translate(${220 - (w / 2)}px, ${-vertOffset}px) rotate(${element.angle + offset}deg)`,
        zIndex: element.offset || o || 5,
        backgroundSize: `${w}px ${h}px !important`,
        transformOrigin: `center ${220 + vertOffset}px`
    })
    element.placed = newElement
}


const setSpritePos = (num, actor, sprite) => {
    actor.spritePos = num
    sprite.style.marginLeft = `${num}px`
}

const turnSprite = ({ e, actor, animate }) => {
    const dir = e
    const { sprite, frameOffset } = bearData
    const frames = {
        r: [4, 6, 5, 'add'],
        l: [4, 6, 5, 'remove'],
        u: [2, 2, 3, 'toggle'],
        d: [0, 0, 1, 'toggle']
    }
    let m = -cellD
    if (!frames[dir]) return
    m = animate ? m * frames[dir][0 + frameOffset] : m * frames[dir][2]
    bearData.frameOffset = frameOffset === 0 ? 1 : 0
    sprite.parentNode.classList[frames[dir][3]]('right')
    actor.animationTimer.forEach(timer => clearTimeout(timer))
    setSpritePos(m, actor, sprite)
}

const stopBear = () => {
    turnSprite({ e: circleData.key, actor: bearData })
    circleData.key = null
}

const returnNextOrPrev = current => {
    return current === -1 ?
        mapDataKeys.length - 1 :
        current === mapDataKeys.length ?
        0 :
        current
}

const returnPos = current => {
    return current === mapDataKeys.length * 180 ?
        mapDataKeys.length * -180 :
        current === mapDataKeys.length * -180 ?
        0 :
        current
}

const returnVerticalPos = current => {
    return current < -47 ?
        -47 :
        current > 120 ?
        120 :
        current
}

const populateCircle = key => {
    const { mapIndex } = circleData
    const indexToAdd = key === 'r' ? returnNextOrPrev(mapIndex + 1) : returnNextOrPrev(mapIndex - 1)
    mapDataKeys.forEach(index => {
        if (index !== `${mapIndex}`) mapData[index].forEach(element => element.placed ? .remove())
    })
    placeElements(indexToAdd)
}

const currentPos = pos => {
    return pos === 0 ?
        0 :
        pos > 0 ?
        (pos / -180) + mapDataKeys.length :
        pos / -180
}

const movePointer = pos => {
    const { width } = circleWrapper.getBoundingClientRect()
    const pointerPos = (currentPos(pos - 90) / mapDataKeys.length) * width
    pointer.style.transform = `translateX(${(pointerPos > width ? pointerPos - width : pointerPos) - 12}px)`
}

const changeBackground = pos => {
    background.classList[Math.floor(pos) % 2 === 0 ? 'add' : 'remove']('light')
}

const withinBuffer = ({ a, b, buffer }) => Math.abs(a - b) < buffer

const updateElements = () => {
    const trigger = [89, 269, 91, 271]
    const { key } = circleData

    circleData.pos += config[key]
    circleData.pos = returnPos(circleData.pos)
    circleData.mapIndex = Math.round(currentPos(circleData.pos))
    circleData.mapIndex = returnNextOrPrev(circleData.mapIndex)

    if (trigger.includes(Math.abs(circleData.angle))) populateCircle(key)

    movePointer(circleData.pos)
    changeBackground(circleData.mapIndex)
    if (Math.abs(circleData.angle) === 360) circleData.angle = 0

    // for development
    // indicator.innerHTML = `angle: ${circleData.angle} pos:${circleData.pos} prev: ${returnNextOrPrev(circleData.mapIndex - 1)} current: ${circleData.mapIndex} next:${returnNextOrPrev(circleData.mapIndex + 1)}`
}

const positionBear = angle => {
    bearData.bear.style.transformOrigin = `center ${220 - (bearData.vertPos)}px`
    bearData.bear.style.transform = `translate(${220 - 16}px, ${bearData.vertPos}px) rotate(${angle}deg)`
}

const rotateCircle = () => {
    if (['l', 'r'].includes(circleData.key)) {
        circleData.angle += config[circleData.key]
        circle.style.transform = `rotate(${circleData.angle}deg)`

        positionBear(-circleData.angle)
        updateElements()
    }
}

const moveBearVertically = () => {
    bearData.bear.style.zIndex = bearData.vertPos + 64
    positionBear(-circleData.angle)
}


const elementInContact = () => {
    const angleWithinCurrentMap = Math.round((currentPos(circleData.pos - 90) % 1) * 180)

    return mapData[circleData.mapIndex].map(element => {
        const { zIndex: elementPos } = element.placed.style
        const { zIndex: bearPos } = bearData.bear.style
        if (
            withinBuffer({
                a: element.angle,
                b: angleWithinCurrentMap,
                buffer: (elements[element.element].w / halfCircumference(220 - elementPos)) * 90
            }) &&
            withinBuffer({
                a: elementPos,
                b: bearPos,
                buffer: 15
            }) &&
            (circleData.key === 'u' && +elementPos < +bearPos || circleData.key === 'd' && +elementPos > +bearPos)
        ) return element
        return null
    }).filter(element => element)[0]
}

const displayOrHideImage = () => {
    if (circleData.activeEvent ? .display ? .image) {
        const { w, h, image } = circleData.activeEvent.display.image
        setTargetParams({ target: displays[0], w, h })
        displays[0].style.backgroundSize = `${w}px ${h}px`
        displays[0].className = `img_display display ${image}`
        displays[0].style.marginBottom = '5px'
    } else {
        setTargetParams({ target: displays[0], w: 0, h: 0 })
        displays[0].className = 'img_display display'
        displays[0].style.marginBottom = '0px'
    }
}

const moveBearAndCircle = key => {
    clearInterval(circleData.interval)
    circleData.key = key
    circleData.interval = setInterval(() => {
        if (!circleData.key) {
            clearInterval(circleData.interval)
        } else {
            circleData.activeEvent = elementInContact()
            if (!circleData.activeEvent) bearData.bear.classList.remove('alert')
            if (['l', 'r'].includes(key)) {
                rotateCircle()
            } else if (['u', 'd'].includes(key)) {
                if (!circleData.activeEvent) {
                    bearData.vertPos += config[key]
                    bearData.vertPos = returnVerticalPos(bearData.vertPos)
                    moveBearVertically()
                } else if (key === 'u' && circleData.activeEvent.display) {
                    circleData.eventActivated = true
                    displayOrHideImage()
                    bearData.bear.classList.add('alert')
                }
            }
        }
    }, 1000 / 60)
    clearInterval(bearData.interval)
    bearData.interval = setInterval(() => {
        if (!circleData.key) {
            clearInterval(bearData.interval)
        } else {
            turnSprite({ e: circleData.key, actor: bearData, animate: true })
        }
    }, 100)
}


const handleKey = ({ e, letter, enter }) => {
    if ((e ? .key === 'Enter' || enter) && circleData.activeEvent ? .display && bearData.direction === 'u') {
        senseiData.userProgress.investigate = true
        bearData.pause = !bearData.pause
        displayWrapper.classList.toggle('display')
        displays[1].innerHTML = circleData.activeEvent.display.caption || ''
        displays[2].innerHTML = circleData.activeEvent.display.link || ''
        displays[3].innerHTML = circleData.activeEvent.display.button || 'close'
    } else if (!bearData.pause) {
        const key = e ? .key.replace('Arrow', '').toLowerCase()[0] || letter
        senseiData.userProgress.walk = true
        bearData.direction = key
        if (circleData.key !== key) moveBearAndCircle(key)
    }
}

const addBear = () => {
    bearData.bear = document.createElement('div')
    const { bear } = bearData
    circle.append(bear)
    bear.classList.add('bear_wrapper')
    bear.innerHTML = '<div><div class="bear"></div></div>'
    bearData.sprite = bear.childNodes[0].childNodes[0]
    bear.style.transform = `translate(${220 - 16}px, ${10}px) rotate(0deg)`
    bear.style.transformOrigin = `center ${220 - 10}px`
}

const distanceBetween = (a, b) => Math.round(Math.sqrt(Math.pow((a.x - b.x), 2) + Math.pow((a.y - b.y), 2)))

const drag = (target, pos, x, y) => {
    pos.a = pos.c - x
    pos.b = pos.d - y
    const newX = target.offsetLeft - pos.a
    const newY = target.offsetTop - pos.b
    if (distanceBetween({ x: 0, y: 0 }, { x: newX, y: newY }) < 40) {
        setTargetParams({ target, x: newX, y: newY })
        touchControl.direction = Math.abs(newX) < Math.abs(newY) ?
            newY < 0 ? 'u' : 'd' :
            newX < 0 ? 'l' : 'r'
    }
}

const client = (e, type) => e.type[0] === 'm' ? e[`client${type}`] : e.touches[0][`client${type}`]
const roundedClient = (e, type) => Math.round(client(e, type))

const addTouchAction = (target, handleKeyAction) => {
    const pos = { a: 0, b: 0, c: 0, d: 0 }

    const onGrab = e => {
        pos.c = roundedClient(e, 'X')
        pos.d = roundedClient(e, 'Y')
        mouse.up(document, 'add', onLetGo)
        mouse.move(document, 'add', onDrag)
        touchControl.active = true
        touchControl.timer = setInterval(() => {
            if (touchControl.active) handleKeyAction({ letter: touchControl.direction })
        }, 200)
    }
    const onDrag = e => {
        const x = roundedClient(e, 'X')
        const y = roundedClient(e, 'Y')
        drag(target, pos, x, y)
        pos.c = x
        pos.d = y
    }
    const onLetGo = () => {
        mouse.up(document, 'remove', onLetGo)
        mouse.move(document, 'remove', onDrag)
        target.style.transition = '0.2s'
        setTargetParams({ target, x: 0, y: 0 })
        setTimeout(() => {
            target.style.transition = '0s'
        }, 200)
        clearInterval(touchControl.timer)
        touchControl.active = false
        stopBear()
    }
    mouse.down(target, 'add', onGrab)
}

const resize = () => {
    const { innerWidth } = window
    circleWrapper.style.transform = innerWidth < 400 ? `scale(${innerWidth / 400})` : 'scale(1)'
    moveBearVertically()
    movePointer(circleData.pos)
}

const warpToLocation = i => {
    setTimeout(() => senseiData.userProgress.location = true, 1000)
    circleData.pos = i * -180 + 1
    circleData.angle = i === 0 ?
        270 :
        i === 1 ?
        90 :
        i % 2 === 0 ?
        -90 :
        -270
    bearData.vertPos = 10
    positionBear(-circleData.angle)
    circle.style.transform = `rotate(${circleData.angle - 90}deg)`
    circle.style.transition = '0.2s'
    setTimeout(() => circle.style.transform = `rotate(${circleData.angle}deg)`, 50)
    setTimeout(() => circle.style.transition = '0s', 200)
    circleData.mapIndex = i
    mapDataKeys.forEach(i => mapData[i].forEach(element => element.placed ? .remove()))
    placeElements(i)
    movePointer(circleData.pos)
    populateCircle('r')
    changeBackground(i)
    stopBear()
}


// sensei +++

const displayTextGradual = (t, i) => {
    speechBubble.innerHTML = t.slice(0, i)
    if (i % 5 === 0) sensei.classList.toggle('talking')
    if (i < t.length) {
        senseiData.textTimer = setTimeout(() => {
            displayTextGradual(t, i + 1)
        }, 20)
    } else {
        sensei.classList.remove('talking')
    }
}

const senseiTiming = (buffer, key) => senseiData[key || 'instruction'].length * 20 + buffer * 1000

const displayInstruction = () => {
    if (senseiData.active) {
        setInstruction()
        displayTextGradual(senseiData.instruction, 0)
        senseiData.loopTimer = !senseiData.complete ?
            setTimeout(() => displayInstruction(), senseiTiming(8)) :
            setTimeout(() => closeSensei(), senseiTiming(6))
    }
}

const activateSensei = () => {
    speechBubble.parentNode.parentNode.classList.remove('off')
    senseiData.active = true
    senseiData.textTimer = setTimeout(() => {
        displayTextGradual(senseiData.greetings, 0)
        senseiData.loopTimer = setTimeout(() => displayInstruction(), senseiTiming(3, 'greetings'))
    }, 400)
}

const closeSensei = () => {;
    ['textTimer', 'loopTimer'].forEach(k => clearTimeout(senseiData[k]))
    sensei.classList.remove('talking')
    speechBubble.innerHTML = ''
    speechBubble.parentNode.parentNode.classList.add('off')
    senseiData.active = false
}

const setInstruction = () => {
    const { userProgress: p } = senseiData
    const instructionKey = Object.keys(p).map(k => !p[k] && k).filter(k => k)[0]
    senseiData.instruction = senseiData.instructions[instructionKey]
    if (instructionKey === 'complete') senseiData.complete = true
}

// +++


document.querySelector('.location_mark').innerHTML = mapDataKeys.map(() => `<div class="location_link"></div>`).join('')
document.querySelectorAll('.location_link').forEach((link, i) => {
    link.addEventListener('click', () => warpToLocation(i))
})
window.addEventListener('keydown', e => handleKey({ e }))
window.addEventListener('keyup', () => {
    turnSprite({ e: circleData.key, actor: bearData })
    circleData.key = null
});
[actionButton, displays[3]].forEach(ele => ele.addEventListener('click', () => handleKey({ enter: true })))
speechBubble.parentNode.addEventListener('click', closeSensei)
sensei.addEventListener('click', activateSensei)
window.addEventListener('resize', resize)

addTouchAction(control, handleKey)
placeElements(0)
addBear()
rotateCircle()
handleKey({ letter: 'd' })
stopBear()
resize()
Object.keys(senseiData.userProgress).forEach(k => senseiData.userProgress[k] = false)
displayTextGradual(senseiData.intro, 0)
senseiData.loopTimer = setTimeout(() => displayInstruction(), senseiTiming(3, 'intro'))