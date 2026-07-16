let score=0,time=30,intv,mv;const d=document.getElementById('dot'),s=document.getElementById('s'),t=document.getElementById('t'),a=document.getElementById('arena');

function track(eventName, data = {}) {
    if (typeof gtag === "function") {
        gtag("event", eventName, data);
    }
}
;
function move(){d.style.left=Math.random()*(a.clientWidth-40)+'px';d.style.top=Math.random()*(a.clientHeight-40)+'px';}d.onclick=()=>{score++;s.textContent=score;move();clearInterval(mv);mv=setInterval(move,Math.max(250,900-score*50));};
function start(){track("game_start");track("play_again");
  score=0;time=30;s.textContent=0;t.textContent=30;move();clearInterval(intv);clearInterval(mv);mv=setInterval(move,900);intv=setInterval(()=>{time--;t.textContent=time;if(time<=0){clearInterval(intv);clearInterval(mv);track("game_over",{score:score});
                                                                                                                                                                                     alert('Game Over! Score: '+score);}},1000);}start();
let scrollTracked = false;

window.addEventListener("scroll", () => {

    if(scrollTracked) return;

    if(window.innerHeight + window.scrollY >= document.body.offsetHeight){

        track("scroll_100");

        scrollTracked = true;
    }

});
