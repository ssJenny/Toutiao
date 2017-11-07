
import jsonp from './jsonp'
import {commonParams,options} from './config'

export function getRecommend() {
  const url = 'https://m.toutiao.com/list/';

  const data = commonParams;
  return jsonp(url, data,options)
}


export function getEntertainment() {
  const url = 'https://m.toutiao.com/list/';

  const data = commonParams;
  data.tag = 'news_entertainment';
  return jsonp(url, data,options)
}


export function getHot() {
  const url = 'https://m.toutiao.com/list/';

  const data = commonParams;
  data.tag = 'news_hot';
  return jsonp(url, data,options)
}

export function getSociety() {
  const url = 'https://m.toutiao.com/list/';

  const data = commonParams;
  data.tag = 'news_society';
  return jsonp(url, data,options)

}


export function getMilitary() {
  const url = 'https://m.toutiao.com/list/';
  const data = commonParams;
  data.tag = 'news_military';
  return jsonp(url, data,options)

}

export function getVideo() {
  const url = 'https://m.toutiao.com/list/';

  const data = commonParams;
  data.tag = 'video';
  return jsonp(url, data,options)
}
