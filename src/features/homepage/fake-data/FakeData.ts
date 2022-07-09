import images from '../../../assets/images';

export const dataMenuIcon = [
    {
      id: '1',
      title: 'Lịch trình',
      image: images.PLAN,
    },
    {
      id: '2',
      title: 'Khách sạn',
      image: images.RESTAURANT,
    },
    {
      id: '3',
      title: 'Máy bay',
      image: images.FLIGHT,
    },
    {
      id: '4',
      title: 'Combo',
      image: images.COMBO,
    },
    {
      id: '5',
      title: 'Nhà hàng',
      image: images.RESTAURANT,
    },
  ];

export const dataDiscount = [
  {
    id: '1',
    image: images.DISCOUNT5,
    title: 'Giảm 300K khi nhập mã MEGA để đặt khách sạn',
    time: '1/12 - 31/12'
  },
  {
    id: '2',
    image: images.DISCOUNT3,
    title: 'Giảm 10% khi nhập mã MEGA để đặt khách sạn',
    time: '1/12 - 10/12'
  },
  {
    id: '3',
    image: images.DISCOUNT2,
    title: 'Giảm 10% khi nhập mã MEGA để đặt khách sạn',
    time: '1/12 - 11/12'
  },
  {
    id: '4',
    image: images.DISCOUNT4,
    title: 'Giảm 30% khi nhập mã MEGA để đặt khách sạn',
    time: '1/12 - 20/12'
  }
]

