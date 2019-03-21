3-4月OKR：
# O1:环比12月，打水印的宝贝总数提高40%
1. **KR1:优化促销水印产品功能（原型及开发）-使用水印的人数提高20%**
·流程优化
·手动删除水印
·定时删除水印
·不同比例水印
·主图编辑
·电台文案
·更新水印
·活动预热（广告／角标等）
2. KR2:促销水印引流-节日推广-使平均每个用户打水印的宝贝数提升20%
·每个用户每次可以免费给5个宝贝打水印（先尝后买）
·提供部分免费水印
·广告前置
# O2:环比12月，水印的功能点转化率提高50%
1. KR1:通过广告动图，使广告点击率提升10%
2. KR2:通过更换文案，使广告点击率提升10%
3. KR3:通过更改水印透出方式，使广告点击率提升30%

# O3:环比12月，手机详情活跃度提升 20%
1. **KR1:手机详情成功率提升至100%**
2. KR2:手机详情MB页面展现提升20%
·电台文案什么是手机详情（手机详情的优势）
·结合其他功能引流（商品列表页／发布宝贝／分享宝贝／标题优化／违规词检测）
3. **KR3:优化手机详情产品功能（原型及开发）-用户数提升20%**
·有无手机详情分类
·MB手机详情优势说明

·数据（每天多少人使用1000／每天多少个宝贝生成详情页58657，成功生成33099）52915，20916/113714，31461
12月生成手机详情人数：13710；平均每天：442
12月生成手机详情数／成功数量：1600836/1051528；平均每天：51640/33920
成功率：65%；   （数据为后台接口返回：/newmitemgetUserTask，/newmitem/getallBaby）
用户数*宝贝数*成功率

**KR1:优化促销水印产品功能（原型及开发）-使用水印的人数提高20%**


手机详情失败类型：
(```)"SELECT distinct `error_msg_text` FROM `zzbitem`.`mdetail_log` where `status` =2 AND `optime`  BETWEEN '2018-10-20 14:00:00' and '2018-12-20 23:59:59'";(```)： "count(distinct `error_msg_text`)": 1165


