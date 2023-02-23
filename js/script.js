const er1 = document.getElementsByClassName('r1');
const er2 = document.getElementsByClassName('r2');
const ery = document.getElementsByClassName('ry');
const ewyl = document.getElementsByClassName('wyl');
const ewyr = document.getElementsByClassName('wyr');
const eby = document.getElementsByClassName('by');
const eb2 = document.getElementsByClassName('b2');
const eb1 = document.getElementsByClassName('b1');

const HIGH = {search: 'off', replace: 'on'};
const LOW = {search: 'on', replace: 'off'};

let key = 'o';

let r1 = LOW;
let r2 = LOW;
let ry = LOW;
let wyl = LOW;
let wyr = LOW;
let by = LOW;
let b2 = LOW;
let b1 = LOW;

document.addEventListener('keydown', (ev) => {
    key = ev.key.toLowerCase();
});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function digitalOutput(pin, output) {
    for(const e of pin)
        e.classList.replace(output.search, output.replace);
}

function digitalFromBoolean(boolean) {
    return boolean ? HIGH : LOW;
}

async function loop() {
    let time = 0;
    let mod1000;
    let mod500;

    while(true) {
        switch(key) {
            case 'o':
                r1 = LOW;
                r2 = LOW;
                ry = LOW;
                wyl = LOW;
                wyr = LOW;
                by = LOW;
                b2 = LOW;
                b1 = LOW;
                break;
            case 'a':
                r1 = HIGH;
                r2 = HIGH;
                ry = HIGH;
                wyl = HIGH;
                wyr = HIGH;
                by = HIGH;
                b2 = HIGH;
                b1 = HIGH;
                break;
            case 's':
                r1 = LOW;
                r2 = HIGH;
                ry = LOW;
                wyl = HIGH;
                wyr = HIGH;
                by = LOW;
                b2 = HIGH;
                b1 = LOW;
                break;
            case 't':
                r1 = LOW;
                r2 = LOW;
                ry = digitalFromBoolean(time % 1000 <= 300);
                wyl = digitalFromBoolean((time + 100) % 1000 <= 300);
                wyr = digitalFromBoolean((time + 200) % 1000 <= 300);
                by = digitalFromBoolean((time + 300) % 1000 <= 300);
                b2 = LOW;
                b1 = LOW;
                break;
            case 'h':
                r1 = LOW;
                r2 = LOW;
                ry = LOW;
                wyl = HIGH;
                wyr = HIGH;
                by = LOW;
                b2 = LOW;
                b1 = LOW;
                break;
            case '0':
                mod500 = time % 500;
                r1 = digitalFromBoolean(mod500 <= 200);
                r2 = digitalFromBoolean(mod500 <= 200);
                ry = digitalFromBoolean(time % 1000 <= 300);
                wyl = digitalFromBoolean((time + 100) % 1000 <= 300);
                wyr = digitalFromBoolean((time + 200) % 1000 <= 300);
                by = digitalFromBoolean((time + 300) % 1000 <= 300);
                b2 = digitalFromBoolean(mod500 <= 200);
                b1 = digitalFromBoolean(mod500 <= 200);
                break;
            case '1':
                mod1000 = time % 1000;
                mod500 = time % 500;
                r1 = digitalFromBoolean(mod500 <= 250);
                r2 = digitalFromBoolean(mod500 > 250);
                ry = digitalFromBoolean(mod500 <= 250);
                wyl = digitalFromBoolean(mod1000 > 500);
                wyr = digitalFromBoolean(mod1000 <= 500);
                by = digitalFromBoolean(mod500 > 250);
                b2 = digitalFromBoolean(mod500 <= 250);
                b1 = digitalFromBoolean(mod500 > 250);
                break;
            case '2':
                mod1000 = time % 1000;
                mod500 = time % 500;
                r1 = digitalFromBoolean(mod500 <= 250);
                r2 = digitalFromBoolean(mod500 <= 250);
                ry = digitalFromBoolean(mod500 <= 250);
                wyl = digitalFromBoolean(mod1000 > 500);
                wyr = digitalFromBoolean(mod1000 <= 500);
                by = digitalFromBoolean(mod500 > 250);
                b2 = digitalFromBoolean(mod500 > 250);
                b1 = digitalFromBoolean(mod500 > 250);
                break;
            case '3':
                if(time % 2000 < 1000) {
                    r1 = digitalFromBoolean((time + 750) % 1000 > 750);
                    r2 = digitalFromBoolean((time + 500) % 1000 > 750);
                    ry = digitalFromBoolean((time + 250) % 1000 > 750);
                    wyl = digitalFromBoolean(time % 1000 > 750);
                    wyr = digitalFromBoolean(time % 1000 > 750);
                    by = digitalFromBoolean((time + 250) % 1000 > 750);
                    b2 = digitalFromBoolean((time + 500) % 1000 > 750);
                    b1 = digitalFromBoolean((time + 750) % 1000 > 750);
                } else {
                    r1 = digitalFromBoolean((time - 750) % 1000 < 250);
                    r2 = digitalFromBoolean((time - 500) % 1000 < 250);
                    ry = digitalFromBoolean((time - 250) % 1000 < 250);
                    wyl = digitalFromBoolean(time % 1000 < 250);
                    wyr = digitalFromBoolean(time % 1000 < 250);
                    by = digitalFromBoolean((time - 250) % 1000 < 250);
                    b2 = digitalFromBoolean((time - 500) % 1000 < 250);
                    b1 = digitalFromBoolean((time - 750) % 1000 < 250);
                }
                break;
            case '4':
                if(time % 1000 < 500) {
                    r1 = digitalFromBoolean((time + 375) % 500 >= 375);
                    r2 = digitalFromBoolean((time + 250) % 500 >= 375);
                    ry = digitalFromBoolean((time + 125) % 500 >= 375);
                    wyl = digitalFromBoolean(time % 500 >= 375);
                    wyr = digitalFromBoolean((time + 375) % 500 >= 375);
                    by = digitalFromBoolean((time + 250) % 500 >= 375);
                    b2 = digitalFromBoolean((time + 125) % 500 >= 375);
                    b1 = digitalFromBoolean(time % 500 >= 375);
                }
                else {
                    r1 = digitalFromBoolean((time - 375) % 500 < 125);
                    r2 = digitalFromBoolean((time - 250) % 500 < 125);
                    ry = digitalFromBoolean((time - 125) % 500 < 125);
                    wyl = digitalFromBoolean(time % 500 < 125);
                    wyr = digitalFromBoolean((time - 375) % 500 < 125);
                    by = digitalFromBoolean((time - 250) % 500 < 125);
                    b2 = digitalFromBoolean((time - 125) % 500 < 125);
                    b1 = digitalFromBoolean(time % 500 < 125);
                }
                break;
            case '5':
                let mod250 = time % 250;
                let mod125 = time % 125;
                let mod12562 = (time + 62) % 125;
                r1 = digitalFromBoolean(mod125 <= 60);
                r2 = digitalFromBoolean(mod125 <= 60);
                ry = digitalFromBoolean(mod125 <= 60);
                wyl = digitalFromBoolean(mod250 > 125);
                wyr = digitalFromBoolean(mod250 <= 125);
                by = digitalFromBoolean(mod12562 <= 60);
                b2 = digitalFromBoolean(mod12562 <= 60);
                b1 = digitalFromBoolean(mod12562 <= 60);
                break;
        }
        digitalOutput(er1, r1);
        digitalOutput(er2, r2);
        digitalOutput(ery, ry);
        digitalOutput(ewyl, wyl);
        digitalOutput(ewyr, wyr);
        digitalOutput(eby, by);
        digitalOutput(eb2, b2);
        digitalOutput(eb1, b1);
        time += 20;
        await sleep(20);
    }
}

loop();