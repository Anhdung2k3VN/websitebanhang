<?php
include_once "../lib/database.php";
include_once "../helpers/format.php";
?>
<?php
class product
{
    private $db;
    private $fm;
    public function __construct()
    {
        $this->db = new Database();
        $this->fm = new Format();
    }

    public function show_cartegory()
    {
        $query = "SELECT * FROM tbl_cartegory ORDER BY cartegory_id DESC";
        $result = $this->db->select($query);
        return $result;
    }
    public function show_brand()
    {
        "SELECT * FROM tbl_brand ORDER BY brand_id DESC";
        $query = "SELECT tbl_brand.*, tbl_cartegory.cartegory_name
        FROM tbl_brand INNER JOIN tbl_cartegory ON tbl_brand.cartegory_id = tbl_cartegory.cartegory_id
        ORDER BY tbl_brand.brand_id DESC";
        $result = $this->db->select($query);
        return $result;
    }

    public function insert_product()
    {





        $product_name = $_POST['product-name'];
        $cartegory_id = $_POST['cartegory-id'];
        $brand_id = $_POST['brand-id'];
        $product_price = $_POST['product-price'];
        $product_sale = $_POST['product-sale'];
        $product_desc = $_POST['product-desc'];
        $product_img = $_FILES['product-img']['name'];
        move_uploaded_file(
            $_FILES['product-img']['tmp_name'],
            'uploads/' . $_FILES['product-img']['name']
        );

        $query = "INSERT INTO tbl_products ( product_name, cartegory_id, brand_id, product_price, product_sale, product_desc, product_img) VALUES(
               '$product_name',
               '$cartegory_id',
               '$brand_id',
               '$product_price',
               '$product_sale',
               '$product_desc',
               '$product_img')";
        $result = $this->db->insert($query);
        return $result;
    }





















    public function insert_brand($cartegory_id, $brand_name)
    {
        $brand_name = $this->fm->validation($brand_name);
        $brand_name = mysqli_real_escape_string($this->db->link, $brand_name);
        if (empty($brand_name)) {
            $alert = "Loại sản phẩm không được để trống";
            return $alert;
        } else {
            $query = "INSERT INTO tbl_brand(cartegory_id, brand_name) VALUES('$cartegory_id','$brand_name')";
            $result = $this->db->insert($query);
            if ($result) {
                $alert = "Thêm loại sản phẩm thành công";
                return $alert;
            } else {
                $alert = "Thêm loại sản phẩm thất bại";
                return $alert;
            }
        }
    }

    public function get_brand_by_id($brand_id)
    {
        $query = "SELECT * FROM tbl_brand WHERE brand_id = '$brand_id'";
        $result = $this->db->select($query);
        return $result;
    }
    public function update_brand($cartegory_id, $brand_name, $brand_id)
    {
        $brand_name = $this->fm->validation($brand_name);
        $brand_name = mysqli_real_escape_string($this->db->link, $brand_name);
        $brand_id = mysqli_real_escape_string($this->db->link, $brand_id);
        $cartegory_id = mysqli_real_escape_string($this->db->link, $cartegory_id);
        if (empty($brand_name)) {
            $alert = "Loại sản phẩm không được để trống";
            return $alert;
        } else {
            $query = "UPDATE tbl_brand SET brand_name = '$brand_name', cartegory_id = '$cartegory_id' WHERE brand_id = '$brand_id' ";
            $result = $this->db->update($query);
            if ($result) {
                $alert = "Cập nhật loại sản phẩm thành công";
                return $alert;
            } else {
                $alert = "Cập nhật loại sản phẩm thất bại";
                return $alert;
            }
        }
    }
    public function delete_brand($brand_id)
    {
        $query = "DELETE FROM tbl_brand WHERE brand_id = '$brand_id'";
        $result = $this->db->delete($query);
        if ($result) {
            $alert = "Xóa loại sản phẩm thành công";
            return $alert;
        } else {
            $alert = "Xóa loại sản phẩm thất bại";
            return $alert;
        }
    }
}
