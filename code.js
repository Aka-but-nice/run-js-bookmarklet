javascript:document.write(  '\n<h1>~~ Portable Javascript Runner ~~</h1>   <head><center><h2> This is the portable version of <a href="https://javascript-runner.glitch.me">Javascript Runner</a></h2></center></head><h2>      With this resource, you can run Javascript code. Simply put Javascript      code into the text box below, and then click Run Code. If your code relies      on another javascript file, put the full link for the file, not just the      file name. This site will pop up an alert if your code has an error     </h2>\n<center><textarea id="javascript" rows="9" cols="65" placeholder="Type some cool code"></textarea><center><button class="run" id="run">Run Code</button>\n<hr />    <footer>     <strong        >Created by Meowhax7/Zen/Rez 2023              </strong      >    </footer>    <hr /><style> @import url("https://fonts.googleapis.com/css2?family=Varela+Round&display=swap%22); border-box */html { box-sizing: border-box;  font-size: 16px;}*,*:before,:after {  box-sizing: inherit;} body {  margin: 1rem;font-family: "Varela Round", sans-serif;  line-height: 1.5;  text-align: center;  background: #0c192c;  color: white;} img, video {  height: auto;  max-width: 100%;}button {  background: darkviolet;  border-color: purple;  color: white;  cursor: pointer;  font-size: 25px;  font-family: "Varela Round", sans-serif;}textarea {  resize: none;  font-family: "Varela Round", sans-serif;  font-size: 25px;  background-color: darkblue;  color: white;  border-color: blue;  border-radius: 15px;}</style>'
),
  document.getElementById("run").addEventListener(
    "click",
    function () {
     try {        eval(document.getElementById("javascript").value);

      } catch
        (n) {
        alert("A syntax error has occured: " + n);
      }
      
       var empty=document.getElementById("javascript").value;
    if (empty==""){
        alert("Don't leave textbox empty")

      } 
    },!1);
      

