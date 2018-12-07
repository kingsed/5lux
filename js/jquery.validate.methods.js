;(function($){
    $.validator.addMethod("pass",function(value,element){
        var reg = /^[a-zA-Z]\w{5,11}$/;
        return this.optional(element) || !!value.match(reg);
    },"其输入正确的密码格式")
}(jQuery))