export const scheduleData = [
  {
    id: '1',
    imageTopLeft: images.SCHEDULE_DATA1,
    imageTopRight: images.SCHEDULE_DATA2,
    imageTopLeftBottom: images.SCHEDULE_DATA3,
    imageTopRightBottom: images.SCHEDULE_DATA4,
    durationTime: '5/12 - 10/12',
    title: 'Tràng An, Ninh Bình',
    place: 'Việt Nam',
    price: '5,200,000 đ/ người',
    time: '10 giờ trước',
    description: 'Di sản thiên nhiên thế giới',
    headerText1: 'Khám phá Danh lam thắng cảnh Tràng An Ninh Bình',
    textHeader1: 'Tràng An là một Khu du lịch sinh thái nằm trong Quần thể di sản thế giới Tràng An thuộc tỉnh Ninh Bình. Nơi đây đã được Chính phủ Việt Nam xếp hạng di tích quốc gia đặc biệt quan trọng và UNESCO công nhận là di sản thế giới kép từ năm 2014 (Di sản Văn hóa và Thiên nhiên). Bài viết này sẽ tổng hợp những thông tin hữu ích nhất cho du khách trong chuyến hành trình du lịch khám phá Tràng An Ninh Bình.',
    headerText2: 'Di chuyển từ Thành Phố Hà Nội đi Mã Phì Lèng',
    textHeader2: 'Xe máy từ 200k đến 500k, Ô tô từ 500k đến 1 triệu',
    HeaderText3: 'Thời điểm thích hợp để khám phá là :',
    textHeader3: '8h sáng đến 17h chiều',
    HeaderText4: 'Nơi ở :',
    textHeader4: 'Đến với nơi đây có rất nhiều lựa chọn về nơi ở cho quý khách như ở HomeStay, khách sạn hay những nhà lưu chú của người dân',
    listSchedule: [
     {
        date: '5/12/2019',
        datetime: 'Ngày 1',
        schedule: [
          {
            idSchedule: '1',
            namePlace: 'Ninh Bình',
            durationGo: '45 phút',
            distanCar: '17 km',
            timeStart: '7:00',
            image: images.DetailData1
          },
          {
            idSchedule: '2',
            namePlace: 'Đền Thánh Cao Sơn',
            durationGo: '1 giờ',
            distanCar: '17 km',
            timeStart: '8:15',
            image: images.DetailData2
          }, {
            idSchedule: '3',
            namePlace: 'Tràng An',
            durationGo: '45 phút',
            distanCar: '17 km',
            timeStart: '7:00',
            image: images.DetailData3
          }, {
            idSchedule: '4',
            namePlace: 'Cố đô Hoa Lư',
            durationGo: '45 phút',
            distanCar: '17 km',
            timeStart: '7:00',
            image: images.DetailData4
          },
        ]
      },
      {
        date: '6/12/2019',
        datetime: 'Ngày 2',
        schedule: [
          {
            idSchedule: '1',
            namePlace: 'Chùa Bái Đính',
            durationGo: '45 phút',
            distanCar: '17 km',
            timeStart: '7:00',
            image: images.DetailData5
          },
          {
            idSchedule: '2',
            namePlace: 'Tam Cốc Bích Động',
            durationGo: '1 giờ',
            distanCar: '17 km',
            timeStart: '8:15',
            image: images.DetailData6
          }, {
            idSchedule: '3',
            namePlace: 'Rừng Cúc Phương',
            durationGo: '45 phút',
            distanCar: '17 km',
            timeStart: '7:00',
            image: images.DetailData7
          }
        ]
      },
       {
        date: '7/12/2019',
        datetime: 'Ngày 3',
        schedule: [
          {
            idSchedule: '1',
            namePlace: 'Tháp đôi',
            durationGo: '45 phút',
            distanCar: '17 km',
            timeStart: '7:00',
            image: images.DetailData1
          },
          {
            idSchedule: '2',
            namePlace: 'Làng chài Nhơn Hải',
            durationGo: '1 giờ',
            distanCar: '17 km',
            timeStart: '8:15',
            image: images.DetailData2
          }, {
            idSchedule: '3',
            namePlace: 'Tháp đôi',
            durationGo: '45 phút',
            distanCar: '17 km',
            timeStart: '7:00',
            image: images.DetailData3
          }, {
            idSchedule: '4',
            namePlace: 'Tháp đôi',
            durationGo: '45 phút',
            distanCar: '17 km',
            timeStart: '7:00',
            image: images.DetailData4
          },
        ]
      },
      {
        date: '8/12/2019',
        datetime: 'Ngày 4',
        schedule: [
          {
            idSchedule: '1',
            namePlace: 'Tháp đôi',
            durationGo: '45 phút',
            distanCar: '17 km',
            timeStart: '7:00',
            image: images.DetailData1
          },
          {
            idSchedule: '2',
            namePlace: 'Làng chài Nhơn Hải',
            durationGo: '1 giờ',
            distanCar: '17 km',
            timeStart: '8:15',
            image: images.DetailData2
          }, {
            idSchedule: '3',
            namePlace: 'Tháp đôi',
            durationGo: '45 phút',
            distanCar: '17 km',
            timeStart: '7:00',
            image: images.DetailData3
          }, {
            idSchedule: '4',
            namePlace: 'Tháp đôi',
            durationGo: '45 phút',
            distanCar: '17 km',
            timeStart: '7:00',
            image: images.DetailData4
          },
          
        ]
      },
    ]

  },
  {
    id: '2',
    imageTopLeft: images.SCHEDULE_DATA31,
    imageTopRight: images.SCHEDULE_DATA32,
    imageTopLeftBottom: images.SCHEDULE_DATA33,
    imageTopRightBottom: images.SCHEDULE_DATA34,
    durationTime: '5/12 - 10/12',
    title: 'Hà Giang ơi ơii!',
    place: 'Việt Nam',
    price: '5,200,000 đ/ người',
    time: '10 giờ trước',
    description: 'Mảnh đất thiên nhiên đất trời',
    headerText1: 'Khám phá những con đèo độc nhất vô nhị của Việt Nam',
    textHeader1: 'Đèo Mã Pì Lèng hay còn gọi là Mả Pí Lèng, Mã Pỉ Lèng (nghĩa là “sống mũi con ngựa”) được mệnh danh là vua của các con đèo ở vùng núi Tây Bắc, là cung đường đèo hiểm trở dài khoảng 20km, thuộc xã Pả Vi và Pải Lủng, huyện Mèo Vạc và xã Tả Lủng huyện Đồng Văn.',
    headerText2: 'Di chuyển từ Thành Phố Hà Nội đi Mã Phì Lèng',
    textHeader2: 'Xe máy từ 200k đến 500k, Ô tô từ 500k đến 1 triệu',
    HeaderText3: 'Thời điểm thích hợp để khám phá là :',
    textHeader3: '8h sáng đến 17h chiều',
    HeaderText4: 'Nơi ở :',
    textHeader4: 'Đến với nơi đây có rất nhiều lựa chọn về nơi ở cho quý khách như ở HomeStay, khách sạn hay những nhà lưu chú của người dân',
    listSchedule: [
      {
         date: '5/12/2019',
         datetime: 'Ngày 1',
         schedule: [
          {
            idSchedule: '1',
            namePlace: 'Hà Giang',
            durationGo: '45 phút',
            distanCar: '17 km',
            timeStart: '7:00',
            image: images.DetailData8
          },
          {
            idSchedule: '2',
            namePlace: 'Cổng Trời Quản Bạ',
            durationGo: '1 giờ',
            distanCar: '17 km',
            timeStart: '8:15',
            image: images.DetailData9
          }, {
            idSchedule: '3',
            namePlace: 'Dinh thự họ Vương',
            durationGo: '45 phút',
            distanCar: '17 km',
            timeStart: '7:00',
            image: images.DetailData10
          }, {
            idSchedule: '4',
            namePlace: 'Cột Cờ Lũng Cú',
            durationGo: '45 phút',
            distanCar: '17 km',
            timeStart: '7:00',
            image: images.DetailData11
          },
         ]
       },
       {
         date: '6/12/2019',
         datetime: 'Ngày 2',
         schedule: [
          {
            idSchedule: '1',
            namePlace: 'Pú Đao',
            durationGo: '45 phút',
            distanCar: '17 km',
            timeStart: '7:00',
            image: images.DetailData13
          },
          {
            idSchedule: '2',
            namePlace: 'Quản Bạ',
            durationGo: '1 giờ',
            distanCar: '17 km',
            timeStart: '8:15',
            image: images.DetailData14
          },
         ]
       },
        {
         date: '7/12/2019',
         datetime: 'Ngày 3',
         schedule: [
          {
            idSchedule: '1',
            namePlace: 'Đồng Văn -Lũng Cú',
            durationGo: '45 phút',
            distanCar: '17 km',
            timeStart: '7:00',
            image: images.DetailData15
          },
          {
            idSchedule: '2',
            namePlace: 'Đồng Văn -Lũng Cú',
            durationGo: '45 phút',
            distanCar: '17 km',
            timeStart: '7:00',
            image: images.DetailData17
          },
         
         ]
       },
       {
         date: '8/12/2019',
         datetime: 'Ngày 4',
         schedule: [
          {
            idSchedule: '1',
            namePlace: 'Quay trở về thành phố Hà Giang',
            durationGo: '45 phút',
            distanCar: '17 km',
            timeStart: '7:00',
            image: images.DetailData16
          },
         
         ]
       },
     ]

  },
  {
    id: '3',
    imageTopLeft: images.SCHEDULE_DATA5,
    imageTopRight: images.SCHEDULE_DATA6,
    imageTopLeftBottom: images.SCHEDULE_DATA7,
    imageTopRightBottom: images.SCHEDULE_DATA8,
    durationTime: '5/12 - 10/12',
    title: 'Bái Đính, Ninh Bình',
    place: 'Việt Nam',
    price: '5,200,000 đ/ người',
    time: '10 giờ trước',
    description: 'Cuội nguồn của Phật Giáo VN',
    headerText1: 'Dõi theo cuội nguồn Phật giáo Việt Nam',
    textHeader1: 'Chùa Bái Đính là một danh thắng tâm linh nằm trong quần thể khu du lịch sinh thái Bái Đính – Tràng An với bề dày lịch sử hơn 1000 năm tuổi gắn với vùng đất của nhiều triều đại phong kiến từ nhà Đinh, nhà Tiền Lê đến nhà Lý. Cùng khám phá những kinh nghiệm đi chùa Bái Đính – đệ nhất danh thắng tâm linh ở Ninh Bình ',
    headerText2: 'Di chuyển từ Thành Phố Hà Nội đi Mã Phì Lèng',
    textHeader2: 'Xe máy từ 200k đến 500k, Ô tô từ 500k đến 1 triệu',
    HeaderText3: 'Thời điểm thích hợp để trải nghiệm và học hỏi là :',
    textHeader3: '8h sáng đến 17h chiều',
    HeaderText4: 'Nơi ở :',
    textHeader4: 'Đến với không gian học Phật giáo, bạn có thể xin lưu trú lại trù hoặc ở các nhà lều dưới chân chùa. Hi vọng sẽ mang lại cho bạn nhiều trải nghiệm quý giá và học hỏi được cho bản thân mình khi ở lại chùa vào ban đêm để tu dưỡng, tĩnh tâm một cách dễ dàng',
    listSchedule: [
      {
         date: '5/12/2019',
         datetime: 'Ngày 1',
         schedule: [
          {
            idSchedule: '1',
            namePlace: 'Thăm quan chùa Bái Đính',
            durationGo: '45 phút',
            distanCar: '17 km',
            timeStart: '7:00',
            image: images.DetailData18
          },
          {
            idSchedule: '2',
            namePlace: 'thăm quan chùa',
            durationGo: '1 giờ',
            distanCar: '17 km',
            timeStart: '8:15',
            image: images.DetailData19
          }, {
            idSchedule: '3',
            namePlace: 'Tam Cốc',
            durationGo: '45 phút',
            distanCar: '17 km',
            timeStart: '7:00',
            image: images.DetailData20
          }, {
            idSchedule: '1',
            namePlace: 'Hang Múa',
            durationGo: '45 phút',
            distanCar: '17 km',
            timeStart: '7:00',
            image: images.DetailData21
          },
         ]
       },
       {
         date: '6/12/2019',
         datetime: 'Ngày 2',
         schedule: [
          {
            idSchedule: '1',
            namePlace: 'Tháp đôi',
            durationGo: '45 phút',
            distanCar: '17 km',
            timeStart: '7:00',
            image: images.DetailData21
          },
          {
            idSchedule: '2',
            namePlace: 'Làng chài Nhơn Hải',
            durationGo: '1 giờ',
            distanCar: '17 km',
            timeStart: '8:15',
            image: images.DetailData2
          }, {
            idSchedule: '3',
            namePlace: 'Tháp đôi',
            durationGo: '45 phút',
            distanCar: '17 km',
            timeStart: '7:00',
            image: images.DetailData3
          }, {
            idSchedule: '4',
            namePlace: 'Tháp đôi',
            durationGo: '45 phút',
            distanCar: '17 km',
            timeStart: '7:00',
            image: images.DetailData4
          },
         ]
       },
        {
         date: '7/12/2019',
         datetime: 'Ngày 3',
         schedule: [
          {
            idSchedule: '1',
            namePlace: 'Tháp đôi',
            durationGo: '45 phút',
            distanCar: '17 km',
            timeStart: '7:00',
            image: images.DetailData1
          },
          {
            idSchedule: '2',
            namePlace: 'Làng chài Nhơn Hải',
            durationGo: '1 giờ',
            distanCar: '17 km',
            timeStart: '8:15',
            image: images.DetailData2
          }, {
            idSchedule: '3',
            namePlace: 'Tháp đôi',
            durationGo: '45 phút',
            distanCar: '17 km',
            timeStart: '7:00',
            image: images.DetailData3
          }, {
            idSchedule: '4',
            namePlace: 'Tháp đôi',
            durationGo: '45 phút',
            distanCar: '17 km',
            timeStart: '7:00',
            image: images.DetailData4
          },
         ]
       },
       {
         date: '8/12/2019',
         datetime: 'Ngày 4',
         schedule: [
          {
            idSchedule: '1',
            namePlace: 'Tháp đôi',
            durationGo: '45 phút',
            distanCar: '17 km',
            timeStart: '7:00',
            image: images.DetailData1
          },
          {
            idSchedule: '2',
            namePlace: 'Làng chài Nhơn Hải',
            durationGo: '1 giờ',
            distanCar: '17 km',
            timeStart: '8:15',
            image: images.DetailData2
          }, {
            idSchedule: '3',
            namePlace: 'Tháp đôi',
            durationGo: '45 phút',
            distanCar: '17 km',
            timeStart: '7:00',
            image: images.DetailData3
          }, {
            idSchedule: '4',
            namePlace: 'Tháp đôi',
            durationGo: '45 phút',
            distanCar: '17 km',
            timeStart: '7:00',
            image: images.DetailData4
          },
         ]
       },
     ]

  },
  {
    id: '4',
    imageTopLeft: images.SCHEDULE_DATA9,
    imageTopRight: images.SCHEDULE_DATA10,
    imageTopLeftBottom: images.SCHEDULE_DATA11,
    imageTopRightBottom: images.SCHEDULE_DATA12,
    durationTime: '5/12 - 10/12',
    title: 'Chùa Đồng, Yên Tử',
    place: 'Việt Nam',
    price: '5,200,000 đ/ người',
    time: '10 giờ trước',
    description: 'Di tích lịch sử của Quốc gia',
    headerText1: 'Khám phá Di tích lịch sử của Quốc gia',
    textHeader1: 'Chùa Đồng là địa điểm nổi tiếng nhất trong quần thể di tích danh thắng Yên Tử (Quảng Ninh), là đích đến của mọi tăng ni, phật tử, du khách thập phương khi hành hương về đất thiêng Yên Tử. Theo quan niệm của các tăng ni, phật tử, chùa Đồng là nơi con người có thể cầu viện được "sinh lực vũ trụ” cho mọi mặt cuộc đời.',
    headerText2: 'Di chuyển từ Thành Phố Hà Nội đi Mã Phì Lèng',
    textHeader2: 'Xe máy từ 200k đến 500k, Ô tô từ 500k đến 1 triệu',
    HeaderText3: 'Thời điểm thích hợp để khám phá là :',
    textHeader3: '8h sáng đến 17h chiều',
    HeaderText4: 'Nơi ở :',
    textHeader4: 'Đến với không gian học Phật giáo, bạn có thể xin lưu trú lại trù hoặc ở các nhà lều dưới chân chùa. Hi vọng sẽ mang lại cho bạn nhiều trải nghiệm quý giá và học hỏi được cho bản thân mình khi ở lại chùa vào ban đêm để tu dưỡng, tĩnh tâm một cách dễ dàng',
    listSchedule: [
      {
         date: '5/12/2019',
         datetime: 'Ngày 1',
         schedule: [
          {
            idSchedule: '1',
            namePlace: 'Tháp đôi',
            durationGo: '45 phút',
            distanCar: '17 km',
            timeStart: '7:00',
            image: images.DetailData1
          },
          {
            idSchedule: '2',
            namePlace: 'Làng chài Nhơn Hải',
            durationGo: '1 giờ',
            distanCar: '17 km',
            timeStart: '8:15',
            image: images.DetailData2
          }, {
            idSchedule: '3',
            namePlace: 'Tháp đôi',
            durationGo: '45 phút',
            distanCar: '17 km',
            timeStart: '7:00',
            image: images.DetailData3
          }, {
            idSchedule: '4',
            namePlace: 'Tháp đôi',
            durationGo: '45 phút',
            distanCar: '17 km',
            timeStart: '7:00',
            image: images.DetailData4
          },
         ]
       },
       {
         date: '6/12/2019',
         datetime: 'Ngày 2',
         schedule: [
          {
            idSchedule: '1',
            namePlace: 'Tháp đôi',
            durationGo: '45 phút',
            distanCar: '17 km',
            timeStart: '7:00',
            image: images.DetailData1
          },
          {
            idSchedule: '2',
            namePlace: 'Làng chài Nhơn Hải',
            durationGo: '1 giờ',
            distanCar: '17 km',
            timeStart: '8:15',
            image: images.DetailData2
          }, {
            idSchedule: '3',
            namePlace: 'Tháp đôi',
            durationGo: '45 phút',
            distanCar: '17 km',
            timeStart: '7:00',
            image: images.DetailData3
          }, {
            idSchedule: '4',
            namePlace: 'Tháp đôi',
            durationGo: '45 phút',
            distanCar: '17 km',
            timeStart: '7:00',
            image: images.DetailData4
          },
         ]
       },
        {
         date: '7/12/2019',
         datetime: 'Ngày 3',
         schedule: [
          {
            idSchedule: '1',
            namePlace: 'Tháp đôi',
            durationGo: '45 phút',
            distanCar: '17 km',
            timeStart: '7:00',
            image: images.DetailData1
          },
          {
            idSchedule: '2',
            namePlace: 'Làng chài Nhơn Hải',
            durationGo: '1 giờ',
            distanCar: '17 km',
            timeStart: '8:15',
            image: images.DetailData2
          }, {
            idSchedule: '3',
            namePlace: 'Tháp đôi',
            durationGo: '45 phút',
            distanCar: '17 km',
            timeStart: '7:00',
            image: images.DetailData3
          }, {
            idSchedule: '4',
            namePlace: 'Tháp đôi',
            durationGo: '45 phút',
            distanCar: '17 km',
            timeStart: '7:00',
            image: images.DetailData4
          },
         ]
       },
       {
         date: '8/12/2019',
         datetime: 'Ngày 4',
         schedule: [
          {
            idSchedule: '1',
            namePlace: 'Tháp đôi',
            durationGo: '45 phút',
            distanCar: '17 km',
            timeStart: '7:00',
            image: images.DetailData1
          },
          {
            idSchedule: '2',
            namePlace: 'Làng chài Nhơn Hải',
            durationGo: '1 giờ',
            distanCar: '17 km',
            timeStart: '8:15',
            image: images.DetailData2
          }, {
            idSchedule: '3',
            namePlace: 'Tháp đôi',
            durationGo: '45 phút',
            distanCar: '17 km',
            timeStart: '7:00',
            image: images.DetailData3
          }, {
            idSchedule: '4',
            namePlace: 'Tháp đôi',
            durationGo: '45 phút',
            distanCar: '17 km',
            timeStart: '7:00',
            image: images.DetailData4
          },
           
         ]
       },
     ]

  },
]

