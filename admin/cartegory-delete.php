<?php
include "./inc/header.php";
include "./inc/slider.php";
include "classes/cartegory-class.php";
?>
<?php
if (isset($_GET['cartegory_id'])) {
    $cartegory_id = $_GET['cartegory_id'];
}

?>
<?php
$cartegory = new cartegory();


$delete_cartegory = $cartegory->delete_cartegory($cartegory_id);
echo "<script type='text/javascript'>alert('$update_cartegory');</script>";
echo "<script type='text/javascript'>window.location.href='cartegory-list.php';</script>";

?>