import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/pages/index'
import Me from '@/pages/me/me'
import Materialcircle from '@/pages/materialcircle/materiaList'
import Shop from '@/pages/shop/shopList'
import Classify from '@/pages/classify/classifyList'
//产品
import ProductDetail from '@/pages/home/productDetail'
import WordMouth from '@/pages/home/wordMouth'
import ConfirmationOrder from '@/pages/home/confirmationOrder'
import CompanyIntroduction from '@/pages/home/companyIntroduction'
import Shopstyle from '@/pages/home/shopstyle'
import OperationalGuide from '@/pages/home/operationalGuide'
import Teamstyle from '@/pages/home/teamstyle'
import Navigation from '@/pages/home/navigation'
import NewActivities from '@/pages/home/newActivities'
import NewArrivals from '@/pages/home/newArrivals'
import MerchantDetail from '@/pages/home/merchantDetail'
import MerchantEntry from '@/pages/home/merchantEntry'
import Search from '@/pages/home/search'
// 素材圈
import Answers from '@/pages/materialcircle/answers'
import AnswersSearch from '@/pages/materialcircle/answersSearch'
import ImageText from '@/pages/materialcircle/imageText'
import ReportDetail from '@/pages/materialcircle/reportDetail'
import MaterialDetail from '@/pages/materialcircle/materialDetail'
//订单

import OrderDetail from '@/pages/order/orderDetail'
import Relet from '@/pages/order/relet'
import Shopping from '@/pages/order/shopping'
import People from '@/pages/order/people'
import Refund from '@/pages/order/refund'
import TimeQuantum from '@/pages/order/timeQuantum'


//个人中心
import MyInformation from '@/pages/me/myInformation'
import AddInformation from '@/pages/me/addInformation'
import ReceInformation from '@/pages/me/receInformation'
import DetaInformation from '@/pages/me/detaInformation'
import AccountSecurity from '@/pages/me/accountSecurity'
import Coupon from '@/pages/me/coupon'
import Cash from '@/pages/me/cash'
import MyBalance from '@/pages/me/myBalance'
import BankCard from '@/pages/me/bankCard'
import BindingCard from '@/pages/me/bindingCard'
import HelpCenter from '@/pages/me/helpCenter'
import Integral from '@/pages/me/integral'
import Cart from '@/pages/me/cart'
import CommonProblem from '@/pages/me/commonProblem'
import Setup from '@/pages/me/setup'
import Rules from '@/pages/me/rules'
import AccountBinding from '@/pages/me/accountBinding'
import Modify from '@/pages/me/security/modify'
import Sendcode from '@/pages/me/security/sendcode'
import Newphone from '@/pages/me/security/newphone'
import Newpassword from '@/pages/me/security/newpassword'

//登录
import Login from '@/pages/login/login'
import PasswordLogin from '@/pages/login/passwordLogin'
import ForgetPassword from '@/pages/login/forgetPassword'
import ResetPassword from '@/pages/login/resetPassword'
import InputCode from '@/pages/login/inputCode'

//门店
import ShopDetail from '@/pages/shop/shopDetail'

//免押认证
import Certification from '@/pages/certification/index'
import School from '@/pages/certification/school'
import cPeople from '@/pages/certification/people'
import AddPeople from '@/pages/certification/addPeople'
import Realname from '@/pages/certification/realname'
import Face from '@/pages/certification/face'
//托管
import Gohosting from '@/pages/hosting/gohosting/index'
import Steps2 from '@/pages/hosting/gohosting/steps2'
import Fittings from '@/pages/hosting/gohosting/fittings'
import Uploadimg from '@/pages/hosting/gohosting/uploadimg'
import Gsuccessful from '@/pages/hosting/gohosting/successful'

