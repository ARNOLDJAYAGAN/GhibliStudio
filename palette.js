

const body = document.getElementsByTagName('body')[0];

const DEFAULT_THEME = '';
const DARK_THEME = 'dark-theme';
const LIGHT_THEME = 'light-theme'

function updateTheme(theme){
    body.classList.forEach((key) => {
        body.classList.remove(key);
    });

    if(theme) {
        body.classList.add(theme);
    }
}