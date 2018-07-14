## Mục tiêu của bài tập
- Biết cách sử dụng truyền Props từ component A sang component B
- Biết cách sử dụng State, thay đổi State với phương thức SetState

## Các kiến thức phải biết trước khi học
- Hiểu về component trong React, React Native
- Biết cài đặt môi trường React Native trên Windows hoặc Mac

## Nội dung bài tập
Chúng ta sẽ tạo 1 giao diện đơn giản như màn hình bên dưới
- Hiển thị các Topic mà CodeGym đang training
- Click nút tặng like cho CodeGym, số like sẽ tăng lên

![alt](https://github.com/anhtbok92/PropsAndStateReactNativeTraining/blob/master/images/StateAndProps.png)

## Hướng dẫn
- Khởi tạo Project như bài học trước
- Tạo 1 component : <Topic /> sử dụng Props trong Topic, được truyền từ Component cha
- Khởi tạo state từ component cha, tăng số like khi user click vào button tặng like
