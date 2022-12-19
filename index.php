<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Scores Testing!</title>

          <script src="libraries/p5.js"></script>
    <script src="libraries/p5.collide2d.js"></script>
    <script src="libraries/p5.dom.js"></script>
    <script src="Runner.js?3"></script>
    <script src="Classes.js"></script>
</head>
        <body>
          <h1>why are you inverted <3</h1>
          <?php
        include('test.php');
    ?>
    <p id="demo"></p>

<label for="fname">First name</label>
<input type="text" id="fname">
<button onClick="handleInput()">Submit</button>

<script>
  function handleInput() {
    document.getElementById("demo").innerHTML = "Hello " + document.getElementById("fname").value;
  }</script>
</body>
</html>