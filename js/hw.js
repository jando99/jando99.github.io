//js code for hw2

function part2() {
    var num1, num2, num3, sum, product, avg, small, large;

    num1 = document.forms["form1"].elements["num1"].value;
    num2 = document.forms["form1"].elements["num2"].value;
    num3 = document.forms["form1"].elements["num3"].value;

    num1 = parseInt(num1);
    num2 = parseInt(num2);
    num3 = parseInt(num3);

    sum = num1 + num2 + num3;
    document.forms["form1"].elements["answer"].value = sum;

    product = num1 * num2 * num3;
    document.forms["form1"].elements["answer1"].value = product;

    avg = (num1 + num2 + num3) / 3;
    document.forms["form1"].elements["answer2"].value = avg;

    small = Math.min(num1, num2, num3);
    document.forms["form1"].elements["answer3"].value = small;

    large = Math.max(num1, num2, num3);
    document.forms["form1"].elements["answer4"].value = large;
}

//js for hw3


//part1
function calculateGrade() 
{

	// Get input values
	var hwAvg = parseInt(document.getElementById("hwAvg").value);
	var midExam = parseInt(document.getElementById("midExam").value);
	var finalExam = parseInt(document.getElementById("finalExam").value);
	var participation = parseInt(document.getElementById("participation").value);

	// Check for valid input
	if (isNaN(hwAvg) || hwAvg < 0 || hwAvg > 100 || isNaN(midExam) || midExam < 0 || midExam > 100 || isNaN(finalExam) || finalExam < 0 || finalExam > 100 || isNaN(participation) || participation < 0 || participation > 100) 
    {
		document.getElementById("output").innerHTML = "Invalid input. Please enter valid grades between 0-100.";
		return;
	}

	// Calculate final average
	var finalAvg = Math.round((0.5 * hwAvg) + (0.2 * midExam) + (0.2 * finalExam) + (0.1 * participation));

	// Determine letter grade
	var letterGrade;
	if (finalAvg >= 90) 
	{
		letterGrade = "A";
	} 

    else if (finalAvg >= 80) 
    {
		letterGrade = "B";
	} 
    else if (finalAvg >= 70) 
    {
		letterGrade = "C";
	} 
    else if (finalAvg >= 60)
    {
		letterGrade = "D";
	} 
    else
    {
		letterGrade = "F";
	}

	// Display results
	document.getElementById("output").innerHTML = "Final Average: " + finalAvg + "\n" + "Final Letter Grade: " + letterGrade;
	
	if (letterGrade == "D" || letterGrade == "F")
    {
		document.getElementById("output").innerHTML += " Student must retake the course.";
	}	
}

function clearForm() 
{
	document.getElementById("hwAvg").value = "";
	document.getElementById("midExam").value = "";
	document.getElementById("finalExam").value = "";
	document.getElementById("participation").value = "";
	document.getElementById("output").innerHTML = "";
}



//part2



// Part-2 scripts below

function money() 
{
	//declaring variables specfic to the function
	let name, obj1, obj2, obj3, obj4, totalSales, income; 
	let obj1total, obj2total, obj3total, obj4total, amountTotal;
  
	//get user name
	name = document.forms["moneyform"].elements["user"].value;
	console.log(name);

	//get data for number of sales for each item
	obj1 = document.forms["moneyform"].elements["obj1"].value;
	console.log(obj1);

	obj2 = document.forms["moneyform"].elements["obj2"].value;
	console.log(obj2);

	obj3 = document.forms["moneyform"].elements["obj3"].value;
	console.log(obj3);

	obj4 = document.forms["moneyform"].elements["obj4"].value;
	console.log(obj4);
	
	//if there is no data then program tells user to enter a vaild entry
	if (obj1 == "" || obj2 == "" || obj3 == "" || obj4 == "" || name == "") 
	{
	  $(".entryfield").text("Please enter vaild entry");
	  $(".missingtxt").css("background-color", "#FF2626");
	  setTimeout(function () 
	  {
		$(".entryfield").text("");
		$(".missingtxt").css("background-color", "#FFFDFD");
	  }, 1000);
	  return;
	} 

	else if (obj1 >= 0 && obj2 >= 0 && obj3 >= 0 && obj4 >= 0) 
	{
	  //mulitplying constant value with user data
	  obj1total = obj1 * 20.99;
	  obj2total = obj2 * 12.75;
	  obj3total = obj3 * 9.95;
	  obj4total = obj4 * 35.89;

	  //shows the sold quantity
	  $("#obj1qty").val(obj1);
	  $("#obj2qty").val(obj2);
	  $("#obj3qty").val(obj3);
	  $("#obj4qty").val(obj4);

	  //all values being rounded to 2 decimal places
	  obj1total = Number(obj1total.toFixed(2));
	  obj2total = Number(obj2total.toFixed(2));
	  obj3total = Number(obj3total.toFixed(2));
	  obj4total = Number(obj4total.toFixed(2));

	  //shows each total
	  $("#obj1total").val(obj1total);
	  $("#obj2total").val(obj2total);
	  $("#obj3total").val(obj3total);
	  $("#obj4total").val(obj4total);

	  //shows total amout
	  amountTotal = Number(obj1total + obj2total + obj3total + obj4total).toFixed(2);
	  $("#amountTotal").val(amountTotal);

	  //weekly income
	  income = (obj1total + obj2total + obj3total + obj4total) * 0.09;
  
	  totalSales = (250 + income).toFixed(2);
	  $("#totalWeekly").val(totalSales);
	} 
		
}

  
  //tooltip
  $(function () {
	$(document).tooltip();
  });
  //reset table
  function dataReset() 
  {
	$(".entry").val("");
  }
  

  

//part3
function convertToF() 
{
  var celsius = document.getElementById("inputBox").value;
  var fahrenheit = (celsius * (9/5)) + 32;
  document.getElementById("outputBox").value = celsius + "°C is " + Math.round(fahrenheit) + "°F";
}
function convertToC() 
{
  var fahrenheit = document.getElementById("inputBox").value;
  var celsius = (5/9) * (fahrenheit - 32);
  document.getElementById("outputBox").value = fahrenheit + "°F is " + Math.round(celsius) + "°C";
}
function clearTemp() 
{
  document.getElementById("inputBox").value = "";
  document.getElementById("outputBox").value = "";
}