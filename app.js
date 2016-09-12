'use strict';

//objects holding the display names and costs of all the dinner items
var app = {
    crab: ['crab dip',3.99],
    rolls: ['egg rolls',1.99]
}

var salad = {
    caesar: ['caesar salad',4.99],
    garden: ['garden salad',3.99],
    pear: ['pear salad',3.25]
}

var main_course = {
    meat: ['prime rib',14.99],
    chicken: ['roast chicken',12.99],
    fish: ['halibut',11.99]
}

var dessert = {
    cake: ['chocolate cake',2.59],
    pie: ['apple pie',1.99]
}
 
    var drinks = {
        beer: ['guiness',3.99],
        wine: ['cabernet',8.99],
        port: ['10 year tawny',5.99]
    }
    
    //define globals
    var total;
    var tax;
    var tip;
    var tipArr =[];
    
    //diner object constructor, call with items they ordered
    var diner = function(name,appetizer,salad,main_course,dessert,drinks) {
        this.name = name;
        this.appetizer = appetizer;
        this.salad = salad;
        this.main_course = main_course;
        this.dessert = dessert;
        this.drinks = drinks;
    }
    
    //diner obj methods
    diner.prototype = {
        //addTotal sums the prices of all the dinner items ordered, returns the total
        addTotal:function () {
            var appPrice = app[this.appetizer][1];
            var saladPrice = salad[this.salad][1];
            var mainPrice = main_course[this.main_course][1];
            var dessertPrice = dessert[this.dessert][1];
            var drinksPrice = drinks[this.drinks][1];
            
            total = appPrice + saladPrice + mainPrice + drinksPrice + dessertPrice;
            total = total.toFixed(2);
            console.log(this.name + " ordered: " + app[this.appetizer][0]+ "," + salad[this.salad][0] + "," + main_course[this.main_course][0] + ","+ dessert[this.dessert][0] + "," + drinks[this.drinks][0] +", for a cost of:$ " + total);
            return total;
            
        },
        //calcTax generates the tax from the total dinner $$$
        calcTax:function () {
            //assume an 8% tax rate
            //tax doesn't include tip
            tax = total *.08;
            tax = tax.toFixed(2);
            console.log("Tax was:$ " + tax);
        },
        //calcTip generates the tip from the total dinner $$$, includes the tax
        calcTip:function() {
            //give a 20% tip, generous!
            //tip includes the tax
            tip = total * .20;
            tip = tip.toFixed(2);
            console.log("Tip was:$ " + tip);
            tipArr.push(tip); //build an arry for the tips from each diner
        }
    };
    
    //dinnergroup object constructor function
    var dinnerGroup = function(diner1,diner2,diner3) {
        this.diner1 = diner1;
        this.diner2 = diner2;
        this.diner3 = diner3;
    }
    
    //dinnergroup methods
    dinnerGroup.prototype = {
        //totalBill sums the total of all the dinner's bills
        totalBill:function () {
            var finalBill = +danTotal + + steveTotal + + pamTotal;
            finalBill = finalBill.toFixed(2);
            console.log("Dining group's total bill is :$ " + finalBill);
        },
        //totalTips sums (reduces) the values in the tip array
        totalTips:function () {
            var finalTips = tipArr.reduce(function(a,b) {
                return a + +b;
            }, 0);
            console.log("Dining group's total tip:$ " + finalTips);
        },
        //dinerEachbill function handled earlier in the code - here for legacy
        dinerEachBill:function () {
            //handled by totalling above
        }
    };
    
    //new 'dan' diner object, passing in name and dinner order
    //calling methods, displaying the total
    var dan = new diner("Dan","crab","pear","fish","pie","wine");
    dan.addTotal();
    dan.calcTax();
    dan.calcTip();
    var danTotal =  +total + +tax + +tip;
    danTotal = danTotal.toFixed(2);
    console.log("Dan's total was:$ " + danTotal);
    console.log("--------------");
    
    //new 'steve' diner object,passing in name and dinner order
    //calling methods, displaying the total
    var steve = new diner("Steve","rolls","caesar","chicken","cake","beer");
    steve.addTotal();
    steve.calcTax();
    steve.calcTip();
    var steveTotal =  +total + +tax + +tip;
    steveTotal = steveTotal.toFixed(2);
    console.log("Steve's total: " + steveTotal);
    console.log("---------------");
    
    //new "pam" diner object,passing in the name and dinner order
    //calling methods, displaying the total
    var pam = new diner ("Pam","crab","garden","meat","pie","port");
    pam.addTotal();
    pam.calcTax();
    pam.calcTip();
    var pamTotal = +total + +tax + +tip;
    pamTotal = pamTotal.toFixed(2);
    console.log("Pam's total: " + pamTotal);
    console.log("-------------");
    
    //new dinnergroup object, passing in name of diners
    var dinnerGroup = new dinnerGroup("Dan","Steve", "Pam");
    
    //calling the methods to generate the total bill and the total tips
    dinnerGroup.totalBill(danTotal,steveTotal,pamTotal);
    
    dinnerGroup.totalTips(tipArr);