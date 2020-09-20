var r, g, b, state;

r = 255;
g = 0;
b = 0;
state = 0;

var imageYear = 2001;

window.onload = run;

function run()
{
  changeBackground();
  changeImage();
}


function changeBackground() {
  if(state == 0)
  {
    if(g != 255)
    {
      g += 5;
    }
    else
    {
      state = 1;
    }
  }
  else if(state == 1)
  {
    if(r != 0)
    {
      r -= 5;
    }
    else
    {
      state = 2;
    }
  }
  else if(state == 2)
  {
    if(b != 255)
    {
      b += 5;
    }
    else
    {
      state = 3;
    }
  }
  else if(state == 3)
  {
    if(g != 0)
    {
      g -= 5;
    }
    else
    {
      state = 4;
    }
  }
  else if(state == 4)
  {
    if(r != 255)
    {
      r += 5;
    }
    else
    {
      state = 5;
    }
  }
  else if(state == 5)
  {
    if(b != 0)
    {
      b -= 5;
    }
    else
    {
      state = 0;
    }
  }

  var cover = document.getElementById("background_cover");
  var text = document.getElementById("birthday_text");

  var color = (r << 16) + (g << 8) + b;
  var hexColor = color.toString(16);
  while(hexColor.length < 6)
  {
    hexColor = "0" + hexColor;
  }
  var textHexColor = hexColor.substring(2,6) + hexColor.substring(0,2);
  var output = "#" + hexColor;
  var textOutput = "#" + textHexColor;
  cover.style.backgroundColor = output;
  text.style.color = textOutput;
  setTimeout(changeBackground, 100);
}

function changeImage() {
  if(imageYear == 2019)
  {
    imageYear = 2002;
  }
  else
  {
    imageYear++;
  }

  document.getElementById("birthday_image").src = "images/" + imageYear + ".jpg";
  setTimeout(changeImage, 5000);
}
