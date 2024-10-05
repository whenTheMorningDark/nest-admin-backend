"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SexEnum = exports.StatusEnum = exports.DelFlagEnum = exports.DataScopeEnum = exports.CacheEnum = void 0;
var CacheEnum;
(function (CacheEnum) {
    CacheEnum["LOGIN_TOKEN_KEY"] = "login_tokens:";
    CacheEnum["CAPTCHA_CODE_KEY"] = "captcha_codes:";
    CacheEnum["SYS_CONFIG_KEY"] = "sys_config:";
    CacheEnum["SYS_DICT_KEY"] = "sys_dict:";
    CacheEnum["REPEAT_SUBMIT_KEY"] = "repeat_submit:";
    CacheEnum["RATE_LIMIT_KEY"] = "rate_limit:";
    CacheEnum["PWD_ERR_CNT_KEY"] = "pwd_err_cnt:";
    CacheEnum["GZ_TYPE"] = "gz_type:";
    CacheEnum["MA_CODE"] = "ma_code:";
})(CacheEnum || (exports.CacheEnum = CacheEnum = {}));
var DataScopeEnum;
(function (DataScopeEnum) {
    DataScopeEnum["DATA_SCOPE_ALL"] = "1";
    DataScopeEnum["DATA_SCOPE_CUSTOM"] = "2";
    DataScopeEnum["DATA_SCOPE_DEPT"] = "3";
    DataScopeEnum["DATA_SCOPE_DEPT_AND_CHILD"] = "4";
    DataScopeEnum["DATA_SCOPE_SELF"] = "5";
})(DataScopeEnum || (exports.DataScopeEnum = DataScopeEnum = {}));
var DelFlagEnum;
(function (DelFlagEnum) {
    DelFlagEnum["NORMAL"] = "0";
    DelFlagEnum["DELETE"] = "1";
})(DelFlagEnum || (exports.DelFlagEnum = DelFlagEnum = {}));
var StatusEnum;
(function (StatusEnum) {
    StatusEnum["NORMAL"] = "0";
    StatusEnum["STOP"] = "1";
})(StatusEnum || (exports.StatusEnum = StatusEnum = {}));
var SexEnum;
(function (SexEnum) {
    SexEnum["MAN"] = "0";
    SexEnum["WOMAN"] = "1";
})(SexEnum || (exports.SexEnum = SexEnum = {}));
//# sourceMappingURL=index.js.map