<?php
//Step1
 $db = mysqli_connect('localhost','tkj15','Tojo042181','cadet_records')
 or die('Error connecting to MySQL server.');
?>

<html>
 <head>
 </head>
 <body>
 <h1>PHP connect to MySQL</h1>

 <?php
//Step2
$query = "SELECT * FROM airforce_cadets";
mysqli_query($db, $query) or die('Error querying database.');

$result = mysqli_query($db, $query);
$row = mysqli_fetch_array($result);

while ($row = mysqli_fetch_array($result)) {
 echo $row['Name'] . ', ' . $row['Unit'] . ': ' . $row['Pushups'] . ' ' . $row['Situps'] .' ' . $row['Run'] . ' ' . $row['TotalScore'] .'<br />';
}

mysqli_close($db);
?>

</body>
</html>