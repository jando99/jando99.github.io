//hw 6 code

//part 1
function numDeci()
{
    //get user input
    let numInput = document.getElementById("numInput").value;

    //checking if user input has atleast 4 decimal places
	if (isNaN(numInput) || parseFloat(numInput).toFixed(4) !== numInput) 
    {
		document.getElementById("output").innerHTML = "Invalid input. Please enter a number with at least 4 decimal places.";
	}
	// added easter egg where if you write pi it tells you that pi has been written
    else if (numInput == 3.1415)
    {
        //convert input to float
		let num = parseFloat(numInput);
			
		//calculations
		let rounded = Math.round(num);
		let squared = Math.round(Math.sqrt(num));
		let rounded10s = num.toFixed(1);
		let rounded100s = num.toFixed(2);
		let rounded1000s = num.toFixed(3);
			
		//outputing results
		document.getElementById("output").innerHTML = 
			"The number you typed is Pi  " + numInput +"!"+"<br>" +
			"Rounded to nearest integer = " + rounded + "<br>" +
			"Square root rounded to nearest integer = " + squared + "<br>" +
			"Rounded to nearest 10s place = " + rounded10s + "<br>" +
			"Rounded to nearest 1000s place = " + rounded100s + "<br>" +
			"Rounded to nearest 1,000s place = " + rounded1000s;

    }
	//for all other numbers with 4 decimal places
    else 
    {
		//convert input to float
		let num = parseFloat(numInput);
			
		//calculations
		let rounded = Math.round(num);
		let squared = Math.round(Math.sqrt(num));
		let rounded10s = num.toFixed(1);
		let rounded100s = num.toFixed(2);
		let rounded1000s = num.toFixed(3);
			
		//outputting results
		document.getElementById("output").innerHTML = "You typed number " + numInput + "<br>" +
			"Rounded to nearest integer = " + rounded + "<br>" +
			"Square root rounded to nearest integer = " + squared + "<br>" +
			"Rounded to nearest 10s place = " + rounded10s + "<br>" +
			"Rounded to nearest 1000s place = " + rounded100s + "<br>" +
			"Rounded to nearest 1,000s place = " + rounded1000s;
	}
	
}
//clear form
function clearForm1() 
{
	document.getElementById("numInput").value = "";
	document.getElementById("output").innerHTML = "";
}


//part 2
function indexSearch() 
{
	//user input
	let phrase = document.getElementById("phrase").value;
	let indexId = document.getElementById("indexId").value;

	//counting characters in content
	let count = 0;
	for (let i = 0; i < phrase.length; i++) 
	{
		if (phrase.charAt(i) === indexId) 
		{
			count++;
		}
	}

	//outputting results or external window
	if (count > 0) 
	{
		document.getElementById("result1").innerHTML = "The character '" + indexId + "' appears " + count + " time(s) in the content.";
	} 
	else 
	{
		let newWindow = window.open("", "error", "width=300,height=100,top=50,right=50");
		newWindow.document.write("<p>Search character '" + indexId + "' not found in the content you typed.</p>");
		document.getElementById("phrase").value = "";
		document.getElementById("indexId").value = "";

		//button to close window
		let closeButton = newWindow.document.createElement("button");
		closeButton.innerHTML = "Close";
		closeButton.onclick = function() 
		{
			newWindow.close();
		};
		newWindow.document.body.appendChild(closeButton);
	}
}


//part 3 with *extra credit*
$(document).ready(function() 
{
	//phone number format mask appied
	$("#userContact").mask("(999) 999-9999");

	//clear all
	$("#clear").click(function() 
	{
		$("input[type='text']").val("");
		$("#error-msg").text("");
	});

	//organizes use contact into 3 sections
	$("#enter").click(function() {
		var contactInput = $("#userContact").val();

		//validating if contact is correct
		var phoneRegex = /^\(\d{3}\) \d{3}-\d{4}$/;
		if (!phoneRegex.test(contactInput)) 
		{
			$("#ansError").text("Please enter phone number in the format (999) 999-9999");
			$("#areaCode, #firstThree, #lastFour").val("");
		} 
		else 
		{
			//organizing data
			var contactData = contactInput.replace(/\D/g, "").split("");
			$("#areaCode").val(contactData.slice(0, 3).join(""));
			$("#firstThree").val(contactData.slice(3, 6).join(""));
			$("#lastFour").val(contactData.slice(6).join(""));
			$("#ansError").text("");
		}
	});
});