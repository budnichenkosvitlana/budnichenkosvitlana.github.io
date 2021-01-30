/*
При загрузке страницы - показать на ней кнопку с текстом "Начать".
При нажатии на кнопку показывать одно поле ввода - диаметр круга. 
При пожтверждении ввода создать на странице 100кругов (10*10) случайного цвета. 
При клике на конкретный круг - этот круг должен исчезать, при этом пустое место заполняться, 
то есть все остальные круги должны смещаться влево.
*/
window.addEventListener("load", () => {

    let btn = document.getElementById('btn');

    let circles = [];

    let area = document.createElement('article'); //место, где будем отображать круги
    document.body.append(area);


    for (i = 0; i < 100; i++) { //цикл, который будет создавать нами дивы(круги) пока их не станет == 100
        let div = document.createElement('div');
        div.className = 'round';
        div.style.background = '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();
        area.appendChild(div);
        circles.push(div);

        div.addEventListener("click", () => {
            div.parentNode.removeChild(div); //удаляем элементы со сдвигом влево
        }, false)
    }


    btn.addEventListener("click", () => {
        let a = +prompt('enter the diameter of the circle in "px"') + 'px';

        if (parseInt(a)) {
            for (j = 0; j < i; j++) {
                circles[j].style.width = circles[j].style.height = a;
                document.getElementById('correct').hidden = false;
                document.getElementById('error').hidden = true;
                document.getElementById('btn').hidden = true;
                document.getElementById('headline').hidden = true;
            }
        }
        else if (!parseInt(a)) {
            document.getElementById('error').hidden = false;
            document.getElementById('correct').hidden = true;
            document.getElementById('headline').hidden = true;
        }

    }, false)



}, false)