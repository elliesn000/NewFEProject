import { Service } from '@angular/core';
import initJson from './initArticles.json';
import { Article } from './constants';

const key = 'arLocal';

@Service()
export class serviceLocalStorage {

    getAll(): Article[] {
        try {
            const arToGet = localStorage.getItem(key);
            if (arToGet === null) {
                const arTemp = initJson.articles as Article[];
                this.saveAll(arTemp);
                return arTemp;
            }
            return JSON.parse(arToGet) as Article[];
        } catch (e) {
            console.error(e);
            return [];
        }
    }

    getById(id: string): Article | null {
        return this.getAll().find((a) => a.id === id) ?? null;
    }

    add(article: Article): void {
        this.saveAll([article, ...this.getAll()]);
    }

    update(article: Article): void {
        this.saveAll(this.getAll().map((a) => (a.id === article.id ? article : a)));
    }

    renew(): void {
        try {
            localStorage.removeItem(key);
            this.getAll();
        } catch (e) {
            console.error(e);
        }
    }


    private saveAll(arToSave: Article[]): void {
        try {
            localStorage.setItem(key, JSON.stringify(arToSave));
        } catch (e) {
            console.error(e);
        }
    }
}