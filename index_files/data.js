function a(){
	goforit()
	godata();

}

var saleMonths=["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябряь", "ноябрь", "декабрь"];

function getthedate(){
var mydate=new Date()
mydate=new Date(mydate.getFullYear(), mydate.getMonth(), mydate.getDate())
var year=mydate.getYear()
if (year < 1000)
year+=1900
var month=mydate.getMonth()
var daym=mydate.getDate()
if (daym<10)
daym="0"+daym
month=month+1
if (month<10)
month="0"+month
var cdate= saleMonths[mydate.getMonth()]+ " " + year

if (document.all)
document.all.clock.innerHTML=cdate
else if (document.getElementById)
document.getElementById("clock").innerHTML=cdate
else
document.write(cdate)
}
if (!document.all&&!document.getElementById)
getthedate()
function goforit(){
if (document.all||document.getElementById)
setInterval("getthedate()",1000)
}

function generationdata(){
var mydate=new Date()
mydate=new Date(mydate.getFullYear(), mydate.getMonth(), mydate.getDate())
var year=mydate.getYear()
if (year < 1000)
year+=1900
var day=mydate.getDay()
var month=mydate.getMonth()
var daym=mydate.getDate()
if (daym<10)
daym="0"+daym
month=month+1
if (month<10)
month="0"+month
//change font size here
var cdate=daym+"."+month+"."+year+"</b>"

if (document.all)
document.all.clock.innerHTML=cdate
else if (document.getElementById)
document.getElementById("new_data").innerHTML=cdate
else
document.write(cdate)
}
if (!document.all&&!document.getElementById)
getthedate()
function godata(){
if (document.all||document.getElementById)
setInterval("generationdata()",1000)
}