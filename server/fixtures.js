
// Fixture data
if (Posts.find().count() === 0) {
    var now = new Date().getTime();

    // create two users
    var tomId = Meteor.users.insert({
        profile: { name: 'Tom Coleman' }
    });
    var tom = Meteor.users.findOne(tomId);
    var sachaId = Meteor.users.insert({
        profile: { name: 'Sacha Greif' }
    });
    var sacha = Meteor.users.findOne(sachaId);

    var telescopeId = Posts.insert({
        title: '【多图】上网利器 Shadowsocks ：服务器端的部署 & Android 客户端的使用',
        userId: sacha._id,
        author: sacha.profile.name,
        url: 'http://mp.weixin.qq.com/s?__biz=MzAxNzQ3NTI2OQ==&mid=214083811&idx=1&sn=79da95f4e96db90d74adf687d6d50de5#rd',
        submitted: new Date(now - 7 * 3600 * 1000),
        commentsCount: 2
    });

    Comments.insert({
        postId: telescopeId,
        userId: tom._id,
        author: tom.profile.name,
        submitted: new Date(now - 5 * 3600 * 1000),
        body: '没错我是个托儿～'
    });

    Comments.insert({
        postId: telescopeId,
        userId: sacha._id,
        author: sacha.profile.name,
        submitted: new Date(now - 3 * 3600 * 1000),
        body: '楼上还可以，我压根就是个假数据。。。'
    });

    Posts.insert({
        title: '【25页 Keynote , 建议 WiFi 下食用】云服务模式与部署、运维方法的比较',
        userId: tom._id,
        author: tom.profile.name,
        url: 'http://mp.weixin.qq.com/s?__biz=MzAxNzQ3NTI2OQ==&mid=220669979&idx=1&sn=648f151d88776497f23a8fc0c16d8cdc#rd',
        submitted: new Date(now - 10 * 3600 * 1000),
        commentsCount: 0
    });

    Posts.insert({
        title: '【新手向】玩转比特币(Bitcoin)：跨时代的互联网货币',
        userId: tom._id,
        author: tom.profile.name,
        url: 'http://mp.weixin.qq.com/s?__biz=MzAxNzQ3NTI2OQ==&mid=214114114&idx=1&sn=ff80255ac100c3b4c53c0a12326ac7c2#rd',
        submitted: new Date(now - 12 * 3600 * 1000),
        commentsCount: 0
    });

    for (var i = 0; i < 10; i++) {
        Posts.insert({
            title: 'Test post #' + i,
            author: sacha.profile.name,
            userId: sacha._id,
            url: 'http://google.com/?q=test-' + i,
            submitted: new Date(now - i * 3600 * 1000),
            commentsCount: 0
        });
    };
}