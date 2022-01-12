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

        // window.onscroll = () => {
        //     this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
        // }


         // COMPETENCES POURCENTAGE

        //HTML
        let number1 = document.getElementById("number1");
        let counter1 = 0;
        setInterval(() => {
            if(counter1 == 85){
                clearInterval();
            }else{
                counter1 += 1;
                number1.innerHTML = counter1 + "%";
            }
        },30)

        //CSS
        let number2 = document.getElementById("number2");
        let counter2 = 0;
        setInterval(() => {
            if(counter2 == 85){
                clearInterval();
            }else{

                counter2 += 1;
                number2.innerHTML = counter2 + "%";
            }
        },30)

        //JS
        let number3 = document.getElementById("number3");
        let counter3 = 0;
        setInterval(() => {
            if(counter3 == 65){
                clearInterval();
            }else{

                counter3 += 1;
                number3.innerHTML = counter3 + "%";
            }
        },30)

         //PHP
         let number4 = document.getElementById("number4");
         let counter4 = 0;
         setInterval(() => {
             if(counter4 == 65){
                 clearInterval();
             }else{
                 counter4 += 1;
                 number4.innerHTML = counter4 + "%";
             }
         },30)
 
         //WORDPRESS
         let number5 = document.getElementById("number5");
         let counter5 = 0;
         setInterval(() => {
             if(counter5 == 65){
                 clearInterval();
             }else{
 
                 counter5 += 1;
                 number5.innerHTML = counter5 + "%";
             }
         },30)
 
         //JS
         let number6 = document.getElementById("number6");
         let counter6 = 0;
         setInterval(() => {
             if(counter6 == 85){
                 clearInterval();
             }else{
 
                 counter6 += 1;
                 number6.innerHTML = counter6 + "%";
             }
         },30)
