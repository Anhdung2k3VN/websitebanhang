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
    public function show_cartegory()
    {
        $query = "SELECT * FROM tbl_cartegory ORDER BY cartegory_id DESC";
        $result = $this->db->select($query);
        return $result;
    }
    public function sort_by($array, $sort_by, $sort_type)
    {
        $sort_by = array_column($array, $sort_by);
        array_multisort($sort_by, $sort_type, $array);
        return $array;
    }

    public function get_cartegory_by_id($cartegory_id)
    {
        $query = "SELECT * FROM tbl_cartegory WHERE cartegory_id = '$cartegory_id'";
        $result = $this->db->select($query);
        return $result;
    }
    public function update_cartegory($cartegory_name, $cartegory_id)
    {
        $cartegory_name = $this->fm->validation($cartegory_name);
        $cartegory_name = mysqli_real_escape_string($this->db->link, $cartegory_name);
        $cartegory_id = mysqli_real_escape_string($this->db->link, $cartegory_id);
        if (empty($cartegory_name)) {
            $alert = "Danh mục không được để trống";
            return $alert;
        } else {
            $query = "UPDATE tbl_cartegory SET cartegory_name = '$cartegory_name' WHERE cartegory_id = '$cartegory_id'";
            $result = $this->db->update($query);
            if ($result) {
                $alert = "Cập nhật danh mục thành công";
                header("Location: cartegory-list.php");
                return $alert;
            } else {
                $alert = "Cập nhật danh mục thất bại";
                return $alert;
            }
        }
    }
    public function delete_cartegory($cartegory_id)
    {
        $query = "DELETE FROM tbl_cartegory WHERE cartegory_id = '$cartegory_id'";
        $result = $this->db->delete($query);
        if ($result) {
            $alert = "Xóa danh mục thành công";
            header("Location: cartegory-list.php");
            return $alert;
        } else {
            $alert = "Xóa danh mục thất bại";
            return $alert;
        }
    }
}
