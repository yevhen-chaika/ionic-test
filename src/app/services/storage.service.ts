import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private storage: Storage | null = null;

  constructor(private storageService: Storage) {
    this.init();
  }

  public set(key: string, value: any): void {
    this.storage?.set(key, value);
  }

  public get(key: string): Promise<string> {
    return this.storage.get(key);
  }

  private async init() {
    this.storage = await this.storageService.create();
  }
}
