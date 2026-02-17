import { supabase } from './supabase';

interface FormData {
    name: string;
    phone: string;
    productName?: string;
}

export const submitLead = async (data: FormData) => {
    console.log('🚀 Начинаем отправку формы...', data);

    // 1. Сохранение в Supabase (необязательно, если ключей нет)
    try {
        const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
        const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

        if (supabaseUrl && supabaseAnonKey && supabaseAnonKey.startsWith('eyJ')) {
            console.log('📡 Попытка записи в Supabase...');
            const { error: dbError, data: dbData } = await supabase
                .from('leads')
                .insert([
                    {
                        name: data.name,
                        phone: data.phone,
                        product_name: data.productName
                    }
                ])
                .select();

            if (dbError) {
                console.error('❌ Ошибка Supabase:', dbError.message);
            } else {
                console.log('✅ Данные успешно записаны в таблицу!', dbData);
            }
        } else {
            console.log('ℹ️ Supabase ключи не найдены, пропускаем запись в БД.');
        }
    } catch (error) {
        console.error('🚫 Ошибка при работе с БД:', error);
    }

    // 2. Отправка в Telegram (критично)
    try {
        const botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
        const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;

        if (botToken && chatId) {
            console.log('📱 Отправка уведомления в Telegram...');
            const message = `🔔 *Новая заявка!*
👤 *Имя:* ${data.name}
📞 *Телефон:* ${data.phone}
📦 *Товар:* ${data.productName || 'Общая заявка'}
📅 *Дата:* ${new Date().toLocaleString('ru-RU')}`;

            const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: message,
                    parse_mode: 'Markdown',
                }),
            });

            if (response.ok) {
                console.log('✅ Сообщение в Telegram отправлено!');
            } else {
                const errData = await response.json();
                console.error('❌ Ошибка Telegram API:', errData);
            }
        } else {
            console.warn('⚠️ Telegram ключи не найдены! Проверьте VITE_TELEGRAM_BOT_TOKEN и VITE_TELEGRAM_CHAT_ID в .env.local');
        }
    } catch (error) {
        console.error('🚫 Ошибка сети при отправке в TG:', error);
    }

    // Возвращаем успех всегда, чтобы пользователь видел "Галочку"
    return { success: true };
};
