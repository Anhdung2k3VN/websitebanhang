<?php
include "./inc/header.php";
include "./inc/slider.php";
include "classes/brand-class.php";
?>
<?php
if (isset($_GET['brand_id'])) {
    $brand_id = filter_var($_GET['brand_id'], FILTER_SANITIZE_NUMBER_INT);

    // Kiểm tra xem ID có phải là số nguyên dương không
    if (!is_numeric($brand_id) || $brand_id <= 0) {
        die('ID danh mục không hợp lệ.');
    }

    $brand = new brand();
    $brand_data = $brand->get_brand_by_id($brand_id);

    if ($brand_id > $brand_data) {
        die('Danh mục không tồn tại.');
    } else {
        $resultBrand = $brand_data->fetch_assoc();
    }
} else {
    // Xử lý trường hợp ID không tồn tại trong URL
    die('ID danh mục không được cung cấp.');
}


?>
<?php
$brand = new brand();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $brand_name = $_POST['brand-name'];
    $update_brand = $brand->update_brand($brand_name, $brand_id);
    echo "<script type='text/javascript'>alert('$update_brand');</script>";
}
?>
<link rel="stylesheet" href="./css/style.css">

<div class="admin-content-right-brand-add">
    <h2>Sửa Loại Sản Phẩm</h2>
    <form action="" method="POST">
        <select name="cartegory_id" id="">
            <option value="#">---CHỌN DANH MỤC---</option>
            <?php
            $show_cartegory = $brand->show_cartegory();
            if ($show_cartegory) {
                while ($result = $show_cartegory->fetch_assoc()) {
            ?>
            <option <?php if ($resultBrand['cartegory_id'] == $result['cartegory_id']){echo'selected';} ?>
                value="<?php echo $result['cartegory_id'] ?>"><?php echo $result['cartegory_name'] ?>
            </option>
            <?php
                }
            }
            ?>

        </select> <br>
        <input type="text" name="brand-name" placeholder="Nhập tên loại sản phẩm"
            value="<?php echo $resultBrand['brand_name'] ?>" />
        <button type="submit">Sửa</button>
    </form>
</div>
</section>
</body>

</html>