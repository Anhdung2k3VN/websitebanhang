<?php
include "./inc/header.php";
include "./inc/slider.php";
include "classes/brand-class.php";
?>
<?php
if (isset($_GET['brand_id'])) {
    $brand_id = $_GET['brand_id'];
}

?>
<?php
$brand = new brand();


$delete_brand = $brand->delete_brand($brand_id);
echo "<script type='text/javascript'>alert('$delete_brand');</script>";

?>