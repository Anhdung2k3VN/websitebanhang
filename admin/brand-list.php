<?php
include "./inc/header.php";
include "./inc/slider.php";
include "classes/brand-class.php";
?>
<?php
$brand = new brand();

$show_brand = $brand->show_brand();


?>
<link rel="stylesheet" href="./css/style.css">

<div class="admin-content-right">
    <div class="admin-content-right-cartegory_list">
        <h2>Danh Sách Danh Mục</h2>
        <table>
            <tr>
                <th>STT</th>
                <th>Brand_id</th>
                <th>Cartegory_name</th>
                <th>Tên loại sản phẩm</th>
                <th>Tùy chỉnh</th>
            </tr>
            <?php
            if ($show_brand) {

                $i = 0;
                while ($result = $show_brand->fetch_assoc()) {
                    $i++;
            ?>
                    <tr>

                        <td> <?php echo $i ?> </td>
                        <td><?php echo $result['brand_id'] ?></td>
                        <td><?php echo $result['cartegory_name'] ?></td>
                        <td><?php echo $result['brand_name'] ?></td>
                        <td>
                            <a href="brand-edit.php?brand_id=<?php echo $result['brand_id'] ?>">Sửa</a>
                            <a href="brand-delete.php?brand_id=<?php echo $result['brand_id'] ?>">Xóa</a>
                        </td>
                    </tr>
            <?php
                }
            } else {
                echo "Không có loại sản phẩm nào";
            }
            ?>
        </table>

    </div>
</div>
</section>
</body>

</html>