export const dataListPoPularPlace = [
  {
    id: '1',
    title: 'Rừng Dừa Bảy Mẫu',
    image: images.SCHEDULE_DATA15,
    place: 'Quảng Nam, Việt Nam',
    price: '2.500.000đ',
    timeOpen: '10.00 - 18.00',
    image1: images.popularDetail,
    image2: images.popularDetail2,
    image3: images.popularDetail3,
    textHeader: 'Rừng dừa Bảy Mẫu thuộc xã Cẩm Thanh, Thành phố Hội An, Tỉnh Quảng Nam, cách trung tâm Hội An khoảng 3km. Gọi là Bảy Mẫu vì thời xưa khu rừng dừa này chỉ có bảy mẫu thôi, đến nay diện tích khu rừng đã hơn 200 mẫu nhưng người dân nơi đây đã quá quen với tên gọi Bảy Mẫu thân thương này.Khu rừng dừa rộng lớn này nằm cạnh 3 con sông nổi tiếng tại Hội An đó là sông Hoài, sông Thu Bồn và sông Đế Võng đổ về biển.',
    textContent: 'Vì nơi đây có dòng nước lợ rất thích hợp cho sự phát triển của dừa nước nên càng ngày khu rừng dừa nơi đây càng rộng lớn và xanh tốt hòa với hình ảnh sông nước hữu tình tạo cho du khách cảm giác như đang ở một tỉnh nào đó thuộc miền Tây hiền hòa, mộc mạc.'
  },
  {
    id: '2',
    title: 'Cầu Tình Yêu',
    image: images.SCHEDULE_DATA14,
    place: 'Đà Nẵng, Việt Nam',
    price: '2.500.000đ',
    timeOpen: '10.00 - 18.00',
    image1: images.popularDetail4,
    image2: images.popularDetail5,
    image3: images.popularDetail6,
    textHeader: 'Cầu tình yêu Đà Nẵng tuy không có lịch sử lâu đời hay kiến trúc độc đáo như những cây cầu khác tại Đà thành nhưng mỗi ổ khoá được treo trên cầu này lại là một câu chuyện tình yêu lãng mạn, cuốn hút du khách.',
    textContent: 'Nằm giữa trung tâm của thành phố, cây cầu tình yêu Đà Nẵng là nơi check in yêu thích của nhiều bạn trẻ. Không những vậy, những hoạt động vui chơi, giải trí gần cây cầu cũng là điều khiến mọi du khách muốn trải nghiệm, khám phá.'
  },
  {
    id: '3',
    title: 'Cá Chép Hoá Rồng',
    image: images.SCHEDULE_DATA13,
    place: 'Đà Nẵng, Việt Nam',
    price: '2.500.000đ',
    timeOpen: '10.00 - 18.00',
    image1: images.popularDetail7,
    image2: images.popularDetail8,
    image3: images.popularDetail9,
    textHeader: 'Tượng cá chép hóa rồng Đà Nẵng có ý nghĩa đặc biệt đối với hoạt động du lịch của “thành phố đáng sống”. Đến với Đà Nẵng, nhất định phải ghé qua địa chỉ này để tham quan và check-in.',
    textContent: 'Bên cạnh cầu Rồng, núi Ngũ Hành Sơn, biển Mỹ Khê,… thì tượng cá chép hóa rồng Đà Nẵng cũng là một trong những địa điểm “sống ảo” lý tưởng tại thành phố này. Du lịch Đà Nẵng, bạn nên lựa chọn tham quan điểm đến này để lưu lại những khoảnh khắc kỷ niệm và khám phá về ý nghĩa của bức tượng!'
  },
  {
    id: '4',
    title: 'Lý Sơn, Quảng Ngãi',
    image: images.SCHEDULE_DATA24,
    place: 'Quảng Ngãi, Việt Nam',
    price: '2.500.000đ',
    timeOpen: '10.00 - 18.00',
    image1: images.popularDetail10,
    image2: images.popularDetail11,
    image3: images.popularDetail12,
    textHeader: 'Đảo Lý Sơn là một trong những điểm du lịch biển tuyệt vời ở dải đất miền Trung, là huyện đảo duy nhất của tỉnh Quảng Ngãi.Huyện đảo Lý Sơn cách đất liền 15 hải lý (khoảng 27 km) và bao gồm đảo Lớn, đảo Bé, hòn Mù Cu. Trong đó, đảo Bé (hay còn gọi là đảo An Bình) là một hòn đảo có diện tích rất nhỏ với 0.69 km2 và nằm cách đảo Lớn khoảng 7 km.',
    textContent: 'Lý Sơn là nơi bạn có thể đắm mình trong làn nước xanh ngắt trong vắt, khám phá những gam màu độc đáo của thiên nhiên hoang sơ và tận hưởng những giây phút bình yên giữa biển trời mênh mông.'
  },
]

