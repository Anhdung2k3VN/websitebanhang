const data_collection = [
    {
        id_collection: 1,
        img: './img/collection/33-e1729062788329.jpg',
        alt: 'áo sơ mi trắng công sở',
        time: '25/09/2024',
        title: ' TRANG PHỤC ĐI LÀM CÔNG SỞ NÊN CHỌN ÁO SƠ MI NAM NHƯ THẾ NÀO?',
        content: [
            {
                text:
                    'Áo nỉ là item không thể thiếu trong tủ đồ của các chàng trai trong những ngày thời tiết se lạnh. Với sự đa dạng về kiểu dáng và màu sắc, áo nỉ có thể kết hợp với nhiều trang phục khác nhau để tạo nên những outfit vừa ấm áp, vừa thời trang. Cùng 360 khám phá 7 cách phối đồ với áo nỉ nam cực chất dưới đây nhé!'
            }, {
                title: '1. Áo nỉ nam phối cùng quần jeans:'
            },
            {
                img: './img/collection/ANHTK406-APTTK403-QJDTK410-5-Custom.jpg'
            }, {
                text: 'Phong cách: Cá tính, năng động.'
            }, {
                text: 'Chi tiết:'
            }, {
                text: 'Áo hoodie: Chọn áo hoodie có mũ, túi kangaroo để tăng thêm sự thoải mái. Bạn có thể chọn áo có họa tiết, chữ in hoặc màu trơn đơn giản.'
            }, {
                text: 'Quần jeans: Quần jeans skinny, slim fit hoặc baggy đều phù hợp. Nếu muốn tạo điểm nhấn, hãy chọn quần jeans rách hoặc có phối màu.'
            }, {
                text: 'Giày: Sneaker là lựa chọn hoàn hảo. Bạn có thể chọn giày sneaker cao cổ hoặc thấp cổ tùy theo sở thích.'
            }, {
                text: 'Phụ kiện: Mũ beanie, kính mát, dây chuyền… sẽ giúp bạn hoàn thiện phong cách.'
            },
            {
                text: 'Gợi ý: Để tạo sự khác biệt, bạn có thể sơ vin áo hoodie vào quần jeans.'
            }, {
                title: '2. Áo nỉ nam kết hợp quần jogger:'
            }, {
                img: './img/collection/ANHTK413-QGNTK408-5-Custom.jpg'
            }, {
                text: 'Phong cách: Thể thao, thoải mái.'
            }, {
                text: 'Chi tiết:'
            }, {
                text: 'Áo hoodie: Chọn áo hoodie oversize hoặc vừa vặn.'
            }, {
                text: 'Quần jogger: Quần jogger có cạp chun, ống rộng hoặc ống suông.'
            }, {
                text: 'Giày: Sneaker hoặc giày thể thao.'
            },
            {
                text: ' Phụ kiện: Túi đeo chéo, tai nghe… sẽ giúp bạn năng động hơn.'
            }, {
                text: 'Gợi ý: Nếu muốn tạo phong cách layer, bạn có thể mặc thêm một chiếc áo thun bên trong áo hoodie.'
            }, {
                title: '3. Áo nỉ trơn và quần âu:'
            }, {
                img: './img/collection/ANTTK414-SKDTK425-QACTK311-6-Custom.jpg'
            }, {
                text: 'Phong cách: Lịch lãm, trẻ trung.'
            }, {
                text: 'Chi tiết:'
            }, {
                text: 'Áo nỉ: Chọn áo nỉ trơn màu, cổ tròn hoặc cổ V.'
            }, {
                text: 'Quần âu: Quần âu dáng slim fit hoặc straight fit.'
            }
            , {
                text: 'Giày: Giày lười, giày sneaker hoặc giày tây.'
            }, {
                text: 'Phụ kiện: Đồng hồ, thắt lưng da.'
            }, {
                text: 'Gợi ý: Để tạo điểm nhấn, bạn có thể sơ vin áo nỉ vào quần âu.'
            }, {
                title: '4. Áo nỉ nam phối cùng quần kaki'
            }, {
                img: './img/collection/AHHTK403-APTTK403-QKLTK402-2-Custom.jpg'
            }, {
                text: 'Phong cách: Trẻ trung, hiện đại.'
            }, {
                text: 'Chi tiết:'
            }, {
                text: 'Áo nỉ: Áo nỉ kẻ sọc ngang hoặc dọc, có thể chọn áo có màu sắc nổi bật.'
            }, {
                text: 'Quần jeans: Quần jeans skinny hoặc slim fit.'
            }, {
                text: 'Giày: Sneaker hoặc giày thể thao.'
            }, {
                text: 'Phụ kiện: Mũ snapback, kính mát.'
            }, {
                text: 'Gợi ý: Bạn có thể kết hợp áo nỉ kẻ sọc với quần jeans cùng màu để tạo sự hài hòa.'
            }, {
                title: '5. Áo nỉ oversize phối cùng quần short:'
            },
            {
                img: './img/collection/70b086ee-mix-do-voi-hoodie-oversize-3.jpg'
            }, {
                text: 'Phong cách: Streetstyle, cá tính.'
            }, {
                text: 'Chi tiết:'
            }, {
                text: 'Áo nỉ: Áo nỉ oversize, có thể chọn áo có mũ hoặc không mũ.'
            }, {
                text: 'Quần short: Quần short jeans rách hoặc quần short vải.'
            }, {
                text: 'Giày: Sneaker cao cổ hoặc giày boots.'
            }, {
                title: '6. Áo nỉ nam với áo sơ mi mix layer'
            },
            {
                img: './img/collection/ANHTK411-AHDTK420-QJDTK416-2-Custom.jpg'
            }, {
                text: 'Phong cách: lịch sự, chỉn chu'
            }, {
                text: 'Chi tiết:'
            }, {
                text: 'Áo nỉ: Chọn áo nỉ cổ tròn hoặc cổ V'
            }, {
                text: 'Áo sơ mi: Chọn áo sơ mi đơn sắc, cổ đức'
            }, {
                text: 'Quần: phối cùng quần jean, quần kaki tạo cảm giác thoải mái và lựa chọn quần âu khi đến những sự kiện quan trọng hoặc đi làm.'
            }, {
                text: 'Giày: giày sneaker năng động hoặc một đôi giày tây lịch lãm'
            }, {
                title: '7. Áo nỉ nam mặc trong áo khoác'
            }, {
                img: './img/collection/AKHTK415-ANHTK411-QKTTK306-AKHTK408-ANMTK403-QJDTK410-AKHTK408-ANTTK414-APTTK403-QJDTK410-5-Custom.jpg'
            }, {
                text: 'Phong cách: Đa dạng, giữ ấm.'
            }, {
                text: 'Chi tiết:'
            }, {
                text: 'Áo khoác: Phối cùng áo khoác bomber ấm áp, áo khoác denim bụi bặm hay áo măng tô lịch lãm.'
            }, {
                text: 'Áo nỉ: Chọn áo nỉ hoặc áo hoodie để phối layer tùy từng loại áo khoác mặc ngoài.'
            }, {
                text: 'Quần: Phối cùng quần jeans, kaki trẻ trung, năng động.'
            }, {
                text: 'Phụ kiện: đồng hồ, vòng tay để set đồ không bị nhàm chán.'
            }, {
                title: 'Lưu ý:'
            }, {
                text: 'Chọn màu sắc phù hợp: Bạn có thể chọn các màu sắc tương đồng hoặc tương phản để tạo điểm nhấn.'
            }, {
                text: 'Phụ kiện: Mũ, kính, túi xách, giày dép… sẽ giúp bạn hoàn thiện phong cách.'
            }, {
                text: 'Tự tin: Điều quan trọng nhất là bạn phải cảm thấy thoải mái và tự tin với trang phục của mình.'
            }]
    },
    {
        id_collection: 2,
        img: './img/collection/33-e1729062788329.jpg',
        alt: 'áo sơ mi trắng công sở',
        time: '25/09/2024',
        title: ' TRANG 2 NÈ',
        content: [
            {
                text:
                    'Áo nỉ là item không thể thiếu trong tủ đồ của các chàng trai trong những ngày thời tiết se lạnh. Với sự đa dạng về kiểu dáng và màu sắc, áo nỉ có thể kết hợp với nhiều trang phục khác nhau để tạo nên những outfit vừa ấm áp, vừa thời trang. Cùng 360 khám phá 7 cách phối đồ với áo nỉ nam cực chất dưới đây nhé!'
            }, {
                title: '1. Áo nỉ nam phối cùng quần jeans:'
            },
            {
                img: './img/collection/ANHTK406-APTTK403-QJDTK410-5-Custom.jpg'
            }, {
                text: 'Phong cách: Cá tính, năng động.'
            }, {
                text: 'Chi tiết:'
            }, {
                text: 'Áo hoodie: Chọn áo hoodie có mũ, túi kangaroo để tăng thêm sự thoải mái. Bạn có thể chọn áo có họa tiết, chữ in hoặc màu trơn đơn giản.'
            }, {
                text: 'Quần jeans: Quần jeans skinny, slim fit hoặc baggy đều phù hợp. Nếu muốn tạo điểm nhấn, hãy chọn quần jeans rách hoặc có phối màu.'
            }, {
                text: 'Giày: Sneaker là lựa chọn hoàn hảo. Bạn có thể chọn giày sneaker cao cổ hoặc thấp cổ tùy theo sở thích.'
            }, {
                text: 'Phụ kiện: Mũ beanie, kính mát, dây chuyền… sẽ giúp bạn hoàn thiện phong cách.'
            },
            {
                text: 'Gợi ý: Để tạo sự khác biệt, bạn có thể sơ vin áo hoodie vào quần jeans.'
            }, {
                title: '2. Áo nỉ nam kết hợp quần jogger:'
            }, {
                img: './img/collection/ANHTK413-QGNTK408-5-Custom.jpg'
            }, {
                text: 'Phong cách: Thể thao, thoải mái.'
            }, {
                text: 'Chi tiết:'
            }, {
                text: 'Áo hoodie: Chọn áo hoodie oversize hoặc vừa vặn.'
            }, {
                text: 'Quần jogger: Quần jogger có cạp chun, ống rộng hoặc ống suông.'
            }, {
                text: 'Giày: Sneaker hoặc giày thể thao.'
            },
            {
                text: ' Phụ kiện: Túi đeo chéo, tai nghe… sẽ giúp bạn năng động hơn.'
            }, {
                text: 'Gợi ý: Nếu muốn tạo phong cách layer, bạn có thể mặc thêm một chiếc áo thun bên trong áo hoodie.'
            }, {
                title: '3. Áo nỉ trơn và quần âu:'
            }, {
                img: './img/collection/ANTTK414-SKDTK425-QACTK311-6-Custom.jpg'
            }, {
                text: 'Phong cách: Lịch lãm, trẻ trung.'
            }, {
                text: 'Chi tiết:'
            }, {
                text: 'Áo nỉ: Chọn áo nỉ trơn màu, cổ tròn hoặc cổ V.'
            }, {
                text: 'Quần âu: Quần âu dáng slim fit hoặc straight fit.'
            }
            , {
                text: 'Giày: Giày lười, giày sneaker hoặc giày tây.'
            }, {
                text: 'Phụ kiện: Đồng hồ, thắt lưng da.'
            }, {
                text: 'Gợi ý: Để tạo điểm nhấn, bạn có thể sơ vin áo nỉ vào quần âu.'
            }, {
                title: '4. Áo nỉ nam phối cùng quần kaki'
            }, {
                img: './img/collection/AHHTK403-APTTK403-QKLTK402-2-Custom.jpg'
            }, {
                text: 'Phong cách: Trẻ trung, hiện đại.'
            }, {
                text: 'Chi tiết:'
            }, {
                text: 'Áo nỉ: Áo nỉ kẻ sọc ngang hoặc dọc, có thể chọn áo có màu sắc nổi bật.'
            }, {
                text: 'Quần jeans: Quần jeans skinny hoặc slim fit.'
            }, {
                text: 'Giày: Sneaker hoặc giày thể thao.'
            }, {
                text: 'Phụ kiện: Mũ snapback, kính mát.'
            }, {
                text: 'Gợi ý: Bạn có thể kết hợp áo nỉ kẻ sọc với quần jeans cùng màu để tạo sự hài hòa.'
            }, {
                title: '5. Áo nỉ oversize phối cùng quần short:'
            },
            {
                img: './img/collection/70b086ee-mix-do-voi-hoodie-oversize-3.jpg'
            }, {
                text: 'Phong cách: Streetstyle, cá tính.'
            }, {
                text: 'Chi tiết:'
            }, {
                text: 'Áo nỉ: Áo nỉ oversize, có thể chọn áo có mũ hoặc không mũ.'
            }, {
                text: 'Quần short: Quần short jeans rách hoặc quần short vải.'
            }, {
                text: 'Giày: Sneaker cao cổ hoặc giày boots.'
            }, {
                title: '6. Áo nỉ nam với áo sơ mi mix layer'
            },
            {
                img: './img/collection/ANHTK411-AHDTK420-QJDTK416-2-Custom.jpg'
            }, {
                text: 'Phong cách: lịch sự, chỉn chu'
            }, {
                text: 'Chi tiết:'
            }, {
                text: 'Áo nỉ: Chọn áo nỉ cổ tròn hoặc cổ V'
            }, {
                text: 'Áo sơ mi: Chọn áo sơ mi đơn sắc, cổ đức'
            }, {
                text: 'Quần: phối cùng quần jean, quần kaki tạo cảm giác thoải mái và lựa chọn quần âu khi đến những sự kiện quan trọng hoặc đi làm.'
            }, {
                text: 'Giày: giày sneaker năng động hoặc một đôi giày tây lịch lãm'
            }, {
                title: '7. Áo nỉ nam mặc trong áo khoác'
            }, {
                img: './img/collection/AKHTK415-ANHTK411-QKTTK306-AKHTK408-ANMTK403-QJDTK410-AKHTK408-ANTTK414-APTTK403-QJDTK410-5-Custom.jpg'
            }, {
                text: 'Phong cách: Đa dạng, giữ ấm.'
            }, {
                text: 'Chi tiết:'
            }, {
                text: 'Áo khoác: Phối cùng áo khoác bomber ấm áp, áo khoác denim bụi bặm hay áo măng tô lịch lãm.'
            }, {
                text: 'Áo nỉ: Chọn áo nỉ hoặc áo hoodie để phối layer tùy từng loại áo khoác mặc ngoài.'
            }, {
                text: 'Quần: Phối cùng quần jeans, kaki trẻ trung, năng động.'
            }, {
                text: 'Phụ kiện: đồng hồ, vòng tay để set đồ không bị nhàm chán.'
            }, {
                title: 'Lưu ý:'
            }, {
                text: 'Chọn màu sắc phù hợp: Bạn có thể chọn các màu sắc tương đồng hoặc tương phản để tạo điểm nhấn.'
            }, {
                text: 'Phụ kiện: Mũ, kính, túi xách, giày dép… sẽ giúp bạn hoàn thiện phong cách.'
            }, {
                text: 'Tự tin: Điều quan trọng nhất là bạn phải cảm thấy thoải mái và tự tin với trang phục của mình.'
            }]
    },
    {
        id_collection: 3,
        img: './img/collection/rsz_1Anh_chInh-e1728288339241-1536x826.jpg',
        alt: 'áo sơ mi trắng công sở',
        time: '25/09/2024',
        title: '3 CÁCH PHỐI QUẦN JEAN NAM VỚI SƠ MI ỨNG DỤNG ĐA HOÀN CẢNH',
    },
    {
        id_collection: 4,
        img: './img/collection/STDTK421-APTK465-QJDTK309-STDTK421-APTTK423-QJDTK334-2-Medium-e1728017423347.jpg',
        alt: '',
        time: '07/10/2024',
        title: 'ĐỊA CHỈ SHOP QUẦN ÂU NAM ĐẸP, UY TÍN, GIÁ HỢP LÝ',
    },

    {
        id_collection: 5,
        img: './img/collection/POTTK442-QGNTK407-AHHTK403-QGNTK407-4-Custom.jpg',
        alt: 'hình ảnh bộ đồ nỉ nam',
        time: '02/10/2024',
        title: 'BỘ NỈ NAM CAO CẤP, PHONG CÁCH THỂ THAO, CHẤT LƯỢNG, GIÁ TỐT',
    }
];

