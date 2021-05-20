import Toast from '../../miniprogram_npm/vant-weapp/toast/toast';

Page({
  data: {
    level: '选择紧急程度',
    value: ''
  },
  clickSelectLevel: function() {
    wx.navigateTo({
      url: '../select-level/select-level',
      // 添加eventChannel的监听器
      events: {
        getLevel: (level) => {
          this.setData({
            level
          })
        }
      }
    })
  },
  clickSubmit: function() {
    if (this.data.level != '选择紧急程度' && this.data.value) {
      let storage = wx.getStorageSync({key: 'list'}) || []
      const newItem = {
        level: this.data.level,
        value: this.data.value
      }
      storage.push(newItem)
      wx.setStorageSync('list', storage)
      console.log('本地缓存中的list', storage)
    } else {
      Toast.fail('未完成选择');
    }
  }
})