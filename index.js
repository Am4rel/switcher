const THEMES = {
    dark: "dark",
    brigth: "brigth",
};

const switcher = document.querySelector(".switch_input");
const container = document.querySelector(".container");

const setDarkTheme = () => {
    container.classList.remove(THEMES.brigth);
    container.classList.add(THEMES.dark);

    localStorage.setItem("theme", THEMES.dark);

    switcher.checked = true;
};

const setBrigthTheme = () => {
    container.classList.remove(THEMES.dark);
    container.classList.add(THEMES.brigth);
    
    localStorage.setItem("theme", THEMES.brigth);

    switcher.checked = false;
}

const themeSwitch = () => {
    if (container.classList.contains(THEMES.brigth)){
        setDarkTheme();
    }else {
        setBrigthTheme();
    };
};

if (!localStorage.getItem("theme")){
    localStorage.setItem("theme", THEMES.brigth);
}else{
    localStorage.getItem("theme") === THEMES.brigth ? setBrigthTheme() : setDarkTheme();
};

switcher.addEventListener("change", themeSwitch);