const dataCollectionnew = [
    {
        img: './img/collection/4-resize-1536x864.jpg',
        time: '25/09/2024',
        title: 'ENJOY CHRISTMAS | 2023 Holidays',
        content: 'Mùa lễ Giáng sinh đã rất cận kề, tín đồ thời trang hẳn không thể bỏ lỡ các gam màu đặc trưng của mùa lễ hội, 360® tung ra BST đậm màu sắc Noel, mở ra một bữa tiệc cuối năm trọn vị cảm xúc.'
    }, {
        img: './img/collection/banner-OA-resize.jpg',
        time: '25/09/2024',
        title: 'ENJOY CHRISTMAS | 2023 Holidays',
        content: 'Mùa lễ Giáng sinh đã rất cận kề, tín đồ thời trang hẳn không thể bỏ lỡ các gam màu đặc trưng của mùa lễ hội, 360® tung ra BST đậm màu sắc Noel, mở ra một bữa tiệc cuối năm trọn vị cảm xúc.'
    },
    {
        img: './img/collection/2.1.jpg',
        time: '25/09/2024',
        title: 'ENJOY CHRISTMAS | 2023 Holidays',
        content: 'Mùa lễ Giáng sinh đã rất cận kề, tín đồ thời trang hẳn không thể bỏ lỡ các gam màu đặc trưng của mùa lễ hội, 360® tung ra BST đậm màu sắc Noel, mở ra một bữa tiệc cuối năm trọn vị cảm xúc.'
    },
    {
        img: './img/collection/1.1-1536x864.jpg',
        time: '25/09/2024',
        title: 'ENJOY CHRISTMAS | 2023 Holidays',
        content: 'Mùa lễ Giáng sinh đã rất cận kề, tín đồ thời trang hẳn không thể bỏ lỡ các gam màu đặc trưng của mùa lễ hội, 360® tung ra BST đậm màu sắc Noel, mở ra một bữa tiệc cuối năm trọn vị cảm xúc.'
    },
    {
        img: './img/collection/358401030_587980946829412_2028958567400285616_n-min-min-1536x1536.jpg',
        time: '25/09/2024',
        title: 'ENJOY CHRISTMAS | 2023 Holidays',
        content: 'Mùa lễ Giáng sinh đã rất cận kề, tín đồ thời trang hẳn không thể bỏ lỡ các gam màu đặc trưng của mùa lễ hội, 360® tung ra BST đậm màu sắc Noel, mở ra một bữa tiệc cuối năm trọn vị cảm xúc.'
    },
    {
        img: './img/collection/341128074_693704075859125_7005237217432900077_n-min-min-1536x1024.jpg',
        time: '25/09/2024',
        title: 'ENJOY CHRISTMAS | 2023 Holidays',
        content: 'Mùa lễ Giáng sinh đã rất cận kề, tín đồ thời trang hẳn không thể bỏ lỡ các gam màu đặc trưng của mùa lễ hội, 360® tung ra BST đậm màu sắc Noel, mở ra một bữa tiệc cuối năm trọn vị cảm xúc.'
    },
    {
        img: './img/collection/328246039_573600381309535_5594337255115660441_n-min.jpg',
        time: '25/09/2024',
        title: 'ENJOY CHRISTMAS | 2023 Holidays',
        content: 'Mùa lễ Giáng sinh đã rất cận kề, tín đồ thời trang hẳn không thể bỏ lỡ các gam màu đặc trưng của mùa lễ hội, 360® tung ra BST đậm màu sắc Noel, mở ra một bữa tiệc cuối năm trọn vị cảm xúc.'
    },
    {
        img: './img/collection/Biaf-300x200.jpg',
        time: '25/09/2024',
        title: 'ENJOY CHRISTMAS | 2023 Holidays',
        content: 'Mùa lễ Giáng sinh đã rất cận kề, tín đồ thời trang hẳn không thể bỏ lỡ các gam màu đặc trưng của mùa lễ hội, 360® tung ra BST đậm màu sắc Noel, mở ra một bữa tiệc cuối năm trọn vị cảm xúc.'
    }
];