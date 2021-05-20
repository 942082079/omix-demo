Component({
  behaviors: [],
  properties: {

  },
  data: {
    level: '轻度'
  },
  lifetimes: {
    created() {

    },
    attached() {

    },
    moved() {

    },
    detached() {

    },
  },
  methods: {
    onChange(event) {
      this.setData({
        level: event.detail,
      });
    },
    // 通过eventChannel发送数据给index页面
    confirm() {
      wx.navigateBack({
        delta: 1,
        success: () => {
          console.log(this)
          const eventChannel = this.getOpenerEventChannel();
          eventChannel.emit('getLevel', this.data.level); 
        }
      })
    }
  },
});