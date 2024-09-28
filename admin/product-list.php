<?php
include "./inc/header.php";
include "./inc/slider.php";
include "classes/product-class.php";
?>
<?php
$product = new product();

$show_product = $product->show_product();


?>
<link rel="stylesheet" href="./css/style.css">

<div class="admin-content-right">
    <div class="admin-content-right-product-list">
        <h2>Danh Sách Sản Phẩm</h2>
        <table>
            <tr>
                <th>Product Id</th>
                <th>Product</th>
                <th>Cartegory</th>
                <th>Brand</th>
                <th>Price</th>
                <th>Sale</th>
                <th>Description</th>
                <th>Product image</th>
                <th>Tùy chỉnh</th>
            </tr>
            <?php
            if ($show_product) {

                $i = 0;
                while ($result = $show_product->fetch_assoc()) {
                    $i++;
            ?>
                    <tr>


                        <td><?php echo $result['product_id'] ?></td>
                        <td><?php echo $result['product_name'] ?></td>
                        <td><?php echo $result['cartegory_name'] ?></td>
                        <td><?php echo $result['brand_name'] ?></td>
                        <td><?php echo $result['product_price'] ?></td>
                        <td><?php echo $result['product_sale'] ?></td>
                        <td><?php echo $result['product_desc'] ?></td>
                        <td><img src="<?php echo $result['product_img'] ?>" alt=""></td>
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