export const dataSpecialExperience = [
  {
    id: '1',
    image: images.SCHEDULE_DATA18,
    title: 'Hà Giang ơi !',
    place: 'Hà Giang, Việt Nam',
    price: '2.000.000đ',
    durationTime: '5/12 - 10/12',
    image1: images.specialdetail,
    image2: images.specialdetail2,
    image3: images.specialdetail1,
    time: '10 giờ trước',
    description: 'Cuội nguồn của Phật Giáo VN',
    headerText1: 'Những thông tin về du lịch Hà Giang',
    textHeader1: 'Du lịch Hà Giang tự túc là một trải nghiệm cực kì thú vị và đáng nhớ. Đó là chia sẻ của rất nhiều phượt thủ đã từng đến với vùng đất này. Nhưng không dễ dàng gì để có một trải nghiệm tuyệt vời, bởi địa hình nơi đây khiến nhiều người trùng bước. ',
    headerText2: 'Di chuyển từ Thành Phố Hà Nội đi Mã Phì Lèng',
    textHeader2: 'Không kể những tỉnh thành ở gần với Hà Giang. Đa phần các phượt thủ khi khám phá vùng đất này đều xuất phát từ Hà Nội. Khoảng cách từ Hà Nội lên Hà Giang cỡ 300km. Bạn có thể lựa chọn 1 trong 2 tuyến đường để di chuyển. Có thể đi theo quốc lộ 32 hoặc đi theo hướng Phạm Văn Đồng – Nội Bài.',
    HeaderText3: 'Thời điểm thích hợp để trải nghiệm và học hỏi là :',
    textHeader3: 'Với những người đi phượt thường sẽ không quan tâm quá nhiều đến thời điểm du lịch lý tưởng. Bởi đa phần mọi người đều hứng lên rồi đi, không cần nghĩ ngợi. Song nếu như bạn vẫn muốn tìm được một thời điểm phù hợp nhất để khám phá vùng đất này. Thì bạn có thể yên tâm rằng, mảnh đất Hà Giang mỗi thời điểm sẽ mang mỗi đẹp riêng. Đặc biệt ở đây mỗi mùa xuân, hạ, thu, đông đều có những loài hoa đặc trưng.',
    HeaderText4: 'Nơi ở :',
    textHeader4: 'Dịch vụ du lịch ở Hà Giang khá đầy đủ. Việc tìm một địa điểm lưu trú ở đây không quá khó. Bạn hoàn toàn có thể tìm một địa điểm để nghỉ chân khi đến vùng đất địa đầu Tổ Quốc.',
    listSchedule: [
      {
         date: '5/12/2019',
         datetime: 'Ngày 1',
         schedule: [
          {
            idSchedule: '1',
            namePlace: 'Thăm quan chùa Bái Đính',
            durationGo: '45 phút',
            distanCar: '17 km',
            timeStart: '7:00',
            image: images.DetailData18
          },
          
         ]
       },
       {
         date: '6/12/2019',
         datetime: 'Ngày 2',
         schedule: [
          {
            idSchedule: '1',
            namePlace: 'Tháp đôi',
            durationGo: '45 phút',
            distanCar: '17 km',
            timeStart: '7:00',
            image: images.DetailData21
          },

         ]
       },
        {
         date: '7/12/2019',
         datetime: 'Ngày 3',
         schedule: [
          {
            idSchedule: '1',
            namePlace: 'Tháp đôi',
            durationGo: '45 phút',
            distanCar: '17 km',
            timeStart: '7:00',
            image: images.DetailData1
          },
       
         ]
       },
       {
         date: '8/12/2019',
         datetime: 'Ngày 4',
         schedule: [
          {
            idSchedule: '1',
            namePlace: 'Tháp đôi',
            durationGo: '45 phút',
            distanCar: '17 km',
            timeStart: '7:00',
            image: images.DetailData1
          },
         
         ]
       },
     ]
  },
 
  {
    id: '2',
    image: images.SCHEDULE_DATA25,
    title: 'Cầu Thê Húc',
    place: 'Hà Nội, Việt Nam',
    price: '30.000đ',  durationTime: '5/12 - 10/12',
    time: '10 giờ trước',
    image1: images.specialdetail4,
    image2: images.specialdetail5,
    image3: images.specialdetail3,
    description: 'Cuội nguồn của Phật Giáo VN',
    headerText1: '5 điểm khám phá khi tham quan cầu Thê Húc',
    textHeader1: 'Cầu bắc qua hồ Hoàn Kiếm được làm bằng gỗ thô và sơn màu đỏ, thiết kế cầu cong cong và uốn như hình con tôm. Là cây cầu dẫn đến đền Ngọc Sơn với nghĩa giữ lại ánh sáng đẹp của bầu trời. Từ cầu Thê Húc bạn có thể đến tham quan đền Ngọc Sơn - một ngôi đền thờ nằm trên đảo Ngọc hồ Hoàn Kiếm.',
    headerText2: 'Đến cầu Thê Húc bằng cách nào ?    ',
    textHeader2: 'Cầu Thê Húc nằm ở hồ Hoàn Kiếm phố Đinh Tiên Hoàng, Hàng Trống. Cầu dẫn đến đền Ngọc Sơn vì vậy bạn có thể đến tham quan cầu Thê Húc bằng bất cứ phương tiện gì trong nội thành Hà Nội.',
    HeaderText3: 'Nên tham quan cầu Thê Húc vào buổi nào ? ',
    textHeader3: 'Tham quan cầu Thế Húc vào bất cứ thời gian nào trong ngày, nếu kết hợp tham quan đền Ngọc Sơn thì giờ mở cửa của đền từ 07:00 đến 18:00 hằng ngày và đến 21:00 vào ngày cuối tuần. Tham quan cầu Thê Húc cả vào thời gian ban ngày hay đêm xuống cũng đều chiêm ngưỡng được vẻ đẹp của cầu giữa lòng hồ Hoàn Kiếm.',
    HeaderText4: 'Tham quan cầu Thê Húc trong bao lâu ?    ',
    textHeader4: 'Bạn có thể kết hợp tham quan một vòng các thắng cảnh quanh hồ Hoàn Kiếm và đền Ngọc Sơn. Thời gian tham quan mất gần khoảng từ 1 đến 2 giờ. ',
    listSchedule: [
      {
         date: '5/12/2019',
         datetime: 'Ngày 1',
         schedule: [
          {
            idSchedule: '1',
            namePlace: 'Thăm quan chùa Bái Đính',
            durationGo: '45 phút',
            distanCar: '17 km',
            timeStart: '7:00',
            image: images.specialdetail
          },
          {
            idSchedule: '1',
            namePlace: 'Thăm quan chùa Bái Đính',
            durationGo: '45 phút',
            distanCar: '17 km',
            timeStart: '7:00',
            image: images.DetailData18
          },
          {
            idSchedule: '1',
            namePlace: 'Thăm quan chùa Bái Đính',
            durationGo: '45 phút',
            distanCar: '17 km',
            timeStart: '7:00',
            image: images.DetailData18
          },
          
         ]
       },
       {
         date: '6/12/2019',
         datetime: 'Ngày 2',
         schedule: [
          {
            idSchedule: '1',
            namePlace: 'Tháp đôi',
            durationGo: '45 phút',
            distanCar: '17 km',
            timeStart: '7:00',
            image: images.DetailData21
          },

         ]
       },
        {
         date: '7/12/2019',
         datetime: 'Ngày 3',
         schedule: [
          {
            idSchedule: '1',
            namePlace: 'Tháp đôi',
            durationGo: '45 phút',
            distanCar: '17 km',
            timeStart: '7:00',
            image: images.DetailData1
          },
       
         ]
       },
       {
         date: '8/12/2019',
         datetime: 'Ngày 4',
         schedule: [
          {
            idSchedule: '1',
            namePlace: 'Tháp đôi',
            durationGo: '45 phút',
            distanCar: '17 km',
            timeStart: '7:00',
            image: images.DetailData1
          },
         
         ]
       },
     ]
  },
  {
    id: '3',
    image: images.specialdetail13,
    title: 'Phú Quốc trong tôi',
    place: 'Kiên Giang, Việt Nam',
    price: '1.000.000đ',
    durationTime: '5/12 - 10/12',
    image1: images.specialdetail7,
    image2: images.specialdetail8,
    image3: images.specialdetail9,
    time: '10 giờ trước',
    description: 'Cuội nguồn của Phật Giáo VN',
    headerText1: 'Kinh nghiệm du lịch Phú Quốc    ',
    textHeader1: 'Có rất nhiều mỹ từ được dành cho Phú Quốc: Đảo Ngọc, Bali của Việt Nam, thiên đường ngắm hoàng hôn… Tất cả đều là một thỏi nam châm hút những tín đồ biển xanh chuyền tay nhau kinh nghiệm du lịch Phú Quốc tự túc, để được trải nghiệm trọn vẹn hòn đảo này.Thuộc tỉnh Kiên Giang, Phú Quốc là hòn đảo lớn nhất Việt Nam và vịnh Thái Lan. Mọi người thường bảo “lên rừng xuống biển", nhưng chỉ cần đến Phú Quốc bạn sẽ được trải nghiệm hết những điều đó. Phú Quốc có những bãi biển cát trắng nước xanh, có vườn quốc gia với hệ sinh thái đa dạng, có những con suối trong vắt, và cả những hòn đảo xinh đẹp, bình yên.',
    headerText2: 'Đến Phú Quốc bằng cách nào?    ',
    textHeader2: 'Vé máy bay đi Phú Quốc,Bằng xe khách & phà/ tàu cao tốc,',
    HeaderText3: 'Du lịch Phú Quốc tự túc mùa nào đẹp?    ',
    textHeader3: 'Hơi “ngược ngạo" so với các thành phố biển khác, trong khi mùa hè là mùa đẹp nhất cho những chuyến đi bổ sung “vitamin Sea” thì Phú Quốc lại vào mùa mưa. Thời điểm đẹp nhất để đi du lịch Phú Quốc là vào tháng 10 - tháng 4 năm sau vì đây chính là mùa khô của hòn đảo. Lúc này thời tiết không quá nắng, nhiệt độ chỉ khoảng 27 độ C, biển êm, phù hợp cho các hoạt động vui chơi. Đây cũng chính là mùa cao điểm của giá vé máy bay đi Phú Quốc',
    HeaderText4: 'Khách sạn và homestay Phú Quốc    ',
    textHeader4: 'Được mệnh danh là thiên đường du lịch nên sự lựa chọn về khách sạn tại Phú Quốc là vô cùng đa dạng, từ các khu resort 4-5 sao với trải nghiệm nghỉ dưỡng tối đa, đến các homestay nhỏ xinh, thiết kế dễ thương mà review cũng “xịn sò” không kém cho các tín đồ sống ảo.Hầu hết các khách sạn Phú Quốc tầm trung 2-3 sao và các homestay, nhà nghỉ sẽ tập trung ở khu vực thị trấn Dương Đông, tiện lợi để đi đến các nơi khác trên đảo mà buổi tối cũng nhộn nhịp hơn. Nếu muốn chọn các khu resort, khách sạn 4-5 sao cao cấp hơn tại Phú Quốc như Novotel, Sol Beach thì bạn cần đi xa khỏi Dương Đông khoảng 8km, ở khu vực có phần yên tĩnh hơn tại Đường Bào, Dương Tơ…',
    listSchedule: [
      {
         date: '5/12/2019',
         datetime: 'Ngày 1',
         schedule: [
          {
            idSchedule: '1',
            namePlace: 'Thăm quan chùa Bái Đính',
            durationGo: '45 phút',
            distanCar: '17 km',
            timeStart: '7:00',
            image: images.DetailData18
          },
          
         ]
       },
       {
         date: '6/12/2019',
         datetime: 'Ngày 2',
         schedule: [
          {
            idSchedule: '1',
            namePlace: 'Tháp đôi',
            durationGo: '45 phút',
            distanCar: '17 km',
            timeStart: '7:00',
            image: images.DetailData21
          },

         ]
       },
        {
         date: '7/12/2019',
         datetime: 'Ngày 3',
         schedule: [
          {
            idSchedule: '1',
            namePlace: 'Tháp đôi',
            durationGo: '45 phút',
            distanCar: '17 km',
            timeStart: '7:00',
            image: images.DetailData1
          },
       
         ]
       },
       {
         date: '8/12/2019',
         datetime: 'Ngày 4',
         schedule: [
          {
            idSchedule: '1',
            namePlace: 'Tháp đôi',
            durationGo: '45 phút',
            distanCar: '17 km',
            timeStart: '7:00',
            image: images.DetailData1
          },
         
         ]
       },
     ]
  },
  {
    id: '4',
    image: images.specialdetail12,
    title: 'Ngắm bình minh Phú Yên',
    place: 'Phú Yên, Việt Nam',
    price: '3.000.000đ',
    durationTime: '5/12 - 10/12',
    image1: images.specialdetail10,
    image2: images.specialdetail11,
    image3: images.specialdetail14,
    time: '10 giờ trước',
    description: 'Cuội nguồn của Phật Giáo VN',
    headerText1: ' kinh nghiệm du lịch Phú Yên tự túc, phá đảo xứ hoa vàng',
    textHeader1: 'Sở hữu vẻ đẹp hoang sơ và bình dị, Phú Yên dần trở thành một điểm dừng chân cực hot cho những ai đam mê xê dịch trong những năm gần đây.',
    headerText2: 'Đến Phú Yên bằng cách nào?    ',
    textHeader2: 'Với hệ thống sân bay, ga tàu hay bến xe khá phát triển, bạn có thể đến Phú Yên bằng nhiều lựa chọn phương tiện khác nhau, đó là:Vé máy bay đi Phú Yên,Vé tàu hỏa đến Phú Yên,Vé xe khách đến Phú Yên',
    HeaderText3: 'Thời gian du lịch Phú Yên lý tưởng - du lịch Phú Yên mùa nào đẹp?',
    textHeader3: 'Thời tiết Phú Yên trong năm được chia thành 2 mùa chính là mùa nắng và mùa mưa. Trong đó, mùa nắng từ tháng 1 đến tháng 8 là thời điểm Phú Yên đẹp nhất với nắng vàng rực rỡ, hoàn hảo cho các hoạt động du lịch - tham quan ở biển đảo và cả núi rừng. Đặc biệt, vào 2 tháng đầu năm (tháng 1 và tháng 2), nơi đây còn tổ chức một số lễ hội truyền thống như đua thuyền đầm Hồ Loan (7/1), đua ngựa (8/1), nghe bài chòi,... vô cùng đặc sắc. Vào thời gian cao điểm như trên, Phú Yên sẽ đón rất nhiều lượt khách du lịch nên bạn cần đặt vé và khách sạn trước 1 - 2 tháng để tránh tình trạng “cháy” vé, hết phòng hoặc phải mua giá đắt.    ',
    HeaderText4: 'Đi du lịch Phú Yên thì ở đâu?    ',
    textHeader4: 'Đi cùng với sự phát triển du lịch, các loại hình khách sạn ở Phú Yên cũng ngày càng phát triển đa dạng và chất lượng hơn. Tùy vào sở thích của mình, bạn có thể lựa chọn khách sạn từ 5 sao cho đến homestay, nằm ở khu vực trung tâm thành phố hay các khu du lịch biển ngoại thành.Trong đó, các resort biển hay khách sạn 4 - 5 sao là hình thức lưu trú phổ biến đối với phân khúc khách hàng cao cấp. Khách du lịch lựa chọn các địa điểm này vì được đáp ứng nhu cầu nghỉ dưỡng, chất lượng phòng với view cực xịn và các dịch vụ tích hợp đa dạng như spa, phòng gym, bể bơi, nhà hàng, bar,... Một số resort và khách sạn tiêu biểu có thể nhắc đến là: Stelia Beach Resort, Sao Mai Beach Resort, Sai Gon Phu Yen Hotel,...     ',
    listSchedule: [
      {
         date: '5/12/2019',
         datetime: 'Ngày 1',
         schedule: [
          {
            idSchedule: '1',
            namePlace: 'Thăm quan chùa Bái Đính',
            durationGo: '45 phút',
            distanCar: '17 km',
            timeStart: '7:00',
            image: images.DetailData18
          },
          
         ]
       },
       {
         date: '6/12/2019',
         datetime: 'Ngày 2',
         schedule: [
          {
            idSchedule: '1',
            namePlace: 'Tháp đôi',
            durationGo: '45 phút',
            distanCar: '17 km',
            timeStart: '7:00',
            image: images.DetailData21
          },

         ]
       },
        {
         date: '7/12/2019',
         datetime: 'Ngày 3',
         schedule: [
          {
            idSchedule: '1',
            namePlace: 'Tháp đôi',
            durationGo: '45 phút',
            distanCar: '17 km',
            timeStart: '7:00',
            image: images.DetailData1
          },
       
         ]
       },
       {
         date: '8/12/2019',
         datetime: 'Ngày 4',
         schedule: [
          {
            idSchedule: '1',
            namePlace: 'Tháp đôi',
            durationGo: '45 phút',
            distanCar: '17 km',
            timeStart: '7:00',
            image: images.DetailData1
          },
         
         ]
       },
     ]
  },
 
 
]

