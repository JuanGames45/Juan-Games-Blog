

var links = document.querySelectorAll(".link");
for(link of links){
  link.addEventListener("click", function(e){
    for(inlink of links){
      inlink.classList.remove("active");
    }
    e.target.classList.add("active");
  });
}
//Plantilla cabecera
class MyHeader extends HTMLElement {
    connectedCallback () {
        this.innerHTML = `
        
    <head>
    <link rel="stylesheet" type="text/css" href="https://www.juangames.com/style/Main.css">
    <link rel="alternate" type="application/rss+xml" title="JG blog RSS" href="https://www.juangames.com/rss.xml">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Juan Games Blog</title>
    <link rel="icon" type="image/x-con" href="https://www.juangames.com/media/images/favicon.png">

    </head>

        <header>
        
            <img src="https://www.juangames.com/media/images/construction.webp" class="banner">
            <img src="https://www.juangames.com/media/images/backgrounds/banner.png" class="banner">
            <div class="desktopmenu">
                
                <a href="https://www.juangames.com/index"><button class="menuitem" id="home">Home</button></a>
                <a href="https://www.juangames.com/blog.html"><button class="menuitem" 
                id="blog">Blog</button></a>
                <a href="https://www.juangames.com/art"><button class="menuitem" id="art">Art</button></a>
                <a href="https://www.juangames.com/links"><button class="menuitem" id="art">Links</button></a>
                <div class="dropdown">
                <a href="https://www.juangames.com/about.html"><button class="dropbtn" id="about"></button></a>
                <div class="dropdown-content">
                    <a class="dropitm" href="https://www.juangames.com/about/the-site.html">The site</a>
                    <a class="dropitm" href="https://www.juangames.com/about/myself.html">Myself</a>
                    <a class="dropitm" id="comm" href="https://www.juangames.com/about/comm-info">Commissions</a>
                </div>
                </div>
            
            </div>
            <div class="mobilemenu">
                
            <a href="https://www.juangames.com/index"><button class="mbmenuitem" id="homebutton">Home</button></a>
            <a href="https://www.juangames.com/blog"><button class="mbmenuitem">Blog</button></a>
            <a href="https://www.juangames.com/art"><button class="mbmenuitem">Art</button></a>
            <a href="https://www.juangames.com/about"><button class="mbmenuitem" id="About">About</button></a>
                
            </div>
        </header>`
        
    }
}
customElements.define('my-header', MyHeader)

//Plantilla barra lateral
class MySidebar extends HTMLElement {
    connectedCallback () {
        this.innerHTML = `
        <div id="sidebar">
        <div class="sidebar">

            <p>I gotta get to work on this sidebar :V </p>

            

        </div>`
        
    }
}
customElements.define('my-sidebar', MySidebar)

//Plantilla Footer
class MyFooter extends HTMLElement {
    connectedCallback () {
        this.innerHTML = `
        <div class="footerwrapper">
        <footer>
            

            <p><a href="https://www.juangames.com/about/legal#copyleft">🄯 Copyleft</a> by Juan Games 2024.</p>
            

        </footer>
        </div>`
        
    }
}
customElements.define('my-footer', MyFooter)

class ReadMore extends HTMLElement {
    connectedCallback () {
        this.innerHTML = `
    
        <button class="button">Read More>></button>`
        
    }
}
customElements.define('read-more', ReadMore)

// Nutshell configuration
Nutshell.setOptions({
    startOnLoad: true, // Start Nutshell on load? (default: true)
    lang: 'en', // Language (default: 'en', which is English)
    dontEmbedHeadings: true, // If 'true', removes the "embed this as a nutshell" option on headings
});
