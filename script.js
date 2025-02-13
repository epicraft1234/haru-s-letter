let clickCount = 0;
let klik = 0;

    function myFunction(){
            
        const element = document.getElementById("b-quest")  || document.getElementById("b-quest2") || document.getElementById("b-quest2-5")  || document.getElementById("b-quest3")|| document.getElementById("b-quest4");
        const huruf = document.getElementById("a-quest") || document.getElementById("a-quest2") || document.getElementById("a-quest2-5") ||  document.getElementById("a-quest3")||  document.getElementById("a-quest4");
        const liQuest = document.getElementById("li-questb") || document.getElementById("li-questb2");
        const kata = document.getElementById("kata");
        
        
        if (clickCount == 0) {
            element.classList.add("b-quest2-5");
            element.id = "b-quest2-5";
            huruf.classList.add("a-quest2-5");
            huruf.id = "a-quest2-5";
            kata.innerText = "ええ、 なんで？？:(";
            
            

        }
         
        else if (clickCount == 1) {
            element.classList.add("b-quest2");
            element.id = "b-quest2";
            huruf.classList.add("a-quest2");
            huruf.id = "a-quest2";
            kata.textContent = "なんで,なんで,なんで,なんで,なんで？？:(";
            
        } 
        else if (clickCount == 2) {
            element.classList.add("b-quest3");
            element.id = "b-quest3";
            huruf.classList.add("a-quest3");
            huruf.id = "a-quest3";
            kata.textContent = "これは不可能です:(";
            
        } else if (clickCount == 3) {
            element.classList.add("b-quest4");
            element.id = "b-quest4";
            huruf.classList.add("a-quest4");
            huruf.id = "a-quest4";
            kata.textContent = "冗談じゃないですよね？？";

        } else if (clickCount == 4) {
            element.classList.add("b-quest5");
            element.id = "b-quest5";
            huruf.classList.add("a-quest5");
            huruf.id = "a-quest5";
            liQuest.classList.add("li-questb2");
            liQuest.id = "li-questb2";
            kata.textContent = "ハハハ、もうどこにも行けないから… :b";
        }
            
        clickCount++;

    }
    
    
        