[

    {
        "error_msg_text": "请确认是否是咸鱼宝贝，咸鱼宝贝不支持手机详情 > [isv.invalid-parameters:cateogry_not_exist] "
    },
    {
        "error_msg_text": "发布手机详情失败 > [GoodsEditAction quickEditItem fail] 该商品信息不全，请编辑后再上架"
    },
    {
        "error_msg_text": "PC详情快照失败 PC详情长度超过官方要求，建议先缩减PC详情图片长度，再生成 > [] current dir: /usr/local/html2image/libxpcom.so\n"
    },
    {
        "error_msg_text": "手机详情上传图片空间失败 > [isv.pictureServiceClient-service-error:PICTURE_OVER_AVAILSPACE] 图片空间容量不足 容量不足，请登录图片空间（tu.taobao.com）清理图片或订购存储功能包"
    },
    {
        "error_msg_text": "PC详情快照失败 PC详情为空或内容太少不足以生成手机详情 > [] "
    },
    {
        "error_msg_text": "发布手机详情失败 > [GoodsEditAction quickEditItem fail] 为了保证商品信息规范，您的商品需要审核通过后才能上架成功。审核时间约为10分钟，若审核成功商品自动上架。若审核失败，商品存放在&quot;仓库中的宝贝”里，审核失败的原因请到体检中心里查看，查看&lt;a href=&apos;https://taobaosell.bbs.taobao.com/deta"
    },
    {
        "error_msg_text": "发布手机详情失败 > [GoodsEditAction quickEditItem fail] 拍卖宝贝正在出售中，且已有买家出价，不能编辑"
    },
    {
        "error_msg_text": "手机详情上传图片空间失败 > [isp.top-remote-connection-timeout] 远程服务调用超时"
    },
    {
        "error_msg_text": "发布手机详情失败 > [GoodsEditAction quickEditItem fail] 系统错误，请重试"
    },
    {
        "error_msg_text": "发布手机详情失败 > [GoodsEditAction quickEditItem fail] 该商品目前正在审核中，请在审核结束后再进行编辑。审核原因和商品查看方法请参考：https://tb.cn/KfTu4Pw"
    },
    {
        "error_msg_text": "发布手机详情失败 > [isp.top-remote-connection-timeout] 远程服务调用超时"
    },
    {
        "error_msg_text": "手机详情上传图片空间失败 > [0] couldn't open file \"/data/srv/itemgule.aiyongbao.com/tmp/5_2_576596045704/576596045704_dest.jpg\""
    },
    {
        "error_msg_text": "手机详情上传图片空间失败 > [0] read function returned funny value"
    },
    {
        "error_msg_text": "手机详情上传图片空间失败 > [isp.pictureServiceClient-service-error:PICTURE_SYS_ERROR] HSFTimeOutException-FutureTimeout ERR-CODE: [HSF-0002], Type: [BIZ], More: [http://console.taobao.net/help/HSF-0002]\nerror mes"
    },
    {
        "error_msg_text": "发布手机详情失败 > [GoodsEditAction quickEditItem fail] ERR_RULE_CATEGORY_CANNOT_BLANK_MESSAGE"
    },
    {
        "error_msg_text": "发布手机详情失败 > [GoodsEditAction quickEditItem fail] F_EXTENDS_11_15_015"
    },
    {
        "error_msg_text": "发布手机详情失败 > [isv.invalid-parameters:item_wldescription_content_image_or_flash_error] 您只能使用审核通过的淘宝图片空间的图片"
    },
    {
        "error_msg_text": "发布手机详情失败 > [GoodsEditAction quickEditItem fail,GoodsEditAction quickEditItem fail] 系统错误，请稍后再试,数据保存出现问题，请稍后再试，以往保存的数据不会丢失"
    },
    {
        "error_msg_text": "发布手机详情失败 > [GoodsEditAction quickEditItem fail] IC_PRODUCT_00_16_001"
    },
    {
        "error_msg_text": "发布手机详情失败 > [GoodsEditAction quickEditItem fail] SAVE_TFS_ERROR"
    },
    {
        "error_msg_text": "发布手机详情失败 > [GoodsEditAction quickEditItem fail] 根据行业规定，本类目下新发商品必须匹配标准产品。当前你的商品没有匹配到标准产品，请点此链接 https://baike.taobao.com/create.htm?catId=121474010 申请标准产品."
    },
    {
        "error_msg_text": "远程服务调用超时 > [isp.top-remote-connection-timeout] "
    },
    {
        "error_msg_text": "发布手机详情失败 > [GoodsEditAction quickEditItem fail] 当前类目仅支持天猫卖家进行发布，请您选择其他类目商品经营。"
    },
    {
        "error_msg_text": "手机详情上传图片空间失败 > [0] Empty reply from server"
    },
    {
        "error_msg_text": "发布手机详情失败 > [isv.invalid-parameters:item_delete] 该商品已经被删除，不能编辑"
    },
    {
        "error_msg_text": "该商品已经被删除，不能编辑 > [isv.invalid-parameters:item_delete] "
    },
    {
        "error_msg_text": "新增商家图片空间分类失败 > [isv.pictureServiceClient-client-error:HAS_DIR_SAME_NAME] null"
    },
    {
        "error_msg_text": "发布手机详情失败 > [GoodsEditAction quickEditItem fail] 系统繁忙,请稍后重试"
    },
    {
        "error_msg_text": "发布手机详情失败 > [subuser.has-no-permission] 该子帐号无此操作权限taobao.item.schema.increment.update, 请通过主帐号设置开通相应权限(权限组)!"
    },
    {
        "error_msg_text": "ISP流控 > [isp.call-limited] "
    },
    {
        "error_msg_text": "发布手机详情失败 > [GoodsEditAction quickEditItem fail] 根据行业规定，本类目下新发商品必须匹配标准产品。当前你的商品没有匹配到标准产品，请点此链接 https://baike.taobao.com/create.htm?catId=121396029 申请标准产品."
    },
    {
        "error_msg_text": "手机详情上传图片空间失败 > [isv.pictureServiceClient-service-error:TOO_MANY_REQUESTS] 请求过于频繁"
    },
    {
        "error_msg_text": "手机详情上传图片空间失败 > [0] couldn't open file \"/data/srv/itemgule.aiyongbao.com/tmp/5_2_582866174198/582866174198_dest-3.jpg\""
    },
    {
        "error_msg_text": "发布手机详情失败 > [isv.item-service-error:IC_QS_NOT_VALID] 食品生产许可证编码无效活已过期"
    },
    {
        "error_msg_text": "发布手机详情失败 > [GoodsEditAction quickEditItem fail] 类目不能为空且必须为叶子类目"
    },
    {
        "error_msg_text": "SessionKey非法 > [invalid-sessionkey] "
    },
    {
        "error_msg_text": "商品类目未授权，请重新选择类目。 > [isv.invalid-parameter:cid] "
    },
    {
        "error_msg_text": "发布手机详情失败 > [isv.item-service-error:F_EXTENDS_11_15_015] 对不起，系统繁忙，请稍候再试"
    },
    {
        "error_msg_text": "没有找到商品，请确认商品是否存在或者已删除 > [isp.tmallitem-service-error:empty] "
    },
    {
        "error_msg_text": "发布手机详情失败 > [GoodsEditAction quickEditItem fail] 标题/卖点/短标题禁止使用半角符号“ &lt;&gt; ” 符号，但可以使用全角符号“ ＜＞”"
    },
    {
        "error_msg_text": "发布手机详情失败 > [GoodsEditAction quickEditItem fail] 亲，该类目已实施准入报名机制，您尚未通过审核备案，所以无法发布该类目下宝贝，请尽快申请准入报名并完成备案。申请准入报名地址：https://access.taobao.com/introduce.htm?&amp;appId=11718"
    },
    {
        "error_msg_text": "发布手机详情失败 > [GoodsEditAction quickEditItem fail] QS122318010053无效或已过期"
    },
    {
        "error_msg_text": "发布手机详情失败 > [isv.item-service-error:ERR_RULE_ITEM_PUB_QUANTITY_LIMIT_TMALL_CAR] 您的店铺在该一级类目下出售中商品总数已超过此类目商品数量限额:2500，请您及时调整您的商品数量，再上传商品，详见：https://service.tmall.com/support/tmall/knowledge-13115881.htm?"
    },
    {
        "error_msg_text": "手机详情上传图片空间失败 > [isp.auth-service-error] 授权服务不可用"
    },
    {
        "error_msg_text": "发布手机详情失败 > [GoodsEditAction quickEditItem fail] SYSTEM_ERROR"
    },
    {
        "error_msg_text": "发布手机详情失败 > [GoodsEditAction quickEditItem fail] 根据行业规定，本类目下新发商品必须匹配标准产品。当前你的商品没有匹配到标准产品，请点此链接 https://baike.taobao.com/create.htm?catId=50010808 申请标准产品."
    },
    {
        "error_msg_text": "发布手机详情失败 > [GoodsEditAction quickEditItem fail] 系统繁忙，请稍候再次尝试"
    },
    {
        "error_msg_text": "发布手机详情失败 > [GoodsEditAction quickEditItem fail] 淘宝网消保规则已更新，根据最新规则，您在本类目发布商品必须投保订单险。当前您还未投保，请到  卖家中心》消费者保障服务》订单险&amp;账期保障,投保。"
    },
    {
        "error_msg_text": "发布手机详情失败 > [GoodsEditAction quickEditItem fail] 上架的数量必须大于0"
    },
    {
        "error_msg_text": "发布手机详情失败 > [GoodsEditAction quickEditItem fail] 该类目下发布、编辑和上架全新宝贝需要冻结消费者保障服务保证金"
    },
    {
        "error_msg_text": "手机详情上传图片空间失败 > [isv.pictureServiceClient-service-error:CATEGORY_NOTEXIST] 目录不存在"
    },
    {
        "error_msg_text": "发布手机详情失败 > [GoodsEditAction quickEditItem fail] 商品发布失败，根据行业规定，本类目下新发商品必须包含标准的单品信息。请申请通过后再发布。单品信息审核通过后发布页会展示该属性项让您选择。申请链接https://baike.taobao.com/create.htm?catId=50011982 申请方法请参考：https://meizhuang.bbs"
    },
    {
        "error_msg_text": "发布手机详情失败 > [GoodsEditAction quickEditItem fail] 根据行业规定，本类目下新发商品必须匹配标准产品。当前你的商品没有匹配到标准产品，请点此链接 https://baike.taobao.com/create.htm?catId=50010815 申请标准产品."
    },
    {
        "error_msg_text": "发布手机详情失败 > [isp.tmallitem-service-error:empty] 数据存储服务正在维护中，请稍后再试！详细错误：HSFTimeOutException-FutureTimeout ERR-CODE: [HSF-0002], Type: [BIZ], More: [http://console.taobao.net/help/HSF-0002]\nerror message"
    },
    {
        "error_msg_text": "发布手机详情失败 > [GoodsEditAction quickEditItem fail] 淘宝网《消费者保障服务协议》及相应消保规则已更新，据此您必须参加账期保障才可发布新商品。当前您还未加入，请到  卖家中心》消费者保障服务》订单险&amp;账期保障,申请加入。"
    },
    {
        "error_msg_text": "发布手机详情失败 > [GoodsEditAction quickEditItem fail] 目前系统出错，请稍后再试"
    },
    {
        "error_msg_text": "发布手机详情失败 > [GoodsEditAction quickEditItem fail] 系统错误，请稍后再试"
    },
    {
        "error_msg_text": "发布手机详情失败 > [GoodsEditAction quickEditItem fail] 分销产品撤回，不允许上架"
    },
    {
        "error_msg_text": "发布手机详情失败 > [GoodsEditAction quickEditItem fail] 自定义销售属性暂不对分销开放"
    },
    {
        "error_msg_text": "发布手机详情失败 > [isv.item-service-error:DRAFT_AUCTION_ONLY_DRAFTPUBLISH_EDIT] 该商品信息不全，请编辑后再上架"
    },
    {
        "error_msg_text": "发布手机详情失败 > [GoodsEditAction quickEditItem fail] 您未通过认证或已被处罚，请核实"
    },
    {
        "error_msg_text": "发布手机详情失败 > [isv.item-service-error:FORBIDDEN_QUANTITY_ZERO_ERROR] 上架的数量必须大于0"
    },
    {
        "error_msg_text": "发布手机详情失败 > [GoodsEditAction quickEditItem fail] 亲，该类目已实施准入机制，您尚未通过准入审核备案所以无法发布该类目下宝贝，请尽快申请提交准入报名并完成备案，备案入口查看https://tb.cn/bD4r65x"
    },
    {
        "error_msg_text": "发布手机详情失败 > [isp.auth-service-error] 授权服务不可用"
    },
    {
        "error_msg_text": "该商品不存在，请确认传入id的正确性后，重试 > [isv.invalid-parameters:item_id] "
    },
    {
        "error_msg_text": "发布手机详情失败 > [isv.item-service-error:IC_CHECKSTEP_ITME_NOT_IN_SKU_PRICE] 一口价必须与有库存的宝贝规格价格一致"
    },
    {
        "error_msg_text": "指定的类目不存在 > [isv.invalid-parameter:category-not-found] "
    },
    {
        "error_msg_text": "TOP接口不支持天猫有价优惠券业务身份 > [invalid-parameter:biz-identity-forbidden] "
    },
    {
        "error_msg_text": "发布手机详情失败 > [GoodsEditAction quickEditItem fail] “inputPropText”输入属性错误:inputCause"
    },
    {
        "error_msg_text": "类目已被冻结, 本类目已经不能发布商品，请重新选择类目。 > [isv.invalid-parameter:category-frozen] "
    },
    {
        "error_msg_text": "发布手机详情失败 > [GoodsEditAction quickEditItem fail] 亲，您未通过备案所以无法新发商品！根据《中华人民共和国食品安全法》要求，经营食品（除农产品）都需要提供食品经营许可证备案，备案请查看https://tb.cn/bD4r65x   如有疑问请查看https://tb.cn/OL1vSex"
    },
    {
        "error_msg_text": "PC详情快照失败 > [] current dir: /usr/local/html2image/libxpcom.so\nWidth :640\nJpeg Quality :90\nURL :/data/srv/itemgule.aiyongbao.com/tmp/4_2_583152783730/583152783730.html\nOutput image :/data/srv/itemgule.a"
    },
    {
        "error_msg_text": "发布手机详情失败 > [GoodsEditAction quickEditItem fail] 亲，[本地化生活服务]类目仅支持已入驻的卖家发布商品，且停止卖家新入驻。入驻相关公告链接为：https://shenghuofuwu.bbs.taobao.com/detail.html?postId=7892991"
    },
    {
        "error_msg_text": "发布手机详情失败 > [isp.tmallitem-service-error:empty] API调用服务异常"
    },
    {
        "error_msg_text": "API调用服务异常 > [isp.tmallitem-service-error:empty] "
    },
    {
        "error_msg_text": "发布手机详情失败 > [GoodsEditAction quickEditItem fail] 亲，该类目已实施准入机制，您尚不满足准入条件，或未申请准入审查，所以无法发布该类目下宝贝，请尽快提交准入申请资料。 详细信息可查看以下链接地址：http://tb.cn/Mg1pedw"
    },
    {
        "error_msg_text": "手机详情上传图片空间失败 > [isp.pictureServiceClient-service-error:PICTURE_SYS_ERROR] error message : [HSF-Provider-11.1.189.222] Error log: Provider&apos;s HSF thread pool is full."
    },
    {
        "error_msg_text": "发布手机详情失败 > [isv.topschema-service-unavailable] topschema服务不可用"
    },
    {
        "error_msg_text": "发布手机详情失败 > [GoodsEditAction quickEditItem fail] audit+item+create+error%3A+%5B%7B0%7D%5D"
    },
    {
        "error_msg_text": "亲，您的操作速度太快了，请您稍等一会儿再试 > [SYS_REQUEST_TOO_FAST] "
    },
    {
        "error_msg_text": "发布手机详情失败 > [isv.item-service-error:RULE_TMALL_HUAZHUANGPIN118338_TOP_NOT_PERMIT_TO_EDIT] 该商品暂不支持top编辑，请使用天猫商品管理后台进行编辑。"
    },
    {
        "error_msg_text": "发布手机详情失败 > [SYS_REQUEST_TOO_FAST] 亲，您的操作速度太快了，请您稍等一会儿再试"
    },
    {
        "error_msg_text": "手机详情上传图片空间失败 > [isp.picture-service-unavailable] 图片空间服务不可用"
    },
    {
        "error_msg_text": "获取商家图片空间失败 > [isp.top-remote-connection-timeout] 远程服务调用超时"
    },
    {
        "error_msg_text": "获取商家图片空间失败 > [isp.service-unavailable] 服务不可用"
    },
    {
        "error_msg_text": "手机详情上传图片空间失败 > [isp.pictureServiceClient-service-error:PICTURE_SYS_ERROR] error message : Invalid call is removed because connection has been closed suddenly"
    },
    {
        "error_msg_text": "手机详情上传图片空间失败 > [isv.pictureServiceClient-service-error:null] null"
    },
    {
        "error_msg_text": "发布手机详情失败 > [isv.item-service-error:ERR_RULE_TITLE_SECURITY_CHAR_LIMITATION] 标题/卖点/短标题禁止使用半角符号“ &lt;&gt; ” 符号，但可以使用全角符号“ ＜＞”"
    },
    {
        "error_msg_text": "发布手机详情失败 > [isv.item-service-error:SAVE_TFS_ERROR] &quot;保存文本到TFS报错!商品id为 563,236,932,092."
    },
    {
        "error_msg_text": "获取商家图片空间失败 > [1] Platform System error:获取第三方APP信息失败,AppKey: null"
    },
    {
        "error_msg_text": "手机详情上传图片空间失败 > [0] couldn't open file \"/data/srv/itemgule.aiyongbao.com/tmp/5_5_565381117508/565381117508_dest-3.jpg\""
    },
    {
        "error_msg_text": "发布手机详情失败 > [isv.item-service-error:ERR_RULE_ITEM_PUB_QUANTITY_LIMIT_TMALL_CAR] 您的店铺在该一级类目下出售中商品总数已超过此类目商品数量限额:2000，请您及时调整您的商品数量，再上传商品，详见：https://service.tmall.com/support/tmall/knowledge-13115881.htm?"
    },
    {
        "error_msg_text": "发布手机详情失败 > [GoodsEditAction quickEditItem fail] 该宝贝为淘宝分销宝贝，不可新增删除规格属性;"
    },
    {
        "error_msg_text": "手机详情上传图片空间失败 > [1] Platform System error"
    },
    {
        "error_msg_text": "获取商家图片空间失败 > [isp.auth-service-error] 授权服务不可用"
    },
    {
        "error_msg_text": " > [] "
    },
    {
        "error_msg_text": "电子凭证功能升级，请使用网页版编辑 > [isp.tmallitem-service-error:empty] "
    },
    {
        "error_msg_text": "发布手机详情失败 > [GoodsEditAction quickEditItem fail] 根据行业规定，本类目下新发商品必须匹配标准产品。当前你的商品没有匹配到标准产品，请点此链接 https://baike.taobao.com/create.htm?catId=50013794 申请标准产品."
    },
    {
        "error_msg_text": "发布手机详情失败 > [isv.item-service-error:ERR_RULE_ITEM_PUB_QUANTITY_LIMIT_TMALL_CAR] 您的店铺在该一级类目下出售中商品总数已超过此类目商品数量限额:6000，请您及时调整您的商品数量，再上传商品，详见：https://service.tmall.com/support/tmall/knowledge-13115881.htm?"
    },
    {
        "error_msg_text": "发布手机详情失败 > [GoodsEditAction quickEditItem fail] 您的应用没有被授权调用IC的相关服务，请核实"
    },
    {
        "error_msg_text": "商品所属产品不符合天猫规范，无法使用，请重新发布或更换正确的产品。（无效产品ID：648718916）。点击&lt;a target=&quot;_blank&quot; href=&quot;//maowo.tmall.com/discussion.htm?id=8193&amp;circleId=45&quot;&gt;查看操作说明&lt;/a&gt; > [invalid-parameter"
    },
    {
        "error_msg_text": "发布手机详情失败 > [GoodsEditAction quickEditItem fail] ITEM_NOT_FOUND_MESSAGE"
    },
    {
        "error_msg_text": "发布手机详情失败 > [GoodsEditAction quickEditItem fail] 特种或专营类目没有发布权限"
    },
    {
        "error_msg_text": "发布手机详情失败 > [GoodsEditAction quickEditItem fail] 供应商限制该分销商品修改:宝贝以及所有规格必须与供销商品的规格对应关联。如有疑问请咨询供应商的分销销售控制"
    },
    {
        "error_msg_text": "发布手机详情失败 > [GoodsEditAction quickEditItem fail,GoodsEditAction quickEditItem fail] 淘宝网消保规则已更新，根据最新规则，您必须选择交易保障工具（可在订单险、消保保证金、账期保障中三选一）后可在本类目发布商品。请到  卖家中心》消费者保障服务,选择。,该类目下发布、编辑和上架全新宝贝需要冻结消费者保障服务保证金"
    },
    {
        "error_msg_text": "发布手机详情失败 > [GoodsEditAction quickEditItem fail] 您的商品符合预售类商品特征，请选择您需要的预售类型后再发布（通过网页版在一口价下方的“预售设置”中选择对应类型）"
    },
    {
        "error_msg_text": "发布手机详情失败 > [GoodsEditAction quickEditItem fail] 因类目调整当前类目已被淘宝网关闭，请您将商品发布在其他相应类目下"
    },
    {
        "error_msg_text": "发布手机详情失败 > [GoodsEditAction quickEditItem fail] 亲，为了更好地规范市场，切实维护好淘宝会员网购权益和满意度,我们将于2017年6月15日起对该类目进行整顿。整顿方案如下：1， 2017年6月15日前在该类目下在线商品为0的卖家禁止发布任何商品，有在线商品商品的卖家不受此限制，可正常发布/编辑商品。2，对于有在线商品可正常经营的卖家，依旧会按照《淘宝网"
    },
    {
        "error_msg_text": "发布手机详情失败 > [isp.tmallitem-service-error:empty] 数据存储服务正忙，请稍后再试"
    },
    {
        "error_msg_text": "发布手机详情失败 > [GoodsEditAction quickEditItem fail] 宝贝销售属性出错（重复），请重新编辑"
    },
    {
        "error_msg_text": "手机详情上传图片空间失败 > [533] Remote service error"
    },
    {
        "error_msg_text": "发布手机详情失败 > [GoodsEditAction quickEditItem fail] 系统错误，获取用户数据失败"
    },
    {
        "error_msg_text": "发布手机详情失败 > [GoodsEditAction quickEditItem fail] 亲，您未通过酒类特种经营资质备案所以无法发布新商品！ 根据《中华人民共和国食品安全法》要求，经营酒类商品都需要提供酒类特种经营资质备案，请点此备案https://tb.cn/bD4r65x 如有疑问请点此咨询https://tb.cn/RRg9zyw"
    },
    {
        "error_msg_text": "载入与解析Schema错误 > [] /itemRule/field[@id=\"descForPC\"]/default-value 节点找不到"
    },
    {
        "error_msg_text": "发布手机详情失败 > [GoodsEditAction quickEditItem fail] IC_LIMIT_FOR_DPC++"
    },
    {
        "error_msg_text": "商品所属产品不符合天猫规范，已被屏蔽，请重新发布或更换正确的产品。（无效产品ID：844946022）。点击&lt;a target=&quot;_blank&quot; href=&quot;//maowo.tmall.com/discussion.htm?id=8193&amp;circleId=45&quot;&gt;查看操作说明&lt;/a&gt; > [invalid-parameter"
    },
    {
        "error_msg_text": "发布手机详情失败 > [isv.invalid-parameters:item_id] 该商品不存在，请确认传入id的正确性后，重试"
    },
    {
        "error_msg_text": "获取商家图片空间失败 > [invalid-sessionkey] 非法或过期的SessionKey参数，请使用有效的SessionKey参数"
    },
    {
        "error_msg_text": "发布手机详情失败 > [isv.item-service-error:IC_OPTIMISTIC_LOCKING_CONFLICT] 商品更新失败，乐观锁冲突: [update product id:578576703257]"
    },
    {
        "error_msg_text": "发布手机详情失败 > [GoodsEditAction quickEditItem fail] 您设置的价格不符合供应商设置的价格区间，请修改价格后重试;"
    },
    {
        "error_msg_text": "手机详情上传图片空间失败 > [502] <!DOCTYPE HTML PUBLIC \"-//IETF//DTD HTML 2.0//EN\">\r\n<html>\r\n<head><title>502 Bad Gateway</title></head>\r\n<body bgcolor=\"white\">\r\n<h1>502 Bad Gateway</h1>\r\n<p>The proxy server rece"
    },
    {
        "error_msg_text": "发布手机详情失败 > [GoodsEditAction quickEditItem fail] 亲，只有游戏专营的卖家才可以在游戏相关类目下发布宝贝。目前游戏专营已经暂停签约，具体详见：https://game.taobao.com/virtual/zhuanying.htm"
    },
    {
        "error_msg_text": "Platform System error > [1] "
    },
    {
        "error_msg_text": "商品所属产品不符合天猫规范，已被删除，请重新发布或更换正确的产品。（无效产品ID：208435595）。点击&lt;a target=&quot;_blank&quot; href=&quot;//maowo.tmall.com/discussion.htm?id=8193&amp;circleId=45&quot;&gt;查看操作说明&lt;/a&gt; > [invalid-parameter"
    },
    {
        "error_msg_text": "商品所属产品不符合天猫规范，已被删除，请重新发布或更换正确的产品。（无效产品ID：208258529）。点击&lt;a target=&quot;_blank&quot; href=&quot;//maowo.tmall.com/discussion.htm?id=8193&amp;circleId=45&quot;&gt;查看操作说明&lt;/a&gt; > [invalid-parameter"
    },
    {
        "error_msg_text": "该行业不支持发布商品 > [isp.tmallitem-service-error:empty] "
    },
    {
        "error_msg_text": "载入与解析Schema错误 > [9] xmlParseCharRef: invalid xmlChar value 8\n"
    },
    {
        "error_msg_text": "手机详情上传图片空间失败 > [0] Recv failure: Connection reset by peer"
    },
    {
        "error_msg_text": "PC详情快照失败 > [] current dir: /usr/local/html2image/libxpcom.so\nWidth :640\nJpeg Quality :90\nURL :/data/srv/itemgule.aiyongbao.com/tmp/4_6_529214119792/529214119792.html\nOutput image :/data/srv/itemgule.a"
    },
    {
        "error_msg_text": "发布手机详情失败 > [GoodsEditAction quickEditItem fail] 您出售中的“居家日用”类目下宝贝总数已超过此类目宝贝数量限额（卖家评分:1心-2心，允许宝贝个数:500），请您及时调整您的宝贝数量，再上传宝贝"
    },
    {
        "error_msg_text": "系统错误,请稍后重试 > [isp.tmallitem-service-error:empty] "
    },
    {
        "error_msg_text": "发布手机详情失败 > [GoodsEditAction quickEditItem fail] 根据平台要求, 您所发布的商品需要挂靠产品后才能上架销售, 了解行业规范: https://aliqiche.bbs.taobao.com/detail.html?postId=7865344; 请您从&quot;编辑宝贝&quot;按钮进入编辑页面, 参考帖子中的新版发布系统教程进行申请."
    },
    {
        "error_msg_text": "发布手机详情失败 > [GoodsEditAction quickEditItem fail] 淘宝网消保规则已更新，根据最新规则，您必须选择交易保障工具（可在订单险、消保保证金、账期保障中三选一）后可在本类目发布商品。请到  卖家中心》消费者保障服务,选择。"
    },
    {
        "error_msg_text": "新增商家图片空间分类失败 > [isv.pictureServiceClient-client-error:serverException] null"
    },
    {
        "error_msg_text": "发布手机详情失败 > [isv.item-service-error:ERR_RULE_ITEM_PUB_QUANTITY_LIMIT_TMALL_CAR] 您的店铺在该一级类目下出售中商品总数已超过此类目商品数量限额:3000，请您及时调整您的商品数量，再上传商品，详见：https://service.tmall.com/support/tmall/knowledge-13115881.htm?"
    },
    {
        "error_msg_text": "PC详情快照失败 > [] current dir: /usr/local/html2image/libxpcom.so\n"
    },
    {
        "error_msg_text": "PC详情快照失败 > [] "
    },
    {
        "error_msg_text": "数据存储服务正在维护中，请稍后再试！详细错误：HSFTimeOutException-FutureTimeout ERR-CODE: [HSF-0002], Type: [BIZ], More: [http://console.taobao.net/help/HSF-0002]\nerror message : timeout is 3000 > [isp.tmallitem-service-err"
    },
    {
        "error_msg_text": "发布手机详情失败 > [isp.tmallitem-service-error:empty] 数据存储服务正在维护中，请稍后再试！详细错误：\nerror message : Invalid call is removed because connection has been closed suddenly"
    },
    {
        "error_msg_text": "发布手机详情失败 > [GoodsEditAction quickEditItem fail,GoodsEditAction quickEditItem fail] 属性值不允许自定义，请确认该属性是否配置正确！,供应商限制该分销商品修改:型号(供应商设置为：香熏身体乳)。如有疑问请咨询供应商的分销销售控制"
    },
    {
        "error_msg_text": "发布手机详情失败 > [GoodsEditAction quickEditItem fail] 您出售中的“流行男鞋”类目下宝贝总数已超过此类目宝贝数量限额（卖家评分:0心-0心，允许宝贝个数:150），请您及时调整您的宝贝数量，再上传宝贝"
    },
    {
        "error_msg_text": "手机详情上传图片空间失败 > [504] <!DOCTYPE HTML PUBLIC \"-//IETF//DTD HTML 2.0//EN\">\r\n<html>\r\n<head><title>504 Gateway Time-out</title></head>\r\n<body bgcolor=\"white\">\r\n<h1>504 Gateway Time-out</h1>\r\n<p>The gateway"
    },
    {
        "error_msg_text": "发布手机详情失败 > [GoodsEditAction quickEditItem fail] 宝贝描述不能为空"
    },
]

