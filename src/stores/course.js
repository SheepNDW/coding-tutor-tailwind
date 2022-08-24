import { defineStore } from 'pinia';

export const useCourseStore = defineStore('course', {
  state: () => {
    return {
      courseList: [
        {
          id: '001',
          title: '基礎前端 - HTML',
          category: '前端語言',
          desc: '帶領無基礎的平民老百姓，從最基礎的 HTML 語法出發，使用最淺顯易懂的語言與生活隨處可見的例子，輕鬆進入網頁架設的世界，完成一個基礎的網頁架設。',
          price: '1600',
          teacher: 'Belinda',
          avatar:
            'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/week6-202207/teacher01.jpg',
        },
        {
          id: '002',
          title: '2022 Python 全攻略｜從入門到實務',
          category: '後端語言',
          desc: 'Python支援多種程式設計範式，包括函數式、指令式、反射式、結構化和物件導向程式設計，它擁有動態型別系統和垃圾回收功能，能夠自動管理記憶體使用，本堂課帶你無痛入門，開發簡單的應用！',
          price: '2200',
          teacher: 'Guava',
          avatar:
            'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/week6-202207/teacher02.jpg',
        },
        {
          id: '003',
          title: '活用 Line Bot ｜APP 開發到上架完整實戰攻略',
          category: '行動應用開發',
          desc: 'Line Bot 可用於實用的目的，如客戶服務或資訊獲取，有些聊天機器人會搭載自然語言處理系統，但大多簡單的系統只會擷取輸入的關鍵字，再從語料庫中找尋最合適的應答句，本堂課會帶你了解 Line Bot 如何結合其他工具的應用。',
          price: '1800',
          teacher: 'Joe',
          avatar:
            'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/week6-202207/teacher03.jpg',
        },
        {
          id: '004',
          title: 'Linux 零基礎七天入門｜入門到實務',
          category: '作業系統與伺服器',
          desc: 'Linux是一種自由和開放原始碼的類UNIX作業系統，作業系統中包含了許多使用者圖形介面和其他實用工具。課程會一步一步帶著你走，讓你能夠從頭開始學習程式語言的基本語法',
          price: '1100',
          teacher: 'Lina',
          avatar:
            'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/week6-202207/teacher04.jpg',
        },
      ],
    };
  },
});
