var buttonActions = function(){
    // this.output = function(){
    //     console.log("Hello world!");
    // }

    this.appendTextArea = function(){
        var element = document.querySelector("#resultArea");
        var ta = document.createElement("textarea");
        element.appendChild(ta);
        tinymce.init({ selector:'textarea' });
    }


    return this;
}();