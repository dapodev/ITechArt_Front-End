const TAB_SWITCHES = document.querySelectorAll('.tabs__tab-switch');
const TAB_CONTENTS = document.querySelectorAll('.tabs__content');

const ACTIVE_SWITCH_CLASS = 'tabs__tab-switch_active'
const ACTIVE_TAB_CLASS = 'tabs__content_active';

let active_tab =  document.querySelector(`.${ACTIVE_TAB_CLASS}`);
let active_switch = document.querySelector(`.${ACTIVE_SWITCH_CLASS}`);

for(let i = 0; i < TAB_SWITCHES.length; i++) {
    TAB_SWITCHES[i].addEventListener('click', (el)=> {
        for(let i = 0; i < TAB_SWITCHES.length; i++) {
            if(el.currentTarget === TAB_SWITCHES[i]) {
                changeTab(i);
                break;
            }
        }
    });
}

function changeTab(index) {
    if(TAB_SWITCHES[index] !== active_switch) {
        active_switch.classList.remove(ACTIVE_SWITCH_CLASS)
        active_switch = TAB_SWITCHES[index];
        active_switch.classList.add(ACTIVE_SWITCH_CLASS);

        active_tab.classList.remove(ACTIVE_TAB_CLASS);
        active_tab = TAB_CONTENTS[index];
        active_tab.classList.add(ACTIVE_TAB_CLASS);
    }
}