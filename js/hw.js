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