2019.03.13
总数：83437
总失败：48701    失败率：58.37%
PC详情快照失败：27217  55.89%
亲，您的操作速度太快了:13447  27.61%（服务器）
上传图片空间失败：4559   9.36%
发布手机详情失败： 2067   4.24%
请确认是否是咸鱼宝贝：1367   2.81%

2019.03.14
总数：72247
总失败：24723  失败率：34.22%
PC详情快照失败：11697  47.31%
上传图片空间失败：9396  38.01%
发布手机详情失败：2041  8.26%
请确认是否是咸鱼宝贝：1526  6.17%



2019.03.07
总数|总失败|PC详情快照失败|上传图片空间失败|发布手机详情失败|请确认是否是咸鱼宝贝
---|:--:|---|:---|:--:|---:
71627|19793(27.63%)|3675(18.57%)|8136(41.11%)|2318(11.71%)|2013(10.17%)



总数：71627
总失败：19793  失败率：27.63%
PC详情快照失败：3675  18.57%
上传图片空间失败：8136  41.11%
亲，您的操作速度太快了:3605  18.21%
发布手机详情失败： 2318  11.71%
请确认是否是咸鱼宝贝：2013  10.17%



2019.03.01
总数：58064
总失败：22467  失败率：38.69%
PC详情快照失败：7632  33.97%
上传图片空间失败：6986  31.09%
亲，您的操作速度太快了:3571  15.89%
发布手机详情失败： 2571  11.44%
请确认是否是咸鱼宝贝：1342   5.97%


