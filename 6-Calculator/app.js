import {ArithmeticFunction} from "./arithmetic.js"

const result = document.getElementById("text");
const text = document.getElementById("result");
const btns = document.querySelectorAll(".btn");
let a = 0, cover = 0, num = 0, status ="none";

btns.forEach(function(btn){
    btn.addEventListener('click', function(x){
        const styles = x.currentTarget.classList;
        
        if(styles.contains("n1")) {
            cover = result.textContent += "1";
            
        }

        if(styles.contains("n2")) {
            cover = result.textContent += "2";
        }

        if(styles.contains("n3")) {
            cover = result.textContent += "3";
        }

        if(styles.contains("n4")) {
            cover = result.textContent += "4";
        }

        if(styles.contains("n5")) {
            cover = result.textContent += "5";
        }

        if(styles.contains("n6")) {
            cover = result.textContent += "6";
        }

        if(styles.contains("n7")) {
            cover = result.textContent += "7";
        }

        if(styles.contains("n8")) {
            cover = result.textContent += "8";
        }

        if(styles.contains("n9")) {
            cover = result.textContent += "9";
        }

        if(styles.contains("n0")) {
            cover = result.textContent += "0";
        }

        if(styles.contains("dot")) {
            if(cover.includes(".")) {
            }
            else {
                cover = result.textContent += ".";
            }
            
        }

        if (cover.length > 13) {
            result.innerHTML = cover.slice(0,13);
        }
        

        num = parseFloat(cover)
        

        if(styles.contains("n+")) {
            a = ArithmeticFunction.add(a,num);
            result.innerHTML = "";
            text.innerHTML = a + "+";
            num = 0;
            status = "add";
        }

        if(styles.contains("n-")) { 
            a = ArithmeticFunction.subtract(a,num);
            if(status !== "subtract") {
                a *= -1;
            }
            result.innerHTML = "";
            text.innerHTML = a + "-";
            num = 0;
            status = "subtract";
        }

        if(styles.contains("n*")) {
            a = ArithmeticFunction.multiply(a,num);
            if(status !== "multiply") {
                a = num;
            }            
            
            result.innerHTML = "";
            text.innerHTML = a + "*";
            num = 0;
            status = "multiply";
        }

        if(styles.contains("n/")) {
            a = ArithmeticFunction.divide(a,num);
            if(status !== "divide") {
                a = num;
            }
            result.innerHTML = "";
            text.innerHTML = `${a}/`;
            num = 0;
            status = "divide";
        }

        if(styles.contains("pow")) {
            
            if (status === "power") {
                a = ArithmeticFunction.power(a);
            }

            else {
                a = ArithmeticFunction.power(num);
            }
            result.innerHTML = "";
            text.innerHTML = a;
            status = "power";
        }

        if(styles.contains("root")) {
            if (status === "root") {
                a = ArithmeticFunction.root(a);
            }

            else {
                a = ArithmeticFunction.root(num);
            }
            result.innerHTML = "";
            text.innerHTML = a;
            num = 0;
            status = "root";
        }

        if(styles.contains("n=")) {
            if(status === "add") {
                a = ArithmeticFunction.add(a,num);
            }
            else if (status === "multiply") {
                a = ArithmeticFunction.multiply(a,num);
            }
            else if(status === "subtract") {
                a = ArithmeticFunction.subtract(a,num);
            }
            else if(status === "divide") {
                a = ArithmeticFunction.divide(a,num);
            }
            else if(status === "power") {
                a = ArithmeticFunction.power(a);
            }
            else if(status === "root") {
                a = ArithmeticFunction.root(a);
            }

            result.innerHTML = text.innerHTML.slice(0,text.innerHTML.length-1);
            
            if (a === Infinity) {
                text.innerHTML = a;
            }
            text.innerHTML = (a + '').slice(0,5);
            result.innerHTML = "";
            cover = 0;
        }

        if(styles.contains("ac")) {
            result.innerHTML = "";
            text.innerHTML = "0";
            cover = 0;
            a = 0;
            num = 0;
        }

        if(styles.contains("del")) {
            result.innerHTML = result.innerHTML.slice(0,result.innerHTML.length -1);
            cover = result.innerHTML;
            if(cover.length === 0){
                cover = 0;
            }
            if(cover[cover.length -1].includes(".")) {
                result.innerHTML = result.innerHTML.slice(0,result.innerHTML.length -1);
            }
        }

        if (cover.length > 14) {
            cover = cover.slice(0,14);
        }
    })
})