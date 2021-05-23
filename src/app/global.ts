export interface exercise_t { name: string, description: string, text: string, developer: string, wpm: string, accuracy: string };
export interface exercises_t { [key: string]: exercise_t };
export const exercises: exercises_t = {
  "Hamlet": {
    name: "Hamlet",
    description: "Hamlet first act",
    developer: "João Rodrigues", wpm: "75", accuracy: "85",
    text: "Enter two Sentinels first Francisco who paces up and down at his post then Bernardo who approaches him Whos there Nay answer me Stand and unfold yourself"
  },
  "Parabéns": {
    name: "Parabéns",
    description: "Musica Parabéns",
    developer: "Joana Maria", wpm: "120", accuracy: "90",
    text: "Parabens a voce nesta data querida muitas felicidades muitos anos de vida"
  },
  "Os Lusíadas": {
    name: "Os Lusíadas",
    description: "Primeiro verso d'Os Lusíadas",
    developer: "Mário Correia", wpm: "10", accuracy: "95",
    text: "As armas e os baroes assinalados Que da ocidental praia Lusitana Por mares nunca de antes navegados Passaram ainda alem da Taprobana"
  },
  "Bohemian Rhapsody": {
    name: "Bohemian Rhapsody",
    description: "Bohemian Rhapsody first verse",
    developer: "Miguel José", wpm: "43", accuracy: "60",
    text: "Is this the real life Is this just fantasy Caught in a landside No escape from reality"
  },
  "Anel de Rubi": {
    name: "Anel de Rubi",
    description: "Musica Anel de Rubi",
    developer: "Daniel Silva", wpm: "125", accuracy: "95",
    text: "Tu eras aquela que eu mais queria Para me dar algum conforto e companhia"
  },
  "D'zrt": {
    name: "D'zrt",
    description: "Musica Para mim Tanto me Faz",
    developer: "Carlos Emanuel", wpm: "97", accuracy: "83",
    text: "Acabou ve se entendes Nao vale a pena menos que tu tentes"
  }
}

