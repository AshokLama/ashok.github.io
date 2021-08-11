<html>
<head>
    <title>Page Title</title>
    <script>
        let val = document.getElementById("same");
        document.getElementById("value") = val;
        console.log(document.getElementById("value").val);
    </script>
</head>
<body>

<h1>This is a Heading</h1>
<p>This is a paragraph.</p>
<input id="same" value="abcd"/>
    <input id="same" value="xyz"/>
        <input id="same" value="apple"/>
            <input id="value"/>

</body>
</html>