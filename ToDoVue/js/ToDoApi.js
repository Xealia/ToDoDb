﻿/* tslint:disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v12.0.4.0 (NJsonSchema v9.12.7.0 (Newtonsoft.Json v11.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TasksClient = /** @class */ (function () {
        function TasksClient(baseUrl, http) {
            this.jsonParseReviver = undefined;
            this.http = http ? http : window;
            this.baseUrl = baseUrl ? baseUrl : "https://localhost:44339";
        }
        TasksClient.prototype.getTaskAll = function () {
            var _this = this;
            var url_ = this.baseUrl + "/api/Tasks";
            url_ = url_.replace(/[?&]$/, "");
            var options_ = {
                method: "GET",
                headers: {
                    "Accept": "application/json"
                }
            };
            return this.http.fetch(url_, options_).then(function (_response) {
                return _this.processGetTaskAll(_response);
            });
        };
        TasksClient.prototype.processGetTaskAll = function (response) {
            var _this = this;
            var status = response.status;
            var _headers = {};
            if (response.headers && response.headers.forEach) {
                response.headers.forEach(function (v, k) { return _headers[k] = v; });
            }
            ;
            if (status === 200) {
                return response.text().then(function (_responseText) {
                    var result200 = null;
                    var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                    if (resultData200 && resultData200.constructor === Array) {
                        result200 = [];
                        for (var _i = 0, resultData200_1 = resultData200; _i < resultData200_1.length; _i++) {
                            var item = resultData200_1[_i];
                            result200.push(Task.fromJS(item));
                        }
                    }
                    return result200;
                });
            }
            else if (status !== 200 && status !== 204) {
                return response.text().then(function (_responseText) {
                    return throwException("An unexpected server error occurred.", status, _responseText, _headers);
                });
            }
            return Promise.resolve(null);
        };
        TasksClient.prototype.postTask = function (task) {
            var _this = this;
            var url_ = this.baseUrl + "/api/Tasks";
            url_ = url_.replace(/[?&]$/, "");
            var content_ = JSON.stringify(task);
            var options_ = {
                body: content_,
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }
            };
            return this.http.fetch(url_, options_).then(function (_response) {
                return _this.processPostTask(_response);
            });
        };
        TasksClient.prototype.processPostTask = function (response) {
            var status = response.status;
            var _headers = {};
            if (response.headers && response.headers.forEach) {
                response.headers.forEach(function (v, k) { return _headers[k] = v; });
            }
            ;
            if (status === 200 || status === 206) {
                var contentDisposition = response.headers ? response.headers.get("content-disposition") : undefined;
                var fileNameMatch = contentDisposition ? /filename="?([^"]*?)"?(;|$)/g.exec(contentDisposition) : undefined;
                var fileName_1 = fileNameMatch && fileNameMatch.length > 1 ? fileNameMatch[1] : undefined;
                return response.blob().then(function (blob) { return { fileName: fileName_1, data: blob, status: status, headers: _headers }; });
            }
            else if (status !== 200 && status !== 204) {
                return response.text().then(function (_responseText) {
                    return throwException("An unexpected server error occurred.", status, _responseText, _headers);
                });
            }
            return Promise.resolve(null);
        };
        TasksClient.prototype.getTask = function (id) {
            var _this = this;
            var url_ = this.baseUrl + "/api/Tasks/{id}";
            if (id === undefined || id === null)
                throw new Error("The parameter 'id' must be defined.");
            url_ = url_.replace("{id}", encodeURIComponent("" + id));
            url_ = url_.replace(/[?&]$/, "");
            var options_ = {
                method: "GET",
                headers: {
                    "Accept": "application/json"
                }
            };
            return this.http.fetch(url_, options_).then(function (_response) {
                return _this.processGetTask(_response);
            });
        };
        TasksClient.prototype.processGetTask = function (response) {
            var status = response.status;
            var _headers = {};
            if (response.headers && response.headers.forEach) {
                response.headers.forEach(function (v, k) { return _headers[k] = v; });
            }
            ;
            if (status === 200 || status === 206) {
                var contentDisposition = response.headers ? response.headers.get("content-disposition") : undefined;
                var fileNameMatch = contentDisposition ? /filename="?([^"]*?)"?(;|$)/g.exec(contentDisposition) : undefined;
                var fileName_2 = fileNameMatch && fileNameMatch.length > 1 ? fileNameMatch[1] : undefined;
                return response.blob().then(function (blob) { return { fileName: fileName_2, data: blob, status: status, headers: _headers }; });
            }
            else if (status !== 200 && status !== 204) {
                return response.text().then(function (_responseText) {
                    return throwException("An unexpected server error occurred.", status, _responseText, _headers);
                });
            }
            return Promise.resolve(null);
        };
        TasksClient.prototype.putTask = function (id, task) {
            var _this = this;
            var url_ = this.baseUrl + "/api/Tasks/{id}";
            if (id === undefined || id === null)
                throw new Error("The parameter 'id' must be defined.");
            url_ = url_.replace("{id}", encodeURIComponent("" + id));
            url_ = url_.replace(/[?&]$/, "");
            var content_ = JSON.stringify(task);
            var options_ = {
                body: content_,
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }
            };
            return this.http.fetch(url_, options_).then(function (_response) {
                return _this.processPutTask(_response);
            });
        };
        TasksClient.prototype.processPutTask = function (response) {
            var status = response.status;
            var _headers = {};
            if (response.headers && response.headers.forEach) {
                response.headers.forEach(function (v, k) { return _headers[k] = v; });
            }
            ;
            if (status === 200 || status === 206) {
                var contentDisposition = response.headers ? response.headers.get("content-disposition") : undefined;
                var fileNameMatch = contentDisposition ? /filename="?([^"]*?)"?(;|$)/g.exec(contentDisposition) : undefined;
                var fileName_3 = fileNameMatch && fileNameMatch.length > 1 ? fileNameMatch[1] : undefined;
                return response.blob().then(function (blob) { return { fileName: fileName_3, data: blob, status: status, headers: _headers }; });
            }
            else if (status !== 200 && status !== 204) {
                return response.text().then(function (_responseText) {
                    return throwException("An unexpected server error occurred.", status, _responseText, _headers);
                });
            }
            return Promise.resolve(null);
        };
        TasksClient.prototype.deleteTask = function (id) {
            var _this = this;
            var url_ = this.baseUrl + "/api/Tasks/{id}";
            if (id === undefined || id === null)
                throw new Error("The parameter 'id' must be defined.");
            url_ = url_.replace("{id}", encodeURIComponent("" + id));
            url_ = url_.replace(/[?&]$/, "");
            var options_ = {
                method: "DELETE",
                headers: {
                    "Accept": "application/json"
                }
            };
            return this.http.fetch(url_, options_).then(function (_response) {
                return _this.processDeleteTask(_response);
            });
        };
        TasksClient.prototype.processDeleteTask = function (response) {
            var status = response.status;
            var _headers = {};
            if (response.headers && response.headers.forEach) {
                response.headers.forEach(function (v, k) { return _headers[k] = v; });
            }
            ;
            if (status === 200 || status === 206) {
                var contentDisposition = response.headers ? response.headers.get("content-disposition") : undefined;
                var fileNameMatch = contentDisposition ? /filename="?([^"]*?)"?(;|$)/g.exec(contentDisposition) : undefined;
                var fileName_4 = fileNameMatch && fileNameMatch.length > 1 ? fileNameMatch[1] : undefined;
                return response.blob().then(function (blob) { return { fileName: fileName_4, data: blob, status: status, headers: _headers }; });
            }
            else if (status !== 200 && status !== 204) {
                return response.text().then(function (_responseText) {
                    return throwException("An unexpected server error occurred.", status, _responseText, _headers);
                });
            }
            return Promise.resolve(null);
        };
        return TasksClient;
    }());
    exports.TasksClient = TasksClient;
    var ValuesClient = /** @class */ (function () {
        function ValuesClient(baseUrl, http) {
            this.jsonParseReviver = undefined;
            this.http = http ? http : window;
            this.baseUrl = baseUrl ? baseUrl : "https://localhost:44339";
        }
        ValuesClient.prototype.getAll = function () {
            var _this = this;
            var url_ = this.baseUrl + "/api/Values";
            url_ = url_.replace(/[?&]$/, "");
            var options_ = {
                method: "GET",
                headers: {
                    "Accept": "application/json"
                }
            };
            return this.http.fetch(url_, options_).then(function (_response) {
                return _this.processGetAll(_response);
            });
        };
        ValuesClient.prototype.processGetAll = function (response) {
            var _this = this;
            var status = response.status;
            var _headers = {};
            if (response.headers && response.headers.forEach) {
                response.headers.forEach(function (v, k) { return _headers[k] = v; });
            }
            ;
            if (status === 200) {
                return response.text().then(function (_responseText) {
                    var result200 = null;
                    var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                    if (resultData200 && resultData200.constructor === Array) {
                        result200 = [];
                        for (var _i = 0, resultData200_2 = resultData200; _i < resultData200_2.length; _i++) {
                            var item = resultData200_2[_i];
                            result200.push(item);
                        }
                    }
                    return result200;
                });
            }
            else if (status !== 200 && status !== 204) {
                return response.text().then(function (_responseText) {
                    return throwException("An unexpected server error occurred.", status, _responseText, _headers);
                });
            }
            return Promise.resolve(null);
        };
        ValuesClient.prototype.post = function (value) {
            var _this = this;
            var url_ = this.baseUrl + "/api/Values";
            url_ = url_.replace(/[?&]$/, "");
            var content_ = JSON.stringify(value);
            var options_ = {
                body: content_,
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                }
            };
            return this.http.fetch(url_, options_).then(function (_response) {
                return _this.processPost(_response);
            });
        };
        ValuesClient.prototype.processPost = function (response) {
            var status = response.status;
            var _headers = {};
            if (response.headers && response.headers.forEach) {
                response.headers.forEach(function (v, k) { return _headers[k] = v; });
            }
            ;
            if (status === 200) {
                return response.text().then(function (_responseText) {
                    return;
                });
            }
            else if (status !== 200 && status !== 204) {
                return response.text().then(function (_responseText) {
                    return throwException("An unexpected server error occurred.", status, _responseText, _headers);
                });
            }
            return Promise.resolve(null);
        };
        ValuesClient.prototype.get = function (id) {
            var _this = this;
            var url_ = this.baseUrl + "/api/Values/{id}";
            if (id === undefined || id === null)
                throw new Error("The parameter 'id' must be defined.");
            url_ = url_.replace("{id}", encodeURIComponent("" + id));
            url_ = url_.replace(/[?&]$/, "");
            var options_ = {
                method: "GET",
                headers: {
                    "Accept": "application/json"
                }
            };
            return this.http.fetch(url_, options_).then(function (_response) {
                return _this.processGet(_response);
            });
        };
        ValuesClient.prototype.processGet = function (response) {
            var _this = this;
            var status = response.status;
            var _headers = {};
            if (response.headers && response.headers.forEach) {
                response.headers.forEach(function (v, k) { return _headers[k] = v; });
            }
            ;
            if (status === 200) {
                return response.text().then(function (_responseText) {
                    var result200 = null;
                    var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                    result200 = resultData200 !== undefined ? resultData200 : null;
                    return result200;
                });
            }
            else if (status !== 200 && status !== 204) {
                return response.text().then(function (_responseText) {
                    return throwException("An unexpected server error occurred.", status, _responseText, _headers);
                });
            }
            return Promise.resolve(null);
        };
        ValuesClient.prototype.put = function (id, value) {
            var _this = this;
            var url_ = this.baseUrl + "/api/Values/{id}";
            if (id === undefined || id === null)
                throw new Error("The parameter 'id' must be defined.");
            url_ = url_.replace("{id}", encodeURIComponent("" + id));
            url_ = url_.replace(/[?&]$/, "");
            var content_ = JSON.stringify(value);
            var options_ = {
                body: content_,
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                }
            };
            return this.http.fetch(url_, options_).then(function (_response) {
                return _this.processPut(_response);
            });
        };
        ValuesClient.prototype.processPut = function (response) {
            var status = response.status;
            var _headers = {};
            if (response.headers && response.headers.forEach) {
                response.headers.forEach(function (v, k) { return _headers[k] = v; });
            }
            ;
            if (status === 200) {
                return response.text().then(function (_responseText) {
                    return;
                });
            }
            else if (status !== 200 && status !== 204) {
                return response.text().then(function (_responseText) {
                    return throwException("An unexpected server error occurred.", status, _responseText, _headers);
                });
            }
            return Promise.resolve(null);
        };
        ValuesClient.prototype.delete = function (id) {
            var _this = this;
            var url_ = this.baseUrl + "/api/Values/{id}";
            if (id === undefined || id === null)
                throw new Error("The parameter 'id' must be defined.");
            url_ = url_.replace("{id}", encodeURIComponent("" + id));
            url_ = url_.replace(/[?&]$/, "");
            var options_ = {
                method: "DELETE",
                headers: {}
            };
            return this.http.fetch(url_, options_).then(function (_response) {
                return _this.processDelete(_response);
            });
        };
        ValuesClient.prototype.processDelete = function (response) {
            var status = response.status;
            var _headers = {};
            if (response.headers && response.headers.forEach) {
                response.headers.forEach(function (v, k) { return _headers[k] = v; });
            }
            ;
            if (status === 200) {
                return response.text().then(function (_responseText) {
                    return;
                });
            }
            else if (status !== 200 && status !== 204) {
                return response.text().then(function (_responseText) {
                    return throwException("An unexpected server error occurred.", status, _responseText, _headers);
                });
            }
            return Promise.resolve(null);
        };
        return ValuesClient;
    }());
    exports.ValuesClient = ValuesClient;
    var Task = /** @class */ (function () {
        function Task(data) {
            if (data) {
                for (var property in data) {
                    if (data.hasOwnProperty(property))
                        this[property] = data[property];
                }
            }
        }
        Task.prototype.init = function (data) {
            if (data) {
                this.id = data["id"];
                this.describtion = data["describtion"];
                this.isDone = data["isDone"];
            }
        };
        Task.fromJS = function (data) {
            data = typeof data === 'object' ? data : {};
            var result = new Task();
            result.init(data);
            return result;
        };
        Task.prototype.toJSON = function (data) {
            data = typeof data === 'object' ? data : {};
            data["id"] = this.id;
            data["describtion"] = this.describtion;
            data["isDone"] = this.isDone;
            return data;
        };
        return Task;
    }());
    exports.Task = Task;
    var SwaggerException = /** @class */ (function (_super) {
        __extends(SwaggerException, _super);
        function SwaggerException(message, status, response, headers, result) {
            var _this = _super.call(this) || this;
            _this.isSwaggerException = true;
            _this.message = message;
            _this.status = status;
            _this.response = response;
            _this.headers = headers;
            _this.result = result;
            return _this;
        }
        SwaggerException.isSwaggerException = function (obj) {
            return obj.isSwaggerException === true;
        };
        return SwaggerException;
    }(Error));
    exports.SwaggerException = SwaggerException;
    function throwException(message, status, response, headers, result) {
        if (result !== null && result !== undefined)
            throw result;
        else
            throw new SwaggerException(message, status, response, headers, null);
    }
});
