import jsonp from 'assets/js/jsonp'
import {commonParams,options} from './config'
import axios from 'axios'

export function getRecommend() {
  const url = 'https://m.toutiao.com/list/';

  const data = commonParams;
  return jsonp(url, data,options)



}
