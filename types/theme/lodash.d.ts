/**
 * @interface Lodash
 * Lodash шаблоны.
 * Компонет «Template» отвечает за хранение и получение шаблонов 
 * написанных на шаблонизаторе библиотеки lodash.
 * @see https://github.com/liquid-hub/insales-common-js-v2-api/blob/master/Template.md#hammer-load
 */

export default interface Lodash {
    load: (template_body: string, template_id: string) => void;
    render: (templateData: string, template_id: string) => any;
};