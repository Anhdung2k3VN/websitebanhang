<?php
include "./inc/header.php";
include "./inc/slider.php";
include "classes/cartegory-class.php";
?>
<?php
$cartegory = new cartegory();
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $cartegory_name = $_POST['cartegory-name'];
    $insert_cartegory = $cartegory->insert_cartegory($cartegory_name);
    echo "<script type='text/javascript'>alert('$insert_cartegory');</script>";
    echo "<script type='text/javascript'>window.location.href='cartegory-list.php';</script>";
}

?>
<link rel="stylesheet" href="./css/style.css">

<div class="admin-content-right">
    <div class="admin-content-right-cartegory_add">
        <h2>Thêm Danh Mục</h2>
        <form action="" method="POST">
            <input type="text" name="cartegory-name" placeholder="Nhập tên danh mục" />
            <button type="submit">Thêm</button>
        </form>
    </div>
</div>
</section>
</body>

</html>