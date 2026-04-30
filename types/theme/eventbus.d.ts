/**
 * @interface EventBusAPI
 * Основной интерфейс шины событий Insales EventBus.
 * Предоставляет методы для подписки на события, публикации событий,
 * а также объект для логирования компонентов.
 * @see https://github.com/liquid-hub/insales-common-js-v2-api/blob/master/EventBus.md
 */

interface EventBusAction {
    method: string;
    element?: JQuery;
    data?: any;
    [key: string]: any;
}

interface EventBusLogger {
    add(component: 'cart' | 'product' | 'search' | 'compares'): void;
}

interface EventData {
    action: EventBusAction;
}

interface EventBusAPI {
    logger: EventBusLogger;
    
    subscribe(eventId: string, callback: (data: EventData) => void): void;
    publish(eventId: string, data?: any): void;
}

export default EventBusAPI;