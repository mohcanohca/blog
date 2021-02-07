/**
 * @file demo component for swiper
 * @author sunbai
 */

/* global Page, swan, getApp */
let app = getApp();

/* eslint-disable babel/new-cap */
Page({
/* eslint-enable babel/new-cap */
    data: {
        swiperList: [
            {
                className: 'color-a',
                value: 'A'
            }, {
                className: 'color-b',
                value: 'B'
            }, {
                className: 'color-c',
                value: 'C'
            }
        ],
        current: 0,
        itemId: 0,
        switchIndicateStatus: true,
        switchAutoPlayStatus: false,
        switchVerticalStatus: false,
        switchDuration: 500,
        autoPlayInterval: 2000,
        slider: [{
            imageUrl: 'https://b.bdstatic.com/searchbox/icms/searchbox/img/swiperA.png'
        }, {
            imageUrl: 'https://b.bdstatic.com/searchbox/icms/searchbox/img/swiperB.png'
        }, {
            imageUrl: 'https://b.bdstatic.com/searchbox/icms/searchbox/img/swiperC.png'
        }],
        swiperCurrent: 0,
        currentTab: 0
    },
    onShow() {
        // 打点操作
        const openParams = app.globalData.openParams;
        if (openParams) {
            swan.reportAnalytics('pageshow', {
                fr: openParams,
                type: 'component',
                name: 'swiper'
            });
        }
    },
    onHide() {
        app.globalData.openParams = '';
    },

    swiperChange(e) {
        console.log('swiperChange:', e.detail);
        this.setData({
            itemId: e.detail.current
        });
    },

    /**
     * swiper 切换时的下标赋值，用于和圆点位置对应
     *
     * @param {Event} e 事件详情
     */
    swiperChangeCustom(e) {
        this.setData({
            swiperCurrent: e.detail.current
        });
    },
    switchIndicate() {
        this.setData({
            switchIndicateStatus: !this.getData('switchIndicateStatus')
        });
    },
    switchVertical() {
        this.setData({
            switchVerticalStatus: !this.getData('switchVerticalStatus')
        });
    },
    switchAutoPlay() {
        this.setData({
            switchAutoPlayStatus: !this.getData('switchAutoPlayStatus')
        });
    },
    changeSwitchDuration(e) {
        this.setData({
            switchDuration: e.detail.value
        });
    },
    changeAutoPlayInterval(e) {
        this.setData({
            autoPlayInterval: e.detail.value
        });
    },
    animationfinish(e) {
        console.log(e.type);
    },
    /**
     * 获取 view 点击时的事件参数并赋值给 currentTab,用于导航切换和内容对应
     *
     * @param {Event} e 事件详情
     */
    swiperNav(e) {
        this.setData({
            currentTab: e.target.dataset.current
        });
    }
});
