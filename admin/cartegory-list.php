<?php
include "./inc/header.php";
include "./inc/slider.php";
include "classes/cartegory-class.php";
?>
<?php
$cartegory = new cartegory();

$show_cartegory = $cartegory->show_cartegory();


?>
<link rel="stylesheet" href="./css/style.css">

<div class="admin-content-right">
    <div class="admin-content-right-cartegory_list">
        <h2>Danh Sách Danh Mục</h2>
        <table>
            <tr>
                <th>STT</th>
                <th>ID</th>
                <th>Tên danh mục</th>
                <th>Tùy chỉnh</th>
            </tr>
            <?php
            if ($show_cartegory) {

                $i = 0;
                while ($result = $show_cartegory->fetch_assoc()) {
                    $i++;
            ?>
                    <tr>

                        <td> <?php echo $i ?> </td>
                        <td><?php echo $result['cartegory_id'] ?></td>
                        <td><?php echo $result['cartegory_name'] ?></td>
                        <td>
                            <a href="cartegory-edit.php?cartegory_id=<?php echo $result['cartegory_id'] ?>">Sửa</a>
                            <a href="cartegory-delete.php?cartegory_id=<?php echo $result['cartegory_id'] ?>">Xóa</a>
                        </td>
                    </tr>
            <?php
                }
            } else {
                echo "Không có danh mục nào";
            }
            ?>
        </table>

    </div>
</div>
</section>
</body>

</html>