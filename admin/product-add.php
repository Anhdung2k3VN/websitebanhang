<?php
include "./inc/header.php";
include "./inc/slider.php";
include "./classes/product-class.php";
?>
<?php

$product = new product();
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // echo '<pre>';
    // echo print_r($_FILES);
    // echo '</pre>';
    // var_dump($_POST, $_FILES);
    // $product_name = $_POST['product-name'];
    // $cartegory_id = $_POST['cartegory-id'];
    // $brand_id = $_POST['brand-id'];
    // $product_price = $_POST['product-price'];
    // $product_sale = $_POST['product-sale'];
    // $product_desc = $_POST['product-desc'];
    // $product_img = $_FILES['product-img'];
    // $product_img_detail = $_FILES['product-img-detail'];

    $insert_product = $product->insert_product($_POST, $_FILES);
}


?>
<link rel="stylesheet" href="./css/style.css">

<div class="admin-content-right">
    <div class="admin-content-right-product-add">
        <h2>Thêm Sản Phẩm</h2>
        <form action="" method="POST" enctype="multipart/form-data">
            <label for="" style="color: red;">Nhập tên sản phẩm <span>*</span></label>
            <input required type="text" name="product-name" placeholder="Nhập tên sản phẩm" />
            <label for="" style="color: red;">Chọn danh mục <span>*</span></label>
            <select name="cartegory-id" id="">
                <option value="#">---CHỌN DANH MỤC---</option>
                <?php $show_cartegory = $product->show_cartegory();
                if ($show_cartegory) {
                    while ($result = $show_cartegory->fetch_assoc()) {
                ?>
                <option value="<?php echo $result['cartegory_id'] ?>"><?php echo $result['cartegory_name'] ?></option>
                <?php
                    }
                }
                ?>
            </select>
            <label for="" style="color: red;">Chọn loại sản phẩm <span>*</span></label>
            <select name="brand-id" id="">
                <option value="#">---CHỌN SẢN PHẨM---</option>
                <?php $show_brand = $product->show_brand();
                if ($show_brand) {
                    while ($resultBrand = $show_brand->fetch_assoc()) {
                ?>
                <option value="<?php echo $resultBrand['brand_id'] ?>"><?php echo $resultBrand['brand_name'] ?></option>
                <?php
                    }
                }
                ?>
            </select>

            <label for="" style="color: red;">Giá sản phẩm <span>*</span></label>
            <input name="product-price" required type="text" placeholder="Giá sản phẩm">
            <label for="" style="color: red;">Giá khuyến mãi <span>*</span></label>
            <input name="product-sale" required type="text" placeholder="Giá khuyển mãi">
            <label for="" style="color: red;">Mô tả sản phẩm <span>*</span></label>
            <textarea required name="product-desc" id="" placeholder="Mô tả sản phẩm"></textarea>
            <label for="" style="color: red;">Hình ảnh sản phẩm <span>*</span></label>
            <input name="product-img" required type="file">
            <label for="" style="color: red;">Hình ảnh sản phụ <span>*</span></label>
            <input name="product-img-detail" required multiple type="file">
            <button type="submit">Thêm</button>
        </form>
    </div>
</div>
</section>
</body>

</html>