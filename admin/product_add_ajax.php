<?php
include "./classes/product-class.php";

$product = new product();
$cartegory_id = $_GET['cartegory_id'];
?>

<?php $show_brand_ajax = $product->show_brand_ajax($cartegory_id);
if ($show_brand_ajax) {
    while ($resultBrand = $show_brand_ajax->fetch_assoc()) {
?>
        <option value="<?php echo $resultBrand['brand_id'] ?>"><?php echo $resultBrand['brand_name'] ?></option>
<?php
    }
}
?>