/**
 * @interface ShopAPI
 * Вспомогательные методы.
 * @see https://github.com/liquid-hub/insales-common-js-v2-api/blob/master/Shop.md
 */

interface ShopAPI {
    money: {
        /**
         * Форматирование входной строки к виду, согласно настройкам БО
         * @param {string|number} amount - строка или число, которое надо отформатировать в валюту
         * @return {string} Строка, содержащая результат форматирования
         */
        format: (amount: string | number) => string;
    };

    config: {
        /**
         * Получить product-id на странице товара
         * @returns {string | null} на странице товара вернет -> "70513124", на остальных страницах -> null
         */
        getProductId: () => string | null;

        /**
         * Получить конфигурацию
         * @returns {any}
         */
        get: () => any;
    };
}

export default ShopAPI;