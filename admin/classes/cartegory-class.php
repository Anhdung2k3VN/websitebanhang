<?php
include_once "../lib/database.php";
include_once "../helpers/format.php";
?>
<?php
class cartegory
{
    private $db;
    private $fm;
    public function __construct()
    {
        $this->db = new Database();
        $this->fm = new Format();
    }
    public function insert_cartegory($cartegory_name)
    {
        $cartegory_name = $this->fm->validation($cartegory_name);
        $cartegory_name = mysqli_real_escape_string($this->db->link, $cartegory_name);
        if (empty($cartegory_name)) {
            $alert = "Danh mục không được để trống";
            return $alert;
        } else {
            $query = "INSERT INTO tbl_cartegory(cartegory_name) VALUES('$cartegory_name')";
            $result = $this->db->insert($query);
            if ($result) {
                $alert = "Thêm danh mục thành công";
                return $alert;
            } else {
                $alert = "Thêm danh mục thất bại";
                return $alert;
            }
        }
    }
}
