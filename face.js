function doFirst(){
    let canvas = document.getElementById('canvas');
    let context = canvas.getContext('2d');
    // 格線開始
    context.beginPath();
    canvas.width = 1000;
    canvas.height = 1000;

    // for(let i = 0; i < 100; i++){
    //     let interval = i * 50;
    //     // 水平線
    //     context.moveTo(           0, interval);
    //     context.lineTo(canvas.width, interval);
    //     context.fillText(interval, 0, interval);
        
    //     // 垂直線
    //     context.moveTo(interval,             0);
    //     context.lineTo(interval, canvas.height);
    //     context.fillText(interval, interval, 10);
    // }
    // context.strokeStyle='rgba(0,0,0,0.3)';
    // context.stroke();
    // // 格線結束

    // 喜P助 左半邊
    context.beginPath();
    context.strokeStyle = 'black';
    context.lineWidth = 8;
    context.moveTo(250, 100);
    context.bezierCurveTo(200, 100, 150, 120, 150, 175);
    context.stroke();
    context.beginPath();
    context.strokeStyle = 'black';
    context.lineWidth = 8;
    context.moveTo(150, 175);
    context.bezierCurveTo(150, 220, 190, 225, 250, 225);
    context.stroke();
    // P助 右半邊
    context.beginPath();
    context.strokeStyle = 'black';
    context.lineWidth = 8;
    context.moveTo(250, 100);
    context.bezierCurveTo(300, 100, 350, 120, 350, 175);
    context.stroke();
    context.beginPath();
    context.strokeStyle = 'black';
    context.lineWidth = 8;
    context.moveTo(350, 175);
    context.bezierCurveTo(350, 220, 310, 225, 250, 225);
    context.stroke();
    //喜P助左粉暈
    context.beginPath();
    let red_left_happy = context.createRadialGradient(180,180,17,180,180,10);
    red_left_happy.addColorStop(0, 'white');
    red_left_happy.addColorStop(1, 'pink');
    context.fillStyle= red_left_happy;
    context.fillRect(160,160,35,35);
    //喜P助右粉暈
    context.beginPath();
    let red_right_happy = context.createRadialGradient(325,180,17,325,180,10);
    red_right_happy.addColorStop(0, 'white');
    red_right_happy.addColorStop(1, 'pink');
    context.fillStyle= red_right_happy;
    context.fillRect(305,160,35,35);
    //嘴巴
    context.beginPath();
    context.lineWidth=10;
    context.fillStyle = 'yellow';
    context.arc(250, 150, 7, 0, 2*Math.PI, false);
    context.stroke();
    context.fill();
    context.beginPath();
    context.lineWidth=10;
    context.fillStyle = 'yellow';
    context.arc(250, 170, 7, 0, 2*Math.PI, false);
    context.stroke();
    context.fill();
    //左眼
    context.beginPath();
    context.lineWidth=10;
    context.lineCap = "round";
    context.strokeStyle = 'black';
    context.moveTo(225,150);
    context.lineTo(215,155);
    context.stroke();
    //右眼
    context.beginPath();
    context.lineWidth=10;
    context.lineCap = "round";
    context.strokeStyle = 'black';
    context.moveTo(275,150);
    context.lineTo(285,155);
    context.stroke();
    //左音符
    context.beginPath();
    context.lineWidth=10;
    context.fillStyle = 'pink';
    context.arc(150, 110, 10, 0, 2*Math.PI, false);
    context.fill();
    context.beginPath();
    context.lineWidth=5;
    context.strokeStyle = 'pink';
    context.moveTo(158,112);
    context.lineTo(158,85);
    context.stroke();
    context.beginPath();
    context.lineWidth=8;
    context.lineCap = "round";
    context.strokeStyle = 'pink';
    context.moveTo(160,85);
    context.lineTo(170,87);
    context.stroke();
    // 右音符
    context.beginPath();
    context.lineWidth=10;
    context.fillStyle = 'lightblue';
    context.arc(350, 120, 7, 0, 2*Math.PI, false);
    context.fill();
    context.beginPath();
    context.lineWidth=10;
    context.fillStyle = 'lightblue';
    context.arc(370, 120, 7, 0, 2*Math.PI, false);
    context.fill();
    context.beginPath();
    context.lineWidth=3;
    context.lineCap = "round";
    context.strokeStyle = 'lightblue';
    context.moveTo(355,120);
    context.lineTo(355,98);
    context.stroke();
    context.beginPath();
    context.lineWidth=3;
    context.lineCap = "round";
    context.strokeStyle = 'lightblue';
    context.moveTo(375,120);
    context.lineTo(375,93);
    context.stroke();
    context.beginPath();
    context.lineWidth=3;
    context.lineCap = "round";
    context.strokeStyle = 'lightblue';
    context.moveTo(355,110);
    context.lineTo(375,105);
    context.stroke();
    context.beginPath();
    context.lineWidth=3;
    context.lineCap = "round";
    context.strokeStyle = 'lightblue';
    context.moveTo(355,98);
    context.lineTo(375,93);
    context.stroke();
    

    //怒表情
    context.beginPath();
    let angry = context.createRadialGradient(750, 110,5,750,190,100);
    // let angry = context.createRadialGradient(750, 110,5,750,190,100);
    angry.addColorStop(0, ' #fe2b2b');
    angry.addColorStop(1, 'pink');
    angry.addColorStop(1, 'white');
    context.fillStyle= angry;
    context.fillRect(640,104,220,95);
    // 怒P助 左半邊
    context.beginPath();
    context.strokeStyle = 'black';
    context.lineWidth = 8;
    context.moveTo(750, 100);
    context.bezierCurveTo(700, 100, 650, 120, 650, 175);
    context.stroke();
    context.beginPath();
    context.strokeStyle = 'black';
    context.lineWidth = 8;
    context.moveTo(650, 175);
    context.bezierCurveTo(650, 220, 690, 225, 750, 225);
    context.stroke();
    // P助 右半邊
    context.beginPath();
    context.strokeStyle = 'black';
    context.lineWidth = 8;
    context.moveTo(750, 100);
    context.bezierCurveTo(800, 100, 850, 120, 850, 175);
    context.stroke();
    context.beginPath();
    context.strokeStyle = 'black';
    context.lineWidth = 8;
    context.moveTo(850, 175);
    context.bezierCurveTo(850, 220, 810, 225, 750, 225);
    context.stroke();
    //嘴巴
    context.beginPath();
    context.lineWidth=10;
    context.fillStyle = 'yellow';
    context.arc(750, 150, 7, 0, 2*Math.PI, false);
    context.stroke();
    context.fill();
    context.beginPath();
    context.lineWidth=10;
    context.fillStyle = 'yellow';
    context.arc(750, 170, 7, 0, 2*Math.PI, false);
    context.stroke();
    context.fill();
    //左眼
    context.beginPath();
    context.lineWidth=10;
    context.lineCap = "round";
    context.strokeStyle = 'black';
    context.moveTo(725,150);
    context.lineTo(720,150);
    context.stroke();
    //右眼
    context.beginPath();
    context.lineWidth=10;
    context.lineCap = "round";
    context.strokeStyle = 'black';
    context.moveTo(775,150);
    context.lineTo(780,150);
    context.stroke();
    //生氣符號
    context.beginPath();
    context.lineWidth=6;
    context.lineJoin = "round";
    context.strokeStyle = '#cc0001';
    context.moveTo(640,105);
    context.lineTo(650,100);
    context.lineTo(648,90);
    context.stroke();
    context.beginPath();
    context.lineWidth=6;
    context.lineJoin = "round";
    context.strokeStyle = '#cc0001';
    context.moveTo(642,115);
    context.lineTo(650,110);
    context.lineTo(653,120);
    context.stroke();
    context.beginPath();
    context.lineWidth=6;
    context.lineJoin = "round";
    context.strokeStyle = '#cc0001';
    context.moveTo(675,95);
    context.lineTo(663,98);
    context.lineTo(662,90);
    context.stroke();
    context.beginPath();
    context.lineWidth=6;
    context.lineJoin = "round";
    context.strokeStyle = '#cc0001';
    context.moveTo(675,105);
    context.lineTo(665,106);
    context.lineTo(667,118);
    context.stroke();
    //生氣符號-2
    context.beginPath();
    context.lineWidth=6;
    context.lineJoin = "round";
    context.strokeStyle = '#cc0001';
    context.moveTo(800,85);
    context.lineTo(810,80);
    context.lineTo(808,70);
    context.stroke();
    context.beginPath();
    context.lineWidth=6;
    context.lineJoin = "round";
    context.strokeStyle = '#cc0001';
    context.moveTo(802,95);
    context.lineTo(810,90);
    context.lineTo(813,100);
    context.stroke();
    context.beginPath();
    context.lineWidth=6;
    context.lineJoin = "round";
    context.strokeStyle = '#cc0001';
    context.moveTo(830,75);
    context.lineTo(820,78);
    context.lineTo(818,70);
    context.stroke();
    context.beginPath();
    context.lineWidth=6;
    context.lineJoin = "round";
    context.strokeStyle = '#cc0001';
    context.moveTo(830,85);
    context.lineTo(820,87);
    context.lineTo(824,98);
    context.stroke();



    // 哀P助 左半邊
    context.beginPath();
    context.strokeStyle = 'black';
    context.lineWidth = 8;
    context.moveTo(250, 400);
    context.bezierCurveTo(200, 400, 150, 420, 150, 475);
    context.stroke();
    context.beginPath();
    context.strokeStyle = 'black';
    context.lineWidth = 8;
    context.moveTo(150, 475);
    context.bezierCurveTo(150, 520, 190, 525, 250, 525);
    context.stroke();
    // P助 右半邊
    context.beginPath();
    context.strokeStyle = 'black';
    context.lineWidth = 8;
    context.moveTo(250, 400);
    context.bezierCurveTo(300, 400, 350, 420, 350, 475);
    context.stroke();
    context.beginPath();
    context.strokeStyle = 'black';
    context.lineWidth = 8;
    context.moveTo(350, 475);
    context.bezierCurveTo(350, 520, 310, 525, 250, 525);
    context.stroke();
    //嘴巴
    context.beginPath();
    context.lineWidth=10;
    context.fillStyle = 'yellow';
    context.arc(250, 450, 7, 0, 2*Math.PI, false);
    context.stroke();
    context.fill();
    context.beginPath();
    context.lineWidth=10;
    context.fillStyle = 'yellow';
    context.arc(250, 470, 7, 0, 2*Math.PI, false);
    context.stroke();
    context.fill();
    //左眼
    context.beginPath();
    context.lineWidth=10;
    context.fillStyle = 'black';
    context.arc(220, 460, 3, 0, 2*Math.PI, false);
    context.stroke();
    context.fill();
    //右眼
    context.beginPath();
    context.lineWidth=10;
    context.fillStyle = 'black';
    context.arc(279, 460, 3, 0, 2*Math.PI, false);
    context.stroke();
    context.fill();
    //抖抖符號
    context.beginPath();
    context.lineWidth=6;
    context.lineCap = "round";
    context.strokeStyle = 'black';
    context.moveTo(138,480);
    context.lineTo(139,483);
    context.stroke();
    context.beginPath();
    context.lineWidth=6;
    context.lineCap = "round";
    context.strokeStyle = 'black';
    context.moveTo(138,465);
    context.lineTo(138,468);
    context.stroke();
    context.beginPath();
    context.lineWidth=6;
    context.lineCap = "round";
    context.strokeStyle = 'black';
    context.moveTo(154,426);
    context.lineTo(158,422);
    context.stroke();
    context.beginPath();
    context.lineWidth=6;
    context.lineCap = "round";
    context.strokeStyle = 'black';
    context.moveTo(165,415);
    context.lineTo(170,411);
    context.stroke();
    context.beginPath();
    context.lineWidth=6;
    context.lineCap = "round";
    context.strokeStyle = 'black';
    context.moveTo(283,392);
    context.lineTo(290,394);
    context.stroke();
    context.beginPath();
    context.lineWidth=6;
    context.lineCap = "round";
    context.strokeStyle = 'black';
    context.moveTo(300,396);
    context.lineTo(305,398);
    context.stroke();
    context.beginPath();
    context.lineWidth=6;
    context.lineCap = "round";
    context.strokeStyle = 'black';
    context.moveTo(320,406);
    context.lineTo(325,409);
    context.stroke();
    context.beginPath();
    context.lineWidth=6;
    context.lineCap = "round";
    context.strokeStyle = 'black';
    context.moveTo(358,450);
    context.lineTo(359,455);
    context.stroke();
    // 左眼淚
    context.beginPath();
    context.strokeStyle = '#0190af';
    context.lineWidth = 10;
    context.moveTo(210, 470);
    context.quadraticCurveTo(200, 490, 200, 514);
    context.stroke();
    //右眼淚
    context.beginPath();
    context.strokeStyle = '#0190af';
    context.lineWidth = 10;
    context.moveTo(289, 470);
    context.quadraticCurveTo(299, 490, 301, 514);
    context.stroke();


    // 樂P助 左半邊
    context.beginPath();
    context.strokeStyle = 'black';
    context.lineWidth = 8;
    context.moveTo(750, 400);
    context.bezierCurveTo(700, 400, 650, 420, 650, 475);
    context.stroke();
    context.beginPath();
    context.strokeStyle = 'black';
    context.lineWidth = 8;
    context.moveTo(650, 475);
    context.bezierCurveTo(650, 520, 690, 525, 750, 525);
    context.stroke();
    // P助 右半邊
    context.beginPath();
    context.strokeStyle = 'black';
    context.lineWidth = 8;
    context.moveTo(750, 400);
    context.bezierCurveTo(800, 400, 850, 420, 850, 475);
    context.stroke();
    context.beginPath();
    context.strokeStyle = 'black';
    context.lineWidth = 8;
    context.moveTo(850, 475);
    context.bezierCurveTo(850, 520, 810, 525, 750, 525);
    context.stroke();
    //嘴巴
    context.beginPath();
    context.lineWidth=10;
    context.fillStyle = 'yellow';
    context.arc(750, 450, 7, 0, 2*Math.PI, false);
    context.stroke();
    context.fill();
    context.beginPath();
    context.lineWidth=10;
    context.fillStyle = 'yellow';
    context.arc(750, 470, 7, 0, 2*Math.PI, false);
    context.stroke();
    context.fill();
    //左眼
    context.beginPath();
    context.lineWidth=10;
    context.fillStyle = 'black';
    context.arc(720, 460, 3, 0, 2*Math.PI, false);
    context.stroke();
    context.fill();
    //右眼
    context.beginPath();
    context.lineWidth=10;
    context.fillStyle = 'black';
    context.arc(779, 460, 3, 0, 2*Math.PI, false);
    context.stroke();
    context.fill();
    //樂P助左粉暈
    context.beginPath();
    let red_left_sohappy = context.createRadialGradient(680,480,17,680,480,10);
    red_left_sohappy.addColorStop(0, 'white');
    red_left_sohappy.addColorStop(1, 'pink');
    context.fillStyle= red_left_sohappy;
    context.fillRect(660,460,35,35);
    //樂P助右粉暈
    context.beginPath();
    let red_right_sohappy = context.createRadialGradient(825,480,17,825,480,10);
    red_right_sohappy.addColorStop(0, 'white');
    red_right_sohappy.addColorStop(1, 'pink');
    context.fillStyle= red_right_sohappy;
    context.fillRect(805,460,35,35);
    //左雞爪
    context.beginPath();
    context.strokeStyle= 'black';
    context.lineWidth= 10;
    context.moveTo(740, 500);
    context.bezierCurveTo(715, 520, 715, 530, 715, 530);
    context.bezierCurveTo(720, 545, 740, 545, 740, 540);
    context.lineTo(740, 500);
    context.stroke();
    context.fill();
    //右雞爪
    context.beginPath();
    context.strokeStyle= 'black';
    context.lineWidth= 10;
    context.moveTo(760, 500);
    context.bezierCurveTo(785, 520, 785, 530, 785, 530);
    context.bezierCurveTo(780, 545, 760, 545, 760, 540);
    context.lineTo(760, 500);
    context.stroke();
    context.fill();
    // 樂符號-1
    context.beginPath();
    context.strokeStyle= '#cdcc00';
    context.fillStyle= 'yellow';
    context.lineWidth= 5;
    context.moveTo(645,395);
    context.lineTo(635,400);
    context.lineTo(645,405);
    context.lineTo(650,415);
    context.lineTo(655,405);
    context.lineTo(665,400);
    context.lineTo(655,395);
    context.lineTo(650,385);
    context.lineTo(645,395);
    context.closePath();
    context.fill();
    context.stroke();
    // 樂符號-2
    context.beginPath();
    context.strokeStyle= '#cdcc00';
    context.fillStyle= 'yellow';
    context.lineWidth= 5;
    context.moveTo(745,370);
    context.lineTo(735,375);
    context.lineTo(745,380);
    context.lineTo(750,390);
    context.lineTo(755,380);
    context.lineTo(765,375);
    context.lineTo(755,370);
    context.lineTo(750,360);
    context.lineTo(745,370);
    context.closePath();
    context.fill();
    context.stroke();
    // 樂符號-3
    context.beginPath();
    context.strokeStyle= '#cdcc00';
    context.fillStyle= 'yellow';
    context.lineWidth= 5;
    context.moveTo(845,395);
    context.lineTo(835,400);
    context.lineTo(845,405);
    context.lineTo(850,415);
    context.lineTo(855,405);
    context.lineTo(865,400);
    context.lineTo(855,395);
    context.lineTo(850,385);
    context.lineTo(845,395);
    context.closePath();
    context.fill();
    context.stroke();

}
window.addEventListener('load',doFirst);



// 2
// window.onload = function(){}

// 3
// function doFirst(){}
// window.onload = doFirst;