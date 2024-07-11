# Проектная работа "Место"

Стек: HTML, SCSS, TS, Webpack

Структура проекта:

- src/ — исходные файлы проекта
- src/components/ — папка с JS компонентами
- src/components/base/ — папка с базовым кодом

Важные файлы:

- src/pages/index.html — HTML-файл главной страницы
- src/types/index.ts — файл с типами
- src/index.ts — точка входа приложения
- src/blocks/index.css — корневой файл стилей
- src/utils/constants.ts — файл с константами
- src/utils/utils.ts — файл с утилитами

## Установка и запуск

Для установки и запуска проекта необходимо выполнить команды

```
npm install
npm run start
```

или

```
yarn
yarn start
```

## Сборка

```
npm run build
```

или

```
yarn build
```

## Данные и типы данных, используемые в приложении

Карточка

```
export interface ICard {
	likes: IUser[];
	_id: string;
	name: string;
	link: string;
	owner: IUser;
	createdAt: Date;
}
```

Пользователь

```
export interface IUser {
	name: string;
	about: string;
	avatar: string;
	_id: string;
	cohort: string;
}
```

Модель для хранения данных карточки

```
export interface ICardsData {
	cards: ICard[];
	preview: string | null;
}
```

Основыне данные пользователя, используемые для отображения их на странице

```
export type TUserPublicInfo = Pick<IUser, "name" | "about" | "avatar">;
```

Данные карточки, используемые при создании новой карточки

```
export type TCardInfo = Pick<ICard, "name" | "link">;
```

Данные пользователя, используемые для изменения профиля

```
export type TUserBaseInfo = Pick<IUser, "name" | "about">;
```

Данные аватара пользователя

```
export type TUserAvatar = Pick<IUser, "avatar">;
```
