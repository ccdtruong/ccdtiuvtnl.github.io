var aLove = new Array( 
  "Chỉ mún nói là iu bác ạ =))))"
  );
  var aNo = new Array(
    "Byeeeeeeee =))))). Yêu báccccccccc"
  );
  var aText;
  var iSpeed = 100; // time delay of print out
  var iIndex = 0; // start printing array at this posision
  var iScrollAt = 20; // start scrolling up at this many lines   
  var iTextPos = 0; // initialise text position
  var sContents = ''; // initialise contents variable
  var iRow; // initialise current row
   
  function typewriter(x)
  {
   sContents =  ' ';
   iRow = Math.max(0, iIndex-iScrollAt);
   var destination = document.getElementById("typedtext");
   destination.style.display = "block";
   console.log(x);
   if(x == "xem")
   {
     aText = aLove;
     console.log(aText);
   }
   if(x == "no")
   {
     aText = aNo;
   }
    var iArrLength = aText[0].length; // the length of the text array
   while ( iRow < iIndex ) {
    sContents += aText[iRow++] + '<br />';
   }
   destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
   if ( iTextPos++ == iArrLength ) {
    iTextPos = 0;
    iIndex++;
    if ( iIndex != aText.length ) {
     iArrLength = aText[iIndex].length;
     setTimeout("typewriter()", 500);
    }
   } else {
    setTimeout("typewriter()", iSpeed);
   }
  }
function fallingHeart()
{
  const urlParams = new URLSearchParams(window.location.search);
  const valentine = urlParams.get("valentine");
  if (valentine) {
    document.getElementById("valentine").innerText = valentine;
  }
  const message = urlParams.get("message");
  if (message) {
    document.getElementById("message").innerText = message;
  }

  const randomInt = (n) => Math.floor(Math.random() * n);
  document.getElementById("dynamic").innerText = `
    @keyframes spin {
        0% {
          margin-top: 2vh;
          opacity: 0;
        }
        20% {
          opacity:1.0;
          margin-top: 0vh;
          margin-left: 0vw;
          transform: rotate(${randomInt(90)}deg);
        }
        100% {
          opacity: 0.4;
          margin-top: 100vh;
          margin-left: ${randomInt(4)}vw;
          transform: rotate(1080deg); 
        }
      };
    `;
  let numberOfHearts = 45;
  while (numberOfHearts--) {
    var heartDiv = document.createElement("div");
    heartDiv.classList.add("heart");
    heartDiv.style = `animation: spin ${randomInt(14) + 6}s ease-in infinite;
                        top: ${randomInt(40)}vh;
                       left: ${randomInt(100)}vw;
                  font-size: ${randomInt(40) + 20}px;
                      color: ${["#d00", "#e66", "#fcc"][randomInt(3)]};`;
    heartDiv.textContent = ["\u2661", "\u2665"][randomInt(2)];
    document.getElementById("falling-hearts").appendChild(heartDiv);
  }
}
fallingHeart();

const btn_xem = document.getElementById("xem");
const btn_yes = document.getElementById("yes");
const btn_no = document.getElementById("no");
const title = document.getElementById("title");
const img = document.getElementById("image");
const img_no = document.getElementById("no_img");

btn_xem.addEventListener("click", function() {
  typewriter("xem");
  btn_yes.style.display = "none";
  btn_no.style.display = "none";
  title.style.display = "none";
  img.style.display = "block";
});
btn_no.addEventListener("click", function() {
  typewriter("no");
  btn_yes.style.display = "none";
  title.style.display = "none";
  btn_no.style.display = "none";
  img_no.style.display = "block";

});
btn_yes.addEventListener("click", function() {
  var top = Math.floor(Math.random() * (window.innerHeight - btn_yes.offsetHeight));
  var left = Math.floor(Math.random() * (window.innerWidth - btn_yes.offsetWidth));
  btn_yes.style.top = top + "px";
  btn_yes.style.left = left + "px";
});