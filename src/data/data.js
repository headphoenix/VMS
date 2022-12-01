import PI from "../../assets/images/keys.png"
import DR from "../../assets/images/drum.png"
import BA from "../../assets/images/bass.png"
import TR from "../../assets/images/trumpet.png"
import GU from "../../assets/images/guit.png"
import SA from "../../assets/images/sax.png"

import BE from "../../assets/images/thinker.png"

import GE from "../../assets/images/beg.png"






export const Instruments = [
  {
    id: 0,
    name: "Piano",
    img: PI,
  },
  {
    id: 1,
    name: "Drums",
    img: DR,
  },
  {
    id: 2,
    name: "Bass Guitar",
    img: BA,
  },
  {
    id: 3,
    name: "Guitar",
    img: GU,
  },
  {
    id: 4,
    name: "Trumpet",
    img: TR,
  },
  {
    id: 3,
    name: "Saxophone",
    img: SA,
  },
]

export const Level = [
  {
    id: 0,
    name: "Ultra Beginner",
    desc: "I am very new to this musical instrument",
    img: BE,
  },
  {
    id: 1,
    name: "Beginner",
    desc: "I know the basics,I can play a few songs",
    img: GE,
  },
  {
    id: 2,
    name: "Intermediate",
    desc: "I can play, but not to the level of mastery",
    img: "",
  },
  {
    id: 3,
    name: "Advanced",
    desc: "I am advanced, but I want to become even better",
    img: "",
  },
]

export const color= [
  "lightblue",
  "lightgreen",
  "pink",
  "lightyellow",
    '#637aff',
    '#60c5a8',
    '#CCCCCC',
    '#ff5454',
    '#039a83',
    '#dcb834',
    '#8f06e4',
    'skyblue',
    '#ff4c98',
]

export const Animations = [
  "fadeIn",
  "fadeInUp",
  "fadeInDown",
  "fadeInDownBig",
  "fadeInUpBig",
  "fadeInLeft",
  "fadeInLeftBig",
  "fadeInRight",
  "fadeInRightBig",

  "flipInX",
  "flipInY",
 
  "slideInDown",
  "slideInUp",
  "slideInLeft",
  "slideInRight",
  
  "zoomIn",
  "zoomInDown",
  "zoomInUp",
  "zoomInLeft",
  "zoomInRight",
]

export const fadeOutAnim = [
  "fadeOut",
  "fadeOutDown",
  "fadeOutDownBig",
  "fadeOutUp",
  "fadeOutUpBig",
  "fadeOutLeft",
  "fadeOutLeftBig",
  "fadeOutRight",
  "fadeOutRightBi",
]