import Trusteeship from '@/pages/hosting/myhosting/trusteeship'
import HostDetail from '@/pages/hosting/myhosting/hostDetail'
import HostCancel from '@/pages/hosting/myhosting/hostCancel'
import PlatformDeli from '@/pages/hosting/myhosting/platformDeli'
import PostDeli from '@/pages/hosting/myhosting/postDeli'
import SceneDeli from '@/pages/hosting/myhosting/sceneDeli'
import HostingDetail from '@/pages/hosting/myhosting/hostingDetail'
import HostingExpress from '@/pages/hosting/myhosting/hostingExpress'

//收货地址
import Addresslist from '@/pages/address/addresslist'
import Addaddress from '@/pages/address/addaddress'

import Map from '@/pages/map'

import NotFound from '@/pages/notFound'

Vue.use(Router)

export default new Router({

  routes: [
    { path: '/', component: Index, meta: { title: '首页' } },
    { path: '/shop', component: Shop, meta: { title: '全国连锁' } },
    { path: '/materialcircle', component: Materialcircle, meta: { title: '素材圈' } },
    { path: '/me', component: Me, meta: { title: '我的' } },
    { path: '/classify', component: Classify, meta: { title: '分类' } },

    // 素材圈

    { path: '/answers', component: Answers, meta: { title: '百问百答详情' } },
    { path: '/answersSearch', component: AnswersSearch, meta: { title: '百问百答搜索' } },
    { path: '/imageText', component: ImageText, meta: { title: '百问百答详情' } },
    { path: '/reportDetail', component: ReportDetail, meta: { title: '宣传报道详情' } },
    { path: '/materialDetail', component: MaterialDetail, meta: { title: '素材发圈详情' } },

    //订单

    { path: '/orderDetail/:id', component: OrderDetail, meta: { title: '订单详情' } },
    { path: '/relet/:id', component: Relet, meta: { title: '续租' } },
    { path: '/shopping', component: Shopping, meta: { title: '购买' } },
    { path: '/people/:type', component: People, meta: { title: '自取联系人' } },
    { path: '/refund/:id', component: Refund, meta: { title: '退租' } },
    { path: '/timeQuantum', component: TimeQuantum, meta: { title: '选择时间段' } },

    //产品
    { path: '/productDetail/:id', component: ProductDetail, meta: { title: '产品详情' } },
    { path: '/confirmationOrder', component: ConfirmationOrder, meta: { title: '确认订单' } },
    { path: '/companyIntroduction', component: CompanyIntroduction, meta: { title: '公司介绍' } },
    { path: '/shopstyle', component: Shopstyle, meta: { title: '店铺风采' } },
    { path: '/operationalGuide', component: OperationalGuide, meta: { title: '操作指引' } },
    { path: '/teamstyle', component: Teamstyle, meta: { title: '团队风采' } },
    { path: '/navigation', component: Navigation, meta: { title: '一键导航' } },
    { path: '/newActivities', component: NewActivities, meta: { title: '最新活动' } },
    { path: '/newArrivals', component: NewArrivals, meta: { title: '新品推荐' } },
    { path: '/merchantEntry', component: MerchantEntry, meta: { title: '商家入驻' } },
    { path: '/merchantDetail', component: MerchantDetail, meta: { title: '商家入驻详情' } },
    { path: '/wordMouth', component: WordMouth, meta: { title: '口碑' } },
    { path: '/search', component: Search, meta: { title: '搜索' } },

    //个人中心
    { path: '/myInformation', component: MyInformation, meta: { title: '我的资料' } },
    { path: '/receInformation', component: ReceInformation, meta: { title: '收货信息' } },
    { path: '/addInformation/:id', component: AddInformation, meta: { title: '编辑收货信息' } },
    { path: '/addInformation', component: AddInformation, meta: { title: '添加收货信息' } },
    { path: '/detaInformation', component: DetaInformation, meta: { title: '详细信息' } },
    { path: '/accountSecurity', component: AccountSecurity, meta: { title: '账号安全' } },
    { path: '/modify/:type/:phone', component: Modify, meta: { title: '当前绑定手机号' } },
    { path: '/coupon', component: Coupon, meta: { title: '优惠券' } },
    { path: '/myBalance', component: MyBalance, meta: { title: '我的余额' } },
    { path: '/cash', component: Cash, meta: { title: '提现' } },
    { path: '/bankCard', component: BankCard, meta: { title: '银行卡' } },
    { path: '/bindingCard', component: BindingCard, meta: { title: '绑定银行卡' } },
    { path: '/helpCenter', component: HelpCenter, meta: { title: '帮助中心' } },
    { path: '/integral', component: Integral, meta: { title: '我的积分' } },
    { path: '/cart', component: Cart, meta: { title: '购物车' } },
    { path: '/commonProblem', component: CommonProblem, meta: { title: '常见问题' } },
    { path: '/rules', component: Rules, meta: { title: '租赁规则' } },
    { path: '/setup', component: Setup, meta: { title: '设置' } },
    { path: '/accountBinding', component: AccountBinding, meta: { title: '账号绑定' } },
    { path: '/Sendcode/:type/:phone', component: Sendcode, meta: { title: '发送验证码' } },
    { path: '/newphone', component: Newphone, meta: { title: '绑定新手机号' } },
    { path: '/newpassword', component: Newpassword, meta: { title: '修改密码' } },



    //登录
    { path: '/login', component: Login, meta: { title: '登录' } },
    { path: '/passwordLogin', component: PasswordLogin, meta: { title: '密码登录' } },
    { path: '/forgetPassword', component: ForgetPassword, meta: { title: '忘记密码' } },
    { path: '/resetPassword/:phone', component: ResetPassword, meta: { title: '重置密码' } },
    { path: '/inputCode/:phone', component: InputCode, meta: { title: '输入验证码' } },

    //门店
    { path: '/shopDetail', component: ShopDetail, meta: { title: '店铺详情' } },

    //免押认证
    { path: '/certification', component: Certification, meta: { title: '认证中心' } },
    { path: '/school', component: School, meta: { title: '学籍认证' } },
    { path: '/cpeople', component: cPeople, meta: { title: '添加紧急联系人' } },
    { path: '/addPeople', component: AddPeople },
    { path: '/addPeople/:id', component: AddPeople },
    { path: '/realname', component: Realname, meta: { title: '实名认证' } },
    { path: '/face/:orderid', component: Face, meta: { title: '人脸识别' } },

    //托管
    { path: '/gohosting', component: Gohosting, meta: { title: '我要托管' } },
    { path: '/steps2', component: Steps2, meta: { title: '我要托管' } },
    { path: '/fittingsConfirm', component: Fittings, meta: { title: '配件确认' } },
    { path: '/uploadimg', component: Uploadimg, meta: { title: '上传照片' } },
    { path: '/gsuccessful', component: Gsuccessful, meta: { title: '提交成功' } },

    { path: '/trusteeship', component: Trusteeship, meta: { title: '我的托管' } },
    { path: '/hostDetail', component: HostDetail, meta: { title: '审核详情' } },
    { path: '/hostCancel', component: HostCancel, meta: { title: '取消托管' } },
    { path: '/sceneDeli', component: SceneDeli, meta: { title: '现场交付' } },
    { path: '/platformDeli', component: PlatformDeli, meta: { title: '平台配送' } },
    { path: '/postDeli', component: PostDeli, meta: { title: '快递交付' } },
    { path: '/hostingDetail', component: HostingDetail, meta: { title: '托管详情' } },
    { path: '/hostingExpress', component: HostingExpress, meta: { title: '审核详情' } },

    //收货地址
    { path: '/addresslist/:type', component: Addresslist, meta: { title: '收货地址' } },
    { path: '/addaddress', component: Addaddress, meta: { title: '添加收货地址' } },
    { path: '/addaddress/:id', component: Addaddress, meta: { title: '编辑收货地址' } },

    //地图
    { path: '/map/:center/:shop', component: Map, meta: { title: '地图' } },

    { path: '*', component: NotFound, meta: { title: '404-not found' } },

  ],

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }

})