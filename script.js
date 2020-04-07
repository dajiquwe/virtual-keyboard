var textarea = document.createElement("textarea");
textarea.cols = "135";
textarea.rows = "15";
document.body.appendChild(textarea);

var div = document.createElement('div');
div.className = "keyboard";
document.body.appendChild(div);

const keyboard = [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8, 9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220, 46, 20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 13, 16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 38, 16, 17, 91, 18, 32, 18, 37, 40, 39, 17];

function init() {
    let out = '';
    for (let i=0; i< keyboard.length; i++) {
        if (i==14 || i==29 || i==42 || i==55) {
            out +='<br><br>';
        }
        if (keyboard[i] == 8) {
            out +='<div class="k-key" style="width:114px" data="' + keyboard[i] + '">' + 'Backspace' + '</div>';
        }
        else if (keyboard[i] == 192) {
            out +='<div class="k-key" data="' + keyboard[i] + '">' + '`' + '</div>';
        }
        else if (keyboard[i] == 189) {
            out +='<div class="k-key" data="' + keyboard[i] + '">' + '-' + '</div>';
        }
        else if (keyboard[i] == 187) {
            out +='<div class="k-key" data="' + keyboard[i] + '">' + '=' + '</div>';
        }
        else if (keyboard[i] == 9) {           
            out +='<div class="k-key" data="' + keyboard[i] + '">' + 'Tab' + '</div>';
        }
        else if (keyboard[i] == 46) {           
            out +='<div class="k-key" data="' + keyboard[i] + '">' + 'Del' + '</div>';
        }
        else if (keyboard[i] == 20) {           
            out +='<div class="k-key" style="width:114px" data="' + keyboard[i] + '">' + 'CapsLock' + '</div>';
        }
        else if (keyboard[i] == 13) {           
            out +='<div class="k-key" style="width:114px" data="' + keyboard[i] + '">' + 'Enter' + '</div>';
        }
        else if (keyboard[i] == 16) {           
            out +='<div class="k-key" style="width:114px" data="' + keyboard[i] + '">' + 'Shift' + '</div>';
        }
        else if (keyboard[i] == 190) {           
            out +='<div class="k-key" data="' + keyboard[i] + '">' + '.' + '</div>';
        }
        else if (keyboard[i] == 38) {           
            out +='<div class="k-key" data="' + keyboard[i] + '">' + '↑' + '</div>';
        }
        else if (keyboard[i] == 17) {           
            out +='<div class="k-key" data="' + keyboard[i] + '">' + 'Ctrl' + '</div>';
        }
        else if (keyboard[i] == 91) {           
            out +='<div class="k-key" data="' + keyboard[i] + '">' + 'Win' + '</div>';
        }
        else if (keyboard[i] == 18) {           
            out +='<div class="k-key" data="' + keyboard[i] + '">' + 'Alt' + '</div>';
        }
        else if (keyboard[i] == 32) {           
            out +='<div class="k-key" style="width:433px" data="' + keyboard[i] + '">' + ' ' + '</div>';
        }
        else if (keyboard[i] == 37) {           
            out +='<div class="k-key" data="' + keyboard[i] + '">' + '←' + '</div>';
        }
        else if (keyboard[i] == 40) {           
            out +='<div class="k-key" data="' + keyboard[i] + '">' + '↓' + '</div>';
        }
        else if (keyboard[i] == 39) {           
            out +='<div class="k-key" data="' + keyboard[i] + '">' + '→' + '</div>';
        }
        else if (keyboard[i] == 222) {           
            out +='<div class="k-key" data="' + keyboard[i] + '">' + "'" + '</div>';
        }
        else if (keyboard[i] == 219) {           
            out +='<div class="k-key" data="' + keyboard[i] + '">' + "[" + '</div>';
        }
        else if (keyboard[i] == 220) {           
            out +='<div class="k-key" data="' + keyboard[i] + '">' + "\\" + '</div>';
        }
        else if (keyboard[i] == 221) {           
            out +='<div class="k-key" data="' + keyboard[i] + '">' + "]" + '</div>';
        }
        else if (keyboard[i] == 186) {           
            out +='<div class="k-key" data="' + keyboard[i] + '">' + ";" + '</div>';
        }
        else if (keyboard[i] == 188) {           
            out +='<div class="k-key" data="' + keyboard[i] + '">' + "," + '</div>';
        }
        else if (keyboard[i] == 191) {           
            out +='<div class="k-key" data="' + keyboard[i] + '">' + "/" + '</div>';
        }
        else {
        out +='<div class="k-key" data="' + keyboard[i] + '">' + String.fromCharCode(keyboard[i]) + '</div>';
        }
    }
    document.querySelector('.keyboard').innerHTML = out;
}

init();

document.onkeydown = function(event){
    console.log(event.code);
    console.log(event.keyCode);
    document.querySelectorAll('.keyboard .k-key').forEach(function (element) {
        element.classList.remove('active');
    });
    document.querySelector('.keyboard .k-key[data="'+event.keyCode+'"]').classList.add('active');
}

document.querySelectorAll('.keyboard .k-key').forEach(function (element) {
    element.onclick = function(event) {
        document.querySelectorAll('.keyboard .k-key').forEach(function (element) {
            element.classList.remove('active');
    });
    let code = this.getAttribute('data');
    this.classList.add('active');
    console.log(code);
    if (code == 192) {
        textarea.innerHTML += '`';
    }
    else if (code == 189) {
        textarea.innerHTML += '-';
    }
    else if (code == 187) {
        textarea.innerHTML += '=';
    }
    else if (code == 8) {
        textarea.value = textarea.value.substring(0, textarea.value.length - 1);
    }
    else if (code == 219) {
        textarea.innerHTML += "[";
    }
    else if (code == 221) {
        textarea.innerHTML += "]";
    }
    else if (code == 220) {
        textarea.innerHTML += "\\";
    }
    else if (code == 46) {
        textarea.value = textarea.value.substring(0, textarea.value.length - 1);
    }
    else if (code == 20) {
        textarea.innerHTML += 'Caps'; // caps
    }
    else if (code == 186) {
        textarea.innerHTML += ';';
    }
    else if (code == 222) {
        textarea.innerHTML += "'";
    }
    else if (code == 16) {
        textarea.innerHTML += "Shift"; // shift
    }
    else if (code == 188) {
        textarea.innerHTML += ",";
    }
    else if (code == 190) {
        textarea.innerHTML += ".";
    }
    else if (code == 191) {
        textarea.innerHTML += "/";
    }
    else if (code == 38) {
        textarea.innerHTML += "↑";
    }
    else if (code == 17) {
        textarea.innerHTML += "Ctrl"; // ctrl
    }
    else if (code == 91) {
        textarea.innerHTML += "Win"; // win
    }
    else if (code == 18) {
        textarea.innerHTML += "Alt"; // alt
    }
    else if (code == 37) {
        textarea.innerHTML += "←";
    }
    else if (code == 40) {
        textarea.innerHTML += "↓";
    }
    else if (code == 39) {
        textarea.innerHTML += "→";
    }
    else {textarea.innerHTML += String.fromCharCode(code);}
    }
});

document.write('OS Windows');