export const Destination12 = [
  {
    id: '1',
    title: 'Hà Giang',
    image: images.SCHEDULE_DATA19,
    image1: images.destinationdetail,
    image2: images.destinationdetail2,
    image3: images.destinationdetail3,
    place: 'Hà Giang, Việt Nam',
    price: '1.500.000đ',
    timeOpen: '8.00 - 18.00',
    textHeader: 'Khung cảnh hùng vĩ của mảnh đất cực Bắc Tổ quốc mùa nào cũng đáng đi, đáng chiêm ngưỡng, trên đường đi bạn sẽ bắt gặp những nơi có nhưng con đường chạy ngút lên trời xanh, những nơi hình hài đất nước nổi lên như bản đồ, hoặc những nơi có ruộng bậc thang rộng lớn',
    textContent: 'Hà Giang không chỉ đẹp bởi phong cảnh hùng vĩ, nơi đây còn nổi tiếng với muôn loài hoa. Ở nơi đây hoa nở quanh năm với các mầu sắc diệu kỳ như: màu vàng của Hoa Cải, màu tím của hoa Tam Giác Mạch, màu trắng tinh khổi của Hoa Mận.'
  },
  {
    id: '2',
    title: 'Phú Quốc',
    image: images.SCHEDULE_DATA22,
    image1: images.destinationdetail4,
    image2: images.destinationdetail5,
    image3: images.destinationdetail6,
    place: 'Kiên Giang, Việt Nam',
    price: '2.500.000đ',
    timeOpen: '10.00 - 18.00',
    textHeader: 'Thuộc địa phận tỉnh Kiên Giang, nằm trong vịnh Thái Lan, đảo Phú Quốc từ lâu đã nổi tiếng với du khách từ mọi miền đất nước và cả khách du lịch quốc tế. Không chỉ là hòn đảo xinh đẹp với phong cảnh thiên nhiên yên bình, hoang sơ, khí hậu thuận lợi cho hoạt động vui chơi, nghỉ dưỡng, Phú Quốc còn là điểm đến lý tưởng cho nhiều hoạt động khám phá thiên nhiên kỳ thú.',
    textContent: 'Hòn đảo ngọc sở hữu nhiều bãi biển đẹp trải dài từ Bắc đảo tới Nam đảo, 99 ngọn núi, đồi và khu rừng nguyên sinh phong phú hệ động thực vật. Tại Bắc đảo Phú Quốc, du khách có thể ghé thăm những điếm đến nổi tiếng như làng chài Rạch Vẹm, Hòn Một, Bãi Dài, VinWonders Phú Quốc và Vinpearl Safari Phú Quốc, mũi Gành Dầu… Còn tại Nam đảo, 12 hòn đảo lớn nhỏ nằm trong quần đảo An Thới như Hòn Móng Tay, Hòn Thơm, Hòn Gầm Ghì… sẽ là điểm dừng chân lý tưởng cho các hoạt động khám phá thiên nhiên Phú Quốc.'
  },
  {
    id: '3',
    title: 'Đền Hùng',
    image: images.SCHEDULE_DATA21,
    image1: images.destinationdetail7,
    image2: images.destinationdetail8,
    image3: images.destinationdetail9,
    place: 'Lào Cai, Việt Nam',
    price: '2.500.000đ',
    timeOpen: '10.00 - 18.00',
    textHeader: 'Khu Di tích lịch sử Đền Hùng thuộc thôn Cổ Tích - xã Hy Cương - thành phố Việt Trì - tỉnh Phú Thọ, là nơi thờ cúng các vua Hùng đã có công dựng nước, tổ tiên của dân tộc Việt Nam. Đền Hùng cách trung tâm thành phố Việt Trì 7km về phía Bắc, cách thủ đô Hà Nội 90km. Từ Hà Nội, du khách có thể đến Đền Hùng bằng đường bộ theo quốc lộ 2 hoặc tuyến đường sắt Hà Nội - Lào Cai.',
    textContent: 'Đền Hùng là di tích lịch sử văn hoá đặc biệt quan trọng của quốc gia, được xây dựng trên núi Hùng - thuộc đất Phong Châu - vốn là đất kế đô của Nhà nước Văn Lang 4.000 năm trước đây. Toàn bộ Khu di tích có 4 đền, 1 chùa và 1 lăng hài hoà trong cảnh thiên nhiên, có địa thế cao rất ngoạn mục, hùng vĩ, đất đầy khí thiêng của sơn thuỷ hội tụ.'
  },
  {
    id: '4',
    title: 'Lý Sơn, Quảng Ngãi',
    image: images.SCHEDULE_DATA23,
    image1: images.destinationdetail10,
    image2: images.destinationdetail11,
    image3: images.destinationdetail12,
    place: 'Quảng Nam, Việt Nam',
    price: '2.500.000đ',
    timeOpen: '10.00 - 18.00',
    textHeader: 'Đảo Lý Sơn được nhiều người biết đến như một thiên đường giữa đại dương bao la. Ai đến Lý Sơn rồi cũng đều mê mẩn, đều giữ cho mình những hoài niệm chẳng thể nào quên.',
    textContent: 'Những ngôi đền, chùa cổ linh thiêng ở trên đảo Lý Sơn cũng là một trong những điểm đến hấp dẫn du khách. Trong đó phải kể đến chùa Hang, chùa Đục, hang Câu, miếu bà Chúa Ngọc, đình làng An Hải, dinh Bà Roi, giếng Vua, miệng Núi lửa, di tích hải đội Hoàng Sa – Trường Sa, Âm Linh Tự và một số ngôi mộ cổ,….'
  },
]

