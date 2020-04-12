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
    let k = 0;
    keyboard.forEach((element) => {
            k++;
            if (k==56) {
                out +='<br><br>';
            }
            switch (element) {
                case 8:
                    out +='<div class="k-key" style="width:114px" data="' + element + '">' + 'Backspace' + '</div>';
                    out +='<br><br>';
                    break;
                case 192:
                    out +='<div class="k-key" data="' + element + '">' + '`' + '</div>';
                    break;    
                case 189:
                    out +='<div class="k-key" data="' + element + '">' + '-' + '</div>';
                    break;
                case 187: 
                    out +='<div class="k-key" data="' + element + '">' + '=' + '</div>';
                    break;
                case 9:
                    out +='<div class="k-key" data="' + element + '">' + 'Tab' + '</div>';
                    break;    
                case 46:
                    out +='<div class="k-key" data="' + element + '">' + 'Del' + '</div>';
                    out +='<br><br>';
                    break;
                case 20:
                    out +='<div class="k-key" style="width:114px" data="' + element + '">' + 'CapsLock' + '</div>';
                    break;   
                case 13:
                    out +='<div class="k-key" style="width:114px" data="' + element + '">' + 'Enter' + '</div>';
                    out +='<br><br>';
                    break;
                case 16: 
                    out +='<div class="k-key" style="width:114px" data="' + element + '">' + 'Shift' + '</div>';         
                    break;
                case 190:
                    out +='<div class="k-key" data="' + element + '">' + '.' + '</div>';
                    break;
                case 38:
                    out +='<div class="k-key" data="' + element + '">' + '↑' + '</div>';
                    break;
                case 17:
                    out +='<div class="k-key" data="' + element + '">' + 'Ctrl' + '</div>';
                    break;
                case 91: 
                    out +='<div class="k-key" data="' + element + '">' + 'Win' + '</div>';
                    break;
                case 18:
                    out +='<div class="k-key" data="' + element + '">' + 'Alt' + '</div>';
                    break;
                case 32:
                    out +='<div class="k-key" style="width:433px" data="' + element + '">' + ' ' + '</div>';
                    break;       
                case 37:
                    out +='<div class="k-key" data="' + element + '">' + '←' + '</div>';
                    break;
                case 40:
                    out +='<div class="k-key" data="' + element + '">' + '↓' + '</div>';
                    break;   
                case 39:
                    out +='<div class="k-key" data="' + element + '">' + '→' + '</div>';
                    break;  
                case 222: 
                    out +='<div class="k-key" data="' + element + '">' + "'" + '</div>';    
                    break;
                case 219: 
                    out +='<div class="k-key" data="' + element + '">' + "[" + '</div>';
                    break;
                case 220: 
                    out +='<div class="k-key" data="' + element + '">' + "\\" + '</div>';
                    break;
                case 221:
                    out +='<div class="k-key" data="' + element + '">' + "]" + '</div>';
                    break;
                case 186:
                    out +='<div class="k-key" data="' + element + '">' + ";" + '</div>';
                    break;
                case 188:
                    out +='<div class="k-key" data="' + element + '">' + "," + '</div>';
                    break;
                case 191: 
                    out +='<div class="k-key" data="' + element + '">' + "/" + '</div>';    
                    break;
                default:
                    out +='<div class="k-key" data="' + element + '">' + String.fromCharCode(element) + '</div>'; 
                    break;  
            }
    });
    document.querySelector('.keyboard').innerHTML = out;
}

init();

document.onkeydown = function(event){
    //console.log(event.code);
    //console.log(event.keyCode);
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
    //console.log(code);
        switch (code) {
            case 8:
                textarea.value = textarea.value.substring(0, textarea.value.length - 1);
                break;
            case 192:
                textarea.innerHTML += '`';
                break;    
            case 189:
                textarea.innerHTML += '-';
                break;
            case 187: 
                textarea.innerHTML += '=';
                break;    
            case 46:
                textarea.value = textarea.value.substring(0, textarea.value.length - 1);
                break;
            case 20:
                textarea.innerHTML += 'Caps'; // caps
                break;   
            case 16: 
                textarea.innerHTML += "Shift"; // shift        
                break;
            case 190:
                textarea.innerHTML += ".";
                break;
            case 38:
                textarea.innerHTML += "↑";
                break;
            case 17:
                textarea.innerHTML += "Ctrl"; // ctrl
                break;
            case 91: 
                textarea.innerHTML += "Win"; // win
                break;
            case 18:
                textarea.innerHTML += "Alt"; // alt
                break;       
            case 37:
                textarea.innerHTML += "←";
                break;
            case 40:
                textarea.innerHTML += "↓";
                break;   
            case 39:
                textarea.innerHTML += "→";
                break;  
            case 222: 
                textarea.innerHTML += "'";    
                break;
            case 219: 
                textarea.innerHTML += "[";
                break;
            case 220: 
                textarea.innerHTML += "\\";
                break;
            case 221:
                textarea.innerHTML += "]";
                break;
            case 186:
                textarea.innerHTML += ';';
                break;
            case 188:
                textarea.innerHTML += ",";
                break;
            case 191: 
                textarea.innerHTML += "/";    
                break;
            default:
                textarea.innerHTML += String.fromCharCode(code);
                break;  
        }
    }
});

document.write('OS Windows');
