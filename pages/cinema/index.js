Page({
    data: {
        title: ''
    },
    //事件处理函数
    onLoad: function (options) {
        this.title = options.type || '微票'
        var that = this

        //playingList
        wx.request({
            url: 'http://json.bmbstack.com/cinemaList',
            method: 'GET',
            data: {},
            header: {
                'Accept': 'application/json'
            },
            success: function(res) {
                console.log(res.data)
                that.data.items = res.data
            }
        })
    },
    onReady: function () {
        wx.setNavigationBarTitle({
            title: this.title
        })
    },
})
