export interface ICard {
	likes: IUser[];
	_id: string;
	name: string;
	link: string;
	owner: IUser;
	createdAt: Date;
}

export interface IUser {
	name: string;
	about: string;
	avatar: string;
	_id: string;
	cohort: string;
}

export interface ICardsData {
	cards: ICard[];
	preview: string | null;
}

/* Pick<Type, Keys>
(т.е из свойства используем выбранное количесвто свойсв)
Создает тип, выбирая набор свойств Keys (строковый литерал или объединение строковых литералов) из Type. */

// тип для главной страницы 
export type TUserPublicInfo = Pick<IUser, "name" | "about" | "avatar">;

//типы для модалок 
export type TCardInfo = Pick<ICard, "name" | "link">;

export type TUserBaseInfo = Pick<IUser, "name" | "about">;

export type TUserAvatar = Pick<IUser, "avatar">;