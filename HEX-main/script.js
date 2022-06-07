let newColor = '';
let color1 = '#ffffff';
let color2 = '#000000';

function changeColor(btn){
    if (btn === 'All'){
        color1 = '#'+Math.floor(Math.random()*16777215).toString(16);
        color2 = '#'+Math.floor(Math.random()*16777215).toString(16);
    } else{
        btn === 'Left' ? color1 = '#'+Math.floor(Math.random()*16777215).toString(16):
        btn === 'Right' ? color2 = '#'+Math.floor(Math.random()*16777215).toString(16):
        alert('error')
    }

    newColor = "linear-gradient(to bottom right," + color1 + "," + color2 + ")"
    document.body.style.background = newColor;
}


let count = 0;
let fonts = ['Lobster', 'Pacifico', 'Oswald', 'Roboto', 'Caveat',];

function changeFont(){
    count++;
    if (count < fonts.length) {
        document.body.style.fontFamily = fonts[count];
    } else {
        count = 0;
    }
}
