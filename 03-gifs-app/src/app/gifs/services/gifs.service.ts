import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, GiphySearchResponse } from '../interfaces/gifs.interfaces';

const GIPHY_API_KEY = 'm5yEP64bbCABfAHV15tenhOJnds4H3Jz'
const GIPHY_BASE_URL = 'https://api.giphy.com/v1/gifs'
const HISTORY_KEY = 'history'

@Injectable({providedIn: 'root'})
export class GifsService {
  public gifList: Gif[] = []
  private _tagsHistory: string[] = []

  constructor(private http: HttpClient) {
    this.loadLocalStorage()
   }


  get tagHistory() {
    return [...this._tagsHistory]
  }

  private organizeHistoy(item: string){
    if (this._tagsHistory.includes(item)) {
      const pos = this._tagsHistory.indexOf(item)
      this._tagsHistory.splice(pos, 1)
    }
  }

  private addToHistory(query: string) {
    this.organizeHistoy(query)
    this._tagsHistory.unshift(query)
    this._tagsHistory = this._tagsHistory.splice(0, 10)

    localStorage.setItem(HISTORY_KEY, JSON.stringify(this._tagsHistory))
  }

  private loadLocalStorage() {
    const data = localStorage.getItem(HISTORY_KEY)
    if (!data) return

    this._tagsHistory = JSON.parse(data)

    if (this._tagsHistory.length > 0) {
      this.search(this._tagsHistory[0])
    }
  }

  search(query: string) {
    if (query.length === 0) return
    query = query.toLocaleLowerCase().trim()
    this.addToHistory(query)

    const params = new HttpParams()
      .set('api_key', GIPHY_API_KEY)
      .set('q', query)
      .set('limit', 10)

    this.http.get<GiphySearchResponse>(`${GIPHY_BASE_URL }/search`, { params })
      .subscribe(response => {
        this.gifList = response.data
        // console.log(this.gifList)
      })
  }
}
