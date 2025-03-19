import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  listProduct:{
    id: number
    name: string,
    img: string,
    des: string
  }[] = [
    { id: 1, name: 'Laptop', img: '../../../assets/img/Thăng.jpg', des: 'mô tả sản phẩm' },
    { id: 2, name: 'Smartphone', img: '../../../assets/img/Thăng.jpg', des: 'mô tả sản phẩm'},
    { id: 3, name: 'Headphones', img: '../../../assets/img/Thăng.jpg', des: 'mô tả sản phẩm' },
    { id: 4,  name: 'Keyboard', img: '../../../assets/img/Thăng.jpg', des: 'mô tả sản phẩm'},
    { id: 5,  name: 'Monitor', img: '../../../assets/img/Thăng.jpg', des: 'mô tả sản phẩm'},
    { id: 6,  name: 'Headphones', img: '../../../assets/img/Thăng.jpg', des: 'mô tả sản phẩm' },
    { id: 7,  name: 'Keyboard', img: '../../../assets/img/Thăng.jpg', des: 'mô tả sản phẩm'},
    { id: 8,  name: 'Monitor', img: '../../../assets/img/Thăng.jpg', des: 'mô tả sản phẩm'},
    { id: 9,  name: 'Headphones', img: '../../../assets/img/Thăng.jpg' , des: 'mô tả sản phẩm'},
    { id: 10,  name: 'Keyboard', img: '../../../assets/img/Thăng.jpg', des: 'mô tả sản phẩm'},
    { id: 11,  name: 'Monitor', img: '../../../assets/img/Thăng.jpg', des: 'mô tả sản phẩm'},
    
  ];

  construction:{  
    id?: number, 
    adress?: string,
    urlImg: string,
    title: string,
    nameCustomer?: string,
    timeFrom?: Date,
    timeTo?: Date,
    des?:string,
    feedback?: number 
  }[]= [
    {
      id: 1,
      adress: 'Hà Nội',
      urlImg: '../../../assets/img/bgsan.jpg',
      title: 'Thi công tòa nhà ACB',
      nameCustomer: 'Công ty ABC',
      timeFrom: new Date('2023-01-15'),
      timeTo: new Date('2023-06-30'),
      des: 'Dự án xây dựng tòa nhà văn phòng hiện đại với thiết kế tối ưu.',
      feedback: 4.8
    },
    {
      id: 2,
      adress: 'Hà Nội',
      urlImg: '../../../assets/img/bgsan.jpg',
      title: 'Thi công cầu vượt X',
      nameCustomer: 'Ban Quản Lý Cầu Đường',
      timeFrom: new Date('2022-05-20'),
      timeTo: new Date('2023-04-10'),
      des: 'Dự án xây dựng cầu vượt giúp giảm tải giao thông nội đô.',
      feedback: 4.5
    },
    {
      id: 3,
      adress: 'Hà Nội',
      urlImg: '../../../assets/img/bgsan.jpg',
      title: 'Thi công khu đô thị Y',
      nameCustomer: 'Tập đoàn XYZ',
      timeFrom: new Date('2021-09-10'),
      timeTo: new Date('2023-03-25'),
      des: 'Khu đô thị mới với nhiều tiện ích cao cấp.',
      feedback: 4.7
    },
    {
      id: 4,
      adress: 'Hà Nội',
      urlImg: '../../../assets/img/bgsan.jpg',
      title: 'Thi công tòa nhà ACB',
      nameCustomer: 'Công ty ABC',
      timeFrom: new Date('2023-01-15'),
      timeTo: new Date('2023-06-30'),
      des: 'Dự án xây dựng tòa nhà văn phòng hiện đại với thiết kế tối ưu.',
      feedback: 4.8
    },
    {
      id: 5,
      adress: 'Hà Nội',
      urlImg: '../../../assets/img/bgsan.jpg',
      title: 'Thi công cầu vượt X',
      nameCustomer: 'Ban Quản Lý Cầu Đường',
      timeFrom: new Date('2022-05-20'),
      timeTo: new Date('2023-04-10'),
      des: 'Dự án xây dựng cầu vượt giúp giảm tải giao thông nội đô.',
      feedback: 4.5
    },
    {
      id: 6,
      adress: 'Hà Nội',
      urlImg: '../../../assets/img/bgsan.jpg',
      title: 'Thi công khu đô thị Y',
      nameCustomer: 'Tập đoàn XYZ',
      timeFrom: new Date('2021-09-10'),
      timeTo: new Date('2023-03-25'),
      des: 'Khu đô thị mới với nhiều tiện ích cao cấp.',
      feedback: 4.7
    },
    {
      id: 7,
      adress: 'Hà Nội',
      urlImg: '../../../assets/img/bgsan.jpg',
      title: 'Thi công tòa nhà ACB',
      nameCustomer: 'Công ty ABC',
      timeFrom: new Date('2023-01-15'),
      timeTo: new Date('2023-06-30'),
      des: 'Dự án xây dựng tòa nhà văn phòng hiện đại với thiết kế tối ưu.',
      feedback: 4.8
    },
    {
      id: 8,
      adress: 'Hà Nội',
      urlImg: '../../../assets/img/bgsan.jpg',
      title: 'Thi công cầu vượt X',
      nameCustomer: 'Ban Quản Lý Cầu Đường',
      timeFrom: new Date('2022-05-20'),
      timeTo: new Date('2023-04-10'),
      des: 'Dự án xây dựng cầu vượt giúp giảm tải giao thông nội đô.',
      feedback: 4.5
    },
    {
      id: 9,
      adress: 'Hà Nội',
      urlImg: '../../../assets/img/bgsan.jpg',
      title: 'Thi công khu đô thị Y',
      nameCustomer: 'Tập đoàn XYZ',
      timeFrom: new Date('2021-09-10'),
      timeTo: new Date('2023-03-25'),
      des: 'Khu đô thị mới với nhiều tiện ích cao cấp.',
      feedback: 4.7
    },
    {
      id: 10,
      adress: 'Hà Nội',
      urlImg: '../../../assets/img/bgsan.jpg',
      title: 'Thi công tòa nhà ACB',
      nameCustomer: 'Công ty ABC',
      timeFrom: new Date('2023-01-15'),
      timeTo: new Date('2023-06-30'),
      des: 'Dự án xây dựng tòa nhà văn phòng hiện đại với thiết kế tối ưu.',
      feedback: 4.8
    },
    {
      id:11,
      adress: 'Hà Nội',
      urlImg: '../../../assets/img/bgsan.jpg',
      title: 'Thi công cầu vượt X',
      nameCustomer: 'Ban Quản Lý Cầu Đường',
      timeFrom: new Date('2022-05-20'),
      timeTo: new Date('2023-04-10'),
      des: 'Dự án xây dựng cầu vượt giúp giảm tải giao thông nội đô.',
      feedback: 4.5
    },
    {
      id: 12,
      adress: 'Hà Nội',
      urlImg: '../../../assets/img/bgsan.jpg',
      title: 'Thi công khu đô thị Y',
      nameCustomer: 'Tập đoàn XYZ',
      timeFrom: new Date('2021-09-10'),
      timeTo: new Date('2023-03-25'),
      des: 'Khu đô thị mới với nhiều tiện ích cao cấp.',
      feedback: 4.7
    },
  
  ]

  listFeed: {
    name: string,
    img: string
    star:number,
    des: string
  
  }[]= [
      {
        name: 'Nguyễn Văn Thăng',
        des: 'sản phẩm cũng rất tốt nhưng ăn cùng mắm tôm thì ngon tuyệt vời',
        img: '../../../assets/img/Thăng.jpg',
        star: 4
      },
      {
        name: 'Phạm Thị Hoa',
        des: 'sản phẩm cũng rất tốt nhưng ăn cùng mắm tôm thì ngon tuyệt vời',
        img: '../../../assets/img/Thăng.jpg',
        star: 5
      },
      {
        name: 'Nguyễn Văn Thăng',
        des: 'sản phẩm cũng rất tốt nhưng ăn cùng mắm tôm thì ngon tuyệt vời',
        img: '../../../assets/img/Thăng.jpg',
        star: 3
      },
      {
        name: 'Nguyễn Văn Thăng',
        des: 'sản phẩm cũng rất tốt nhưng ăn cùng mắm tôm thì ngon tuyệt vời',
        img: '../../../assets/img/Thăng.jpg',
        star: 4
      },
      {
        name: 'Phạm Thị Hoa',
        des: 'sản phẩm cũng rất tốt nhưng ăn cùng mắm tôm thì ngon tuyệt vời',
        img: '../../../assets/img/Thăng.jpg',
        star: 5
      },
      {
        name: 'Nguyễn Văn Thăng',
        des: 'sản phẩm cũng rất tốt nhưng ăn cùng mắm tôm thì ngon tuyệt vời',
        img: '../../../assets/img/Thăng.jpg',
        star: 3
      },
    ]

}