export const dataResortHotel = [
  {
    id: '1',
    title: 'The Herriott Hotel & Suite',
    headerTtile: 'Khách sạn',
    place: 'Phước Mỹ, Đà Nẵng',
    price: '500,000 đ/ đêm',
    image: images.hoteldetail,
    image1: images.hoteldetail1,
    image2: images.hoteldetail2,
    image3: images.hoteldetail3,
    durationTime: '5/12 - 10/12',
    time: '10 giờ trước',
    description: 'Di tích lịch sử của Quốc gia',
    headerText1: 'Giới thiệu khách sạn',
    textHeader1: 'Du lịch Đà Nẵng chưa bao giờ hết “hot”. Thời tiết mát mẻ, vẻ đẹp lãng mạn luôn thu hút những ai đang tìm một kỳ nghỉ giữa thành phố ngàn thông. Bên cạnh khí hậu, Đà Nẵng còn được thiên nhiên ưu ái cho những đồi chè xanh ngút mắt và đủ loại hoa khoe sắc quanh năm.',
    headerText2: 'Phân khúc khách sạn',
    textHeader2: 'Các khách sạn Đà Nẵng cũng rất đa dạng về phân khúc: từ sang trọng đến bình dân, từ resort nghỉ dưỡng đến villa riêng tư cho chuyến nghỉ ngơi cùng gia đình và bạn bè. Tất nhiên cũng không thể thiếu các hostel và homestay mang đến những trải nghiệm địa phương đặc sắc dành cho các bạn trẻ mê xê dịch. ',
    HeaderText3: 'Thời điểm mở cửa là :',
    textHeader3: '8h sáng đến 22h đêm',
    HeaderText4: 'Các điểm thích thú xung quanh :',
    textHeader4: 'Và đã du lịch Đà Nẵng rồi thì cũng đừng quên thưởng thức những món đặc sản chỉ riêng thành phố sương mù mới có. Bánh căn, bánh mì xíu mại, hay một ly sữa đậu nành nóng chắc chắn sẽ làm bạn ấm bụng giữa tiết trời se lạnh. Còn chờ gì mà không chọn ngay một khách sạn Đà Nẵng để thỏa ước mơ “đi trốn” giữa ngàn thông cho một kì nghỉ chẳng thể lãng mạn hơn!',

  },
  {
    id: '2',
    title: 'Hoa Lac Resort',
    headerTtile: 'Khách sạn',
    place: 'Thạch Thất, Hà Nội',
    price: '200,000 đ/ đêm',
    image: images.hoteldetail7,
    image1: images.hoteldetail8,
    image2: images.hoteldetail9,
    image3: images.hoteldetail10,
    durationTime: '5/12 - 10/12',
    time: '10 giờ trước',
    description: 'Di tích lịch sử của Quốc gia',
    headerText1: 'Giới thiệu khách sạn',
    textHeader1: 'Du lịch Thạch Thất chưa bao giờ hết “hot”. Thời tiết mát mẻ, vẻ đẹp lãng mạn luôn thu hút những ai đang tìm một kỳ nghỉ giữa thành phố ngàn thông. Bên cạnh khí hậu, Thạch Thất còn được thiên nhiên ưu ái cho những đồi chè xanh ngút mắt và đủ loại hoa khoe sắc quanh năm.',
    headerText2: 'Phân khúc khách sạn',
    textHeader2: 'Các khách sạn Thạch Thất cũng rất đa dạng về phân khúc: từ sang trọng đến bình dân, từ resort nghỉ dưỡng đến villa riêng tư cho chuyến nghỉ ngơi cùng gia đình và bạn bè. Tất nhiên cũng không thể thiếu các hostel và homestay mang đến những trải nghiệm địa phương đặc sắc dành cho các bạn trẻ mê xê dịch. ',
    HeaderText3: 'Thời điểm mở cửa là :',
    textHeader3: '8h sáng đến 22h đêm',
    HeaderText4: 'Các điểm thích thú xung quanh :',
    textHeader4: 'Và đã du lịch Thạch Thất rồi thì cũng đừng quên thưởng thức những món đặc sản chỉ riêng thành phố sương mù mới có. Bánh căn, bánh mì xíu mại, hay một ly sữa đậu nành nóng chắc chắn sẽ làm bạn ấm bụng giữa tiết trời se lạnh. Còn chờ gì mà không chọn ngay một khách sạn Thạch Thất để thỏa ước mơ “đi trốn” giữa ngàn thông cho một kì nghỉ chẳng thể lãng mạn hơn!',
  
  },
  {
    id: '3',
    title: 'The Marrios Soc Son',
    headerTtile: 'Khách sạn',
    place: 'Sóc Sơn, Hà Nội',
    price: '300,000 đ/ đêm',
    image: images.hoteldetail6,
    image1: images.hoteldetail5,
    image2: images.hoteldetail4,
    image3: images.hoteldetail7,
    durationTime: '5/12 - 10/12',
    time: '10 giờ trước',
    description: 'Di tích lịch sử của Quốc gia',
    headerText1: 'Giới thiệu khách sạn',
    textHeader1: 'Du lịch Sóc Sơn chưa bao giờ hết “hot”. Thời tiết mát mẻ, vẻ đẹp lãng mạn luôn thu hút những ai đang tìm một kỳ nghỉ giữa thành phố ngàn thông. Bên cạnh khí hậu, Sóc Sơn còn được thiên nhiên ưu ái cho những đồi chè xanh ngút mắt và đủ loại hoa khoe sắc quanh năm.',
    headerText2: 'Phân khúc khách sạn',
    textHeader2: 'Các khách sạn Sóc Sơn cũng rất đa dạng về phân khúc: từ sang trọng đến bình dân, từ resort nghỉ dưỡng đến villa riêng tư cho chuyến nghỉ ngơi cùng gia đình và bạn bè. Tất nhiên cũng không thể thiếu các hostel và homestay mang đến những trải nghiệm địa phương đặc sắc dành cho các bạn trẻ mê xê dịch. ',
    HeaderText3: 'Thời điểm mở cửa là :',
    textHeader3: '8h sáng đến 22h đêm',
    HeaderText4: 'Các điểm thích thú xung quanh :',
    textHeader4: 'Và đã du lịch Sóc Sơn rồi thì cũng đừng quên thưởng thức những món đặc sản chỉ riêng thành phố sương mù mới có. Bánh căn, bánh mì xíu mại, hay một ly sữa đậu nành nóng chắc chắn sẽ làm bạn ấm bụng giữa tiết trời se lạnh. Còn chờ gì mà không chọn ngay một khách sạn Sóc Sơn để thỏa ước mơ “đi trốn” giữa ngàn thông cho một kì nghỉ chẳng thể lãng mạn hơn!',
   
  },
 
  {
    id: '4',
    title: 'Hai Duong Resort',
    headerTtile: 'Khách sạn',
    place: 'Thanh Miện, Hải Dương',
    price: '200,000 đ/ đêm',
    image: images.hoteldetail11,
    image1: images.hoteldetail12,
    image2: images.hoteldetail13,
    image3: images.hoteldetail14,
    durationTime: '5/12 - 10/12',
    time: '10 giờ trước',
    description: 'Di tích lịch sử của Quốc gia',
    headerText1: 'Giới thiệu khách sạn',
    textHeader1: 'Du lịch Hải Dương chưa bao giờ hết “hot”. Thời tiết mát mẻ, vẻ đẹp lãng mạn luôn thu hút những ai đang tìm một kỳ nghỉ giữa thành phố ngàn thông. Bên cạnh khí hậu, Hải Dương còn được thiên nhiên ưu ái cho những đồi chè xanh ngút mắt và đủ loại hoa khoe sắc quanh năm.',
    headerText2: 'Phân khúc khách sạn',
    textHeader2: 'Các khách sạn Hải Dương cũng rất đa dạng về phân khúc: từ sang trọng đến bình dân, từ resort nghỉ dưỡng đến villa riêng tư cho chuyến nghỉ ngơi cùng gia đình và bạn bè. Tất nhiên cũng không thể thiếu các hostel và homestay mang đến những trải nghiệm địa phương đặc sắc dành cho các bạn trẻ mê xê dịch. ',
    HeaderText3: 'Thời điểm mở cửa là :',
    textHeader3: '8h sáng đến 22h đêm',
    HeaderText4: 'Các điểm thích thú xung quanh :',
    textHeader4: 'Và đã du lịch Hải Dương rồi thì cũng đừng quên thưởng thức những món đặc sản chỉ riêng thành phố sương mù mới có. Bánh căn, bánh mì xíu mại, hay một ly sữa đậu nành nóng chắc chắn sẽ làm bạn ấm bụng giữa tiết trời se lạnh. Còn chờ gì mà không chọn ngay một khách sạn Hải Dương để thỏa ước mơ “đi trốn” giữa ngàn thông cho một kì nghỉ chẳng thể lãng mạn hơn!',
  
  },
];
