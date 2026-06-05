self.addEventListener('fetch', function(event) {
  // กรองคำขอปกติ ไม่ต้องเก็บ Cache ก็ได้เพื่อให้ข้อมูล Firebase อัปเดตตลอด
});