jQuery( document ).ready(function($) {
            
    var slider = document.getElementById("myRange"),
     numUsers = document.getElementsByClassName("num-users"),
     toggle = document.getElementById("toggle"),
     //Monthly pricing
     beginnerPrice = document.getElementById("beginner-price"),
     bizPrice = document.getElementById("biz-price"),
     proPrice = document.getElementById("pro-price"),
     //Yearly pricing
     beginnerPriceAnnual = document.getElementById("beginner-price-annual"),
     bizPriceAnnual = document.getElementById("biz-price-annual"),
     proPriceAnnual = document.getElementById("pro-price-annual")
    
     montlyPrices = $(".monthly-price"),
     annualPrices = $(".annual-price");

     annualPrices.hide();

    $(toggle).click(function(){
        if(toggle.checked == true){
            //Hide monthy pricing show annual pricing
            montlyPrices.toggle();
            annualPrices.toggle();
           
        }else{
            montlyPrices.toggle();
            annualPrices.toggle();
            
        }
    });
    
   
    
    // Update the current slider value (each time you drag the slider handle)
    slider.oninput = function() {

        //Get the value of the user and convert it to a number
        var userVal = parseInt(this.value);
        //Do math on the user value and cost of the package
        var begPriceVal = userVal + 10;
        var bizPriceVal = userVal + 20;
        var proPriceVal = userVal + 30;

        var annualBegPriceVal = userVal + 10 * 12,
        annualbegPriceDiscounted = annualBegPriceVal- (annualBegPriceVal * .20);
        var annualBizPriceVal = userVal + 20 * 12,
        annualBizPriceDiscounted = annualBizPriceVal - (annualBizPriceVal * .20);
        var annualProPriceVal = userVal + 30 * 12,
        annualProPriceDiscounted = annualProPriceVal - (annualProPriceVal * .20);

        beginnerPrice.innerHTML = "$"  + begPriceVal.toFixed(2) + " / m";
        bizPrice.innerHTML = "$" + bizPriceVal.toFixed(2) + " / m";
        proPrice.innerHTML = "$" + proPriceVal.toFixed(2) +  " / m";

        beginnerPriceAnnual.innerHTML = "$" + annualbegPriceDiscounted.toFixed(2) +  " / y";
        bizPriceAnnual.innerHTML = "$" + annualBizPriceDiscounted.toFixed(2) +  " / y";
        proPriceAnnual.innerHTML = "$" + annualProPriceDiscounted.toFixed(2) + " / y";


        //Show hide pricing plans if num user exceeds x
        if(userVal >= 21){
          console.log("Disable beginner plan");
        }else{
          console.log("Turn on the beginner plan");
        } 
        if(userVal >=51){
          console.log("disable Biz package");
        }else{
          console.log("Turn on the Biz plan");
        }

        [].slice.call( numUsers ).forEach(function ( numUsers ) {
            //numUsers.innerHTML = items.innerHTML;
            numUsers.innerHTML = slider.value;
        });
    }
        
    });    