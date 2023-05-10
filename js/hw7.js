//part1
const styledArea = document.getElementById('editedString');
const backgroundColors = document.getElementsByName('colorBg');
const textStyles = document.getElementsByName('fontStyle');
const fontSize = document.getElementById('fontSize');

for (let i = 0; i < backgroundColors.length; i++)
{
  backgroundColors[i].addEventListener('click', function () 
  {
    styledArea.style.backgroundColor = backgroundColors[i].value;
  });
}

for (let i = 0; i < textStyles.length; i++) 
{
  textStyles[i].addEventListener('click', function () 
  {
    if (textStyles[i].checked) 
    {
      if (textStyles[i].value === 'underline') 
      {
        styledArea.style.textDecoration = 'underline';
      } 
      else if (textStyles[i].value === 'bold') 
      {
        styledArea.style.fontWeight = 'bold';
      } 
      else if (textStyles[i].value === 'italic') 
      {
        styledArea.style.fontStyle = 'italic';
      }
    } 
    else 
    {
      if (textStyles[i].value === 'underline') 
      {
        styledArea.style.textDecoration = '';
      } 
      else if (textStyles[i].value === 'bold') 
      {
        styledArea.style.fontWeight = '';
      } 
      else if (textStyles[i].value === 'italic') 
      {
        styledArea.style.fontStyle = '';
      }
    }
  });
}
fontSize.addEventListener('change', function() 
{
  styledArea.style.fontSize = fontSize.value;
});



//part 2
document.addEventListener("DOMContentLoaded", function() 
{
  let navHW = document.querySelectorAll("nav > ul > li");

  for (var i = 0; i < navHW.length; i++) 
  {
    navHW[i].addEventListener("mouseenter", function() 
    {
      var subNav = this.querySelector("ul");
      subNav.style.display = "block";
    });

    navHW[i].addEventListener("mouseleave", function() 
    {
      var subNav = this.querySelector("ul");
      subNav.style.display = "none";
    });
  }
});