2019.02.11 - 2019.02.20
总数：484250
总失败：149923    失败率：30.96%
成功：303513     成功率：62.67%
状态3(终止):30510     率：6.3%
PC详情快照失败：50486  33.67%
上传图片空间失败：66054   44.06%
发布手机详情失败： 16562   11.05%
请确认是否是咸鱼宝贝：13215   8.81%
亲，您的操作速度太快了:1406  0.94%




2019.03.01 - 2019.03.12
总数|总失败|PC详情快照失败|上传图片空间失败|发布手机详情失败|请确认是否是咸鱼宝贝|亲，您的操作速度太快了
---|:--:|---|:---|:--:|---:|---:
767614|276558(36.03%)|123545(44.67%)|90890(32.86%)|25539(9.23%)|19121(6.91%)|13454(4.86%)


2019.03.01 - 2019.03.12
1. 总数：767614
2. 总失败：276558   失败率：36.03%
   1. PC详情快照失败：123545  44.67%
      - [] current dir：81228（65.74%，其中 长度超过：3117（3.84%）） 
      - 详情为空或内容太少：36505（29.55%）  
   2. 上传图片空间失败：90890   32.86%
      - 图片空间容量：86946 95.66%
   3. 发布手机详情失败： 25539   9.23%
      - GoodsEditAction quickEditItem：23602（92.41%） 
         - 商品信息不全：19186（75.12%） 
         - 审核：1746（6.8%） 
      - 拍卖宝贝正在出售中：1018（3.98%） 
      - 系统：568  乐观锁冲突：19 
   4. 请确认是否是咸鱼宝贝：19121   6.91%
   5. 亲，您的操作速度太快了:13454  4.86%
3. 成功：447303     成功率：58.27%
4. 状态3(终止):39381     终止率：5.13%
5. 状态 -1:4360    终止率：0.57%


2019.03.18
总数：82240
总失败：17455
成功：61347
PC详情快照失败：2228
上传图片空间失败：8753
发布手机详情失败： 3832
请确认是否是咸鱼宝贝：2463
亲，您的操作速度太快了:0

