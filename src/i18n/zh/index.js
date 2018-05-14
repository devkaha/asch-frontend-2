const lang = {
  // common
  PREV_PAGE: '上一页',
  NEXT_PAGE: '下一页',

  TOTAL: '总',
  HEIGHT: '高度',
  DATE: '日期',
  PRODUCER: '生产者',
  TRANSACTIONS: '交易',
  AMOUNTS: '金额',
  FEES: '手续费',
  REWARDS: '奖励',
  TYPE: '类型',
  SENDER: '发送者',
  RECIPIENT: '接受者',
  SECOND_PASSWORD: '设置二级密码:',
  REMARK: '备注',
  REMARK_TIP: '长度范围：',

  // transaction type filter
  TRS_TYPE_TRANSFER: '转账',
  TRS_TYPE_NICKNAME: '设置昵称',
  TRS_TYPE_TRANSFER_RECORD: '转账记录',
  TRS_TYPE_TRANSFER_RECORD_LATELY: '最近转账记录',
  TRS_TYPE_SECOND_PASSWORD: '二级密码',
  TRS_TYPE_DELEGATE: '受托人',
  TRS_TYPE_VOTE: '投票',
  TRS_TYPE_MULTISIGNATURE: '多重签名',
  TRS_TYPE_DAPP: '注册应用',
  TRS_TYPE_UPDATE_DAPP_DELEGATE: '更新dapp记账人',
  TRS_TYPE_ADD_DAPP_DELEGATE: '添加dapp记账人',
  TRS_TYPE_DEL_DAPP_DELEGATE: '删除dapp记账人',
  TRS_TYPE_DEPOSIT: '应用充值',
  TRS_TYPE_WITHDRAWAL: '应用提现',
  TRS_TYPE_STORAGE: '存储',
  TRS_TYPE_UIA_ISSUER: '注册发行商',
  TRS_TYPE_UIA_ASSET: '注册资产',
  TRS_TYPE_UIA_FLAGS: '资产设置',
  TRS_TYPE_UIA_ACL: '资产访问控制',
  TRS_TYPE_UIA_ISSUE: '资产发行',
  TRS_TYPE_UIA_TRANSFER: '资产转账',
  TRS_TYPE_LOCK: '锁仓',
  TRS_TYPE_UNLOCK: '解锁',
  TRS_TYPE_MULTI_ACCOUNT: '设置多签账户',
  TRS_TYPE_REGISTER_AGENT: '注册为代理人',
  TRS_TYPE_SET_AGENT: '设置投票代理人',
  TRS_TYPE_REPEAL_AGENT: '取消投票代理',
  TRS_TYPE_ACTIVATE_DELEGATE: '激活提案',
  TRS_TYPE_REPEAL_VOTE: '受托人投票',

  TRS_TYPE_LAUNCH_PROPOSAL: '发起提案',
  TRS_TYPE_VOTE_PROPOSAL: '对提案投票',
  TRS_TYPE_ACTIVATE_PROPOSAL: '激活提案',

  TRS_TYPE_REGISTER_GATEWAY: '网关候选人注册',
  TRS_TYPE_OPEN_GATEWAY_ACCOUNT: '网关开户',
  TRS_TYPE_GATEWAY_DEPOSIT: '网关充值',
  TRS_TYPE_GATEWAY_WITHDRAW: '网关提现',
  TRS_TYPE_GATEWAY_WITHDRAW_CONFIRM: '网关提现确认',

  // application
  DAPP_ICON: '图标',
  DAPP_NAME: '名称',
  DAPP_DESCRIPTION: '描述',
  DAPP_CATEGORY: '类型',
  DAPP_SOURCE_CODE: '源码',
  DAPP_DOWNLOAD: '点击下载',
  DAPP_LIST: '应用列表',
  DAPP_INSTALL_LIST: '已安装应用列表',
  DAPP_TRANSACTION_RECORD: '交易记录',
  DAPP_TRANSACTION_RECORD_LATELY: '最近交易记录',
  DAPP_DEPOSIT: '充值',
  DAPP_BANLANCE_DETAIL: '余额详情',
  DAPP_DETAIL: '详情',
  DAPP_BILLION: '亿',
  DAPP_MILLION: '万',
  // dapp category filter
  DAPP_CATEGORY_COMMON: '通用',
  DAPP_CATEGORY_BUSINESS: '商业',
  DAPP_CATEGORY_SOCIAL: '社交',
  DAPP_CATEGORY_EDUCATION: '教育',
  DAPP_CATEGORY_ENTERTAINMENT: '娱乐',
  DAPP_CATEGORY_NEWS: '新闻',
  DAPP_CATEGORY_LIFE: '生活',
  DAPP_CATEGORY_UTILITIES: '工具',
  DAPP_CATEGORY_GAMES: '游戏',

  // blockchain browser
  LATEST_BLOCK: '最新区块',
  INPUT_SEARCH_CONTENT: '输入搜索内容',

  // block forging
  DELEGATE_INFO: '受托人基本信息',
  DELEGATE_REGISTER: '注册受托人',
  FORGING_ENABLE: '已开启',
  FORGING_DISABLE: '未开启',
  TOTAL_EARNINGS: '总收益',
  RANKING: '排名',
  PRODUCTIVITY: '生产率',
  APPROVAL: '得票率',
  PRODUCED_BLOCKS: '生产的区块',

  // header
  HOME: '首页',
  PERSONAL: '个人中心',
  APPLICATIONS: '应用中心',
  FORGING: '区块生产',
  BLOCKS: '区块浏览',
  VOTE: '投票',
  TRANSFER: '转账',
  PEERS: '节点',
  ASSET: '资产',
  ABOUT: '关于',
  MESSAGE_DETAILS: '信息详情',

  // home
  BALANCE: '钱包余额',
  LATEST_BLOCK_HEIGHT: '最后区块高度',
  VERSION_INFO: '版本信息',
  MY_TRSACTIONS: '我的交易',
  HOME_TIPES: 'tips: 钱包转账为不可逆，请务必核对收款地址',

  // login
  INPUT_PASSWORD: '输入主密码',
  KEEP_SESSION: '保持登录状态',
  LOGIN: '登录',
  NEW_ACCOUNT: '新账户',
  STEP: '步骤',
  CREATE_MASTER_PASSWORD: '创建钱包',
  NEW_PASSWORD: '新的主密码',
  NEW_PWD_TIP_1: '系统为您生成了足够安全的新密码，下一步将会要求您重复输入以确认密码',
  NEXT_STEP: '下一步',
  SAVE_PASSWORD: '保存主密码',
  CONFIRM_PASSWORD: '确认主密码',
  INPUT_PASSWORD_AGAIN: '请重新输入您的主密码',
  NEW_PWD_TIP_2:
    '请确保您已安全保存主密码，如果您失去您的主密码，您的帐户将永远无法再打开，您将失去您所有的XAS',
  CONFIRM: '确认',
  CANCEL: '返回',
  CANCEL_LOGIN: '返回登录',
  CREATE: '创建',
  CREATE_TIP1: '密码由浏览器本地生成，请妥善备份保存',
  CREATE_TIP2: '复制或输入上面的主密码',
  READ_TIP1: '我理解如果我丢失了密码，我将永远无法访问我的资产',
  READ_TIP2: '我理解如果我忘记或丢失了密码，将没有任何人能够帮助我恢复',
  READ_TIP3: '我已经写下了或者用其它方式保存了我的密码',
  CHOSE_SERVER: '选择服务器节点',
  DEFAULT_SERVER: '默认节点',
  COPY_SUCCESS: '复制成功',

  // transfer/pay
  SEND: '发送',
  ALREADY_LOCKED: '您已经锁仓，此行为被拒绝',
  PAY_TIP: '  *请确保您发送到正确的地址，本操作无法撤消',

  // peers
  PEER_LIST: '节点列表',
  OPERATING_SYSTEM: '操作系统',
  VERSION: '版本',
  // ASSET: '资产'
  REGISTERED_PUBLISHER: '注册发行商',
  REGISTERED_ASSETS: '注册资产',
  VALUE: '值',
  MY_ASSETS: '我发行的资产',
  OPERATION_RECORD: '操作记录',
  ISSUE_NUMBER: '本次发行量',
  ASSET_NAME: '资产名称',
  ACCESS_CONTROL: '权限控制',
  ASSET_PROFILE: '资产概况',
  MAXIMUM: '最大发行量',
  PRECISION: '精度',
  QUANTITY: '当前存量',
  CANCELLATION: '注销状态',
  OPERATION: '操作',
  DESCRIBE: '描述',
  TOPLIMIT: '上限',
  ACCURACY: '精度',
  STRATEGY: '策略',
  CURRENT_MODE: '当前模式',
  ADD_LIST: '新增名单',
  CURRENT_LIST: '当前名单',
  UPDATE_ACL: '更新ACL',
  PUBLISHER_ALREADY_REGISTERED: '你已经注册了发行商',
  NO_ASSET_RELATED_INFORMATION: '没有资产相关信息',
  STRATEGY_WARNING: '如果不懂如何使用，不要随意设置该字段',
  CHANGE_ACL_MODAL: '切换权限模式',
  CHANGE_TO: '切换为',
  // personal
  ACCOUNT_INFO: '账户信息',
  ACCOUNT_LOCK_TIP: '在到达此高度后解锁',
  LOCK_POSITION: '锁仓',
  ACCOUNT_TYPE_HINT: '请输入高度',
  ACCOUNT_TYPE2_HINT: '请输入二级密码',
  LOCK_POSITION_TITLE: '设置锁仓信息',
  QUIT: '退出系统',
  BASIC_INFO: '基本信息',
  ADDRESS: '地址',
  PUBLIC_KEY: '公钥',
  ALREADY_SET_TPI: '您已经设置过二级密码',
  ALREADY_SET_POSITIONLOCK: '您已经进行过锁仓设置',
  SET_SECOND_PASSWORD: '设置二级密码',
  PASSWORD_RULE_TIP: '输入8到16位数字和字母组合',
  INPUT_AGAIN: '再次输入',
  PASSWORD: '密码',
  SUBMIT_SECOND_PASSWORD_TIP:
    '请确定您已经安全保存了二级密码，一旦丢失，您在Asch系统中的财产将无法找回，设置二级密码需要5XAS手续费',
  SUBMIT: '提交',
  ALREADY_SET: '已设置',
  NOT_SET: '未设置',
  NOT_SET_BLOCKHEIGHT: '未锁仓',
  NOT_SET_ALREADYUNBLOCK: '已解锁',
  POSITIONLOCK_INFO: '锁仓状态',

  // vote
  DELETE: '删除',
  DELEGATE_LIST: '受托人列表',
  VOTE_RECORD: '投票记录',
  MY_VOTERS: '谁投了我',
  DELEGATE: '受托人',
  PRODUCED_NUMBER: '生产块数',
  USERNAME: '用户名',
  TOTAL_PEOPLES: '共%{count}人',

  // model - account detail
  ACCOUNT_DETAIL: '账户详情',

  // model - delegate register
  REGISTER_DELEGATE: '注册为受托人',
  DELEGATE_NAME: '受托人名称',
  INPUT_DELEGATE_NAME: '请输入受托人名称',
  DELEGATE_NAME_RULE_TIP: '至少8为数字和字母组合',
  REGISTER: '注册',
  NEED_PAY: '需要支付',

  // model - block detail
  BLOCK_DETAIL: '区块详情',
  TIME: '时间',
  TIME_LAST: '最后区块时间',
  PREVIOUS_BLOCK: '上一块',
  TRANSACTIONS_COUNT: '交易数',
  TOTAL_AMOUNTS: '交易总额',
  PAYLOAD_HASH: '摘要',
  PRODUCER_PUBKEY: '生产者公钥',

  // model - transaction detail/dealinfo
  TRANSACTION_INFO: '交易信息',
  CONFIRMATIONS: '确认数',

  // model - delete vote
  DELETE_VOTE_TITLE: '取消给受托人的投票',
  DELETE_VOTE_TIP: '每次可最多同时删除对33人的投票',

  // model - vote
  VOTE_TITLE: '投票给受托人',
  VOTE_TIP: '请确认您的选择与投票，每张票最多可以同时投33人',

  // toast errors
  ERR_INPUT_PASSWORD: '请输入密码',
  ERR_VIOLATE_BIP39: '密码格式不符合BIP39安全规范',
  ERR_SERVER_ERROR: '服务器错误,请检查您填写的信息是否正确',
  ERR_PASSWORD_NOT_EQUAL: '您输入的主密码不一致',
  ERR_DELEGATE_NAME_EMPTY: '受托人名称不能为空',
  ERR_DELEGATE_NAME_ADDRESS: '受托人名称不能为账户地址',
  ERR_DELEGATE_NAME_FORMAT: '受托人名称格式不正确',
  ERR_SECOND_PASSWORD_FORMAT: '二级密码输入格式不正确,应为8-16位字母数字组合',
  ERR_NO_RECIPIENT_ADDRESS: '必须输入接收地址',
  ERR_RECIPIENT_ADDRESS_FORMAT: '接收地址格式不正确',
  ERR_RECIPIENT_EQUAL_SENDER: '接受地址与发送地址不能相同',
  ERR_AMOUNT_INVALID: '发送金额输入不正确',
  ERR_BALANCE_NOT_ENOUGH: '余额不足',
  ERR_NO_SECND_PASSWORD: '必须输入二级密码',
  ERR_TWO_INPUTS_NOT_EQUAL: '两次输入不一致',
  ERR_PASSWORD_INVALID_FORMAT: '密码格式不正确',
  ERR_AT_LEAST_SELECT_ONE_DELEGATE: '请选择一位受托人',
  ERR_DELETE_NO_MORE_THAN_33: '一次删除至多33位候选人',
  ERR_VOTE_NO_MORE_THAN_33: '一次投票至多33位候选人',
  ERR_POSITIONLOCK_EMPTY: '请输入内容',
  ERR_POSITIONLOCK_NOT_NUM: '请确认输入的是否为数字，并且范围在(1~ 10 000 000)之间',
  ERR_INVALID_REMARK: '备注输入内容不正确',
  ERR_NO_BALANCE: '余额不足，请先充值',
  ERR_NO_DEPOSIT_COIN: '请选择充值的币种',
  ERR_PUBLISHER_NOT_EMPTY: '必须输入发行商名称以及描述',
  ERR_NO_PUBLISHER_REGISTERED_YET: '你还没有注册发行商',
  ERR_ASSET_NAME_3_TO_6_CAPITAL_LETTERS: '请输入3-6位大写字母',
  ERR_MISSING_ASSET_DESCRIPTION: '请输入资产描述',
  ERR_ASSET_TOPLIMIT_NOT_CORRECT: '发行上限应为不包含小数点的纯1-30位的整数',
  ERR_ASSET_TOPLIMIT_NOT_CORRECT2: '发行数量应为不包含小数点的纯1-30位的整数',
  ERR_ASSET_PRECISION_NOT_CORRECT: '您输入的资产精度不正确',
  ERR_ASSET_PRECISION_MUST_BE_INTEGER_BETWEEN_0_16: '精度必须为0-16的整数',
  // toast error was bound here
  ERR_TOAST_SECONDKEY_WRONG: '您输入的二级密码有误',
  ERR_TOAST_TRANSACTION_AMOUNT_WRONG: '交易数额有误',
  ERR_TOAST_ASSET_NOTEXIST: '资产不存在',
  ERR_TOAST_ASSET_INSUFFICIENT: '资产余额不足',
  ERR_TOAST_VOTE_LIMIT: '只能选择小于或等于33人',
  ERR_TOAST_ACCOUNT_ALREADY_LOCKED: '已经锁仓',
  ERR_TOAST_ACCOUNT_INVALID_RECIPIENT: '接受地址错误',
  ERR_TOAST_ACCOUNT_INVALID_TIMESTAMP: '时间戳错误',
  ERR_READ_ALL: '请仔细阅读并勾选须知',
  // toast info
  INF_REGISTER_SUCCESS: '注册成功',
  INF_DELETE_SUCCESS: '删除成功',
  INF_TRANSFER_SUCCESS: '转账成功',
  INF_OPERATION_SUCCEEDED: '操作成功',
  INF_VOTE_SUCCESS: '投票成功',
  INF_SECND_PASSWORD_SET_SUCCESS: '二级密码设置成功',
  INF_POSITIONLOCK_SET_SUCCESS: '锁仓成功',

  ALLOW_WWB: '是否允许注销/白名单/黑名单',
  ALLOW_WRITEOFF: '是否允许注销',
  ALLOW_WHITELIST: '是否允许白名单',
  ALLOW_BLACKLIST: '是否允许黑名单',
  ALLOW: '允许',
  NOT_ALLOW: '不允许',
  WRITEOFF: '注销',
  CANT_ROLLBACK: '该操作不可逆',
  WHITELIST: '白名单',
  BLACKLIST: '黑名单',
  // dialog
  OPERATION_REQUIRES_FEE: '该操作需要消耗手续费',
  REQUIRES_FEE: '需要消耗手续费',

  // FRAGIL SET
  FRAGIL_PRE: '账户将在区块高度大于 ',
  FRAGIL_LAT: ' 后解锁',
  FRAGIL_ABOUT: '大约在',
  FRAGIL_DAY: '天',
  FRAGIL_HOUR: '时',
  FRAGIL_MIN: '分',
  FRAGIL_SEC: '秒',
  FRAGIL_RANGE: '锁仓高度应大于当前区块高度，并且锁仓周期少于10000000个区块间隔',
  FRAGIL_UNLOCK: '后解锁',

  // deposit
  DEPOSIT_COIN_TYPE: '选择充值所使用的币种',
  DEPOSIT_AMOUNT: '填写充值数量',
  DEPOSIT_SUCCESS: '充值成功',

  DAPP_SUPPORT_COIN: '支持的币种',
  DAPP_COIN_TOTAL_AMOUNT: '总量',
  DAPP_COIN_CURRENT_QUANTITY: '当前流通量',
  DAPP_COIN_BALANCE: 'DAPP余额',
  DAPP_COIN_FEE: '本次充值手续费: 0.1 xas',

  // 调教时间
  ADJUST_TIME_YOURSELF: '您本地时间与系统时间差别过大，请手动调校时间',
  ADJUST_TIME: '正在调校时间，请勿进行其他操作',

  // qrcode
  QRCODE: '主密钥二维码',
  QRCODE_ADDRESS: '您的地址二维码',
  CLICK_TO_SHOW: '点击获取',
  QRCODE_CLOSE: '点击二维码关闭',

  // ============== new add =================
  AT_LEAST_7DAY: '(建议将结束时间设置在一周以后，以留有足够的时间让用户发现、评估项目并投票。)',
  CURRENCY_INTRODUCE: '币种介绍',
  NAME_OF_DISTRIBUTOR: '请输入名称',
  DESCRIBE_OF_DISTRIBUTOR: '请输入描述',
  CHAINS_OVERVIEW: '资产概况',
  USER_AGREEMENT_MODAL_TIPS: '*注册成为代理人将消耗 100 XAS',
  USER_AGREEMENT_MODAL_CONTENT:
    ' Asch 是一个去中心化的应用平台。它提供了一系列的 sdk 和 api 来帮助开发者构建基于 Javascript 和侧链技术的去中心化应用。Asch 通过定制侧链、智能合约、应用托管等一体化的行业解决方案，致力于打造一个易于使用、功能完备、即插即用的系统。利用 Asch 生态系统，开发者可以快速迭代他们的 Javascript 应用，并发布到系统内置的应用商店中，这些应用可以被平台中的分布式节点下载并执行，并服务于普通用户，整个过程都由诚实安全的 Asch 侧链共识网络提供安全保证。Asch 系统本身也是一个完全开放的、去中心化的应用，内置有代币，单位为 XAS，中文名叫阿希币。阿希币可以通过双向楔入的方式与侧链或 dapp 进行交互，Asch 是一个去中心化的应用平台。它提供了一系列的 sdk 和 api 来帮助开发者构建基于 Javascript 和侧链技术的去中心化应用。Asch 通过定制侧链、智能合约、应用托管等一体化的行业解决方案，致力于打造一个易于使用、功能完备、即插即用的系统。利用 Asch 生态系统，开发者可以快速迭代他们的 Javascript 应用，并发布到系统内置的应用商店中，这些应用可以被平台中的分布式节点下载并执行，并服务于普通用户，整个过程都由诚实安全的 Asch 侧链共识网络提供安全保证。Asch 系统本身也是一个完全开放的、去中心化的应用，内置有代币，单位为 XAS，中文名叫阿希币。阿希币可以通过双向楔入的方式与侧链或 dapp 进行交互',
  LOCK_DETAIL_TIP: '请设置锁仓额度',
  RETREAT_VOTE_SUCCESS: '撤销投票成功',
  DELEGATE_LIST_DETAILS: '受托人详情列表',
  SECOND_PASSWORD_TIP: '为了保障您的资金安全，请设置8位数以上的密码',
  SECOND_PASSWORD_CONFIRM: '请确认密码',
  CANAEL: '取消',
  TO: '至',
  RECIPIENT_NAME_ADDRESS: '请输入需要转账的账户名或者钱包地址',
  RECORD: '记录',
  MAIN_ASSET: '主资产',
  SEE_ALL_ASSETS: '查看全部资产',
  TRANSFER_TIP: '钱包转账为不可逆，请务必核对收款地址',
  RECEIVE: '收款',
  X_ASSETS: '链内资产',
  CROSS_ASSETS: '跨链资产',
  WITHDRAW: '提现',
  DEPOSIT: '充值',
  AVAILABLE_BALANCE: '*可用余额：',
  AVAILABLE_BALANCE_LIMIT: '可用额度',
  PROPOSAL: '提案',
  COUNCIL: '理事会',
  DEPOSIT_NO_ADDR_TIP: '您尚未开通 {currency} 钱包收款地址',
  DEPOSIT_TIP:
    '请将 {currency}充值到上述地址，该地址仅支持接收 {currency}，如果需要转入其他 token，请切换到相对应的 token 获取转入地址 钱包收款地址',
  DEPOSIT_TIP2: '*为避免造成财产损失，请务必确认您的提现地址，本操作无法撤销',
  OPEN_ADDR: '开通',
  VOTE_DELEGATE: '票权代理人',
  VOTE_DELEGATE_DETAIL: '代理人详情',
  VOTE_CANCEL: '撤销代理人',
  VOTE_SET: '设置代理人',
  VOTE_DELEGATE_TIP: '请输入代理人昵称',
  ALL_BLOCKS: '全部区块',
  NOT_DELEGATE: '您还不是受托人',
  CHECK: '查看',
  MY_FORGING: '区块生产概况',
  // DELEGATE_REGISTER: '注册成为受托人',
  // DELEGATE_INFO: '',
  MORE_ASSETS: '获取更多资产',
  ASSET_DETAIL: '{currency} 详情',
  OVER_VIEW: '概括',
  ISSUER: '发行商',
  DELEGATE_POLLRATE: '得票率',
  DELEGATE_RANK: '当前排名',
  DELEGATE_TITLE: '注册成为受托人',
  I_AGREE: '我同意',
  DELEGATE_VOTERATE: '生产率',
  APP_CENTER: '应用中心',
  CREATE_MY_DAPP: '创建我的应用',
  LOAD_MORE: '加载更多',
  MY_BLOCKS: '我生产的区块',
  HELLO: '您好',
  SET_NICKNAME: '请设置昵称',
  NICKNAME: '昵称',
  INPUT_NICKNAME: '请输入你想设置的昵称',
  ERR_NICKNAME: '昵称输入有误,应为3-20位小写字母与数字的组合',
  NICKNAME_TIP: '昵称可用于转账，请慎重填写，最多2-20个字符',
  CHAR_NUM: '字符数',
  PRICE: '价格',
  NICKNAME_PRICE: '昵称价格对应表',
  SET_NOW: '立刻设置',
  LOCK_POSITION_CONF: '锁仓设置:',
  HIGHEST_LOCK: '最高可锁仓',
  LOCK_DETAIL: '已锁仓额度：{amount} XAS',
  LOCK_DETAIL_TIME: '锁仓截止时间: {date}',
  AGENT_INFO: '代理人身份:',
  IS_AGENT: '您已经是代理人或受托人',
  REGISTER_AGENT: '注册成为代理人',
  EDIT: '修改',
  UNLOCK: '解锁',
  NUM: '额度',
  UNLOCK_TIME_TIPS: '到达高度(时间)后，可以手动解锁额度',
  UNLOCK_TIPS:
    '锁仓后，该部分额度将无法用于投票/转账在内的日常消耗，请根据实际情况预留出投票/转账等需要用到的额度',
  SET_UNLOCK_TIME: '选择时间',
  HEIGHT_NOT_ARRIVE: '未到解锁时间',
  NO_ISSUER_INFO: '您还不是发行商',
  COST_FEE: '将消耗 {num} XAS',
  GATEWAY_CANDIDATE: '网关候选人:',
  GATEWAY_CANDIDATE_TO: '网关候选人?',
  HOW_TO_BE: '如何成为',
  PLEASE_LOCK: '请先锁仓',
  AGENT_DETAIL: '代理详情',
  AUTHOR_AMOUNT: '授权代理额度 {amount} XAS',
  AGENT_VOTE_DETAIL: '票权代理情况',
  AGENT_VOTE_RECORDS: '投票记录',
  AUTHORIZOR: '授权人',
  AUTHORIZED_AMOUNT: '授权额度',
  WEIGHT: '权重比例(总)',
  LOCK_TIME: '锁仓时间',
  AUTHOR_TIME: '授权时间',
  VOTED_DELEGATE: '投票对象',
  VOTE_WEIGHT: '票权',
  VOTE_TIME: '投票时间',
  AGENT_WEIGHT: '代理权重',
  PLEASE_SET_NAME: '请先设置昵称',
  PROCESSED: '完成情况',
  DONE: '完成',
  PROCESS: '进行中',
  AGENT_CAN_NOT_BE_DELEGATE: '代理人不能成为受托人',
  DELEGATE_CAN_NOT_BE_AGENT: '受托人不能成为代理人',
  COUNCIL_MEMBER: '理事会成员',
  COUNCILS: '全部理事会',
  GATEWAY_MEMBER: '网关成员',
  GATEWAY: '网关',
  ALL_GATEWAY: '全部网关',
  GATEWAY_PARTICULARS: '网关详情页',
  CREATE_TIME: '创建时间',
  ELECTED: '当选状态',
  UPDATE_LIMIT: '最低更新频率:',
  AGENT_ALREADY: '已经是代理人，此行为被拒绝',
  ALREADY_INIT: '该网关已经初始化成功，暂不能进行此种功能',
  ERR_SHOULD_EQUAL: '替换两方应该数量相等',
  EXIT: '退出',
  CANCEL_VOTE: '撤票',

  // ERROR
  AGENT_CAN_NOT_SET_AGENT: '代理人不能设置代理人',
  proposal: {
    CONTENT: '提案内容',
    VOTE_DETAIL: '投票情况',
    No: '提案编号',
    INITIATOR: '发起人',
    TYPE: '类型',
    PERIOD: '公投周期',
    DETAIL: '提案描述',
    APPROVE: '赞成票数',
    OPERATION: '操作',
    STATUS: '操作',
    TIP_VOTE: '投票',
    TIP_PASS: '投票已通过',
    TIP_REJECT: '投票未通过',
    TITLE_ALL: '全部提案',
    TITLE_PROCESS: '进行中的提案',
    TITLE_ACTIVED: '已激活的提案',
    TITLE_EXPIRED: '已过期的提案',
    LAUNCH: '发起新提案',
    SHOW: '提案详情',
    SELECT_P_TITLE: '提案标题',
    SELECT_P_TYPE: '提案类型',
    SELECT_P_COUNCIL: '选择理事会',
    SELECT_P_NET: '选择网关',
    SELECT_NEWCOUNCIL: '新增理事会',
    SELECT_CHANGECOUNCIL: '更改理事会',
    SELECT_REMOVECOUNCIL: '撤销理事会',
    SELECT_CHANGEPERIOD: '更改周期',
    SELECT_CHANGEMEMBER: '更改成员',
    SELECT_P_PERIOD: '公投周期',
    BTN_LAUNCH: '发起',
    BTN_VOTE: '投票',
    SELECT_MEMBER_ACTION: '网关更新',
    SELECT_MEMBER_ADD: '添加成员',
    SELECT_MEMBER_DELETE: '移除成员',
    SELECT_MEMBER_INSTEAD: '替换成员',
    SELECT_NEWNET: '新增网关',
    SELECT_CHANGENET: '更改网关',
    SELECT_INITNET: '网关初始化',
    SELECT_NETPERIOD: '更新最低更新频率',
    SELECT_NETMEMBER: '更新成员',
    VOTE_STATUS: '共计{number}人参与了投票 ，得票率{rate}%',
    ACTIVATED: '已激活',
    EXPIRED: '已过期',
    ACTIVE: '激活',
    ACTIVE_SUCCESS: '激活成功',
    VOTE_SUCCESS: '投票成功'
  },
  LAUNCH_MODAL: {
    MEMBER_SUGGEST_PRE: '我提议',
    MEMBER_SUGGEST_POST: '等{number}人成为网关成员',
    MEMBER_NUMBER: '成员数量',
    MEMBER_MEMBER: '成员信息',
    MEMBER_REASON: '更新成员原因',
    NET_NAME: '网关名字',
    NET_CURRENCY: '默认币种',
    NET_CURRENCY_TIP: '至少填写一种默认币种，且必须是全部大写字母，多个币种用","隔开',
    PERIOD: '任职周期',
    PERIOD_NET: '最低更新频率',
    NET_NEW_LABEL: '至少填写一种默认币种，且必须是全部大写字母',
    PERSON: '名',
    BRIEF: '简要描述',
    BRIEF_TIP: '请输入简要描述',
    DAY: '天',
    REMOVE_COUNCIL: '我提议撤销理事会',
    REMOVE_COUNCIL_TIP1: '我提议撤销',
    REMOVE_COUNCIL_TIP2: '并提议',
    REMOVE_COUNCIL_TIP3: '成为新的网关成员。',
    REMOVE_REASON: '撤销原因',
    PERIOD_REASON: '任职周期更改原因',
    INIT_REASON: '初始化原因',
    READ_TIP1: '自觉遵守《社区自治用户协议书》',
    READ_TIP2: '发布提案将消耗 100 XAS',
    INSTEAD_PRE: '变更前',
    INSTEAD_POST: '变更后',
    NET_PERIOD: '网关最低更新频率参数',
    PRECISION_TIP: '需要填写精度, 0-16之间',
    CURRENCY_BRIEF: '该币种介绍',
    CURRENCY_BRIEF_TIP: '需要填写该币种介绍',
    ERR_INVALID_FORM: '表单填写不完整或未按照要求',
    LAUNCH_SUCCESS: '发起提案成功',
    PROPOSE: '提议',
    VOTE_LIST: '投票成员名单',
    PROPOSE_END: '成为网关成员'
  },
  DETAIL_MODAL: {
    MEMBER_CHIPS_PRE: '投票成员名单',
    MEMBER_NUMBER: '成员数量',
    MEMBER_MEMBER: '成员信息',
    PERIOD: '任职周期',
    PERSON: '名',
    BRIEF: '简要描述',
    BRIEF_TIP: '请输入简要描述',
    DAY: '天',
    REMOVE_COUNCIL: '我提议撤销理事会',
    REMOVE_REASON: '撤销原因',
    PERIOD_REASON: '任职周期更改原因',
    INSTEAD_PRE: '由',
    INSTEAD_POST: '替换为',
    PERIOD_TITLE: '我提议修改当前理事会成员任职周期由{pre}替换为{post}',
    ADD_TITLE: '我提议增加如下受托人成为新的理事会成员',
    REMOVE_TITLE: '我提议撤销如下理事会成员',
    INIT_TIP_PRE: '初始化前成员数量{number}名',
    INIT_TIP_POST: '初始化后成员数量{number}名',
    MEMBER_TIP_PRE: '变更前成员:',
    MEMBER_TIP_POST: '变更后成员:',
    INSTEAD_TITLE_PRE: '我提议撤销如下理事会成员',
    INSTEAD_TITLE_POST: '增加如下受托人成为新的理事会成员'
  },
  COUNCIL_PAGE: {
    MODAL_TITLE: '成员(共{number}人)',
    MEMBER: '成员',
    ADDRESS: '地址',
    OPERATION: '操作',
    STARTTIME: '成立时间'
  },
  ERR: {
    ERR_10_100: '请输入10-100个字符',
    ERR_10_100_TITLE: '请输入10-100字符，仅限大小写英文字母、数字、标点符号等，不支持中文',
    ERR_3_15: '请输入3-15个字符',
    ERR_3_16: '请输入3-16个字符',
    ERR_1_30: '请输入1-30之间的数字',
    ERR_3_33: '请输入3-33之间的数字',
    ERR_50_1000: '请输入50-1000个字符',
    ERR_REQUIRE_TYPE: '请选择提案类型',
    ERR_REQUIRE_CONTENT: '请选择内容',
    ERR_REQUIRE_TIME: '建议将结束时间设置在一周以后，以留有足够的时间让用户发现、评估项目并投票',
    ERR_REQUIRE_DETAIL: '请选择提案详情',
    ERR_REQUIRE_NUMBER: '成员应在7-33人之间',
    ERR_REQUIRE_MEMBER: '请提名候选人'
  },
  LASTEST_UPDATE_TIME: '最后更新日期',
  ARGS: '参数',
  DEPOSIT_RECORD: '充值记录',
  WITHDRAW_RECORD: '提现记录',

  // ==============  quasar i18n  =================

  lang: 'zh-hans',
  label: {
    clear: '清空',
    ok: '确认',
    cancel: '取消',
    close: '关闭',
    set: '设置',
    select: '选择',
    reset: '重置',
    remove: '移除',
    update: '更新',
    create: '创建',
    search: '搜索',
    filter: '过滤',
    refresh: '刷新'
  },
  date: {
    days: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
    daysShort: '日_一_二_三_四_五_六'.split('_'),
    months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
    monthsShort: '一_二_三_四_五_六_七_八_九_十_十一_十二'.split('_'),
    firstDayOfWeek: 0, // 0-6, 0 - Sunday, 1 Monday, ...
    format24h: false
  },
  pullToRefresh: {
    pull: '下拉刷新',
    release: '释放刷新',
    refresh: '正在刷新...'
  },
  table: {
    noData: '没有可用数据',
    noResults: '找不到匹配的数据',
    loading: '正在加载...',
    selectedRows: rows =>
      rows > 1 ? `${rows} selected row(s).` : `${rows === 0 ? 'No' : '1'} selected rows.`,
    rowsPerPage: '每页的行数:',
    allRows: '全部',
    pagination: (start, end, total) => `${start}-${end} of ${total}`,
    columns: '列'
  },
  editor: {
    url: '地址',
    bold: '粗体',
    italic: '斜体',
    strikethrough: '删除线',
    underline: '下划线',
    unorderedList: '无序列表',
    orderedList: '有序列表',
    subscript: '子脚本',
    superscript: '超级脚本',
    hyperlink: '超链接',
    toggleFullscreen: '全屏切换',
    quote: '引号',
    left: '左对齐',
    center: '居中对齐',
    right: '右对齐',
    justify: '两端对齐',
    print: '打印',
    outdent: '减少缩进',
    indent: '增加缩进',
    removeFormat: '清除样式',
    formatting: '格式化',
    fontSize: '字体大小',
    align: '对齐',
    hr: '插入水平线',
    undo: '撤消',
    redo: '重做',
    header1: '标题一',
    header2: '标题二',
    header3: '标题三',
    header4: '标题四',
    header5: '标题五',
    header6: '标题六',
    paragraph: '段落',
    code: '代码',
    size1: '非常小',
    size2: '比较小',
    size3: '正常',
    size4: '中等偏大',
    size5: '大',
    size6: '非常大',
    size7: '超级大',
    defaultFont: '默认字体'
  },

  // agreement
  AGREEMENT_DELEGATE_TITLE_CONTENT: '#### 注册受托人占位条款。\n 第一条： 1.3 Asch 是什么Asch 是一个去中心化的应用平台。它提供了一系列的 sdk 和 api 来帮助开发者构建基于 Javascript 和侧链技术的去中心化应。\n  第二条：Asch 通过提供定制侧链、智能合约、应用托管等一体化的行业解决方案，致力于打造一个易于使用、功能完备、即插即用的系统。利用 Asch 生态系统，开发者可以快速迭代他们的 Javascript 应用，并发布到系统内置的应用商店中，这些应用可以被平台中的分布式节点下载并执行，并服务于普通用户，整个过程都由诚实安全的 Asch 侧链共识网络提供安全保证。\n 第三条：Asch 系统本身也是一个完全开放的、去中心化的应用，内置有代币，单位为 XAS，中文名叫阿希币。阿希币可以通过双向楔入的方式与侧链或 dapp 进行交互，作为所有- 5  dapp 之间资产转换的桥梁和媒介，这些代币将在系统发布之前以 ico 的方式预售给投资人。系统一旦发布，Asch 最初的核心团队将不再掌控系统的走向，只有系统的权益人和代。\n 第四条：1.3 Asch 是什么Asch 是一个去中心化的应用平台。它提供了一系列的 sdk 和 api 来帮助开发者构建基于 Javascript 和侧链技术的去中心化应用。Asch 通过提供定制侧链、智能合约、应用托管等一体化的行业解决方案，致力于打造一个易于使用、功能完备、即插即用的系统。利用 Asch 生态系统，开发者可以快速迭代他们的 Javascript 应用，并发布到系统内置的应用商店中，这些应用可以被平台中的分布式节点下载并执行，并服务于普通用户，整个过程都由诚实安全的 Asch 侧链共识网络提供安全保证。Asch 系统本身也是一个完全开放的、去中心化的应用，内置有代币，单位为 XAS，中文名叫阿希币。阿希币可以通过双向楔入的方式与侧链或 dapp 进行交互，作为所有- 5  dapp 之间资产转换的桥梁和媒介，这些代币将在系统发布之前以 ico 的方式预售给投资人。\n 第五条：系统一旦发布，Asch 最初的核心团队将不再掌控系统的走向，只有系统的权益人和代。',
  AGREEMENT_REGISTER_AGENT_CONTENT: '#### 注册代理人占位条款 \n 第一条： 1.3 Asch 是什么Asch 是一个去中心化的应用平台。它提供了一系列的 sdk 和 api 来帮助开发者构建基于 Javascript 和侧链技术的去中心化应。\n  第二条：Asch 通过提供定制侧链、智能合约、应用托管等一体化的行业解决方案，致力于打造一个易于使用、功能完备、即插即用的系统。利用 Asch 生态系统，开发者可以快速迭代他们的 Javascript 应用，并发布到系统内置的应用商店中，这些应用可以被平台中的分布式节点下载并执行，并服务于普通用户，整个过程都由诚实安全的 Asch 侧链共识网络提供安全保证。\n 第三条：Asch 系统本身也是一个完全开放的、去中心化的应用，内置有代币，单位为 XAS，中文名叫阿希币。阿希币可以通过双向楔入的方式与侧链或 dapp 进行交互，作为所有- 5  dapp 之间资产转换的桥梁和媒介，这些代币将在系统发布之前以 ico 的方式预售给投资人。系统一旦发布，Asch 最初的核心团队将不再掌控系统的走向，只有系统的权益人和代。\n 第四条：1.3 Asch 是什么Asch 是一个去中心化的应用平台。它提供了一系列的 sdk 和 api 来帮助开发者构建基于 Javascript 和侧链技术的去中心化应用。Asch 通过提供定制侧链、智能合约、应用托管等一体化的行业解决方案，致力于打造一个易于使用、功能完备、即插即用的系统。利用 Asch 生态系统，开发者可以快速迭代他们的 Javascript 应用，并发布到系统内置的应用商店中，这些应用可以被平台中的分布式节点下载并执行，并服务于普通用户，整个过程都由诚实安全的 Asch 侧链共识网络提供安全保证。Asch 系统本身也是一个完全开放的、去中心化的应用，内置有代币，单位为 XAS，中文名叫阿希币。阿希币可以通过双向楔入的方式与侧链或 dapp 进行交互，作为所有- 5  dapp 之间资产转换的桥梁和媒介，这些代币将在系统发布之前以 ico 的方式预售给投资人。\n 第五条：系统一旦发布，Asch 最初的核心团队将不再掌控系统的走向，只有系统的权益人和代。',
  AGREEMENT_ASSET_CONTENT: '#### 注册资产占位条款 \n 第一条： 1.3 Asch 是什么Asch 是一个去中心化的应用平台。它提供了一系列的 sdk 和 api 来帮助开发者构建基于 Javascript 和侧链技术的去中心化应。\n  第二条：Asch 通过提供定制侧链、智能合约、应用托管等一体化的行业解决方案，致力于打造一个易于使用、功能完备、即插即用的系统。利用 Asch 生态系统，开发者可以快速迭代他们的 Javascript 应用，并发布到系统内置的应用商店中，这些应用可以被平台中的分布式节点下载并执行，并服务于普通用户，整个过程都由诚实安全的 Asch 侧链共识网络提供安全保证。\n 第三条：Asch 系统本身也是一个完全开放的、去中心化的应用，内置有代币，单位为 XAS，中文名叫阿希币。阿希币可以通过双向楔入的方式与侧链或 dapp 进行交互，作为所有- 5  dapp 之间资产转换的桥梁和媒介，这些代币将在系统发布之前以 ico 的方式预售给投资人。系统一旦发布，Asch 最初的核心团队将不再掌控系统的走向，只有系统的权益人和代。\n 第四条：1.3 Asch 是什么Asch 是一个去中心化的应用平台。它提供了一系列的 sdk 和 api 来帮助开发者构建基于 Javascript 和侧链技术的去中心化应用。Asch 通过提供定制侧链、智能合约、应用托管等一体化的行业解决方案，致力于打造一个易于使用、功能完备、即插即用的系统。利用 Asch 生态系统，开发者可以快速迭代他们的 Javascript 应用，并发布到系统内置的应用商店中，这些应用可以被平台中的分布式节点下载并执行，并服务于普通用户，整个过程都由诚实安全的 Asch 侧链共识网络提供安全保证。Asch 系统本身也是一个完全开放的、去中心化的应用，内置有代币，单位为 XAS，中文名叫阿希币。阿希币可以通过双向楔入的方式与侧链或 dapp 进行交互，作为所有- 5  dapp 之间资产转换的桥梁和媒介，这些代币将在系统发布之前以 ico 的方式预售给投资人。\n 第五条：系统一旦发布，Asch 最初的核心团队将不再掌控系统的走向，只有系统的权益人和代。',
  AGREEMENT_ISSUER_CONTENT: '#### 注册发行商占位条款 \n 第一条： 1.3 Asch 是什么Asch 是一个去中心化的应用平台。它提供了一系列的 sdk 和 api 来帮助开发者构建基于 Javascript 和侧链技术的去中心化应。\n  第二条：Asch 通过提供定制侧链、智能合约、应用托管等一体化的行业解决方案，致力于打造一个易于使用、功能完备、即插即用的系统。利用 Asch 生态系统，开发者可以快速迭代他们的 Javascript 应用，并发布到系统内置的应用商店中，这些应用可以被平台中的分布式节点下载并执行，并服务于普通用户，整个过程都由诚实安全的 Asch 侧链共识网络提供安全保证。\n 第三条：Asch 系统本身也是一个完全开放的、去中心化的应用，内置有代币，单位为 XAS，中文名叫阿希币。阿希币可以通过双向楔入的方式与侧链或 dapp 进行交互，作为所有- 5  dapp 之间资产转换的桥梁和媒介，这些代币将在系统发布之前以 ico 的方式预售给投资人。系统一旦发布，Asch 最初的核心团队将不再掌控系统的走向，只有系统的权益人和代。\n 第四条：1.3 Asch 是什么Asch 是一个去中心化的应用平台。它提供了一系列的 sdk 和 api 来帮助开发者构建基于 Javascript 和侧链技术的去中心化应用。Asch 通过提供定制侧链、智能合约、应用托管等一体化的行业解决方案，致力于打造一个易于使用、功能完备、即插即用的系统。利用 Asch 生态系统，开发者可以快速迭代他们的 Javascript 应用，并发布到系统内置的应用商店中，这些应用可以被平台中的分布式节点下载并执行，并服务于普通用户，整个过程都由诚实安全的 Asch 侧链共识网络提供安全保证。Asch 系统本身也是一个完全开放的、去中心化的应用，内置有代币，单位为 XAS，中文名叫阿希币。阿希币可以通过双向楔入的方式与侧链或 dapp 进行交互，作为所有- 5  dapp 之间资产转换的桥梁和媒介，这些代币将在系统发布之前以 ico 的方式预售给投资人。\n 第五条：系统一旦发布，Asch 最初的核心团队将不再掌控系统的走向，只有系统的权益人和代。'
}

export default lang
