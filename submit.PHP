<body>


<?php
$connection = mysql_connect("localhost", "root", ""); // Establishing Connection with Server
$db = mysql_select_db("shopping cart", $connection); // Selecting Database from Server
if(isset($_POST['submit'])){ // Fetching variables of the form which travels in URL
$ID = $_POST['ID'];
$ITEM = $_POST['ITEM'];
$PRICE= $_POST['PRICE'];
$QUANTITY = $_POST['$QUANTITY'];
if($ITEM !=''||$ !=''){
//Insert Query of SQL
$query = mysql_query("insert into items(id, Item, Quantity, price ) values ('$ID', '$ITEM', '$PRICE', '$QUANTITY')");
echo "<br/><br/><span>Data Inserted successfully...!!</span>";
}
else{
echo "<p>Insertion Failed <br/> Some Fields are Blank....!!</p>";
}
}
mysql_close($connection); // Closing Connection with Server
?>

</body>