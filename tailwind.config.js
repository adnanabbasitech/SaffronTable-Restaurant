/** @type {import('tailwindcss').Config} */
export default {
 content:["./index.html","./src/**/*.{js,jsx}"],
 theme:{extend:{
  fontFamily:{sans:["Inter","Tajawal","Arial","sans-serif"]},
  colors:{brand:{50:"#fdf1e9",100:"#f9dfcf",500:"#b4532a",600:"#9b3f1f",700:"#7f3219",900:"#3b2417"}}
 }},
 plugins:[]
};