export const themes:
  {
    [key: string]: {
      colorblind: boolean;
      color_definitions: string[][];
    };
  }
  = {
  "Default": {
    "colorblind": true,
    "color_definitions": [
      ["--main-text-color", "#FFF"],
      ["--main-bg-color", "#66ACA8"],
      ["--primary-button-color", "#CA9100"],
      ["--primary-button-color-hover", "#c08a00"],
      ["--primary-button-color-active", "#d69b04"],
      ["--primary-button-text-color", "#FFF"],
      ["--secondary-button-color", "#172A3A"],
      ["--secondary-button-color-hover", "#080f14"],
      ["--secondary-button-color-active", "#162835"],
      ["--secondary-button-text-color", "#FFF"],
      ["--dropdown-color", "#f9f9f9"],
      ["--morse-input-color", "#FFF"],
      ["--morse-input-text-color", "#000"],
      ["--logo-grad-start", "#fff"],
      ["--logo-grad-stop", "#5AD4EF"],
      ["--linear-gradient-start", "#528986"],
      ["--linear-gradient-stop", "#61A6A1"],
      ["--top-tab-text", "#fff"],
      ["--bubbles-color", "#cf95031c"],
      ["--bubbles-color-secondary", "#cf95031c"],
      ["--form-text-color", "#fff"]
    ]
  },
  "Pink": {
    "colorblind": false,
    "color_definitions": [
      ["--main-text-color", "#000",],
      ["--main-bg-color", "#ffffff",],
      ["--primary-button-color", "#dc91cc",],
      ["--primary-button-color-hover", "#dc91ccbb",],
      ["--primary-button-color-active", "#dc91ccdd",],
      ["--primary-button-text-color", "#FFF",],
      ["--secondary-button-color", "#64536f",],
      ["--secondary-button-color-hover", "#64536fbb",],
      ["--secondary-button-color-active", "#64536fdd",],
      ["--secondary-button-text-color", "#FFF",],
      ["--dropdown-color", "#f9f9f9",],
      ["--morse-input-color", "#FFF",],
      ["--morse-input-text-color", "#000",],
      ["--logo-grad-start", "#000",],
      ["--logo-grad-stop", "#b6e4ee",],
      ["--linear-gradient-start", "#d2fbfb",],
      ["--linear-gradient-stop", "#57b1ff",],
      ["--top-tab-text", "#333",],
      ["--bubbles-color", "#f9a0ff4f",],
      ["--bubbles-color-secondary", "#57b1ff2b",],
      ["--form-text-color", "#fff",]]
  },
  "Cyan": {
    "colorblind": false,
    "color_definitions": [
      ["--main-text-color", "#000",],
      ["--main-bg-color", "#e4f7ff",],
      ["--primary-button-color", "#cc9600",],
      ["--primary-button-color-hover", "#cc9600bb",],
      ["--primary-button-color-active", "#cc9600dd",],
      ["--primary-button-text-color", "#FFF",],
      ["--secondary-button-color", "#172A3A",],
      ["--secondary-button-color-hover", "#172A3Abb",],
      ["--secondary-button-color-active", "#172A3Add",],
      ["--secondary-button-text-color", "#FFF",],
      ["--dropdown-color", "#f9f9f9",],
      ["--morse-input-color", "#FFF",],
      ["--morse-input-text-color", "#000",],
      ["--logo-grad-start", "#000",],
      ["--logo-grad-stop", "#b6e4ee",],
      ["--linear-gradient-start", "#7fd6d0",],
      ["--linear-gradient-stop", "#6dbdff",],
      ["--top-tab-text", "#333",],
      ["--bubbles-color", "#cf95031c",],
      ["--bubbles-color-secondary", "#cf95031c",],
      ["--form-text-color", "#fff"]
    ]
  },
  "Sunset": {
    "colorblind": false,
    "color_definitions": [
      ["--main-text-color", "#000",],
      ["--main-bg-color", "#e8c9af",],
      ["--primary-button-color", "#f4b24e",],
      ["--primary-button-color-hover", "#f4b24ebb",],
      ["--primary-button-color-active", "#f4b24edd",],
      ["--primary-button-text-color", "#fff",],
      ["--secondary-button-color", "#424140",],
      ["--secondary-button-color-hover", "#424140bb",],
      ["--secondary-button-color-active", "#424140dd",],
      ["--secondary-button-text-color", "#fff",],
      ["--dropdown-color", "#f9f9f9",],
      ["--morse-input-color", "#fff",],
      ["--morse-input-text-color", "#000",],
      ["--logo-grad-start", "#000",],
      ["--logo-grad-stop", "#f06f6f",],
      ["--linear-gradient-start", "#d94e4e",],
      ["--linear-gradient-stop", "#d84040",],
      ["--top-tab-text", "#333",],
      ["--bubbles-color", "rgb(244 178 78 / 46%)",],
      ["--bubbles-color-secondary", "rgb(216 74 73 / 51%)",],
      ["--form-text-color", "#fff"]
    ]
  },
  "Grass": {

    "colorblind": false,
    "color_definitions": [
      ["--main-text-color", "#000",],
      ["--main-bg-color", "#ffffff",],
      ["--primary-button-color", "#6de1e6",],
      ["--primary-button-color-hover", "#6de1e6bb",],
      ["--primary-button-color-active", "#6de1e6dd",],
      ["--primary-button-text-color", "#fff",],
      ["--secondary-button-color", "#369669",],
      ["--secondary-button-color-hover", "#369669bb",],
      ["--secondary-button-color-active", "#369669dd",],
      ["--secondary-button-text-color", "#fff",],
      ["--dropdown-color", "#f9f9f9",],
      ["--morse-input-color", "#fff",],
      ["--morse-input-text-color", "#000",],
      ["--logo-grad-start", "#000",],
      ["--logo-grad-stop", "#6ff0e4",],
      ["--linear-gradient-start", "#a3ff91",],
      ["--linear-gradient-stop", "#72bb72",],
      ["--top-tab-text", "#333",],
      ["--bubbles-color", "rgb(63 255 202 / 30%)",],
      ["--bubbles-color-secondary", "rgb(167 255 166 / 51%)",],
      ["--form-text-color", "#fff"]
    ]
  },
  "Bubble Gum": {

    "colorblind": false,
    "color_definitions": [
      ["--main-text-color", "#000",],
      ["--main-bg-color", "#ffffff",],
      ["--primary-button-color", "#f4cf49",],
      ["--primary-button-color-hover", "#f4cf49bb",],
      ["--primary-button-color-active", "#f4cf49dd",],
      ["--primary-button-text-color", "#fff",],
      ["--secondary-button-color", "#484848",],
      ["--secondary-button-color-hover", "#484848bb",],
      ["--secondary-button-color-active", "#484848dd",],
      ["--secondary-button-text-color", "#fff",],
      ["--dropdown-color", "#f9f9f9",],
      ["--morse-input-color", "#fff",],
      ["--morse-input-text-color", "#000",],
      ["--logo-grad-start", "#000",],
      ["--logo-grad-stop", "#ff9ca6",],
      ["--linear-gradient-start", "#ffbdc0",],
      ["--linear-gradient-stop", "#e87b87",],
      ["--top-tab-text", "#333",],
      ["--bubbles-color", "rgb(255 248 34 / 30%)",],
      ["--bubbles-color-secondary", "rgb(228 145 145 / 32%)",],
      ["--form-text-color", "#fff"]
    ]
  },
  "Cyber Punk": {

    "colorblind": false,
    "color_definitions": [
      ["--main-text-color", "#000",],
      ["--main-bg-color", "#f2c0c0",],
      ["--primary-button-color", "#ff5b5b",],
      ["--primary-button-color-hover", "#ff5b5bbb",],
      ["--primary-button-color-active", "#ff5b5bdd",],
      ["--primary-button-text-color", "#fff",],
      ["--secondary-button-color", "#484848",],
      ["--secondary-button-color-hover", "#484848bb",],
      ["--secondary-button-color-active", "#484848dd",],
      ["--secondary-button-text-color", "#fff",],
      ["--dropdown-color", "#f9f9f9",],
      ["--morse-input-color", "#fff",],
      ["--morse-input-text-color", "#000",],
      ["--logo-grad-start", "#000",],
      ["--logo-grad-stop", "#9ce4ff",],
      ["--linear-gradient-start", "#c1c7d4",],
      ["--linear-gradient-stop", "#7e8d90",],
      ["--top-tab-text", "#333",],
      ["--bubbles-color", "rgb(34 214 255 / 30%)",],
      ["--bubbles-color-secondary", "rgb(255 32 32 / 19%)",],
      ["--form-text-color", "#fff"]
    ]
  },
  "Honey": {
    "colorblind": false,
    "color_definitions": [
      ["--main-text-color", "#000",],
      ["--main-bg-color", "#ead0a1",],
      ["--primary-button-color", "#ffbe29",],
      ["--primary-button-color-hover", "#ffbe29bb",],
      ["--primary-button-color-active", "#ffbe29dd",],
      ["--primary-button-text-color", "#fff",],
      ["--secondary-button-color", "#885843",],
      ["--secondary-button-color-hover", "#885843bb",],
      ["--secondary-button-color-active", "#885843dd",],
      ["--secondary-button-text-color", "#fff",],
      ["--dropdown-color", "#f9f9f9",],
      ["--morse-input-color", "#fff",],
      ["--morse-input-text-color", "#000",],
      ["--logo-grad-start", "#000",],
      ["--logo-grad-stop", "#ffb100",],
      ["--linear-gradient-start", "#ffb50b",],
      ["--linear-gradient-stop", "#f48715",],
      ["--top-tab-text", "#333",],
      ["--bubbles-color", "rgb(203 125 88 / 29%)",],
      ["--bubbles-color-secondary", "rgb(244 147 0 / 34%)",],
      ["--form-text-color", "#fff"]
    ]
  }
}