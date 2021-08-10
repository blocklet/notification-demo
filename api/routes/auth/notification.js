const Notification = require('@blocklet/sdk/service/notification');

module.exports = function createRoutes(node) {
  return {
    action: 'notification',
    claims: {
      profile: async ({ extraParams }) => {
        return {
          fields: ['fullName', 'avatar'],
        };
      },
    },

    onAuth: async ({ userDid, extraParams }) => {
      setTimeout(async () => {
        const salt = Math.random();
        const messages = {
          en: {
            title: 'Hello，World',
            body: `This is notification message from notification demo: ${salt}`,
          },
          zh: {
            title: '你好，世界',
            body: `这是从 Notification Demo 发送过来的消息: ${salt}`,
          },
        };

        const locale = extraParams.locale || 'en'
        const message = messages[locale] || messages.en;

        await Notification.sendToUser(userDid, {
          title: message.title,
          body: message.body,
        });
      }, 2 * 1000)
    },
  };
};
