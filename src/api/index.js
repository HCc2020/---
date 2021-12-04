import request from '../utils/request';
import qs from 'qs';

const base = {
    post: function (url, data, callback) {
        request.post(url, qs.stringify(data)).then(function (res) {
            callback && callback(res.data);
        }).catch(function (err) {
            console.log(err)
        });
    },
    get: function (url, data, callback) {
        request.get(url, {
            params: data
        }).then(function (res) {
            callback && callback(res.data);
        }).catch(function (err) {
            console.log(err)
        });
    },
    delete: function (url, data, callback) {
        request.delete(url, {
            params: data
        }).then(function (res) {
            callback && callback(res.data);
        }).catch(function (err) {
            console.log(err)
        });
    },
    put: function (url, data, callback) {
        request.put(url, data).then(function (res) {
            callback && callback(res.data);
        }).catch(function (err) {
            console.log(err)
        });
    },
    upload: function (url, data, callback) {
        request.post(url, data).then(function (res) {
            callback && callback(res.data);
        }).catch(function (err) {
            console.log(err)
        });
    }
}

export default {
    /**
     * 获取床位信息
     */
    bedDistributed: function (callback) {
        var data = {}
        base.get("/api/lsd/bedDistributed", data, callback);
    },



};