        class MaNavbar extends HTMLElement {
            connectedCallback(){
                this.innerHTML = `
                <nav class="navbar">
            <div class="content">
            <div class="logo"><a href="/index.html">N<span>.</span>L</a></div>
            <ul class="menu-list">
                <div class="icon cancel-btn">
                    <i class="fas fa-times"></i>
                </div>
                <li><a href="/index.html">Accueil</a></li>
                <li><a href="/pages/presentation.html">Présentation</a></li>
                <li class="skills-hide"><a href="/pages/Competences.html" class="skills-nav">Compétences</a></li>
                <li><a href="/pages/Projets.html">Projets</a></li>
                <li class="contact-nav"><a href="/pages/Contact.html" >Contact</a></li>
        
            </ul>
            <div class="icon menu-btn">
                <i class="fas fa-bars"></i>
            </div>
        </div>
        </nav>
              `
            }
        }


        class MonFooter extends HTMLElement {
            connectedCallback(){
                this.innerHTML = `
                <footer>
                    <div class="footer-container">
                        Copyright &copy; Nlbq, Tous droits réservés.
                     </div>
                </footer>
              `
            }
        }
        
        customElements.define('ma-navbar', MaNavbar)
        customElements.define('mon-footer', MonFooter)



        const body = document.querySelector("body");
        const navbar = document.querySelector(".navbar");
        const menu = document.querySelector(".menu-list");
        const menuBtn = document.querySelector(".menu-btn");
        const cancelBtn = document.querySelector(".cancel-btn");




        menuBtn.onclick = () => {
            menu.classList.add("active");
            menuBtn.classList.add("hide");
            cancelBtn.classList.add("show");
            body.classList.add("disabledScroll");
        }
        cancelBtn.onclick = () => {
            menu.classList.remove("active");
            menuBtn.classList.remove("hide");
            cancelBtn.classList.remove("show");
            body.classList.remove("disabledScroll");
        }

      

     









         
