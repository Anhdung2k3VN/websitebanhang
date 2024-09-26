<?php
include "./inc/header.php";
include "./inc/slider.php";
include "classes/brand-class.php";
?>
<?php
$brand = new brand();
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $cartegory_id = $_POST['cartegory_id'];
    $brand_name = $_POST['brand-name'];
    $insert_brand = $brand->insert_brand($cartegory_id, $brand_name);
    echo "<script type='text/javascript'>alert('$insert_brand');</script>";
}

?>
<link rel="stylesheet" href="./css/style.css">

<div class="admin-content-right">
    <div class="admin-content-right-brand-add">
        <h2>Thêm Loại Sản Phẩm</h2>
        <form action="" method="POST">
            <select name="cartegory_id" id="">
                <option value="#">---CHỌN DANH MỤC---</option>
                <?php
                $show_cartegory = $brand->show_cartegory();
                if ($show_cartegory) {
                    while ($result = $show_cartegory->fetch_assoc()) {
                ?>
                        <option value="<?php echo $result['cartegory_id'] ?>"><?php echo $result['cartegory_name'] ?></option>
                <?php
                    }
                }
                ?>

            </select> <br>
            <input type="text" name="brand-name" placeholder="Nhập tên loại sản phẩm" />
            <button type="submit">Thêm</button>
        </form>
    </div>
</div>
</section>
</body>

</html>