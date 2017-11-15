
var  month=0;
var day=0;
var name="";
var printSign="";
var signNum =0;
var message ="";




//calls input and output functions on button click
function onButton(){
    input();
    output();

}

//data from html to java
function input() {
    month = parseInt(document.getElementById("month").value);
    day = parseInt(document.getElementById("day").value);
    signNum = giveSignNum (month,day);
    console.log(signNum);
    name = document.getElementById("name").value;
    console.log(name);
    printSign=sign(signNum);
    console.log(printSign);
    message=getMessage(signNum);



}




//Assings a number to corrospond to sign
function giveSignNum (month,day){
    console.log(month);
    console.log(day);
    if ((month==3 && day>=21) || (month==4 && day<=19)){
        signNum=0
    }
    if ((month==4 && day>=20) || (month==5 && day<=20)){
        signNum=1
    }
    if ((month==5 && day>=21) || (month==6 && day<=20)){
        signNum=2
    }
    if ((month==6 && day>=21) || (month==7 && day<=22)){
        signNum=3
    }
    if ((month==7 && day>=23) || (month==8 && day<=22)){
        signNum=4
    }
    if ((month==8 && day>=23) || (month==9 && day<=22)){
        signNum=5
    }
    if ((month==9 && day>=23) || (month==10 && day<=22)){
        signNum=6
    }
    if ((month==10 && day>=23) || (month==11 && day<=21)){
        signNum=7
    }
    if ((month==11 && day>=22) || (month==12 && day<=21)){
        signNum=8
    }
    if ((month==12 && day>=22) || (month==1 && day<=19)){
        signNum=9
    }
    if ((month==1 && day>=20) || (month==2 && day<=18)){
        signNum=10
    }
    if ((month==2 && day>=19) || (month==3 && day<=20)){
        signNum=11
    }
    return signNum;
}

//assigns sign
function sign (signNum){
    var signIndex=["Aries","Taurus","Gemini", "Cancer", "Leo", "Virgo", "Libra","Scorpio", "Sagittaruius", "Capricorn", "Aquarius", "Pisces"];
    return signIndex[signNum];
}

//assigns message for sign
function getMessage (signNum){
    var messageIndex=["You will succeed in computer programing.", "You will die alone.", "There is someone standing right behind you.", "You will not get a 4.0 in highschool.", "Your shirt doesn't match your pants.", "You would be well advised to avoid boats this year.", "Your best friend is trying to kill you.", "You have trouble not procrastinating. Try locking yourself in a room with no windows until your work is done.", "You should make sure to eat pasta this winter.", "Make sure to look out for pumpkins falling from tall buildings.","You will live a long and happy life but always have that little itch on the roof ouf your mouth that you can't scratch.", "You would be well advised not to beleive in horoscopes." ]
    return messageIndex[signNum];
}

//compiles name, sign, and message into one sentance
function finalMessage (name, printSign, message){
    return ("Hello " + name + "! Your sign is " + printSign + " and your horoscope message is: " + message);
}

//assigns image
function getImage (signNum){
    var imageIndex=["img/aries.jpg","img/taurus.jpg","img/gemini.jpg", "img/cancer.jpg", "img/leo.jpg", "img/virgo.jpg", "img/libra.jpg","img/scorpio.jpg", "img/saggittarius.jpg", "img/capricorn.jpg", "img/aquarius.jpg", "img/pisces.jpg"];
    console.log(imageIndex[signNum]);
    return imageIndex[signNum];

}

function getBirthday(month,day){
    var date = new Date();
    var DAY= date.getDate();
    var MONTH=date.getMonth()+1;
    console.log(MONTH);
    console.log(DAY);
    if (month==MONTH&&day==DAY){
        return "HAPPY BIRTHDAY!"
    }else{
        return"";
    }
}
//data from java to html
function output (){
    document.getElementById("finalMessage").innerHTML = finalMessage(name, printSign, message);
    document.getElementById("image").innerHTML = "<img src= img/"+ getImage(signNum)+ "/>";
    document.getElementById("birthdayMessage").innerHTML = getBirthday(month,day);

}

function doDays(month){
    month = parseInt(month);
    var mDays = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var result = "";
    for (var i = 1; i <= mDays[month]; i++){
        result += "<option value='" + i + "'>" + i + "</option>";
    }
    document.getElementById("day").innerHTML = result;
}
