<?php
include "./inc/header.php";
include "./inc/slider.php";
include "classes/cartegory-class.php";
?>
<?php
// if (isset($_GET['cartegory_id'])) {
//     $cartegory_id = $_GET['cartegory_id'];
//     $cartegory = new cartegory();
//     $cartegory_data = $cartegory->get_cartegory_by_id($cartegory_id);
//     if ($cartegory_id) {
//         $result = $cartegory_data->fetch_assoc();
//     }
// }
if (isset($_GET['cartegory_id'])) {
    $cartegory_id = filter_var($_GET['cartegory_id'], FILTER_SANITIZE_NUMBER_INT);

    // Kiểm tra xem ID có phải là số nguyên dương không
    if (!is_numeric($cartegory_id) || $cartegory_id <= 0) {
        die('ID danh mục không hợp lệ.');
    }

    $cartegory = new cartegory();
    $cartegory_data = $cartegory->get_cartegory_by_id($cartegory_id);

    if ($cartegory_id > $cartegory_data) {
        die('Danh mục không tồn tại.');
    } else {
        $result = $cartegory_data->fetch_assoc();
    }
} else {
    // Xử lý trường hợp ID không tồn tại trong URL
    die('ID danh mục không được cung cấp.');
}


?>
<?php
$cartegory = new cartegory();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $cartegory_name = $_POST['cartegory-name'];
    $update_cartegory = $cartegory->update_cartegory($cartegory_name, $cartegory_id);
    echo "<script type='text/javascript'>alert('$update_cartegory');</script>";
    echo "<script type='text/javascript'>window.location.href='cartegory-list.php';</script>";
}
?>
<link rel="stylesheet" href="./css/style.css">

<div class="admin-content-right">
    <div class="admin-content-right-cartegory_add">
        <h2>Sửa Danh Mục</h2>
        <form action="" method="POST">
            <input type="text" name="cartegory-name" placeholder="Nhập tên danh mục"
                value="   <?php echo $result['cartegory_name'] ?> " />
            <button type="submit">Sửa</button>
        </form>
    </div>
</div>
</section>
</body>

</html>