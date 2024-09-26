<?php
include "./inc/header.php";
include "./inc/slider.php";
include "classes/cartegory-class.php";
?>
<?php
if (isset($_GET['cartegory_id'])) {
    $cartegory_id = $_GET['cartegory_id'];
    $cartegory = new cartegory();
    $cartegory_data = $cartegory->get_cartegory_by_id($cartegory_id);
    if ($cartegory_id) {
        $result = $cartegory_data->fetch_assoc();
    }
}

?>
<?php
$cartegory = new cartegory();


$delete_cartegory = $cartegory->delete_cartegory($cartegory_id);
echo "<script type='text/javascript'>alert('$update_cartegory');</script>";

?>