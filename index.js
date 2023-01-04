// hehe

(async () => {
  let counter = -50;
  const sleep = ms => new Promise(res => setTimeout(res, ms));

  // heh
  var audio = new Audio('rage_type_beat_1_album.mp3');
  audio.play();
  audio.loop = true;

  //other vars
  muted = false;

  function drawline(x,y,x1,y1,clr){
    ctx.beginPath();
    ctx.lineWidth = 4;
    ctx.strokeStyle = clr;
    ctx.fillStyle = clr;
    ctx.moveTo(x,y);
    ctx.lineTo(x1,y1)
    ctx.stroke();
  }

  function drawcircle(x,y,rad,circlr){
    ctx.beginPath();
    ctx.strokeStyle = circlr;
    ctx.arc(x, y, rad, 0, 2 * Math.PI); //-((height)/(boardSize+2)/2)
    ctx.stroke(); 
  }

  function positify(x){
    if (x >= 0){ 
      return x 
    } else {
      return 0
    }
  }

  function drawcircle(x,y,rad,circlr){
    ctx.beginPath();
    ctx.fillStyle = circlr;
    ctx.arc(x, y, rad, 0, 2 * Math.PI); //-((height)/(boardSize+2)/2)
    ctx.fill(); 
  }

  function drawcircleq(x,y,rad,circlr,s,e){
    ctx.beginPath();
    ctx.fillStyle = circlr;
    ctx.arc(x, y, rad, s * Math.PI, e * Math.PI); //-((height)/(boardSize+2)/2)
    ctx.fill(); 
  }

  function toggleaudio(){
    if (audio.volume != 0){
      audio.volume = 0; muter.textContent='🔇';
      muted = true;
    } else {
      audio.volume = 1; muter.textContent='🔊';
      muted = false;
    }
  }

  function setoverlay(ovl,dv){
    ovl.style.top = dv.offsetTop +'px';
    ovl.style.left = dv.offsetLeft +'px';
    ovl.style.height = dv.offsetHeight +'px';
    ovl.style.width = dv.offsetWidth +'px';
  }

  function alignproperly(dv){
    let h = dv.offsetHeight;
    dv.style.position = 'absolute';
    dv.style.top = h+'px';
    dv.style.left = window.innerWidth/2-dv.offsetWidth/2+'px';
  }

  function revealmore(x){
    let l = document.getElementById('more');
    l.style.display = 'block';
    l.style.opacity = 0;
    // nvm ignore the opacity stuff
    let c = 0;
    (async () => {
      while (c < 100){
        l.style.opacity = 0;
        await sleep(2);
        c += 1;
      }
    })();
  }

  async function slideel(el){
    let elm = document.getElementById(el);
    (async () => {
      let c = 0;
      let s = 40;
      while (c < 100 || s > 1){
        elm.style.opacity = c/100;
        elm.style.marginTop = s+'px';
        await sleep(2);
        s = s - (s+10)/100;
        c += 1;
      }
    })();
  }

  async function changeel(e1,e2){
    let elm1 = document.getElementById(e1);
    let elm2 = document.getElementById(e2);
    (async () => {
      let c = 0;
      while (c < 100){
        elm1.style.opacity = (1-c/100);
        await sleep(2);
        c += 1;
      }
      elm1.style.display = 'none';
      elm2.style.display = 'block';
      while (c > 0){
        elm2.style.opacity = (1-c/100);
        await sleep(2);
        c -= 1;
      }
    })();
  }

  // def all teh consts
  let h1 = document.getElementById('header1');
  let h2 = document.getElementById('header2');
  let h3 = document.getElementById('header3');
  let fav = document.getElementById('fav');
  let title = document.getElementById('title');
  let nav = document.getElementById('nav1');
  let head = document.getElementById('head');
  let head1 = document.getElementById('head1');
  let mainimg = document.getElementById('mainimg');
  let ol3 = document.getElementById('overlay3');
  let vid = document.getElementById('vid');
  vid.width = window.innerWidth;

  let dis1 = document.getElementById('dis1');
  dis1.style.top = (window.innerHeight-dis1.offsetHeight*1.5) +'px';
  dis1.style.left = (window.innerWidth/2-dis1.offsetWidth*1.25) +'px';

  let dis2 = document.getElementById('dis2');
  dis2.style.top = (window.innerHeight-dis1.offsetHeight*1.5) +'px';
  dis2.style.left = (window.innerWidth/2+dis1.offsetWidth*0.25) +'px';

  let fwb = document.getElementById('fwb');
  fwb.style.top = (window.innerHeight+dis1.offsetHeight*1.5) +'px';
  fwb.style.height = (window.innerHeight) +'px';

  let rt1 = document.getElementById('readertext1');
  // rt1.style.top = (window.innerHeight*1.90+dis1.offsetHeight*1.5) +'px';
  rt1.style.left = window.innerWidth/2-rt1.offsetWidth/2+'px'; //i disagree this isnt as good

  let muter = document.getElementById('muter');
  muter.style.top = (window.innerHeight-dis1.offsetHeight*1.5) +'px';
  muter.style.left = (dis1.offsetWidth*0.1) +'px';
  muter.addEventListener('click',toggleaudio);

  let hc = document.getElementById('hcontainer');
  let hol = document.getElementById('headoverlay');
  hol.style.top = head.offsetTop +'px';
  hol.style.left = head.offsetLeft +'px';
  hol.style.height = head.offsetHeight +'px';
  hol.style.width = head.offsetWidth +'px';
  let hol2 = document.getElementById('headoverlay2');
  hol2.style.top = head.offsetTop +'px';
  hol2.style.left = head.offsetLeft +'px';
  hol2.style.height = head.offsetHeight +'px';
  hol2.style.width = head.offsetWidth +'px';

  let headtopinit = head.offsetHeight;
  let headleftinit = window.innerWidth/2-head.offsetWidth/2;


  let htop = head.offsetTop;

  // for cool effect
  let line1 = document.getElementById('line1');
  let line2 = document.getElementById('line2');
  let line3 = document.getElementById('line3');
  let line4 = document.getElementById('line4');
  let line5 = document.getElementById('line5');

  let enddisp = document.getElementById('enddisp');
  let e;
  let ebool = true;
  let changeds1 = false;
  let changeds2 = false;
  let changeds3 = false;
  let slidels = false;

  let vid2 = document.getElementById('v2');
  let www = document.getElementById('www');
  let end = document.getElementById('end');

  // setup
  
  let niceovl = document.getElementById('niceoverlay');
  niceovl.style.left = fwb.offsetLeft+"px";
  niceovl.style.top = fwb.offsetTop+"px";
  niceovl.style.zIndex = 100;

  let lucovl = document.getElementById('lucoverlay');
  lucovl.style.backgroundImage = 'linear-gradient(to right, rgba(0,0,0,0.5),rgba(0,0,0,0))';
  let luc = document.getElementById('luc');
  setoverlay(lucovl,niceovl);
  lucovl.style.height = fwb.offsetHeight+'px';

  //alignproperly(line5);

  let bodyx = document.getElementById('firstsrc');
  let ovlbody = document.getElementById('ovlbody');
  setoverlay(ovlbody,bodyx);

  let vidovl = document.getElementById('vidovl');

  // cool effect setup
  let l5c = document.getElementById('line5c');
  setoverlay(l5c,line5);
  l5c.style.top = line5.offsetTop-4*line5.offsetHeight/5+'px';
  l5c.style.height = 8*line5.offsetHeight/5+'px';
  //l5c.style.left = window.innerWidth/2-l5c.offsetWidth/2+'px';

  let l1c = document.getElementById('line1c');
  setoverlay(l1c,line1);
  l1c.style.top = line1.offsetTop-4*line1.offsetHeight/5+'px';
  l1c.style.height = 8*line1.offsetHeight/5+'px';

  let l2c = document.getElementById('line2c');
  setoverlay(l2c,line2);
  l2c.style.top = line2.offsetTop-4*line2.offsetHeight/5+'px';
  l2c.style.height = 8*line2.offsetHeight/5+'px';

  let l3c = document.getElementById('line3c');
  setoverlay(l3c,line3);
  l3c.style.top = line3.offsetTop-4*line3.offsetHeight/5+'px';
  l3c.style.height = 8*line3.offsetHeight/5+'px';

  let l4c = document.getElementById('line4c');
  setoverlay(l4c,line4);
  l4c.style.top = line4.offsetTop-4*line4.offsetHeight/5+'px';
  l4c.style.height = 8*line4.offsetHeight/5+'px';

  // this is the base
  //ctx.fillRect(ps.offsetLeft,ps.offsetTop,ps.offsetWidth,ps.offsetHeight);
  buttonglower = 0;

  linemaker = 0;
  linemaker2 = 0;
  savelmaker1 = 0;
  brightner1 = 0;
  brightner2 = 0;
  brightner3 = 0;
  brightner4 = 0;
  brightner5 = 0;
  brightner6 = 0;
  brightner7 = 0;
  brightner8 = 0;

  let ctrr = 0;
  let ctrr2 = 0;

  let ftextreveal = 1;
  let f2 = -200;
  let ftriggered = false;
  let ftext = `Introducing Lucid Air. The longest range, fastest charging luxury electric car in the world. With incredible horsepower and an unrivaled range of up to 520 miles per charge, it's like no car you've ever known. All packed into an elegantly efficient design - inspired by California.`;
  let fdone = false;

  // this is the cool canvas stuff
  let ctime = 0;
  let cblock = 0;
  let cmover = 0;

  //vid2.currentTime = 10;

  while (true){

    await sleep(2);

    if (counter <= 100){
      let cl = (counter/100)*255;
      let cl2 = cl*2-255/2;
      let dimclr = 'rgb('+cl+','+cl+','+cl+')';
      let dimclr2 = 'rgb('+cl2+','+cl2+','+cl2+')';
      let opac = 'rgba('+255+','+255+','+255+','+((counter/100))+')';

      // header fade
      h1.style.color = opac;
      h2.style.color = opac;
      h3.style.color = opac;
      fav.style.opacity = cl/255;
      title.style.color = dimclr;
      nav.style.borderColor = dimclr;
      mainimg.style.opacity = 0;
      ol3.style.opacity = (1-cl/255);

      hol.style.width = head.offsetWidth*(counter/100) +'px';
      hol2.style.width = head.offsetWidth*(1-(counter/100)) +'px';
      hol2.style.left = head.offsetWidth*(counter/100) +'px';

      //hol.style.backgroundImage = 'linear-gradient(to right,rgba(0,0,0,'+(1-(counter/100))+'),rgba(0,0,0,'+(1-(counter/1000))+'))';

    
      //await sleep(2);
      if (counter <= 100){
        counter = counter + (105-counter)/100;
      }
    } else {
      ol3.style.display = 'none';
      counter += 1;
      //await sleep(2);
    }

    if (counter < 350){
      head.style.color = 'rgba('+255+','+255+','+255+','+(counter-100)/100+')';

      head1.style.color = 'rgba('+255+','+255+','+255+','+(counter-200)/100+')';
      dis1.style.color = 'rgba('+255+','+255+','+255+','+(counter-250)/100+')';
      dis1.style.borderColor = 'rgba('+255+','+255+','+255+','+(counter-250)/100+')';
      dis2.style.color = 'rgba('+255+','+255+','+255+','+(counter-250)/100+')';
      dis2.style.borderColor = 'rgba('+255+','+255+','+255+','+(counter-250)/100+')';
    }

    head.style.top = headtopinit+(100-(ctrr-100))+'px';
    head.style.left = headleftinit+'px' ;
    head1.style.top = headtopinit+(100-(ctrr2-200))+head.offsetHeight*1.7+'px';
    head1.style.left = window.innerWidth/2-head1.offsetWidth/2+'px' ;

    if (ctrr <= 200){
      ctrr = ctrr + (201-ctrr)/200;
    }
    if (ctrr2 <= 300){
      ctrr2 = ctrr2 + (301-ctrr2)/200;
    }


    hol2.style.left = head.offsetWidth*(counter/100) +'px';
    hol2.style.width = head.offsetWidth-head.offsetWidth*(counter/100) +'px';

    if (window.scrollY > window.innerHeight+dis1.offsetHeight*2){
      vid.style.opacity = 0.5;
      rt1.style.display = 'block';
      vidovl.style.display = 'block';
    } else {
      vid.style.opacity = 1;
      rt1.style.display = 'none';
      vidovl.style.display = 'none';
    }

    var mutelineclr = 'rgb(50,50,50)';
    var brightlineclr = 'rgb(100,100,100)';

    // mute the audio evetually
    if (fwb.offsetTop > window.scrollY && !muted){
      audio.volume = (fwb.offsetTop-window.scrollY)/fwb.offsetTop;
    }
    

    // upgrade the button stuff
    buttonglower += 0.5;
    if (buttonglower >= 500){
      buttonglower = 0;
    }

    // ok this is the cool effect
    let scrl = window.scrollY-window.innerHeight; // the starting point for this
    //console.log(window.scrollY);
   
    scrl = window.scrollY-window.innerHeight;

    if (scrl > line1.offsetTop){
      let passed = (scrl-line1.offsetTop)*3-window.innerHeight*2;
      //l5c.style.left = passed+line5.offsetLeft+'px';
      l1c.style.width = (passed+line1.offsetLeft-1)+'px'
    } else {
      l1c.style.width = (0)+'px'
    }
    if (scrl > line2.offsetTop){
      l2c.style.display = 'block';
      let passed = (scrl-line2.offsetTop)*3-window.innerHeight*3;
      //l5c.style.left = passed+line5.offsetLeft+'px';
      l2c.style.width = (passed+line2.offsetLeft-1)+'px'
    } else {
      l2c.style.display = 'none';
      l2c.style.width = (0)+'px'
    }
    if (scrl > line3.offsetTop){
      l3c.style.display = 'block';
      let passed = (scrl-line3.offsetTop)*3-window.innerHeight*4;
      //l5c.style.left = passed+line5.offsetLeft+'px';
      l3c.style.width = (passed+line3.offsetLeft-1)+'px'
    } else {
      l3c.style.display = 'none';
      l3c.style.width = (0)+'px'
    }
    if (scrl > line4.offsetTop){
      l4c.style.display = 'block';
      let passed = (scrl-line4.offsetTop)*3-window.innerHeight*5;
      //l5c.style.left = passed+line5.offsetLeft+'px';
      l4c.style.width = (passed+line4.offsetLeft-1)+'px'
    } else {
      l4c.style.display = 'none';
      l4c.style.width = (0)+'px'
    }
    if (scrl > line5.offsetTop){
      let passed = (scrl-line5.offsetTop)*3-window.innerHeight*6;
      //l5c.style.left = passed+line5.offsetLeft+'px';
      l5c.style.width = (passed+line5.offsetLeft-1)+'px'
    } else {
      l5c.style.width = (0)+'px'
    }

    scrl = window.scrollY-window.innerHeight/2.5;

    // do this anyway
    rt1.style.position = 'fixed';
    rt1.style.top = '100px';

    if (scrl > line5.offsetTop+window.innerHeight*3.5){
      // let y = rt1.offsetHeight;
      // rt1.style.position = 'absolute';
      // rt1.style.top = rt1.offsetHeight+y+window.innerHeight*2.84+'px';

      // dont make it absolutely positioned just fade it away

      rt1.style.opacity = 1-(scrl-(line5.offsetTop+window.innerHeight*3.5))/500; // basically double the rate of the background

      vid.style.opacity = 0.5-(scrl-(line5.offsetTop+window.innerHeight*3.5))/1000;
    }


    // lets not do this it looks wayy ugly
    // if (bodyx.offsetTop <= scrl && scrl <= bodyx.offsetTop+bodyx.offsetHeight){
    //   ovlbody.style.top = scrl+'px';
    //   ovlbody.style.height = (bodyx.offsetTop+bodyx.offsetHeight-scrl)+'px';
    // } else if (scrl >= bodyx.offsetTop+bodyx.offsetHeight){
    //   ovlbody.style.display = 'none';
    // } else {
    //   ovlbody.style.top = bodyx.offsetTop+'px';
    // }

    // so basically it lags more the more it progresses
    //but then just dont render the stuff thats to the left of the frame


    if (ftriggered && ftextreveal < 100 && fdone){
      ftextreveal = ftextreveal+(101-ftextreveal)/250;
    }

    if (ftriggered){
      f2 += 1;
    }

    if (ftextreveal > 100){
      ftextreveal = 100;
    }

    //console.log("text "+ftextreveal);

    bodyx.textContent = ftext.substring(0,ftextreveal/100*(ftext.length));

    ovlbody.style.display = 'none';
    //                                                                        // disntance from 33
    lucovl.style.backgroundImage = 'linear-gradient(to right, rgba(0,0,0,'+((Math.abs(25-f2)/200))+'),rgba(0,0,0,'+(Math.abs(75-f2)/200)+'))';

    if (f2 >= 275){
      fdone = true;
    }

    if (f2 >= 275 && luc.style.display != 'none'){
      luc.style.display = 'none';
      f2 = -200;
      console.log('no more carro');
    }

    if (luc.style.display == 'none' && f2 >= 50){
      lucovl.style.display = 'none';
    }

    if (window.scrollY > 250){
      ftriggered = true;
    }

    if (window.scrollY > line5.offsetTop+window.innerHeight*4.8){
      // vid2.pause();
      // vid2.currentTime += 0.001;
      vid2.play();
      // console.log(vid2.currentTime);
    }

    if (vid2.currentTime >= 17.6){
      vid2.pause();
    }

    // console.log(enddisp.offsetTop);

    if (ebool){
      e = enddisp.offsetTop % window.innerHeight - window.innerHeight/3.75;
    }

    // this is where we stop the other video
    if (window.scrollY > line5.offsetTop+window.innerHeight*6.8){
      enddisp.style.position = 'fixed';
      //console.log(e);
      enddisp.style.top = e+'px';
      www.style.position = 'fixed';
      www.style.top = e+enddisp.offsetHeight+'px';

      if (ebool && !slidels){
        slideel('d1');
        slideel('d2');
        slideel('d3');
        slideel('d4');
      }

      ebool = false;
    } else {
      enddisp.style.position = 'relative';
    }

    if (window.scrollY > line5.offsetTop+window.innerHeight*6.8+500 && !changeds1){
      changeds1 = true;
      slidels = false;
      (async () => {

        changeel('ddesign','dcharging');
        changeel('designv','chargingv');

        await sleep(1000);

        slideel('c1');
        slideel('c2');
        slideel('c3');
        slideel('c4');
        slidels = true;
      })();
    } else if (changeds1 && window.scrollY < line5.offsetTop+window.innerHeight*6.8+400){ // the other way
      changeds1 = false;
      changeel('dcharging','ddesign');
      changeel('chargingv','designv');
    }

    if (window.scrollY > line5.offsetTop+window.innerHeight*6.8+1000 && !changeds2){
      changeds2 = true;
      slidels = false;
      (async () => {

        changeel('dcharging','dperformance');
        changeel('chargingv','performancev');

        await sleep(1000);

        slideel('p1');
        slideel('p2');
        slideel('p3');
        slideel('p4');
        slidels = true;
      })();
    } else if (changeds2 && window.scrollY < line5.offsetTop+window.innerHeight*6.8+900){ // the other way
      changeds2 = false;
      changeel('dperformance','dcharging');
      changeel('performancev','chargingv');
    }

    if (window.scrollY > line5.offsetTop+window.innerHeight*6.8+1500 && !changeds3){
      changeds3 = true;
      slidels = false;
      (async () => {

        changeel('dperformance','dconnectivity');
        changeel('performancev','connectivityv');

        await sleep(1000);

        slideel('ce1');
        slideel('ce2');
        slideel('ce3');
        slideel('ce4');
        slidels = true;
      })();
    } else if (changeds3 && window.scrollY < line5.offsetTop+window.innerHeight*6.8+1400){ // the other way
      changeds3 = false;
      changeel('dconnectivity','dperformance');
      changeel('connectivityv','performancev');
    }

    if (window.scrollY > line5.offsetTop+window.innerHeight*6.8+2000){ //fade it away
      enddisp.style.opacity = 1-(window.scrollY-(line5.offsetTop+window.innerHeight*6.8+2000))/250;
    }

    end.style.top = line5.offsetTop+window.innerHeight*6.8+3500+"px";

  }
})();
