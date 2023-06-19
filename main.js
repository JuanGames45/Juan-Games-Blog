/*Poner background color solo en ID content a menos que sea necesario*/
/*Hay que poner id back para el fondo blanco de toda la pagina, así será todo por bloques*/
* {
  box-sizing: border-box;
}

body{

  background: url(https://www.juangames.com/media/images/backgrounds/background.png);
  background-repeat: repeat;
  padding: 20px 40px 20px 40px;
}

@font-face {
  font-family: 'MS Sans win 95';
  src: url('https://www.juangames.com/media/fonts/Ms-Sans-Serif-8pt.ttf');
}

@font-face {
  font-family: 'Oswald';
  src: url(https://www.juangames.com/media/fonts/Oswald-Regular.ttf);
}

/*Cositas del Menú*/
.menu{
  margin-top: 40px;
  width: 100%;
  margin-bottom: 50px;
}

.menu .menu-buttons{
 
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  list-style-type: none;
  height: 60px;
  
}
.menu li{
  
  color: black;
  text-align: center;
  padding: 10px;
  width: 90px;
  height: 60px;
  margin: 0 5px 0 0;
  font-family: 'Oswald', sans-serif;
  font-size: 28px;
  font-weight: bold;
}

.menu a{
  text-decoration: none;
}



.imglink:hover{
  -webkit-filter: brightness(70%);
}

.imglink:active{
  -webkit-filter: brightness(55%);
}

/*Contenedor de la pagina*/
/*Estandar de los años 2000 es 700px, alternativa 1070px o 900px*/
.back{
  margin: 15px auto;
  width: 1070px;
  background-color: white;
}

#content{
  /*Fondo del contenido ↓*/
  width: 70%;
  float: left;
  border-right: black dotted 5px;
  border-spacing: 20px;
  margin-left: 20px;
  padding-bottom: 20px;
}

#rightcontent{
  padding-left: 20px;
  
  
  
}

#rightcontentainer{
  border-left: black dotted 5px;
  float: right;
  width: 70%;
  border-spacing: 20px;
  margin-right: 20px;
  padding-bottom: 20px;
}

header .banner{
  height: 100%;
  width: 100%;
  align-items: center;
  min-height: 80px;
  
}

#sidebar{
  width: 25%;
  height: 100%;
  margin-right: 20px;
  background-color: white;
  float: right;
  
}

#leftsidebar{
  width: 25%;
  height: 100%;
  margin-left: 20px;
  background-color: white;
  float: left;
  min-height: 100%;
}

#sidebutton{
  display: block;
  margin-left: auto;
  margin-right: auto;
}


footer{
  clear: both;
  width: 100%;
  padding-top: 40px;
  padding-bottom: 10px;
  
}

#le-footer{
  border-top: black dotted 4px;
  padding-left: 20px;
  padding-right: 20px;
}
#td1{
  float:left;

  padding-top: 40px;
}
#td2{
  float: right;
  padding-top: 40px;
  text-align: left;
  
}
#td3{
  width: 100%;
  text-align: center;
}

/*Textos*/
p{
  font-size: 21px;
  color: black;
  font-family: 'Ms Sans win 95',;
  margin-right: 20px;
  
}

h1{
  font-size: 59px;
  color: black;
  font-family: 'Times New Roman', sans-serif;
}

h2{
  font-size: 40px;
  color: black;
  font-family: 'Times New Roman', sans-serif;
  margin-bottom: 0px;
}

h3{
  font-size: 35px;
  color: black;
  font-family: 'Times New Roman', sans-serif;
}

h4{
  font-size: 30px;
  color: black;
  font-family: 'Times New Roman', sans-serif;
}

a{
  color: #ff9100;
  text-decoration: none;
  
}

a:hover{
  text-decoration:underline;
  color:#ffa835
}

a:active{
  color:#1d3d97;
}

a:visited{
  
}

/*Botones*/
.button{
  font-size: 21px;
  font-family: 'Oswald', 'sans-sherif';
  border-left: none;
  border-top: none;
  background: url(https://www.juangames.com/media/images/buttons/button-background.png) repeat;  
}

.button a{
  color: black;
}

.button:hover{
  -webkit-filter: brightness(85%);
}



time{
  font-size: 27px;
  font-family: 'Times New Roman', sans-serif;
  font-style: bold;
  margin-top: 0px;
  
}

#img_comment{
  text-align: center;
  font-size: 16px;
  color: #5a6267;
}

marquee{
  font-size: 25px;
  color: black;
  font-family: 'Ms Sans win 95';
  margin-right: 40px;
}

#recent{
  margin-bottom: 0px;
  margin-top: 30px;
}

.post-title{
  color: black;
}


