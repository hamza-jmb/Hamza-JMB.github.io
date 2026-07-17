/* ===========================
   Portfolio v0.2 Alpha
=========================== */

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

html{
    scroll-behavior:smooth;
}

body{

    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

    background:#f5f7fb;

    color:#222;

    line-height:1.7;

}

/* ===========================
   Header
=========================== */

header{

    display:flex;

    justify-content:space-between;

    align-items:center;

    padding:18px 10%;

    background:#ffffff;

    box-shadow:0 2px 12px rgba(0,0,0,.08);

    position:sticky;

    top:0;

    z-index:1000;

}

.logo{

    font-size:24px;

    font-weight:bold;

    color:#2563eb;

}

nav{

    display:flex;

    gap:20px;

}

nav a{

    text-decoration:none;

    color:#444;

    font-weight:600;

    transition:.25s;

}

nav a:hover{

    color:#2563eb;

}

#languageBtn{

    background:#2563eb;

    color:white;

    border:none;

    padding:10px 18px;

    border-radius:10px;

    cursor:pointer;

}

#languageBtn:hover{

    opacity:.9;

}

#language {
    padding: 8px 12px;
    border-radius: 8px;
    border: 2px solid #2563eb;
    background: white;
    color: #333;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
}

#language:hover {
    background: #f0f6ff;
}

/* ===========================
   Hero
=========================== */

.hero{

    text-align:center;

    padding:80px 20px;

}

.hero h1{

    font-size:48px;

    margin-bottom:10px;

}

.hero h2{

    color:#2563eb;

    margin-bottom:15px;

}

.subtitle{

    color:#666;

    font-size:18px;

}

/* ===========================
   Notice
=========================== */

.notice{

    width:90%;

    max-width:900px;

    margin:20px auto;

    background:#fff8e7;

    border-left:6px solid orange;

    border-radius:12px;

    padding:25px;

    text-align:center;

}

[dir="rtl"] .notice {
    border-left: none;
    border-right: 6px solid orange;
}

.progress{

    width:100%;

    height:12px;

    background:#ddd;

    border-radius:50px;

    overflow:hidden;

    margin-top:15px;

}

.progress-bar{

    width:40%;

    height:100%;

    background:#2563eb;

}

/* ===========================
   Cards
=========================== */

.card{

    width:90%;

    max-width:950px;

    margin:35px auto;

    background:white;

    border-radius:18px;

    padding:35px;

    box-shadow:0 8px 25px rgba(0,0,0,.08);

}

.card h2{

    margin-bottom:20px;

    color:#2563eb;

}

/* ===========================
   Skills
=========================== */

.skills{

    display:flex;

    flex-wrap:wrap;

    gap:12px;

}

.skills span{

    background:#2563eb;

    color:white;

    padding:10px 18px;

    border-radius:25px;

    font-size:15px;

}

/* ===========================
   Game
=========================== */

#info{

    margin:18px;

    font-size:20px;

    font-weight:bold;

}

#arena{

    position:relative;

    width:320px;

    height:360px;

    margin:20px auto;

    border:3px solid #2563eb;

    border-radius:15px;

    background:white;

}

#dot{

    position:absolute;

    width:35px;

    height:35px;

    border-radius:50%;

    background:#00c2ff;

    cursor:pointer;

    transition:.12s;

}

#dot:hover{

    transform:scale(1.08);

}

button{

    background:#2563eb;

    color:white;

    border:none;

    padding:12px 24px;

    border-radius:12px;

    cursor:pointer;

    font-size:16px;

    transition: 0.3s ease;

}

button:hover{

    opacity:.9;

}

/* ===========================
   Footer
=========================== */

footer{

    text-align:center;

    padding:40px;

    color:#777;

}

/* ===========================
   RTL Support
=========================== */

[dir="rtl"] header {
    justify-content: flex-end;
}

[dir="rtl"] nav {
    flex-direction: row-reverse;
}

[dir="rtl"] .hero {
    text-align: center;
}

[dir="rtl"] .card {
    text-align: right;
}

[dir="rtl"] .skills {
    justify-content: flex-end;
}



      /* ===========================
   Responsive
=========================== */

@media(max-width:768px){

    header{
        flex-direction:column;
        gap:15px;
        padding:20px;
    }

    nav{
        flex-wrap:wrap;
        justify-content:center;
    }

    .hero h1{
        font-size:34px;
    }

    .hero h2{
        font-size:22px;
    }

    #arena{
        width:280px;
        height:320px;
    }

    .card{
        padding:25px;
    }

    [dir="rtl"] nav {
        flex-direction: row;
    }

}


